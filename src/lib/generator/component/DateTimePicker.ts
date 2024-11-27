import { AnimationType, Responsive, ThemeColor } from "../../saigon.types";

export type DateTimePresetRange = { title: string; from: Date; to: Date };

export type CalendarPickerProp = Partial<{
  /**
   * Color variant.
   *
   * @default primary
   */
  variant: Responsive<ThemeColor>;

  /**
   * Outline style
   */
  outline: Responsive<boolean>;

  /**
   * Fancy larger or smaller buttons? Add .btn-lg or .btn-sm for additional sizes.
   */
  size: Responsive<"lg" | "sm">;

  /**
   * Renders a properly aligned dismiss button.
   * @default false
   * @param {boolean} dismissible
   */
  dismissible: boolean;

  /**
   *
   * @default false
   */
  disabled: boolean;

  /**
   *
   * @default false
   */
  disabledDate: Date[];

  /**
   *
   * @default false
   */
  enableDate: Date[];

  /**
   * Render extra geader at the top of panel.
   * @default undefined
   */
  extraHeader: React.ElementType;

  /**
   * Render extra footer at the bottom of panel.
   * @default undefined
   */
  extraFooter: React.ElementType;

  /**
   * Apply transition effect for show/hide
   * @default 'fade'
   */
  animation: AnimationType;

  /**
   * The transition time in milliseconds
   * @default 400ms
   */
  animationTime?: number;
}>;

export type DateTimePickerProp = CalendarPickerProp &
  Partial<{
    /**
     * Input date format
     * @default 'YYYY-MM-DD'
     */
    format: string;

    /**
     * @default true
     */
    todayButton: boolean;

    /**
     *
     * @default 'Date'
     */
    pickerMode: "Time" | "DateTime" | "Date" | "Week" | "Month" | "Year";

    /**
     *
     * @default false
     */
    clock12Hour: boolean;

    /**
     *
     * @default false
     */
    disabledHour: boolean;

    /**
     *
     * @default false
     */
    disabledMinute: boolean;

    /**
     *
     * @default false
     */
    disabledSecond: boolean;

    /**
     * Control state value
     */
    value?: Date;

    /**
     * Uncontrol state value
     */
    defaultValue?: Date;

    /**
     * Callback when selecting value
     * @param val
     * @returns
     */
    onChange: (val: Date) => void;

    /**
     * Callback when users click on the okay button
     * @param val
     * @returns
     */
    onOkay: (val: Date, event: any) => void;
  }>;

export type DateTimeRangePickerProp = CalendarPickerProp &
  Partial<{
    /**
     *
     */
    pickerMode: "Time" | "DateTime" | "Date" | "Week" | "Month" | "Year";

    /**
     * @default undefined
     */
    maximumRange: number;

    /**
     * Allow empty for the RangePicker
     * @default true
     */
    allowEmpty: boolean;

    /**
     * Set preset ranges to RangePicker to improve user experience
     * @default undefined
     */
    presetRanges: Array<DateTimePresetRange>;

    /**
     * Control state value
     */
    value?: [Date, Date];

    /**
     * Uncontrol state value
     */
    defaultValue?: [Date, Date];

    /**
     * Callback when selecting value
     * @param val
     * @returns
     */
    onChange: (val: [Date, Date]) => void;

    /**
     * Callback when user select preset ranges
     * @param val
     * @returns
     */
    onSelectPresetRange: (val: DateTimePresetRange) => void;
  }>;
