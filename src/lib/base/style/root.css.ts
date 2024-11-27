import { css } from "@emotion/react";
import { ThemeOptions } from "../../saigon.types";

const RootCSS = (theme: ThemeOptions) => css`
:root {
    --${theme.cssVarPrefix}breakpoint-xs: 0;
    --${theme.cssVarPrefix}breakpoint-sm: 576px;
    --${theme.cssVarPrefix}breakpoint-md: 768px;
    --${theme.cssVarPrefix}breakpoint-lg: 992px;
    --${theme.cssVarPrefix}breakpoint-xl: 1200px;
    --${theme.cssVarPrefix}breakpoint-xxl: 1400px;

    --${theme.cssVarPrefix}dropdown-zindex: 1000;
    --${theme.cssVarPrefix}sticky-zindex: 1020;
    --${theme.cssVarPrefix}fixed-zindex: 1030;
    --${theme.cssVarPrefix}modal-backdrop-zindex: 1040;
    --${theme.cssVarPrefix}offcanvas-zindex: 1050;
    --${theme.cssVarPrefix}modal-zindex: 1060;
    --${theme.cssVarPrefix}popover-zindex: 1070;
    --${theme.cssVarPrefix}tooltip-zindex: 1080;
}
`;

export default RootCSS;
