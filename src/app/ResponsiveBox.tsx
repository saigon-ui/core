import { Breakpoints } from "@saigon-ui/base/constants";
import { Div } from "@saigon-ui/index";
import { FC, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const VRuler = (props: {
  onResize: (val: { mx: number; my: number }) => void;
  onPointerDown: (val: boolean) => void;
  style: any;
}) => {
  const ref = useRef(null);
  const onPointerDown = () => {
    const pointerUp = () => {
      props.onPointerDown(false);
      window.removeEventListener("pointerup", pointerUp);
      window.removeEventListener("pointermove", pointerMove);
    };
    const pointerMove = (evt: PointerEvent) => {
      props.onResize({ mx: evt.movementX, my: evt.movementY });
    };

    props.onPointerDown(true);
    window.addEventListener("pointerup", pointerUp);
    window.addEventListener("pointermove", pointerMove);
  };

  return (
    <Div
      ref={ref}
      position="absolute"
      bg="lightgray"
      width="12px"
      height="100%"
      onPointerDown={onPointerDown}
      style={props.style}
    />
  );
};

const ResponsiveBox: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(124);
  const [maxWidth, setMaxWidth] = useState(124);
  const [pointerDown, setPointerDown] = useState(false);
  const [searchParams] = useSearchParams();

  const actualHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight ||
    document.body.offsetHeight;

  let border = "red";
  // xs
  if (width < Breakpoints.sm) border = "red";
  // sm
  else if (width >= Breakpoints.sm && width < Breakpoints.md) border = "orange";
  // md
  else if (width >= Breakpoints.md && width < Breakpoints.lg) border = "yellow";
  // lg
  else if (width >= Breakpoints.lg && width < Breakpoints.xl) border = "green";
  //  xl
  else if (width >= Breakpoints.xl && width < Breakpoints.xxl) border = "blue";
  // xxl
  else if (width >= Breakpoints.xxl) border = "violet";

  useEffect(() => {
    const rect = ref.current!.getBoundingClientRect();
    const w = rect.width - 18;
    setWidth(w);
    setMaxWidth(w);
  }, []);

  return (
    <Div ref={ref} m="1rem" border position="relative" bg="black">
      <Div
        position="fixed"
        bg="white"
        fontSize="smaller"
        style={{ left: 1, top: 1 }}
      >
        {width}x{actualHeight}
      </Div>
      <iframe
        width={`${width}px`}
        height={`${actualHeight - 50}px`}
        style={{
          border: `5px solid ${border}`,
          pointerEvents: pointerDown ? "none" : "unset",
        }}
        src={searchParams.get("path") || "/"}
      />
      <VRuler
        onPointerDown={(val) => setPointerDown(val)}
        onResize={({ mx }) =>
          setWidth((w) => Math.max(Math.min(maxWidth, w + mx), 124))
        }
        style={{ top: 0, right: maxWidth - width, cursor: "move" }}
      />
    </Div>
  );
};

export default ResponsiveBox;
