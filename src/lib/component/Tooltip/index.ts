import { TooltipProp, SaigonComponent } from "../../saigon.types";
import TooltipFC from "./Tooltip";

export type TooltipProps = TooltipProp & { children?: any };

export type TooltipType = SaigonComponent<TooltipProps>;

const Tooltip = TooltipFC;
Tooltip.displayName = "Tooltip";

export default Tooltip;
