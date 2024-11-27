/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Accordion,
  Alert,
  Badge,
  Breadcrumb,
  Button,
  CloseButton,
  ButtonGroup,
  Card,
  Col,
  Container,
  Div,
  Dropdown,
  Image,
  ListGroup,
  Popover,
  Progress,
  Row,
  SaigonProvider,
  Spinner,
  Stack,
  Toast,
  Typography,
  Modal,
  Tooltip,
  Placeholder,
  Pagination,
  Offcanvas,
  Nav,
  Navbar,
  Form,
  Checkbox,
  RadioButton,
  Switch,
  Range,
  InputGroup,
  Figure,
  //} from "../../../lib";
} from "@saigon-ui/index";
import * as Icons from "@saigon-ui/component/Icon";
//from "../../../lib/icons";

import parse from "html-react-parser";
import { Marked } from "marked";
import customHeadingId from "marked-custom-heading-id";
import { createDirectives } from "marked-directive";
import { FC, useEffect, useRef, useState } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { themes } from "prism-react-renderer";

type Element3 = {
  name: string;
  children: Element3[];
  attribs: any;
};

type Text3 = {
  data: string;
  type: string;
};

const Components = {
  Accordion,
  Alert,
  Badge,
  Breadcrumb,
  Button,
  CloseButton,
  ButtonGroup,
  Card,
  Col,
  Container,
  Div,
  Dropdown,
  Image,
  ListGroup,
  Popover,
  Progress,
  Row,
  SaigonProvider,
  Spinner,
  Stack,
  Toast,
  Typography,
  Modal,
  Tooltip,
  Placeholder,
  Pagination,
  Offcanvas,
  Nav,
  Navbar,
  Form,
  Checkbox,
  RadioButton,
  Switch,
  Range,
  InputGroup,
  Figure,
};

const LiveCodeImport = { ...Components, ...Icons };

// load markdown extension
const MarkedParser = new Marked()
  .use(customHeadingId())
  .use(createDirectives());

function htmlReplacer(domNode: any): any {
  if (!domNode.name) return domNode;

  function getEmbedCodeBlock(node: Element3): Element3 | null {
    if (
      node.name == "pre" &&
      node.children.length == 1 &&
      node.children[0].name == "code"
    )
      return node.children[0];
    return null;
  }

  function transformCode(_template: string, jsx: string) {
    return `function ExampleJSX() { return <>${jsx}</> }`;
  }

  const tagName = domNode.name.toLowerCase();
  switch (tagName) {
    case "pre": {
      const codeElm = getEmbedCodeBlock(domNode);
      if (codeElm) {
        const template = codeElm.attribs["class"] || "language-jsx";
        const src: Text3 = codeElm.children[0] as any;
        if (template == "language-jsx" && src) {
          return (
            <LiveProvider
              code={src.data}
              scope={LiveCodeImport}
              theme={themes.github}
              language="jsx"
              enableTypeScript={true}
              noInline={false}
              transformCode={(code) => transformCode(template, code)}
            >
              <div className="row border rounded py-2">
                <div className="col-6">
                  <LiveEditor
                    tabMode="indentation"
                    style={{
                      fontFamily: "menlo",
                      fontSize: "smaller",
                    }}
                  />
                  <LiveError className="alert alert-danger mt-2" />
                </div>
                <div className="col-6">
                  <LivePreview className="p-2 border rounded bg-light h-100" />
                </div>
              </div>
            </LiveProvider>
          );
        }
      }
    }
  }

  return domNode;
}

const MarkdownRenderer: FC<{ md: string }> = ({ md }) => {
  const [html, htmlSet] = useState<any>(undefined);

  const ref = useRef<HTMLDivElement>(null);
  const [width, widthSet] = useState<string | number>("unset");

  useEffect(() => {
    const src = MarkedParser.parse(md) as string;
    htmlSet(parse(src, { replace: htmlReplacer }));
  }, [md]);

  useEffect(() => {
    if (ref.current) {
      const w = ref.current.getBoundingClientRect().width;
      widthSet(w);
    }
  }, [ref.current]);

  return (
    <div
      ref={ref}
      css={css`
        h2 {
          padding-top: 2rem;
          padding-bottom: 1rem;
        }
      `}
      style={{ position: "relative", width: width }}
    >
      {html}
    </div>
  );
};

export default MarkdownRenderer;
