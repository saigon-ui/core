//@jsx
import { css as cssFunc } from "@emotion/react";
import classNames from "classnames";
import { FC } from "react";
import { ToastContainerProp } from "../../saigon.types";
import { createElement } from "../../base";

const ToastContainer: FC<ToastContainerProp & { children?: any }> = (props) => {
  let placement = {} as any;
  switch (props.placement) {
    case "top-start":
      placement["top-0"] = true;
      placement["start-0"] = true;
      break;
    case "top-center":
      placement["top-0"] = true;
      placement["center-0"] = true;
      break;
    case "top-end":
      placement["top-0"] = true;
      placement["end-0"] = true;
      break;
    case "middle-start":
      placement["middle-0"] = true;
      placement["start-0"] = true;
      break;
    case "middle-center":
      placement["middle-0"] = true;
      placement["center-0"] = true;
      break;
    case "middle-end":
      placement["middle-0"] = true;
      placement["end-0"] = true;
      break;
    case "bottom-start":
      placement["bottom-0"] = true;
      placement["start-0"] = true;
      break;
    case "bottom-center":
      placement["bottom-0"] = true;
      placement["center-0"] = true;
      break;
    case "bottom-end":
    default:
      placement["bottom-0"] = true;
      placement["end-0"] = true;
      break;
  }

  const containerPosition = props.containerPosition || "fixed";
  const className = classNames(
    "toast-container",
    "p-3",
    {
      "position-fixed": containerPosition == "fixed",
      "position-static": containerPosition == "static",
    },
    placement
  );

  return createElement(
    "div",
    {
      className,
      css: cssFunc(`.toast { transition: translate 0.2s ease-out; }`),
    },
    props.children
  );
};

export default ToastContainer;
