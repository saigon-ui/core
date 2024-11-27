import {
  autoPlacement,
  FloatingFocusManager,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { DateTimePickerProps, DateTimePickerRef, DateTimePickerType } from ".";
import { usePropsDestructor } from "../../base";
import { useThemeColor } from "../../base/theme";
import Animation from "../Animation/Animation";
import DateTimeControl from "../Form/DateTimeControl";
import MonoPicker, { MonoPickerRef } from "./Picker/MonoPicker";

const DateTimePicker: DateTimePickerType = forwardRef<
  DateTimePickerRef,
  DateTimePickerProps
>((props, ref) => {
  const { theme } = useThemeColor();

  useImperativeHandle(
    ref,
    () => ({
      show: () => {},
      hide: () => {},
    }),
    []
  );

  const {
    className,
    css,
    style,
    remainedProps: rest,
  } = usePropsDestructor(props);

  let {
    format,
    animation,
    placement,
    strategy,
    offsetValue,
    isAutoPlacement,
    onOpenChange,
    // form value
    value,
    defaultValue,
    onClick,
    onChange,
    ...remainedProps
  } = rest;
  format = format || "YYYY-MM-DD";

  remainedProps["type"] = "text";
  remainedProps["placeholder"] = format;

  const delegatedOnClick = useCallback((evt: any) => {
    evt.preventDefault(); // in case type='date', prevent showing default browser date picker

    onClick && onClick(evt);
  }, []);

  animation = typeof animation === "undefined" ? "fade" : animation;
  placement = placement || "bottom-start";
  strategy = strategy || "fixed";
  offsetValue = typeof offsetValue == "number" ? offsetValue : 0;

  const hasAnimation = animation && animation !== "none";
  const initialDate = value || defaultValue || new Date();

  const [date, setDate] = useState<Date>(initialDate);
  const [dateAsync, setDateAsync] = useState<Date>(initialDate);
  const [isOpen, setOpen] = useState(false);
  const pickerRef = useRef<MonoPickerRef>(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    placement,
    strategy,
    middleware: [
      isAutoPlacement ? autoPlacement() : undefined,
      offset(offsetValue),
    ],
    onOpenChange: (open: boolean, event: any) => {
      // click on the input again, prevent closing the popup, allow user to manually input date
      if (!open && event.target?.parentElement === refs.domReference?.current) {
        return;
      }

      setOpen(open);
      open && setDateAsync(date);

      // fire an event
      onOpenChange && onOpenChange(open, event);
    },
  });

  const clickInt = useClick(context);
  const dismissInt = useDismiss(context);
  const roleInt = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    clickInt,
    dismissInt,
    roleInt,
  ]);

  const handleInputDate = (val: Date | undefined) => {
    if (val) {
      setDate(new Date(val));
      pickerRef.current?.setDate(new Date(val));
    }

    // onChange && onChange(val)
  };

  const handleChangeDate = (val: any) => {
    val && setDate(val);
    // onChange && onChange(val)
  };

  const Picker = useCallback(
    (p: any) => {
      return (
        <MonoPicker
          ref={pickerRef}
          className={p.className}
          value={dateAsync}
          onChange={handleChangeDate}
          onOkay={(_, event) => {
            // fire an event
            setOpen(false);
            onOpenChange && onOpenChange(open, event);
          }}
        />
      );
    },
    [dateAsync]
  );

  return (
    <>
      <DateTimeControl
        ref={refs.setReference}
        className={className}
        css={css}
        style={style}
        {...remainedProps}
        onClick={delegatedOnClick}
        {...getReferenceProps()}
        value={date}
        onChange={handleInputDate}
      />

      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
              zIndex: `var(--${theme.cssVarPrefix}popover-zindex)`,
            }}
            {...getFloatingProps()}
          >
            {hasAnimation ? (
              <Animation
                animation={animation}
                open={isOpen}
                component={Picker}
              />
            ) : (
              <Picker />
            )}
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
});

export default DateTimePicker;
