import _ from "lodash";
import { Node, parse } from "scss-parser";

export enum NType {
  Arguments = "arguments",
  Atkeyword = "atkeyword",
  Attribute = "attribute",
  Stylesheet = "stylesheet",
  Operator = "operator",
  Parentheses = "parentheses",
  Value = "value",
  Declaration = "declaration",
  Variable = "variable",
  Function = "function",
  Identifier = "identifier",
  Property = "property",
  Space = "space",
  CommentSingleline = "comment_singleline",
  CommentMultiline = "comment_multiline",
  Block = "block",
  Class = "class",
  ColorHex = "color_hex",
  Id = "id",
  Interpolation = "interpolation",
  PseudoClass = "pseudo_class",
  PsuedoElement = "psuedo_element",
  StringDouble = "string_double",
  StringSingle = "string_single",
  Number = "number",
}

type QueryPattern = string | [string, string];

function fnNodeID(a: NodeAST): string {
  switch (a.type) {
    case "declaration": {
      const node = a.children.find((a) => a.type == "property")!;
      if (node.children.length) {
        switch (node.children[0].type) {
          case "variable":
            return node.children[0].value as string;
          default:
            return "";
        }
      }
      return node.value as string;
    }
    case "variable":
      return a.value == "STOP_VAR" ? "" : (a.value as string);
    case "function":
      return a.children.find((a) => a.type == "identifier")!.value as string;
  }
  return "";
}

export type InputStreamPosition = {
  cursor: number;
  line: number;
  column: number;
};

export type Path = {
  type: string;
  id: string;
};

export class NodeAST {
  type: NType;
  value: string | Node[];
  parent: NodeAST;
  children: NodeAST[];
  start?: InputStreamPosition | undefined;
  end?: InputStreamPosition | undefined;

  constructor(
    type: NType,
    value: any,
    parent: NodeAST | undefined,
    start: any,
    end: any
  ) {
    this.type = type;
    this.value = value;
    this.parent = parent as any;
    this.children = [];
    this.start = start;
    this.end = end;
  }

  findNode(type: NType): NodeAST | undefined {
    function scan(nd: NodeAST): NodeAST | undefined {
      if (nd.type == type) return nd;
      for (const ch of nd.children) {
        const found = scan(ch);
        if (found) return found;
      }
    }
    return scan(this);
  }

  findNodeWithPath(path: Path[]): NodeAST {
    function hasAtLeaseOne(idx: number, at: NodeAST) {
      //if (idx == 5) {debugger;}
      const p = path[idx];

      let next: any = at.children.filter((a) => {
        let id = fnNodeID(a);
        return p.type == a.type && p.id == id;
      });

      // done the search
      if (idx + 1 >= path.length) {
        return next.length ? next[0] : undefined;
      }

      // continue verifying children path
      next = next
        .map((a: any) => hasAtLeaseOne(idx + 1, a))
        .filter((a: any) => Boolean(a));
      if (next.length) {
        return next[0];
      }

      return undefined;
    }

    let result = this.type == path[0].type ? hasAtLeaseOne(1, this) : undefined;

    // path break, can not found the next node in the path
    if (!result) {
      throw Error(`AST node not found: ${path.map((a) => a.type).join("/")}`);
    }
    return result;
  }

  findNodeWithValue(value: string) {
    function scanner(nd: NodeAST): NodeAST | undefined {
      if (_.isString(nd.value) && nd.value === value) return nd;

      for (const ch of nd.children) {
        const found = scanner(ch);
        if (found) return found;
      }
      return undefined;
    }

    return scanner(this);
  }

  filterChildren(type: NType): NodeAST[] {
    return this.children.filter((ch) => ch.type == type);
  }

  stringify(noSpace?: boolean) {
    const str = stringifySCSS(this);
    return noSpace ? str.replaceAll(/\s+/g, "") : str;
  }

  unshiftChild(node: NodeAST): void {
    this.children.unshift(node);
    if (Array.isArray(this.value)) {
      this.value.unshift({
        type: node.type,
        value: node.value,
        start: node.start,
        end: node.end,
      });
    }

    node.parent = this;
  }

  pushChild(node: NodeAST): void {
    this.children.push(node);
    if (Array.isArray(this.value)) {
      this.value.push({
        type: node.type,
        value: node.value,
        start: node.start,
        end: node.end,
      });
    }

    node.parent = this;
  }

