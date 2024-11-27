import { injectGlobal } from "@emotion/css";
import { css } from "@emotion/react";
import { FC, useEffect } from "react";
import { ThemeOptions } from "..//saigon.types";
import AnimationCSS from "./style/animation.css";
import DateTimePickerCSS from "./style/dateTimePicker.css";
import RootCSS from "./style/root.css.ts";
import IconControl from "./style/iconControl.css.ts";

type CSSWrapperProps = {
  theme: ThemeOptions;
  children: any;
};

const CSSWrapper: FC<CSSWrapperProps> = ({ theme, children }) => {
  useEffect(() => {
    const style = css(
      RootCSS(theme).styles,
      AnimationCSS.styles,
      DateTimePickerCSS(theme).styles,
      IconControl().styles
    );
    injectGlobal`${style.styles}`;
  }, [theme]);

  return <>{children}</>;
};

export default CSSWrapper;
