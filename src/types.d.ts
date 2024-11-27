// custom module without Typescript types
declare module "*.md";
declare module "marked-custom-heading-id";

// SVG
declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<"svg"> & { title?: string }
  >;

  export default ReactComponent;
}
