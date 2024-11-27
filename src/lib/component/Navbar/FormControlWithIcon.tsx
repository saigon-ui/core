import { forwardRef } from "react";
import { createElement } from "../../base";
import Form, {
  FormControlWithIconType,
  FormControlWithIconProps,
} from "../Form";

const FormControlWithIcon: FormControlWithIconType = forwardRef<
  HTMLInputElement,
  FormControlWithIconProps
>((props, ref: any) => {
  return createElement(Form.ControlWithIcon, { ref, ...props });
});

export default FormControlWithIcon;
