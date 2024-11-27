import { css } from "@emotion/react";
import classNames from "classnames";
import { FC, useEffect, useRef, useState } from "react";
import { createElement } from "../../base";
import { AnimationProp } from "../../saigon.types";

const DefaultDuration: any = {
  fade: 200,
  clip: 200,
  blind: 200,
  bounce: 400,
  drop: 200,
  fold: 200,
  puff: 200,
  scale: 200,
  shake: 400,
  slide: 200,
  pulsate: 400,
  shift: 200,
  rotate: 200,
  none: 200,
};

const Animation: FC<AnimationProp> = ({
  component: As,
  appear,
  open,
  animation,
  duration,
  onEnter,
  onChange,
  onExit,
}) => {
  const [mount, setMount] = useState(appear ? open : false);
  const [show, setShow] = useState(appear ? open : false);
  const timer = useRef<{ id: any }>({ id: 0 });

  duration = (duration || DefaultDuration[animation as any]) ?? 200;

  useEffect(() => {
    clearTimeout(timer.current.id);

    // set to show
    if (open) {
      setMount(true);
      timer.current.id = setTimeout(() => {
        setShow(true);

        onEnter && onEnter();
        onChange && onChange(true);
      }, duration);
    }

    // set to hide
    else {
      setShow(false);

      timer.current.id = setTimeout(() => {
        setMount(false);

        onExit && onExit();
        onChange && onChange(false);
      }, duration);
    }
  }, [open, onEnter, onChange, onExit]);

  if (As && mount) {
    const className = {
      clip: animation == "clip",
      blind: animation == "blind",
      bounce: animation == "bounce",
      drop: animation == "drop",
      fade: animation == "fade",
      fold: animation == "fold",
      puff: animation == "puff",
      scale: animation == "scale",
      shake: animation == "shake",
      slide: animation == "slide",
      shift: animation == "shift",
      pulsate: animation == "pulsate",
      rotate: animation == "rotate",
      //
      entering: open && !show,
      exiting: !open && !show,
      show,
    } as any;

    return createElement(
      As,
      {
        className: classNames("anim", className),
        css: css(`--anim-duration: ${duration!.toFixed(0)}ms`),
      },
      undefined
    );
  }
};

export default Animation;