  getClosest(query: QueryPattern[]): NodeAST | undefined {
    function IsMatchValue(val: string, at: NodeAST) {
      if (at.type == NType.Variable) {
        return at.value == val ? at : undefined;
      }

      return at;
    }
    function stepIn(idx: number, at: NodeAST): NodeAST | undefined {
      const q = query[idx];
      const type: string = Array.isArray(q) ? q[0] : q;
      // go up command
      if (type == "..") {
        return idx == query.length - 1 ? at : stepIn(idx + 1, at.parent);
      }

      const value: string = Array.isArray(q) ? q[1] : "";

      const ls = at.children.filter((a) => a.type == type);
      for (const ch of ls) {
        if (idx == query.length - 1) {
          return IsMatchValue(value, ch);
        } else if (idx < query.length - 1) {
          const found = stepIn(idx + 1, ch);
          if (found) return found;
        }
      }

      return undefined;
    }

    return stepIn(0, this);
  }

  static createNewlineNode(indent: number = 0): NodeAST {
    const str = Array.from(new Array(indent).keys())
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .map((_) => "    ")
      .join("");
    return new NodeAST(
      NType.Space,
      "\n" + str,
      undefined,
      undefined,
      undefined
    );
  }

  static createNode(src: string, type: NType = NType.Declaration): NodeAST {
    const ast = parseSCSS(src);
    ast.type = type;
    return ast;
  }
}

export function stringifySCSS(ast: NodeAST): string {
  const type: { [key: string]: (n: NodeAST) => string } = {};
  type[NType.Arguments] = (n: NodeAST) => "(" + walkValue(n.children) + ")";
  type[NType.Atkeyword] = (n: NodeAST) => "@" + n.value;
  type[NType.Attribute] = (n: NodeAST) => "[" + walkValue(n.children) + "]";
  type[NType.Block] = (n: NodeAST) => "{" + walkValue(n.children) + "}";
  type[NType.Class] = (n: NodeAST) => "." + walkValue(n.children);
  type[NType.ColorHex] = (n: NodeAST) => "#" + n.value;
  type[NType.Id] = (n: NodeAST) => "#" + walkValue(n.children);
  type[NType.Interpolation] = (n: NodeAST) =>
    "#{" + walkValue(n.children) + "}";
  type[NType.CommentMultiline] = (n: NodeAST) => "/*" + n.value + "*/";
  type[NType.CommentSingleline] = (n: NodeAST) => "//" + n.value + "\n";
  type[NType.Parentheses] = (n: NodeAST) => "(" + walkValue(n.children) + ")";
  type[NType.PseudoClass] = (n: NodeAST) => ":" + walkValue(n.children);
  type[NType.PsuedoElement] = (n: NodeAST) => "::" + walkValue(n.children);
  type[NType.StringDouble] = (n: NodeAST) => `"${n.value}"`;
  type[NType.StringSingle] = (n: NodeAST) => `'${n.value}'`;
  type[NType.Variable] = (n: NodeAST) => "$" + n.value;

  const walkNode = (node: NodeAST): string => {
    if (type[node.type]) return type[node.type](node);
    if (typeof node.value === "string") return node.value;
    if (Array.isArray(node.value)) return walkValue(node.children);
    return "";
  };

  const walkValue = (children: NodeAST[]): string => {
    return children.reduce((s, node) => {
      return s + walkNode(node);
    }, "");
  };

  return walkNode(ast);
}

export function parseSCSS(src: string): NodeAST {
  function wrapTree(nd: Node, parent: NodeAST | undefined): NodeAST {
    const node = new NodeAST(
      nd.type as NType,
      nd.value,
      parent,
      nd.start,
      nd.end
    );
    if (Array.isArray(nd.value)) {
      for (let i = 0; i < nd.value.length; i++) {
        let ch = nd.value[i];
        node.children.push(wrapTree(ch, node));
      }
    }

    return node;
  }

  const ast = parse(src);
  return wrapTree(ast, undefined);
}

/**
 *
 * @param code Must have the variable declare block to know where to stop the path
 * @returns
 */
export function toQueryPath(code: string): Path[] {
  const selectVariable = (root: NodeAST): NodeAST | undefined => {
    if (root.type == "variable" && root.value == "STOP_VAR") return root;

    for (const a of root.children) {
      const found = selectVariable(a);
      if (found) return found;
    }

    return undefined;
  };

  const ast = parseSCSS(code);
  const STOP_VAR = selectVariable(ast);
  if (!STOP_VAR)
    throw Error(`$STOP_VAR block not found in the giving code pattern`);

  const path: Path[] = [];
  let current: NodeAST,
    p: NodeAST = STOP_VAR;
  while (p) {
    current = p;
    p = p.parent;
    path.push({
      type: current.type,
      id: fnNodeID(current),
    });
  }

  return path.reverse().slice(0, -1);
}
