import {
  NodeAST,
  NType,
  parseSCSS,
  stringifySCSS,
  toQueryPath,
} from "./nodeAST";
import { parse } from "@typescript-eslint/parser";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import PropGenerator, { PropNames } from "./bootstrap/PropGenerator";
import * as sass from "sass";

const ComponentList: string[] = [
  "AccordionProp",
  "AlertProp",
  "AnimationProps",
  "BadgeProp",
  "BreadcrumbProp",
  "ButtonGroupProp",
  "ButtonProp",
  "DateTimePicker",
  "CardProp",
  "CloseButtonProp",
  "DropdownProp",
  "FormProps",
  "LayoutProp",
  "ListGroupProp",
  "ModalProp",
  "NavProp",
  "NavbarProp",
  "OffcanvasProp",
  "PaginationProp",
  "PlaceholderProp",
  "PopoverProp",
  "ProgressProp",
  "SpinnerProp",
  "TableProp",
  "ToastProp",
  "ToggleButtonProp",
  "TooltipProp",
  "TypographyProp",
];

function currentDir(file: string) {
  const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
  const __dirname = path.dirname(__filename); // get the name of the directory
  return `${__dirname}/${file}`;
}

function readFile(filePath: string) {
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function writeFile(filePath: string, data: string) {
  try {
    return fs.writeFileSync(filePath, data, { encoding: "utf8", flag: "w" });
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function checkOverlapProps(file: string) {
  type PropNameValue = (typeof PropNames)[keyof typeof PropNames];

  const generalPropKeys = Object.keys(PropNames);

  try {
    const types = parse(file, {
      sourceType: "module",
      tsconfigRootDir: "/Users/quocpham/Documents/Quoc/saigon_ui_fe",
    });

    const ExportNamedDeclarations = types.body.filter(
      (a) => a.type == "ExportNamedDeclaration"
    ) as any[];
    for (const decl of ExportNamedDeclarations) {
      const { id, typeAnnotation } = decl.declaration;
      const declName = id.name;

      const members =
        typeAnnotation?.members ??
        typeAnnotation?.typeArguments?.params[0]?.members;
      // has prop declaration
      if (!members?.length) {
        console.log(`Found empty TypeProps declaration: ${declName}`);
        continue;
      }

      for (let {
        key: { name },
      } of members) {
        name = name.trim();
        if (generalPropKeys.indexOf(name) > -1) {
          // have clear definings: belongings to components
          const attr = (PropNames as any)[name] as PropNameValue;
          if (attr.ownByComponent && attr.group.startsWith(declName)) {
            continue;
          }

          // error found duplicated prop name
          throw Error(`Error, found overlapped propName: ${declName}::${name}`);
        }
      }

      console.log(
        `Checking props overlaps [${declName}]: ${members
          .map((a: any) => a.key.name)
          .join(", ")}`
      );
      console.log(`GOOD! ${members.length} props\n`);
    }
  } catch (ex) {
    console.error(ex);
  }
}

async function generateScssPatches() {
  const ROOT_DIR_saigon_ui_fe = currentDir("./scss");

  try {
    const scss = readFile(
      //`${ROOT_DIR_saigon_ui_fe}/framework/bootstrap-5.3.3/scss/_utilities.scss`
      `${ROOT_DIR_saigon_ui_fe}/../../../../node_modules/bootstrap/scss/_utilities.scss`
    );
    const ast = parseSCSS(scss);
    const pth = toQueryPath(`$utilities: map-merge(($STOP_VAR), $utilities);`);
    const parenthesis = ast.findNodeWithPath(pth);
    const declaration = parenthesis.filterChildren(NType.Declaration);

    for (const d of declaration) {
      const b = d.getClosest([NType.Value, NType.Parentheses])!;
      if (b.findNodeWithValue("responsive")) continue;

      let gp = d.getClosest([NType.Property, NType.StringDouble]);

      // skip using repsonsive className of some props due to name conflict
      switch (gp?.value) {
        case "shadow":
          continue;
      }

      /**
       * background-color should have: bg-opacity with !default flag to allow bgOpacity working
       * local-vars: (
       *  "bg-opacity": "1!default",
       * ),
       */
      if (gp && gp.value == "background-color") {
        gp = d.findNodeWithValue("local-vars")!;
        const src = gp.parent.parent.stringify(true);
        if (src.indexOf(`"bg-opacity":`) > -1) {
          gp = gp.parent.parent.findNode(NType.Number)!;
          gp.type = NType.StringDouble;
          gp.value = "1!default";
          b.stringify();
        }
      }

      const genNode = NodeAST.createNode(
        `responsive: true,`,
        NType.Declaration
      );
      b.unshiftChild(genNode);
      b.unshiftChild(NodeAST.createNewlineNode(1));
    }

    writeFile(
      `${ROOT_DIR_saigon_ui_fe}/utilities-patched.scss`,
      stringifySCSS(ast)
    );

    const compileCSS = sass.compile(`${ROOT_DIR_saigon_ui_fe}/main.scss`);
    writeFile(`${ROOT_DIR_saigon_ui_fe}/saigon-ui.css`, compileCSS.css);
    //const genNode = create(nn, b.parent);
    //b.parent.children.unshift(genNode);
  } catch (err: any) {
    // do things with err e.g.
    throw err;
  }
}

function generateGoogleIcon() {
  // Download SVG from https://fonts.google.com/icons to ./icon folder
  // Settings: fill 0, weight 300, grade 0, Optical size 24
  const files = fs.readdirSync(currentDir("/icon"));
  const output: string[] = [];
  for (const f of files) {
    const arr = f.split("_");
    const names = [] as string[];
    for (const a of arr) {
      if (a == "24dp") break;
      names.push(a);
    }
    const name = names
      .map((str) => str[0].toUpperCase() + str.slice(1))
      .join("");
    const svg = fs.readFileSync(currentDir(`/icon/${f}`), "utf-8");
    output.push(`\nexport const Icon${name}: FC = () => {
    return (${svg});
  };`);
  }

  return output.join("\n");
}

(function () {
  /*
  const src = generateGoogleIcon();
  if (Math.random() < 1) {
    console.log(src);
    debugger;
    return;
  }
  */

  generateScssPatches();

  function removeImport(src: string) {
    const lines = src.split("\n").filter((a) => !a.trim().startsWith("import"));
    return lines.join("\n");
  }

  const compSrc: string[] = [];
  for (const name of ComponentList) {
    const src = readFile(currentDir(`./component/${name}.ts`));

    // https://typescript-eslint.io/play/#ts=5.5.2
    checkOverlapProps(src);

    // Good to merge
    compSrc.push(removeImport(src));
  }

  const templateSrc = ["bootstrap/_bootstrap.5.3.3.css.txt"].map((file) => {
    return readFile(currentDir(file));
  });
  PropGenerator(templateSrc, compSrc);
})();
