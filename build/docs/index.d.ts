import { AnchorHTMLAttributes } from 'react';
import * as CSS_2 from 'csstype';
import { FC } from 'react';
import { ImgHTMLAttributes } from 'react';
import { Interpolation } from '@emotion/react';
import { OffsetOptions } from '@floating-ui/react';
import { SVGAttributes } from 'react';
import { Theme } from '@emotion/react';

export declare const Accordion: AccordionType & {
    Collapse: AccordionCollapseType;
    Header: AccordionHeaderType;
    Body: AccordionBodyType;
    Button: AccordionButtonType;
    Item: AccordionItemType;
};

declare type AccordionBodyProps = SaigonProps<"div", HTMLElement>;

declare type AccordionBodyType = ForwardRefComponent<HTMLElement, AccordionBodyProps>;

declare type AccordionButtonProps = SaigonProps<"button", HTMLButtonElement> & {
    _internal?: KeyType;
};

declare type AccordionButtonType = ForwardRefComponent<HTMLButtonElement, AccordionButtonProps>;

declare type AccordionCollapseProps = SaigonProps<"div", HTMLDivElement> & {
    _internal?: KeyType;
};

declare type AccordionCollapseType = ForwardRefComponent<HTMLDivElement, AccordionCollapseProps>;

declare type AccordionHeaderProps = SaigonProps<"h2", HTMLElement>;

declare type AccordionHeaderType = ForwardRefComponent<HTMLHeadingElement, AccordionHeaderProps>;

declare type AccordionItemProps = SaigonProps<"div", HTMLElement>;

declare type AccordionItemType = ForwardRefComponent<HTMLElement, AccordionItemProps>;

export declare type AccordionProp = Partial<{
    /**
     * The default active key that is expanded on start
     * @default undefined
     */
    defaultActiveKey: string | number | string[] | number[];
    /**
     * Add .accordion-flush to remove some borders and rounded corners to render accordions edge-to-edge with their parent container.
     * @default false
     */
    flush: boolean;
    /**
     * make accordion items stay open when another item is opened.
     * @default false
     */
    alwaysOpen: boolean;
    /**
     * make accordion items stay open when another item is opened.
     * @default false
     */
    expanded: boolean;
    /**
     * Callback fired when the active item changes.
     * @param eventKey activeIndex
     * @param event native event object
     */
    onSelect?: (eventKey: string, event: object) => void;
}>;

declare type AccordionProps = AccordionProp & Omit<SaigonProps<"div", HTMLDivElement>, keyof AccordionProp>;

declare type AccordionRef = {
    domRef: React.Ref<HTMLDivElement>;
    expand: () => void;
    close: () => void;
    currentActiveKey: () => string[] | number[];
};

declare type AccordionType = ForwardRefComponent<AccordionRef, AccordionProps>;

export declare const Alert: AlertType & {
    Link: AlertLinkType;
    Heading: AlertHeadingType;
};

export declare type AlertHeadingProp = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export declare type AlertHeadingProps = AlertHeadingProp & Omit<SaigonProps<"h4", HTMLHeadingElement>, keyof AlertHeadingProp>;

export declare type AlertHeadingType = ForwardRefComponent<HTMLHeadingElement, AlertHeadingProps>;

export declare type AlertLinkProps = SaigonProps<"a", HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export declare type AlertLinkType = ForwardRefComponent<HTMLAnchorElement, AlertLinkProps>;

export declare type AlertProp = Partial<{
    /**
     * Bootstrap includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.
     * @default
     * @param {ThemeColor} variant
     */
    variant: Responsive<ThemeColor>;
    /**
     * Renders a properly aligned dismiss button.
     * @default false
     * @param {boolean} dismissible
     */
    dismissible: boolean;
    /**
     * Animate the alert dismissal. Defaults to using <Fade> animation or use false to disable
     * @default 'fade'
     */
    animation: AnimationType;
    /**
     * Callback fired when alert is closed after transitioning.
     */
    onClose: () => void;
    /**
     * Callback fired when alert is showed after transitioning.
     */
    onOpen: () => void;
}>;

export declare type AlertProps = AlertProp & Omit<SaigonProps<"div", HTMLElement>, keyof AlertProp>;

export declare type AlertRef = {
    domRef: React.Ref<HTMLDivElement>;
    close: () => void;
    show: () => void;
};

export declare type AlertType = ForwardRefComponent<AlertRef, AlertProps>;

declare const Animation_2: FC<AnimationProp>;
export { Animation_2 as Animation }

export declare type AnimationProp = Partial<{
    /**
     * Child component
     */
    component: React.FunctionComponent<any>;
    /**
     * Start the animation
     */
    open: boolean;
    /**
     * Animation type
     *
     * @default 'fade'
     */
    animation: Omit<AnimationType, "none">;
    /**
     * The animation duration `var(--anim-duration)` in miliseconds
     *
     * @default 400ms
     */
    duration: number;
    /**
     * Run the fade in animation when the component mounts, if it is initially shown
     * @default false
     */
    appear: boolean;
    /**
     * Callback when the animation is finished
     */
    onExit: () => void;
    /**
     * Callback when the animation is started
     */
    onEnter: () => void;
    /**
     * Callback after calling onExit and onEnter
     */
    onChange: (isShow: boolean) => void;
}>;

export declare type AnimationType = "fade" | "clip" | "blind" | "bounce" | "drop" | "fold" | "puff" | "scale" | "shake" | "slide" | "shift" | "pulsate" | "rotate" | "none";

export declare type As = React.ElementType;

export declare type BackgroundProps = Partial<{
    /**
     * Similar to the contextual text color classes, set the background of an element to any contextual class. Background utilities do not set color, so in some cases you’ll want to use .text-* color utilities.
     * @param {string} bg ThemeColor, (CSS.Property.BackgroundColor & Record<never, never>), "black", "white", "body", "transparent", "body-secondary", "body-tertiary", "none"
     */
    bg: Responsive<ThemeColor | (CSS_2.Property.BackgroundColor & Record<never, never>) | "black" | "white" | "body" | "transparent" | "body-secondary" | "body-tertiary" | "none">;
    /**
     * The `background-attachment` property sets whether a background image scrolls with the rest of the page, or is fixed.
     * @param {CSS.Property.BackgroundAttachment} bgAttachment CSS.Property.BackgroundAttachment
     */
    bgAttachment: Responsive<CSS_2.Property.BackgroundAttachment>;
    /**
     * The `background-blend-mode` property defines the blending mode of each background layer (color and/or image).
     * @param {CSS.Property.BackgroundBlendMode} bgBlendMode CSS.Property.BackgroundBlendMode
     */
    bgBlendMode: Responsive<CSS_2.Property.BackgroundBlendMode>;
    /**
     * The `background-clip` property defines how far the background (color or image) should extend within an element.
     * @param {CSS.Property.BackgroundClip} bgClip CSS.Property.BackgroundClip
     */
    bgClip: Responsive<CSS_2.Property.BackgroundClip>;
    /**
     * The `background-color` property sets the background color of an element.
     *
     * The background of an element is the total size of the element, including padding and border (but not the margin).
     *
     * **Tip:** Use a background color and a text color that makes the text easy to read.
     * @param {CSS.Property.BackgroundColor} bgColor CSS.Property.BackgroundColor
     */
    bgColor: Responsive<CSS_2.Property.BackgroundColor>;
    /**
     * By adding a .bg-gradient class, a linear gradient is added as background image to the backgrounds. This gradient starts with a semi-transparent white which fades out to the bottom.
     * Do you need a gradient in your custom CSS? Just add `background-image: var(--#{$prefix}gradient)`.
     * @param {string} bgGradient boolean
     */
    bgGradient: Responsive<boolean>;
    /**
     * The `background-image` property sets one or more background images for an element.
     *
     * By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.
     *
     * **Tip:** The background of an element is the total size of the element, including padding and border (but not the margin).
     *
     * **Tip:** Always set a background-color to be used if the image is unavailable.
     * @param {CSS.Property.BackgroundImage} bgImage CSS.Property.BackgroundImage
     */
    bgImage: Responsive<CSS_2.Property.BackgroundImage>;
    /**
     * As of v5.1.0, background-color utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.
     * @param {string} bgOpacity "10", "25", "50", "75", "100", number, "none"
     */
    bgOpacity: Responsive<"10" | "25" | "50" | "75" | "100" | number | "none">;
    /**
     * The background-origin property specifies the origin position (the background positioning area) of a background image.
     *
     * **Note:** This property has no effect if `background-attachment` is "fixed".
     * @param {CSS.Property.BackgroundOrigin} bgOrigin CSS.Property.BackgroundOrigin
     */
    bgOrigin: Responsive<CSS_2.Property.BackgroundOrigin>;
    /**
     * The `background-position` property sets the starting position of a background image.
     *
     * **Tip:** By default, a `background-image` is placed at the top-left corner of an element, and repeated both vertically and horizontally.
     * @param {CSS.Property.BackgroundPosition} bgPosition CSS.Property.BackgroundPosition
     */
    bgPosition: Responsive<CSS_2.Property.BackgroundPosition>;
    /**
     * The `background-position-x` property sets the position of a background image on the x-axis.
     *
     * **Tip:** By default, a `background-image` is placed at the top-left corner of an element, and repeated both vertically and horizontally.
     * @param {CSS.Property.BackgroundPositionX} bgPositionX CSS.Property.BackgroundPositionX
     */
    bgPositionX: Responsive<CSS_2.Property.BackgroundPositionX>;
    /**
     * The `background-position-y` property sets the position of a background image on the y-axis.
     *
     * **Tip:** By default, a `background-image` is placed at the top-left corner of an element, and repeated both vertically and horizontally.
     * @param {CSS.Property.BackgroundPositionY} bgPositionY CSS.Property.BackgroundPositionY
     */
    bgPositionY: Responsive<CSS_2.Property.BackgroundPositionY>;
    /**
     * The `background-repeat` property sets if/how a background image will be repeated.
     *
     * By default, a `background-image` is repeated both vertically and horizontally.
     *
     * **Tip:** The background image is placed according to the `background-position` property. If no `background-position` is specified, the image is always placed at the element's top left corner.
     * @param {CSS.Property.BackgroundRepeat} bgRepeat CSS.Property.BackgroundRepeat
     */
    bgRepeat: Responsive<CSS_2.Property.BackgroundRepeat>;
    /**
     * The `background-size` property specifies the size of the background images.
     * @param {CSS.Property.BackgroundSize} bgSize CSS.Property.BackgroundSize
     */
    bgSize: Responsive<CSS_2.Property.BackgroundSize>;
    /**
     * Render background color `.bg-*` with `.bg-*-subtle` utility.
     * @param {string} bgSubtle boolean
     */
    bgSubtle: Responsive<boolean>;
}>;

/**
 * Badges scale to match the size of the immediate parent element by using relative font sizing and em units. As of v5, badges no longer have focus or hover styles for links.
 */
export declare const Badge: BadgeType;

export declare type BadgeProp = Partial<{
    /**
     * The badge background color
     * @default primary
     */
    badgeColor: ThemeColor;
    /**
     * Use the `.rounded-pill` utility class to make badges more rounded with a larger `border-radius`.
     * @default false
     */
    roundedPill: boolean;
}>;

declare type BadgeProps = BadgeProp & Omit<SaigonProps<"span", HTMLElement>, keyof BadgeProp>;

declare type BadgeType = ForwardRefComponent<HTMLElement, BadgeProps>;

export declare type BaseResponsiveProps<T extends As> = {
    as?: T | keyof JSX.IntrinsicElements | React.FunctionComponent<any>;
    css?: Responsive<Interpolation<Theme>>;
    /**
     * Responsive style shortcuts
     */
    css_xs?: Interpolation<Theme>;
    css_sm?: Interpolation<Theme>;
    css_md?: Interpolation<Theme>;
    css_lg?: Interpolation<Theme>;
    css_xl?: Interpolation<Theme>;
    css_xxl?: Interpolation<Theme>;
};

export declare type BorderProps = Partial<{
    /**
     * Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
     * @param {string} border boolean, (CSS.Property.Border & Record<never, never>), "0", "none"
     */
    border: Responsive<boolean | (CSS_2.Property.Border & Record<never, never>) | "0" | "none">;
    /**
     * The CSS `border-block` property is very similar to CSS property border, but the `border-block` property is dependent on block direction. Aka, `writing-mode` that defines block direction
     * @param {string} borderBlock CSS.Property.BorderBlock
     */
    borderBlock: Responsive<CSS_2.Property.BorderBlock>;
    /**
     * Set border on `border-bottom` only.
     * @param {string} borderBottom boolean, (CSS.Property.BorderBottom & Record<never, never>), "0", "none"
     */
    borderBottom: Responsive<boolean | (CSS_2.Property.BorderBottom & Record<never, never>) | "0" | "none">;
    /**
     * The `border-collapse` property sets the collapsing borders model for two tables.
     * @param {string} borderCollapse CSS.Property.BorderCollapse
     */
    borderCollapse: Responsive<CSS_2.Property.BorderCollapse>;
    /**
     * Change the border color using utilities built on our theme colors.
     * @param {string} borderColor ThemeColor, CSS.Property.BorderColor, "black", "white", "none"
     */
    borderColor: Responsive<ThemeColor | CSS_2.Property.BorderColor | "black" | "white" | "none">;
    /**
     * Set border on `border-right` only.
     * @param {string} borderEnd boolean, (CSS.Property.BorderLeft & Record<never, never>), "0", "none"
     */
    borderEnd: Responsive<boolean | (CSS_2.Property.BorderLeft & Record<never, never>) | "0" | "none">;
    /**
     * The `border-image` property allows you to specify an image to be used as the border around an element.
     * @param {string} borderImage CSS.Property.BorderImage
     */
    borderImage: Responsive<CSS_2.Property.BorderImage>;
    /**
     * The `border-iline` property sets the style, color and width of the borders for different elements in the inline direction.
     * @param {string} borderInline CSS.Property.BorderInline
     */
    borderInline: Responsive<CSS_2.Property.BorderInline>;
    /**
     * Bootstrap border-{color} utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.
     * @param {string} borderOpacity "10", "25", "50", "75", "100", number, "none"
     */
    borderOpacity: Responsive<"10" | "25" | "50" | "75" | "100" | number | "none">;
    /**
     * Add classes to an element to easily round with `border-radius`.
     * @param {string} borderRadius boolean, "0", "1", "2", "3", "4", "5", "circle", "pill", (CSS.Property.BorderRadius & Record<never, never>), "none"
     */
    borderRadius: Responsive<boolean | "0" | "1" | "2" | "3" | "4" | "5" | "circle" | "pill" | (CSS_2.Property.BorderRadius & Record<never, never>) | "none">;
    /**
     * Add classes to an element to easily round `border-bottom-right-radius` and `border-bottom-left-radius` corners.
     * @param {string} borderRadiusBottom boolean, "0", "1", "2", "3", "4", "5", "circle", "pill", (CSS.Property.BorderRadius & Record<never, never>), "none"
     */
    borderRadiusBottom: Responsive<boolean | "0" | "1" | "2" | "3" | "4" | "5" | "circle" | "pill" | (CSS_2.Property.BorderRadius & Record<never, never>) | "none">;
    /**
     * Add classes to an element to easily round `border-top-right-radius` and `border-bottom-right-radius` corners.
     * @param {string} borderRadiusEnd boolean, "0", "1", "2", "3", "4", "5", "circle", "pill", (CSS.Property.BorderRadius & Record<never, never>), "none"
     */
    borderRadiusEnd: Responsive<boolean | "0" | "1" | "2" | "3" | "4" | "5" | "circle" | "pill" | (CSS_2.Property.BorderRadius & Record<never, never>) | "none">;
    /**
     * Add classes to an element to easily round `border-top-left-radius` and `border-bottom-left-radius` corners.
     * @param {string} borderRadiusStart boolean, "0", "1", "2", "3", "4", "5", "circle", "pill", (CSS.Property.BorderRadius & Record<never, never>), "none"
     */
    borderRadiusStart: Responsive<boolean | "0" | "1" | "2" | "3" | "4" | "5" | "circle" | "pill" | (CSS_2.Property.BorderRadius & Record<never, never>) | "none">;
    /**
     * Add classes to an element to easily round `border-top-left-radius` and `border-top-right-radius` corners.
     * @param {string} borderRadiusTop boolean, "0", "1", "2", "3", "4", "5", "circle", "pill", (CSS.Property.BorderRadius & Record<never, never>), "none"
     */
    borderRadiusTop: Responsive<boolean | "0" | "1" | "2" | "3" | "4" | "5" | "circle" | "pill" | (CSS_2.Property.BorderRadius & Record<never, never>) | "none">;
    /**
     * The `border-spacing` property sets the distance between the borders of adjacent cells.
     * @param {string} borderSpacing CSS.Property.BorderSpacing
     */
    borderSpacing: Responsive<CSS_2.Property.BorderSpacing>;
    /**
     * Set border on `border-left` only.
     * @param {string} borderStart boolean, (CSS.Property.BorderRight & Record<never, never>), "0", "none"
     */
    borderStart: Responsive<boolean | (CSS_2.Property.BorderRight & Record<never, never>) | "0" | "none">;
    /**
     * The `border-style` property sets the style of an element's four borders. This property can have from one to four values.
     * @param {string} borderStyle CSS.Property.BorderStyle
     */
    borderStyle: Responsive<CSS_2.Property.BorderStyle>;
    /**
     * Apply border color with `-subtle` colors.
     * @param {string} borderSubtle boolean
     */
    borderSubtle: Responsive<boolean>;
    /**
     * Set border on `border-top` only.
     * @param {string} borderTop boolean, (CSS.Property.BorderTop & Record<never, never>), "0", "none"
     */
    borderTop: Responsive<boolean | (CSS_2.Property.BorderTop & Record<never, never>) | "0" | "none">;
    /**
     * Add classes to an element to easily round `border-top-left-radius` and `border-bottom-left-radius` corners.
     * @param {string} borderWidth "1", "2", "3", "4", "5", (CSS.Property.BorderWidth & Record<never, never>), "none"
     */
    borderWidth: Responsive<"1" | "2" | "3" | "4" | "5" | (CSS_2.Property.BorderWidth & Record<never, never>) | "none">;
}>;

export declare const Breadcrumb: BreadcrumbType & {
    Item: BreadcrumbItemType;
};

export declare type BreadcrumbItemProp = Partial<{
    /**
     *
     */
    active: boolean;
}>;

declare type BreadcrumbItemProps = BreadcrumbItemProp & Omit<SaigonProps<"li", HTMLElement>, keyof BreadcrumbItemProp>;

declare type BreadcrumbItemType = ForwardRefComponent<HTMLElement, BreadcrumbItemProps>;

export declare type BreadcrumbProp = Partial<{
    /**
     * Dividers are automatically added in CSS through ::before and content. They can be changed by modifying a local CSS custom property --#{$prefix}breadcrumb-divider, or through the $breadcrumb-divider Sass variable — and $breadcrumb-divider-flipped for its RTL counterpart, if needed. We default to our Sass variable, which is set as a fallback to the custom property. This way, you get a global divider that you can override without recompiling CSS at any time.
     * @default "--#{$prefix}breadcrumb-divider: '>';"
     */
    divider: string;
}>;

declare type BreadcrumbProps = BreadcrumbProp & Omit<SaigonProps<"nav", HTMLElement>, keyof BreadcrumbProp>;

declare type BreadcrumbType = ForwardRefComponent<HTMLElement, BreadcrumbProps>;

/**
 * Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.
 * xs: 540px
 * sm: 540px
 * md: 720px
 * lg: 960px
 * xl: 1140px
 * xxl: 1320px
 */
export declare type Breakpoint<T> = {
    /**
     * Apply property on viewports sized XS (extra small) or wider.
     * @NOTE: xs = 0px
     */
    xs?: T;
    /**
     * Apply property on viewports sized SM (small) or wider.
     * @NOTE: sm =  540px
     */
    sm?: T;
    /**
     * Apply property on viewports sized MD (medium) or wider.
     * @NOTE: md =  720px
     */
    md?: T;
    /**
     * Apply property on viewports sized LG (large) or wider.
     * @NOTE: lg = 960px
     */
    lg?: T;
    /**
     * Apply property on viewports sized XL (extra large)) or wider.
     * @NOTE: xl = 1140px
     */
    xl?: T;
    /**
     * Apply property on viewports sized XXL (extra extra large) or wider.
     * @NOTE: xxl = 1320px
     */
    xxl?: T;
};

export declare const Button: ButtonType;

export declare const ButtonGroup: ButtonGroupType;

export declare type ButtonGroupProp = Partial<{
    /**
     * Instead of applying button sizing classes to every button in a group, just add .btn-group-* to each .btn-group, including each one when nesting multiple groups.
     * @default md
     */
    size: "lg" | "md" | "sm";
}>;

declare type ButtonGroupProps = ButtonGroupProp & Omit<SaigonProps<"div", HTMLElement>, keyof ButtonGroupProp>;

declare type ButtonGroupType = ForwardRefComponent<HTMLElement, ButtonGroupProps>;

export declare type ButtonProp = Partial<{
    /**
     * The .btn classes are designed to be used with the <button> element. However, you can also use these classes on <a> or <input> elements (though some browsers may apply a slightly different rendering).
     * @default button
     */
    as: "button" | "a" | "input" | React.ReactNode;
    /**
     * Bootstrap includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.
     * @param {ThemeColor | 'link'} primary
     */
    variant: Responsive<ThemeColor | "link">;
    /**
     * In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button.
     */
    outline: Responsive<boolean>;
    /**
     * Fancy larger or smaller buttons? Add .btn-lg or .btn-sm for additional sizes.
     */
    size: Responsive<"lg" | "sm">;
    /**
     * If you don’t want the button text to wrap, you can add the .text-nowrap class to the button. In Sass, you can set $btn-white-space: nowrap to disable text wrapping for each button.
     */
    noTextWrap: Responsive<boolean>;
    /**
     * Make buttons look inactive by adding the disabled boolean attribute to any <button> element. Disabled buttons have pointer-events: none applied to, preventing hover and active states from triggering.
     */
    disabled: boolean;
    /**
     * When rendering using <input> tag, type need to be specified, by default is 'button'
     */
    type: "button" | "submit" | "reset" | string;
    /**
     * When rendering using <a> tag, it is better leave href default value
     */
    href: "#" | string;
    /**
     * If `true`, disabling the button and showing a spinner.
     * @default false
     */
    isLoading: boolean;
    /**
     * The label to show in the button when `isLoading` is true
     */
    loadingText: Responsive<React.ReactNode>;
    /**
     * Replace the spinner component when `isLoading` is set to `true`
     *
     * @type React.ReactNode or one of value from SpinnerProp["animation"], such as, 'dots-1', 'dots-2'...
     */
    loadingSpinner: Responsive<SpinnerProp["animation"] | boolean | (React.ReactNode & Record<never, never>)>;
    /**
     * It determines the placement of the spinner when isLoading is true
     * @default "end"
     */
    spinnerPlacement: Responsive<"start" | "end">;
    /**
     * If added, the button will show an icon before the button's label.
     * @type React.ReactNode
     */
    startIcon: Responsive<React.ReactNode>;
    /**
     * If added, the button will show an icon after the button's label.
     * @type React.ReactNode
     */
    endIcon: Responsive<React.ReactNode>;
    /**
     * The space between the button icon and label.
     * @type string
     * @default "5px"
     */
    iconSpacing: Responsive<CSS_2.Property.Gap>;
    /**
     * Button click effect when pointer-up
     *
     * @default slide
     */
    clickEffect: Responsive<"ripple" | "puff" | "box-shadow" | "slide" | "stripe">;
}>;

declare type ButtonProps = ButtonProp & Omit<SaigonProps<"button", HTMLElement>, keyof ButtonProp>;

declare type ButtonType = ForwardRefComponent<HTMLElement, ButtonProps>;

export declare type CalendarPickerProp = Partial<{
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

export declare const Card: CardType & {
    Body: CardBodyType;
    Header: CardHeaderType;
    Footer: CardFooterType;
    Title: CardTitleType;
    Subtitle: CardSubtitleType;
    Link: CardLinkType;
    Text: CardTextType;
    Img: CardImgType;
};

declare type CardBodyProps = SaigonProps<"div", HTMLElement>;

declare type CardBodyType = ForwardRefComponent<HTMLElement, CardBodyProps>;

declare type CardFooterProps = SaigonProps<"div", HTMLElement>;

declare type CardFooterType = ForwardRefComponent<HTMLElement, CardFooterProps>;

declare type CardHeaderProps = SaigonProps<"div", HTMLElement>;

declare type CardHeaderType = ForwardRefComponent<HTMLElement, CardHeaderProps>;

export declare type CardImgProp = Partial<{
    /**
     * Similar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card.
     *
     * @default top
     */
    variant: "top" | "bottom";
    /**
     * Override img `src` with placeholder
     *
     * @default false
     */
    placeholder: boolean;
}>;

declare type CardImgProps = CardImgProp & SaigonProps<"img", HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement>;

declare type CardImgType = ForwardRefComponent<HTMLElement, CardImgProps>;

declare type CardLinkProps = SaigonProps<"a", HTMLElement>;

declare type CardLinkType = ForwardRefComponent<HTMLElement, CardLinkProps>;

export declare type CardProp = Partial<{
    /**
     * Set a background-color with contrasting foreground color with our `.text-bg-{color}` helpers
     *
     * @default undefined
     */
    cardBg: ThemeColor;
    /**
     * Use border utilities to change just the border-color of a card. Note that you can put .text-{color} classes on the parent .card or a subset of the card’s contents.
     *
     * @default none
     */
    cardBorder: ThemeColor;
    /**
     * Remove cards background-color with `.bg-transparent`.
     *
     * @default false
     */
    cardBgTransparent: boolean;
}>;

declare type CardProps = CardProp & SaigonProps<"div", HTMLElement>;

declare type CardSubtitleProps = SaigonProps<"div", HTMLElement>;

declare type CardSubtitleType = ForwardRefComponent<HTMLElement, CardSubtitleProps>;

declare type CardTextProps = SaigonProps<"p", HTMLElement>;

declare type CardTextType = ForwardRefComponent<HTMLElement, CardTextProps>;

declare type CardTitleProps = SaigonProps<"h5", HTMLElement>;

declare type CardTitleType = ForwardRefComponent<HTMLElement, CardTitleProps>;

declare type CardType = ForwardRefComponent<HTMLElement, CardProps>;

export declare const Checkbox: CheckboxType & {
    Label: CheckboxLabelType;
    Feedback: CheckboxFeedbackType;
};

declare type CheckboxFeedbackProps = FormFeedbackProp & Omit<SaigonProps<"div", HTMLElement>, keyof FormFeedbackProp>;

declare type CheckboxFeedbackType = ForwardRefComponent<HTMLElement, CheckboxFeedbackProps>;

declare type CheckboxLabelProps = SaigonProps<"div", HTMLElement>;

declare type CheckboxLabelType = ForwardRefComponent<HTMLElement, CheckboxLabelProps>;

export declare type CheckboxProp = Partial<{
    /**
     * Default checked state value
     */
    defaultValue: boolean;
    /**
     * Checked state value
     */
    value: boolean;
    /**
     * utilize the :indeterminate pseudo class for the checkbox
     *
     * @default false
     */
    indeterminate: boolean;
    /**
     * Add the disabled attribute and the associated <label>s are automatically styled to match with a lighter color to help indicate the input’s state.
     *
     * @default false
     */
    disabled: boolean;
    /**
     * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
     *
     * @default false
     */
    isValid: boolean;
    /**
     * Callback when checked state changes.
     *
     * @param checked true if selected
     * @param evt native Event object
     */
    onChange: (checked: boolean, evt: Event) => void;
    /**
     * ref object to the input element
     */
    inputRef: React.RefObject<HTMLInputElement>;
    /**
     * Group checkboxes or radios on the same horizontal row by adding `.form-check-inline`.
     *
     * @default false
     */
    inline: boolean;
    /**
     * Put your checkboxes, radios, and switches on the opposite side with the `.form-check-reverse` modifier class.
     *
     * @default false
     */
    reverse: boolean;
}>;

declare type CheckboxProps = CheckboxProp & Omit<SaigonProps<"div", HTMLElement>, keyof CheckboxProp>;

declare type CheckboxType = ForwardRefComponent<HTMLElement, CheckboxProps>;

export declare const CloseButton: CloseButtonType;

export declare type CloseButtonProp = Partial<{
    /**
     * Disabled close buttons change their opacity. We’ve also applied pointer-events: none and user-select: none to preventing hover and active states from triggering.
     *
     * @default false
     */
    disabled: boolean;
}>;

declare type CloseButtonProps = CloseButtonProp & Omit<SaigonProps<"button", HTMLElement>, keyof CloseButtonProp>;

declare type CloseButtonType = ForwardRefComponent<HTMLElement, CloseButtonProps>;

export declare const Col: ColType;

export declare interface ColorValue {
    hex: string;
    rgb: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
}

export declare type ColProp = Partial<{
    /**
     *
     * @default div
     */
    as: "div" | React.ReactElement;
    /**
     * Apply property on viewports sized XS (extra small) or wider.
     * @NOTE: xs = 0px
     */
    col: Responsive<"auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
    /**
     * For offsetting grid columns you can set an offset value or for a more general layout.
     */
    offset: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
}>;

declare type ColProps = SaigonProps<"div", HTMLElement> & ColProp;

/**
 * Columns are incredibly flexible. There are 12 template columns available per row, allowing you to create different combinations of elements that span any number of columns. Column classes indicate the number of template columns to span (e.g., col-4 spans four). widths are set in percentages so you always have the same relative sizing.
 * @param {ColProps} props
 * @returns {ColType}
 */
declare type ColType = ForwardRefComponent<HTMLElement, ColProps>;

/**
 * Containers center and horizontally pad your content. Use .container for a responsive pixel width, .container-fluid for width: 100% across all viewports and devices, or a responsive container (e.g., .container-md) for a combination of fluid and pixel widths.
 * @param {ContainerProps} props
 * @returns {ContainerType}
 */
export declare const Container: ContainerType;

export declare type ContainerProp = Partial<{
    /**
     * Use *.container-fluid* for a full width container, spanning the entire width of the viewport.
     * @default false
     */
    breakpoint: boolean | "sm" | "md" | "lg" | "xl" | "xxl" | "fluid";
    /**
     * Use .container-fluid to make width: 100% at all breakpoints
     *
     */
    fluid: boolean;
}>;

declare type ContainerProps = ContainerProp & Omit<SaigonProps<"div", HTMLElement>, keyof ContainerProp>;

declare type ContainerType = ForwardRefComponent<HTMLElement, ContainerProps>;

export declare type CSSString = string & Record<never, never>;

export declare type DateTimeControlProp = Partial<{
    /**
     * Uncontrolled state value
     * @default 'new Date()'
     */
    defaultValue: Date;
    /**
     * Controlled state value
     * @default 'new Date()'
     */
    value: Date;
    /**
     * Date time format. For the complete list of formats, please visit [momentjs](https://momentjs.com/docs/#/displaying/format/)
     * @default 'YYYY-MM-DD'
     */
    format: string;
    /**
     * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
     *
     * @default false
     */
    isValid: boolean;
    /**
     * Use browser defaults validation feedback messages
     *
     * @default false
     */
    required: boolean;
    /**
     * Callback when form state value changing
     * @returns Possibly returns `undefined` when `required` is false.
     */
    onChange: (val: Date | undefined) => void;
    /**
     * Callback when user click on clear button
     * @returns Possibly returns `undefined` when `required` is false.
     */
    onClear: (val: Date | undefined) => void;
}>;

declare type DateTimeControlProps = DateTimeControlProp & Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "defaultValue" | "onChange"> & SaigonProps<"input", HTMLInputElement>;

declare type DateTimeControlType = ForwardRefComponent<HTMLElement, DateTimeControlProps>;

export declare const DateTimePicker: DateTimePickerType;

export declare type DateTimePickerProp = CalendarPickerProp & Partial<{
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

declare type DateTimePickerProps = Omit<DateTimePickerProp, "onChange"> & DateTimeControlProps;

declare type DateTimePickerRef = {
    show: () => void;
    hide: () => void;
};

declare type DateTimePickerType = ForwardRefComponent<DateTimePickerRef, DateTimePickerProps>;

export declare type DateTimePresetRange = {
    title: string;
    from: Date;
    to: Date;
};

export declare type DateTimeRangePickerProp = CalendarPickerProp & Partial<{
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

declare type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

/**
 * Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
 * @param {DivProps} props
 * @returns {DivType}
 */
export declare const Div: DivType;

declare type DivProps = SaigonProps<"div", HTMLElement>;

declare type DivType = ForwardRefComponent<HTMLElement, DivProps>;

export declare const Dropdown: DropdownType & {
    Toggle: DropdownToggleType;
    Menu: DropdownMenuType;
    Item: DropdownItemType;
    Divider: DropdownDividerType;
};

export declare type DropdownDividerProps = SaigonProps<"hr", HTMLElement>;

export declare type DropdownDividerType = ForwardRefComponent<HTMLElement, DropdownDividerProps>;

export declare type DropdownItemProp = Partial<{
    /**
     *
     */
    as: "button" | "a" | string;
    /**
     * Add .active to items in the dropdown to style them as active. To convey the active state to assistive technologies, use the aria-current attribute — using the page value for the current page, or true for the current item in a set.
     */
    active: boolean;
    /**
     * Add .disabled to items in the dropdown to style them as disabled.
     */
    disabled: boolean;
    /**
     * Need when `as`='a'
     */
    href: "#" | string;
    /**
     * Need when `as`='button'
     */
    type: "button" | string;
}>;

export declare type DropdownItemProps = DropdownItemProp & Omit<SaigonProps<"button", HTMLElement>, keyof DropdownItemProp>;

export declare type DropdownItemType = ForwardRefComponent<HTMLElement, DropdownItemProps>;

export declare type DropdownMenuProps = Omit<SaigonProps<"ul", HTMLElement>, "as">;

export declare type DropdownMenuType = SaigonComponent<DropdownMenuProps>;

export declare type DropdownProp = Partial<{
    /**
     * Dropdown side
     * @default top
     */
    side: "top" | "right" | "bottom" | "left";
    /**
     * Dropdown alignment
     * @default start
     */
    alignment: "start" | "end" | "middle";
    /**
     * CSS .position strategy
     *
     * @default 'absolute'
     */
    strategy: "fixed" | "absolute";
    /**
     * Translates the floating element along the specified axes.
     *
     * @OffsetOptions = number | { mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null }
     * @description More info at: https://floating-ui.com/docs/offset
     */
    offset: OffsetOptions;
    /**
     * This is useful when you don’t know which placement will be best for the floating element, or don’t want to have to explicitly specify it.
     * Note: Will ignore `side` and `alignment` props
     *
     * @default false
     */
    autoPlacement: boolean;
    /**
     * Animate the popover on show and hide
     * @default 'fade'
     */
    animation: AnimationType;
    /**
     * Create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of .dropdown-toggle-split for proper spacing around the dropdown caret.
     * @default false
     */
    splitButton: boolean;
    /**
     * Callback fired when the open/close the dropdown
     * @param open true when open
     * @param event original event object
     * @returns
     */
    onOpenChange: (open: boolean, event?: object) => void;
}>;

export declare type DropdownProps = DropdownProp & Omit<SaigonProps<"div", HTMLElement>, keyof DropdownProp>;

export declare type DropdownRef = HTMLElement & {
    show: (relativeDom: HTMLElement) => void;
    close: () => void;
};

export declare type DropdownToggleProp = Partial<{
    /**
     * Use contextual classes to style list items with a stateful background and color.
     *
     * @default undefined
     */
    variant: ThemeColor;
    /**
     * @default false
     */
    split: boolean;
}>;

export declare type DropdownToggleProps = DropdownToggleProp & Omit<SaigonProps<"button", HTMLElement>, keyof DropdownToggleProp>;

export declare type DropdownToggleType = SaigonComponent<DropdownToggleProps>;

export declare type DropdownType = ForwardRefComponent<DropdownRef, DropdownProps>;

export declare const extendTheme: (theme: DeepPartial<ThemeOptions>) => ThemeOptions;

export declare const Figure: FigureType & {
    Img: FigureImgType;
    Caption: FigureCaptionType;
};

declare type FigureCaptionProps = SaigonProps<"figcaption", HTMLElement>;

declare type FigureCaptionType = ForwardRefComponent<HTMLElement, FigureCaptionProps>;

declare type FigureImgProps = React.ImgHTMLAttributes<HTMLElement> & ImageProp & Omit<SaigonProps<"img", HTMLElement>, keyof ImageProp>;

declare type FigureImgType = ForwardRefComponent<HTMLElement, FigureImgProps>;

declare type FigureProps = SaigonProps<"figure", HTMLElement>;

declare type FigureType = ForwardRefComponent<HTMLElement, FigureProps>;

export declare type FlexProps = Partial<{
    /**
     * Use align-content utilities on flexbox containers to align flex items together on the cross axis. Choose from start (browser default), end, center, between, around, or stretch. To demonstrate these utilities, we’ve enforced flex-wrap: wrap and increased the number of flex items.
     * *Heads up!* This property has no effect on single rows of flex items.
     * @param {string} alignContent "start", "end", "center", "between", "around", "stretch", (CSS.Property.AlignContent & Record<never, never>), "none"
     */
    alignContent: Responsive<"start" | "end" | "center" | "between" | "around" | "stretch" | (CSS_2.Property.AlignContent & Record<never, never>) | "none">;
    /**
     * Use `align-items` utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if flex-direction: column). Choose from start, end, center, baseline, or stretch (browser default).
     * @param {string} alignItems "start", "end", "center", "baseline", "stretch", (CSS.Property.AlignItems & Record<never, never>), "none"
     */
    alignItems: Responsive<"start" | "end" | "center" | "baseline" | "stretch" | (CSS_2.Property.AlignItems & Record<never, never>) | "none">;
    /**
     * Use `align-self` utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if flex-direction: column). Choose from the same options as align-items: start, end, center, baseline, or stretch (browser default).
     * @param {string} alignSelf "auto", "start", "end", "center", "baseline", "stretch", (CSS.Property.AlignSelf & Record<never, never>), "none"
     */
    alignSelf: Responsive<"auto" | "start" | "end" | "center" | "baseline" | "stretch" | (CSS_2.Property.AlignSelf & Record<never, never>) | "none">;
    /**
     * `column-gap` sets the horizontal space between children items in the specified container.
     * @param {string} columnGap "0", "1", "2", "3", "4", "5", (CSS.Property.ColumnGap & Record<never, never>), "none"
     */
    columnGap: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | (CSS_2.Property.ColumnGap & Record<never, never>) | "none">;
    /**
     * Apply `display: flex` utilities to create a flexbox container and transform direct children elements into flex items. Flex containers and items are able to be modified further with additional flex properties.
     * @param {string} flex "fill", "row", "column", "row-reverse", "column-reverse", "grow-0", "grow-1", "shrink-0", "shrink-1", "wrap", "nowrap", "wrap-reverse", (CSS.Property.Flex & Record<never, never>), "none"
     */
    flex: Responsive<"fill" | "row" | "column" | "row-reverse" | "column-reverse" | "grow-0" | "grow-1" | "shrink-0" | "shrink-1" | "wrap" | "nowrap" | "wrap-reverse" | (CSS_2.Property.Flex & Record<never, never>) | "none">;
    /**
     * The `flex-basis` property specifies the initial length of a flexible item.
     *
     * **Note:** If the element is not a flexible item, the `flex-basis` property has no effect.
     * @param {CSS.Property.FlexBasis} flexBasis CSS.Property.FlexBasis
     */
    flexBasis: Responsive<CSS_2.Property.FlexBasis>;
    /**
     * The `flex-direction` property specifies the direction of the flexible items.
     *
     * **Note:** If the element is not a flexible item, the `flex-direction` property has no effect.
     * @param {CSS.Property.FlexDirection} flexDirection CSS.Property.FlexDirection
     */
    flexDirection: Responsive<CSS_2.Property.FlexDirection>;
    /**
     * The `flex-flow` property is a shorthand property for: `flex-direction` and `flex-wrap`
     *
     * Note: If the elements are not flexible items, the `flex-flow` property has no effect.
     * @param {CSS.Property.FlexFlow} flexFlow CSS.Property.FlexFlow
     */
    flexFlow: Responsive<CSS_2.Property.FlexFlow>;
    /**
     * The `flex-grow` property specifies how much the item will grow relative to the rest of the flexible items inside the same container.
     *
     * **Note:** If the element is not a flexible item, the `flex-grow` property has no effect.
     * @param {CSS.Property.FlexGrow} flexGrow CSS.Property.FlexGrow
     */
    flexGrow: Responsive<CSS_2.Property.FlexGrow>;
    /**
     * The `flex-shrink` property specifies how the item will shrink relative to the rest of the flexible items inside the same container.
     *
     * **Note:** If the element is not a flexible item, the `flex-shrink` property has no effect.
     * @param {CSS.Property.FlexShrink} flexShrink CSS.Property.FlexShrink
     */
    flexShrink: Responsive<CSS_2.Property.FlexShrink>;
    /**
     * The `flex-wrap` property specifies whether the flexible items should wrap or not.
     *
     * **Note:** If the elements are not flexible items, the `flex-wrap` property has no effect.
     * @param {boolean, (CSS.Property.FlexWrap & Record<never, never>)} flexWrap boolean, (CSS.Property.FlexWrap & Record<never, never>)
         */
     flexWrap: Responsive<boolean | (CSS_2.Property.FlexWrap & Record<never, never>)>;
     /**
      * When using `display: grid` or `display: flex`, you can make use of gap utilities on the parent element. This can save on having to add margin utilities to individual children of a grid or flex container. Gap utilities are responsive by default, and are generated via our utilities API, based on the `$spacers` Sass map.
      * @param {string} gap "0", "1", "2", "3", "4", "5", (CSS.Property.Gap & Record<never, never>), "none"
      */
     gap: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | (CSS_2.Property.Gap & Record<never, never>) | "none">;
     /**
      * Use `justify-content` utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if flex-direction: column). Choose from start (browser default), end, center, between, around, or evenly.
      * @param {string} justifyContent "start", "end", "center", "between", "around", "evenly", (CSS.Property.JustifyContent & Record<never, never>), "none"
      */
     justifyContent: Responsive<"start" | "end" | "center" | "between" | "around" | "evenly" | (CSS_2.Property.JustifyContent & Record<never, never>) | "none">;
     /**
      * Use `.order-*` classes for controlling the visual order of your content. Useful for the `flex` system.
      * @param {string} order "first", "0", "1", "2", "3", "4", "5", "last", (CSS.Property.Order & Record<never, never>), "none"
      */
     order: Responsive<"first" | "0" | "1" | "2" | "3" | "4" | "5" | "last" | (CSS_2.Property.Order & Record<never, never>) | "none">;
     /**
      * `row-gap` sets the vertical space between children items in the specified container.
      * @param {string} rowGap "0", "1", "2", "3", "4", "5", (CSS.Property.RowGap & Record<never, never>), "none"
      */
     rowGap: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | (CSS_2.Property.RowGap & Record<never, never>) | "none">;
    }>;

    export declare const Form: FormType & {
        Label: FormLabelType;
        Control: FormControlType;
        ColLabel: FormColLabelType;
        Text: FormTextType;
        Feedback: FormFeedbackType;
        Floating: FormFloatingType;
        ControlWithIcon: FormControlWithIconType;
        DateTimeControl: DateTimeControlType;
    };

    export declare type FormColLabelProp = Partial<{
        /**
         * You may also choose from small and large custom selects to match our similarly sized text inputs.
         *
         * @default undefined
         */
        size: "sm" | "lg";
    }>;

    declare type FormColLabelProps = FormColLabelProp & Omit<SaigonProps<"label", HTMLElement>, keyof FormColLabelProp>;

    declare type FormColLabelType = ForwardRefComponent<HTMLElement, FormColLabelProps>;

    export declare type FormControlProp = Partial<{
        /**
         * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
         *
         * @default false
         */
        isValid: boolean;
        /**
         * Use browser defaults validation feedback messages
         *
         * @default false
         */
        required: boolean;
    }>;

    declare type FormControlProps = FormControlProp & React.InputHTMLAttributes<HTMLInputElement> & SaigonProps<"input", HTMLInputElement>;

    declare type FormControlType = ForwardRefComponent<HTMLInputElement, FormControlProps>;

    export declare type FormControlWithIconProp = Partial<FormControlProp & {
        /**
         * Left icon
         * @default undefined
         */
        startIcon: Responsive<React.ReactNode>;
        /**
         * Right icon
         * @default undefined
         */
        endIcon: Responsive<React.ReactNode>;
        /**
         * Left icon when hover
         * @default undefined
         */
        startHoverIcon: Responsive<React.ReactNode>;
        /**
         * Right icon when hover
         * @default undefined
         */
        endHoverIcon: Responsive<React.ReactNode>;
    }>;

    declare type FormControlWithIconProps = FormControlWithIconProp & React.InputHTMLAttributes<HTMLInputElement> & SaigonProps<"input", HTMLInputElement>;

    declare type FormControlWithIconType = ForwardRefComponent<HTMLInputElement, FormControlWithIconProps>;

    export declare type FormFeedbackProp = Partial<{
        /**
         * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
         *
         * @default false
         */
        isValid: boolean;
    }>;

    declare type FormFeedbackProps = FormFeedbackProp & Omit<SaigonProps<"div", HTMLElement>, keyof FormFeedbackProp>;

    declare type FormFeedbackType = ForwardRefComponent<HTMLElement, FormFeedbackProps>;

    export declare type FormFloatingProp = Partial<{
        /**
         * The floating label
         *
         * @default undefined
         */
        label: string;
    }>;

    declare type FormFloatingProps = FormFloatingProp & Omit<SaigonProps<"div", HTMLElement>, keyof FormFloatingProp>;

    declare type FormFloatingType = ForwardRefComponent<HTMLElement, FormFloatingProps>;

    declare type FormLabelProps = SaigonProps<"label", HTMLElement>;

    declare type FormLabelType = ForwardRefComponent<HTMLElement, FormLabelProps>;

    declare type FormProps = React.FormHTMLAttributes<HTMLFormElement> & SaigonProps<"form", HTMLFormElement>;

    declare type FormTextProps = SaigonProps<"div", HTMLElement>;

    declare type FormTextType = ForwardRefComponent<HTMLElement, FormTextProps>;

    declare type FormType = ForwardRefComponent<HTMLFormElement, FormProps>;

    export declare interface ForwardRefComponent<RefType, PropsType> extends React.ForwardRefExoticComponent<Omit<PropsType, "ref"> & React.RefAttributes<RefType>> {
        displayName?: string;
    }

    export declare const Icon360: IconType;

    export declare const Icon3gMobiledata: IconType;

    export declare const Icon4gPlusMobiledata: IconType;

    export declare const Icon5g: IconType;

    export declare const IconAccessibility: IconType;

    export declare const IconAccessibilityNew: IconType;

    export declare const IconAccountBalance: IconType;

    export declare const IconAccountBox: IconType;

    export declare const IconAccountCircle: IconType;

    export declare const IconAdb: IconType;

    export declare const IconAddAlert: IconType;

    export declare const IconAddAPhoto: IconType;

    export declare const IconAddCall: IconType;

    export declare const IconAddCard: IconType;

    export declare const IconAddComment: IconType;

    export declare const IconAddHome: IconType;

    export declare const IconAddLocation: IconType;

    export declare const IconAddLocationAlt: IconType;

    export declare const IconAddPhotoAlternate: IconType;

    export declare const IconAddReaction: IconType;

    export declare const IconAddRoad: IconType;

    export declare const IconAddToHomeScreen: IconType;

    export declare const IconAdjust: IconType;

    export declare const IconAdUnits: IconType;

    export declare const IconAirplaneModeInactive: IconType;

    export declare const IconAlarm: IconType;

    export declare const IconAlarmAdd: IconType;

    export declare const IconAlarmOff: IconType;

    export declare const IconAlarmOn: IconType;

    export declare const IconAllInclusive: IconType;

    export declare const IconAlternateEmail: IconType;

    export declare const IconAltRoute: IconType;

    export declare const IconAodWatch: IconType;

    export declare const IconApkDocument: IconType;

    export declare const IconAppBlocking: IconType;

    export declare const IconAppShortcut: IconType;

    export declare const IconArrowBack: IconType;

    export declare const IconArrowBackiOS: IconType;

    export declare const IconArrowCircleLeft: IconType;

    export declare const IconArrowCircleRight: IconType;

    export declare const IconArrowCircleUp: IconType;

    export declare const IconArrowDropDown: IconType;

    export declare const IconArrowDropDownCircle: IconType;

    export declare const IconArrowDropUp: IconType;

    export declare const IconArrowForward: IconType;

    export declare const IconArrowForwardiOS: IconType;

    export declare const IconArrowLeft: IconType;

    export declare const IconArrowRight: IconType;

    export declare const IconArrowRightAlt: IconType;

    export declare const IconArrowTopLeft: IconType;

    export declare const IconArrowTopRight: IconType;

    export declare const IconAspectRatio: IconType;

    export declare const IconAssistantDevice: IconType;

    export declare const IconAtm: IconType;

    export declare const IconAttachEmail: IconType;

    export declare const IconAutoMode: IconType;

    export declare const IconAutoReadPlay: IconType;

    export declare const IconAutorenew: IconType;

    export declare const IconBadgeCriticalBattery: IconType;

    export declare const IconBarChart: IconType;

    export declare const IconBarChart4Bars: IconType;

    export declare const IconBarChartOff: IconType;

    export declare const IconBarcode: IconType;

    export declare const IconBarcodeScanner: IconType;

    export declare const IconBattery0Bar: IconType;

    export declare const IconBattery1Bar: IconType;

    export declare const IconBattery2Bar: IconType;

    export declare const IconBattery3Bar: IconType;

    export declare const IconBattery4Bar: IconType;

    export declare const IconBattery5Bar: IconType;

    export declare const IconBattery6Bar: IconType;

    export declare const IconBatteryAlert: IconType;

    export declare const IconBatteryChange: IconType;

    export declare const IconBatteryCharging20: IconType;

    export declare const IconBatteryCharging30: IconType;

    export declare const IconBatteryCharging50: IconType;

    export declare const IconBatteryCharging60: IconType;

    export declare const IconBatteryCharging80: IconType;

    export declare const IconBatteryChargingFull: IconType;

    export declare const IconBatteryError: IconType;

    export declare const IconBatteryFull: IconType;

    export declare const IconBatteryFullAlt: IconType;

    export declare const IconBatterySaver: IconType;

    export declare const IconBatteryUnknown: IconType;

    export declare const IconBatteryVeryLow: IconType;

    export declare const IconBedtime: IconType;

    export declare const IconBedtimeOff: IconType;

    export declare const IconBeenhere: IconType;

    export declare const IconBigtopUpdates: IconType;

    export declare const IconBlind: IconType;

    export declare const IconBlock: IconType;

    export declare const IconBluetooth: IconType;

    export declare const IconBluetoothConnected: IconType;

    export declare const IconBluetoothDisabled: IconType;

    export declare const IconBluetoothSearching: IconType;

    export declare const IconBlurOn: IconType;

    export declare const IconBookmark: IconType;

    export declare const IconBookmarkAdd: IconType;

    export declare const IconBookmarkCheck: IconType;

    export declare const IconBookmarkRemove: IconType;

    export declare const IconBookmarks: IconType;

    export declare const IconBox: IconType;

    export declare const IconBoxAdd: IconType;

    export declare const IconBoxEdit: IconType;

    export declare const IconBrowserUpdated: IconType;

    export declare const IconBrush: IconType;

    export declare const IconBubbleChart: IconType;

    export declare const IconBugReport: IconType;

    export declare const IconBuild: IconType;

    export declare const IconBusinessCenter: IconType;

    export declare const IconCable: IconType;

    export declare const IconCalculate: IconType;

    export declare const IconCalendarAddOn: IconType;

    export declare const IconCalendarMonth: IconType;

    export declare const IconCalendarToday: IconType;

    export declare const IconCall: IconType;

    export declare const IconCallEnd: IconType;

    export declare const IconCallLog: IconType;

    export declare const IconCallQuality: IconType;

    export declare const IconCamera: IconType;

    export declare const IconCandlestickChart: IconType;

    export declare const IconCardMembership: IconType;

    export declare const IconCardTravel: IconType;

    export declare const IconCast: IconType;

    export declare const IconCastConnected: IconType;

    export declare const IconCastle: IconType;

    export declare const IconCategory: IconType;

    export declare const IconCelebration: IconType;

    export declare const IconCellTower: IconType;

    export declare const IconCellWifi: IconType;

    export declare const IconCenterFocusStrong: IconType;

    export declare const IconCenterFocusWeak: IconType;

    export declare const IconCharger: IconType;

    export declare const IconChartData: IconType;

    export declare const IconChat: IconType;

    export declare const IconChatAddOn: IconType;

    export declare const IconChatBubble: IconType;

    export declare const IconChatError: IconType;

    export declare const IconCheck: IconType;

    export declare const IconCheckBox: IconType;

    export declare const IconCheckBoxOutlineBlank: IconType;

    export declare const IconCheckCircle: IconType;

    export declare const IconCheckSmall: IconType;

    export declare const IconChevronLeft: IconType;

    export declare const IconChevronRight: IconType;

    export declare const IconChurch: IconType;

    export declare const IconCleaningServices: IconType;

    export declare const IconClearDay: IconType;

    export declare const IconClose: IconType;

    export declare const IconCloudySnowing: IconType;

    export declare const IconCode: IconType;

    export declare const IconCodeBlocks: IconType;

    export declare const IconCodeOff: IconType;

    export declare const IconCollapseAll: IconType;

    export declare const IconCollectionsBookmark: IconType;

    export declare const IconColorize: IconType;

    export declare const IconComputer: IconType;

    export declare const IconConnectedTv: IconType;

    export declare const IconConnectingAirports: IconType;

    export declare const IconContactSupport: IconType;

    export declare const IconCopyright: IconType;

    export declare const IconCreateNewFolder: IconType;

    export declare const IconCreditCard: IconType;

    export declare const IconCreditCardHeart: IconType;

    export declare const IconCreditScore: IconType;

    export declare const IconCrop: IconType;

    export declare const IconCropFree: IconType;

    export declare const IconCurrencyBitcoin: IconType;

    export declare const IconCurrencyExchange: IconType;

    export declare const IconCurrencyFranc: IconType;

    export declare const IconCurrencyLira: IconType;

    export declare const IconCurrencyPound: IconType;

    export declare const IconCurrencyRuble: IconType;

    export declare const IconCurrencyYen: IconType;

    export declare const IconDangerous: IconType;

    export declare const IconDarkMode: IconType;

    export declare const IconDatabaseOff: IconType;

    export declare const IconDatabaseUpload: IconType;

    export declare const IconDataTable: IconType;

    export declare const IconDateRange: IconType;

    export declare const IconDeceased: IconType;

    export declare const IconDehaze: IconType;

    export declare const IconDelete: IconType;

    export declare const IconDeleteForever: IconType;

    export declare const IconDesktopAccessDisabled: IconType;

    export declare const IconDesktopCloud: IconType;

    export declare const IconDesktopMac: IconType;

    export declare const IconDeveloperGuide: IconType;

    export declare const IconDevicesWearables: IconType;

    export declare const IconDeviceUnknown: IconType;

    export declare const IconDewPoint: IconType;

    export declare const IconDigitalWellbeing: IconType;

    export declare const IconDirections: IconType;

    export declare const IconDirectionsOff: IconType;

    export declare const IconDns: IconType;

    export declare const IconDock: IconType;

    export declare const IconDomainVerification: IconType;

    export declare const IconDoNotDisturbOn: IconType;

    export declare const IconDoNotDisturbOnTotalSilence: IconType;

    export declare const IconDownloadDone: IconType;

    export declare const IconDrafts: IconType;

    export declare const IconDragPan: IconType;

    export declare const IconE911Avatar: IconType;

    export declare const IconEarthquake: IconType;

    export declare const IconEcg: IconType;

    export declare const IconEdit: IconType;

    export declare const IconEditAttributes: IconType;

    export declare const IconEditCalendar: IconType;

    export declare const IconEditLocation: IconType;

    export declare const IconEditNotifications: IconType;

    export declare const IconEditRoad: IconType;

    export declare const IconElderlyWoman: IconType;

    export declare const IconElectricalServices: IconType;

    export declare const IconEnterprise: IconType;

    export declare const IconEnterpriseOff: IconType;

    export declare const IconError: IconType;

    export declare const IconEuro: IconType;

    export declare const IconEventBusy: IconType;

    export declare const IconEventNote: IconType;

    export declare const IconEventUpcoming: IconType;

    export declare const IconExpandAll: IconType;

    export declare const IconExpandCircleUp: IconType;

    export declare const IconExplore: IconType;

    export declare const IconExploreOff: IconType;

    export declare const IconExposureNeg1: IconType;

    export declare const IconExposurePlus1: IconType;

    export declare const IconExtension: IconType;

    export declare const IconFactory: IconType;

    export declare const IconFamilyHistory: IconType;

    export declare const IconFastfood: IconType;

    export declare const IconFax: IconType;

    export declare const IconFeedback: IconType;

    export declare const IconFemale: IconType;

    export declare const IconFilterAlt: IconType;

    export declare const IconFilterCenterFocus: IconType;

    export declare const IconFinanceMode: IconType;

    export declare const IconFingerprint: IconType;

    export declare const IconFitnessTracker: IconType;

    export declare const IconFlag2: IconType;

    export declare const IconFlagCheck: IconType;

    export declare const IconFlagCircle: IconType;

    export declare const IconFlare: IconType;

    export declare const IconFlashlightOn: IconType;

    export declare const IconFlashOff: IconType;

    export declare const IconFlipCameraIos: IconType;

    export declare const IconFmdBad: IconType;

    export declare const IconFoggy: IconType;

    export declare const IconFootprint: IconType;

    export declare const IconForwardToInbox: IconType;

    export declare const IconFullStackedBarChart: IconType;

    export declare const IconGamepad: IconType;

    export declare const IconGirl: IconType;

    export declare const IconGlobeAsia: IconType;

    export declare const IconGlobeUk: IconType;

    export declare const IconGoogleHomeDevices: IconType;

    export declare const IconGppMaybe: IconType;

    export declare const IconGrade: IconType;

    export declare const IconGrain: IconType;

    export declare const IconGrid4x4: IconType;

    export declare const IconGridOn: IconType;

    export declare const IconGroup: IconType;

    export declare const IconGroupedBarChart: IconType;

    export declare const IconGroupRemove: IconType;

    export declare const IconGroupSearch: IconType;

    export declare const IconGTranslate: IconType;

    export declare const IconHardDrive: IconType;

    export declare const IconHeadphones: IconType;

    export declare const IconHeadphonesBattery: IconType;

    export declare const IconHeadsetMic: IconType;

    export declare const IconHealthAndSafety: IconType;

    export declare const IconHeartBroken: IconType;

    export declare const IconHeartCheck: IconType;

    export declare const IconHeartFavourite: IconType;

    export declare const IconHeartMinus: IconType;

    export declare const IconHeartPlus: IconType;

    export declare const IconHelicopter: IconType;

    export declare const IconHelp: IconType;

    export declare const IconHelpCenter: IconType;

    export declare const IconHistory: IconType;

    export declare const IconHistoryToggleOff: IconType;

    export declare const IconHome: IconType;

    export declare const IconHomePin: IconType;

    export declare const IconHomeWork: IconType;

    export declare const IconHourglassDisabled: IconType;

    export declare const IconHourglassEmpty: IconType;

    export declare const IconHourglassTop: IconType;

    export declare const IconImage: IconType;

    export declare const IconImageSearch: IconType;

    export declare const IconImagesmode: IconType;

    export declare const IconImportContacts: IconType;

    export declare const IconInbox: IconType;

    export declare const IconIndeterminateCheckBox: IconType;

    export declare const IconInfo: IconType;

    export declare const IconInfoI: IconType;

    export declare const IconInput: IconType;

    export declare const IconInstallDesktop: IconType;

    export declare const IconInstallMobile: IconType;

    export declare const IconInvertColors: IconType;

    export declare const IconIos: IconType;

    export declare const IconKeepOff: IconType;

    export declare const IconKey: IconType;

    export declare const IconKeyboard: IconType;

    export declare const IconKeyboardFull: IconType;

    export declare const IconKeyVertical: IconType;

    export declare const IconKidStar: IconType;

    export declare const IconLabelOff: IconType;

    export declare const IconLandscape: IconType;

    export declare const IconLaptopChromebook: IconType;

    export declare const IconLaptopMac: IconType;

    export declare const IconLaptopWindows: IconType;

    export declare const IconLayers: IconType;

    export declare const IconLeaderboard: IconType;

    export declare const IconLegendToggle: IconType;

    export declare const IconLightbulb: IconType;

    export declare const IconLightMode: IconType;

    export declare const IconLink: IconType;

    export declare const IconLinkedCamera: IconType;

    export declare const IconLinkOff: IconType;

    export declare const IconLists: IconType;

    export declare const IconLiveHelp: IconType;

    export declare const IconLiveTv: IconType;

    export declare const IconLocalActivity: IconType;

    export declare const IconLocalCarWash: IconType;

    export declare const IconLocalConvenienceStore: IconType;

    export declare const IconLocalDrink: IconType;

    export declare const IconLocalFireDepartment: IconType;

    export declare const IconLocalFlorist: IconType;

    export declare const IconLocalGasStation: IconType;

    export declare const IconLocalHospital: IconType;

    export declare const IconLocalLaundryService: IconType;

    export declare const IconLocalLibrary: IconType;

    export declare const IconLocalMall: IconType;

    export declare const IconLocalPizza: IconType;

    export declare const IconLocalPolice: IconType;

    export declare const IconLocalPostOffice: IconType;

    export declare const IconLocationDisabled: IconType;

    export declare const IconLocationOn: IconType;

    export declare const IconLocationSearching: IconType;

    export declare const IconLock: IconType;

    export declare const IconLockOpen: IconType;

    export declare const IconLockReset: IconType;

    export declare const IconLogin: IconType;

    export declare const IconLogoDev: IconType;

    export declare const IconLogout: IconType;

    export declare const IconLoyalty: IconType;

    export declare const IconLteMobiledata: IconType;

    export declare const IconLtePlusMobiledata: IconType;

    export declare const IconMail: IconType;

    export declare const IconMale: IconType;

    export declare const IconMan: IconType;

    export declare const IconManageAccounts: IconType;

    export declare const IconManageHistory: IconType;

    export declare const IconManageSearch: IconType;

    export declare const IconMap: IconType;

    export declare const IconMapSearch: IconType;

    export declare const IconMapsUgc: IconType;

    export declare const IconMarkAsUnread: IconType;

    export declare const IconMarkChatRead: IconType;

    export declare const IconMarkChatUnread: IconType;

    export declare const IconMarkEmailRead: IconType;

    export declare const IconMarkEmailUnread: IconType;

    export declare const IconMediaOutput: IconType;

    export declare const IconMedicalServices: IconType;

    export declare const IconMemoryAlt: IconType;

    export declare const IconMenu: IconType;

    export declare const IconMenuOpen: IconType;

    export declare const IconMimo: IconType;

    export declare const IconMinorCrash: IconType;

    export declare const IconMintmark: IconType;

    export declare const IconMist: IconType;

    export declare const IconMms: IconType;

    export declare const IconMobiledataOff: IconType;

    export declare const IconMobileScreenShare: IconType;

    export declare const IconModeComment: IconType;

    export declare const IconMonitor: IconType;

    export declare const IconMonitorHeart: IconType;

    export declare const IconMonitoring: IconType;

    export declare const IconMood: IconType;

    export declare const IconMoodBad: IconType;

    export declare const IconMoreTime: IconType;

    export declare const IconMoreVert: IconType;

    export declare const IconMouse: IconType;

    export declare const IconMultilineChart: IconType;

    export declare const IconMultipleStop: IconType;

    export declare const IconNavigation: IconType;

    export declare const IconNearby: IconType;

    export declare const IconNearMe: IconType;

    export declare const IconNetworkLocked: IconType;

    export declare const IconNetworkManage: IconType;

    export declare const IconNetworkNode: IconType;

    export declare const IconNetworkPing: IconType;

    export declare const IconNetworkWifi1BarLocked: IconType;

    export declare const IconNetworkWifi2BarLocked: IconType;

    export declare const IconNetworkWifi3Bar: IconType;

    export declare const IconNetworkWifi3BarLocked: IconType;

    export declare const IconNetworkWifiLocked: IconType;

    export declare const IconNewLabel: IconType;

    export declare const IconNightlight: IconType;

    export declare const IconNoAccounts: IconType;

    export declare const IconNoiseAware: IconType;

    export declare const IconNoMeals: IconType;

    export declare const IconNoPhotography: IconType;

    export declare const IconNorth: IconType;

    export declare const IconNorthEast: IconType;

    export declare const IconNorthWest: IconType;

    export declare const IconNotificationAdd: IconType;

    export declare const IconNotificationImportant: IconType;

    export declare const IconNotifications: IconType;

    export declare const IconNotificationsActive: IconType;

    export declare const IconNotificationsOff: IconType;

    export declare const IconNotificationsUnread: IconType;

    export declare const IconNotListedLocation: IconType;

    export declare const IconOpenInBrowser: IconType;

    export declare const IconOpenInPhone: IconType;

    export declare const IconOutbox: IconType;

    export declare const IconPageview: IconType;

    export declare const IconPaid: IconType;

    export declare const IconPanTool: IconType;

    export declare const IconPanZoom: IconType;

    export declare const IconPark: IconType;

    export declare const IconPartlyCloudyDay: IconType;

    export declare const IconPartlyCloudyNight: IconType;

    export declare const IconPartyMode: IconType;

    export declare const IconPassword: IconType;

    export declare const IconPayments: IconType;

    export declare const IconPermDeviceInformation: IconType;

    export declare const IconPermScanWifi: IconType;

    export declare const IconPerson: IconType;

    export declare const IconPersonAddDisabled: IconType;

    export declare const IconPersonAlert: IconType;

    export declare const IconPersonCancel: IconType;

    export declare const IconPersonEdit: IconType;

    export declare const IconPersonOff: IconType;

    export declare const IconPersonPin: IconType;

    export declare const IconPersonPinCircle: IconType;

    export declare const IconPersonRemove: IconType;

    export declare const IconPersonSearch: IconType;

    export declare const IconPhoneAndroid: IconType;

    export declare const IconPhoneBluetoothSpeaker: IconType;

    export declare const IconPhoneCallback: IconType;

    export declare const IconPhoneEnabled: IconType;

    export declare const IconPhoneInTalk: IconType;

    export declare const IconPhoneIphone: IconType;

    export declare const IconPhonelinkErase: IconType;

    export declare const IconPhonelinkLock: IconType;

    export declare const IconPhonelinkRing: IconType;

    export declare const IconPhoneLocked: IconType;

    export declare const IconPhoneMissed: IconType;

    export declare const IconPhotoCamera: IconType;

    export declare const IconPhotoCameraBack: IconType;

    export declare const IconPhotoCameraFront: IconType;

    export declare const IconPhotoFrame: IconType;

    export declare const IconPhotoLibrary: IconType;

    export declare const IconPictureAsPdf: IconType;

    export declare const IconPinchZoomIn: IconType;

    export declare const IconPinchZoomOut: IconType;

    export declare const IconPinDrop: IconType;

    export declare const IconPlaceItem: IconType;

    export declare const IconPlannerReview: IconType;

    export declare const IconPlumbing: IconType;

    export declare const IconPottedPlant: IconType;

    export declare const IconPowerInput: IconType;

    export declare const IconPowerOff: IconType;

    export declare const IconPowerSettingsNew: IconType;

    export declare const IconPregnantWoman: IconType;

    export declare const IconPreview: IconType;

    export declare const IconPriceCheck: IconType;

    export declare const IconPrint: IconType;

    export declare const IconPrintAdd: IconType;

    export declare const IconPrintConnect: IconType;

    export declare const IconPrintError: IconType;

    export declare const IconPriority: IconType;

    export declare const IconProductionQuantityLimits: IconType;

    export declare const IconPublic: IconType;

    export declare const IconPublicOff: IconType;

    export declare const IconPulseAlert: IconType;

    export declare const IconQrCode: IconType;

    export declare const IconQrCode2: IconType;

    export declare const IconQrCodeScanner: IconType;

    export declare const IconQueryStats: IconType;

    export declare const IconQuestionMark: IconType;

    export declare const IconRadioButtonChecked: IconType;

    export declare const IconRadioButtonUnchecked: IconType;

    export declare const IconRainy: IconType;

    export declare const IconRainyHeavy: IconType;

    export declare const IconRainyLight: IconType;

    export declare const IconRainySnow: IconType;

    export declare const IconReceipt: IconType;

    export declare const IconReceiptLong: IconType;

    export declare const IconReceiptLongOff: IconType;

    export declare const IconRecordVoiceOver: IconType;

    export declare const IconRedeem: IconType;

    export declare const IconRefresh: IconType;

    export declare const IconRemove: IconType;

    export declare const IconRemoveRoad: IconType;

    export declare const IconRemoveShoppingCart: IconType;

    export declare const IconReply: IconType;

    export declare const IconResetTv: IconType;

    export declare const IconRestaurant: IconType;

    export declare const IconRocketLaunch: IconType;

    export declare const IconRotateLeft: IconType;

    export declare const IconRotateRight: IconType;

    export declare const IconRoute: IconType;

    export declare const IconRouter: IconType;

    export declare const IconRssFeed: IconType;

    export declare const IconRule: IconType;

    export declare const IconSave: IconType;

    export declare const IconSaveAs: IconType;

    export declare const IconSavings: IconType;

    export declare const IconScanner: IconType;

    export declare const IconScatterPlot: IconType;

    export declare const IconSchedule: IconType;

    export declare const IconScreenLockPortrait: IconType;

    export declare const IconScreenRotation: IconType;

    export declare const IconScreenRotationAlt: IconType;

    export declare const IconScreenSearchDesktop: IconType;

    export declare const IconScreenShare: IconType;

    export declare const IconScreenshot: IconType;

    export declare const IconSdCard: IconType;

    export declare const IconSdk: IconType;

    export declare const IconSearch: IconType;

    export declare const IconSearchHandsFree: IconType;

    export declare const IconSearchInsights: IconType;

    export declare const IconSecurityUpdateGood: IconType;

    export declare const IconSecurityUpdateWarning: IconType;

    export declare const IconSell: IconType;

    export declare const IconSend: IconType;

    export declare const IconSendToMobile: IconType;

    export declare const IconSentimentContent: IconType;

    export declare const IconSentimentExtremelyDissatisfied: IconType;

    export declare const IconSentimentFrustrated: IconType;

    export declare const IconSentimentNeutral: IconType;

    export declare const IconSentimentSad: IconType;

    export declare const IconSentimentVeryDissatisfied: IconType;

    export declare const IconSettings: IconType;

    export declare const IconSettingsInputAntenna: IconType;

    export declare const IconSettingsPhone: IconType;

    export declare const IconSettingsRemote: IconType;

    export declare const IconSevereCold: IconType;

    export declare const IconShare: IconType;

    export declare const IconShift: IconType;

    export declare const IconShiftLock: IconType;

    export declare const IconShop: IconType;

    export declare const IconShoppingBag: IconType;

    export declare const IconShoppingCart: IconType;

    export declare const IconShoppingCartCheckout: IconType;

    export declare const IconShoppingCartOff: IconType;

    export declare const IconShoppingmode: IconType;

    export declare const IconShutterSpeed: IconType;

    export declare const IconSignalCellular1Bar: IconType;

    export declare const IconSignalCellular2Bar: IconType;

    export declare const IconSignalCellular3Bar: IconType;

    export declare const IconSignalCellular4Bar: IconType;

    export declare const IconSignalCellularAlt: IconType;

    export declare const IconSignalCellularConnectedNoInternet0Bar: IconType;

    export declare const IconSignalCellularNodata: IconType;

    export declare const IconSignalCellularNull: IconType;

    export declare const IconSignalCellularOff: IconType;

    export declare const IconSignalWifi4Bar: IconType;

    export declare const IconSignalWifiBad: IconType;

    export declare const IconSignalWifiOff: IconType;

    export declare const IconSmartDisplay: IconType;

    export declare const IconSmartphone: IconType;

    export declare const IconSmartphoneCamera: IconType;

    export declare const IconSmartToy: IconType;

    export declare const IconSms: IconType;

    export declare const IconSnooze: IconType;

    export declare const IconSnowingHeavy: IconType;

    export declare const IconSos: IconType;

    export declare const IconSoupKitchen: IconType;

    export declare const IconSouth: IconType;

    export declare const IconSouthAmerica: IconType;

    export declare const IconSouthWest: IconType;

    export declare const IconSpeaker: IconType;

    export declare const IconSpeakerGroup: IconType;

    export declare const IconSpeakerPhone: IconType;

    export declare const IconSplitscreen: IconType;

    export declare const IconSplitscreenAdd: IconType;

    export declare const IconSplitscreenTop: IconType;

    export declare const IconSsidChart: IconType;

    export declare const IconStackedBarChart: IconType;

    export declare const IconStackedEmail: IconType;

    export declare const IconStackedLineChart: IconType;

    export declare const IconStadium: IconType;

    export declare const IconStar: IconType;

    export declare const IconStayCurrentPortrait: IconType;

    export declare const IconStore: IconType;

    export declare const IconStorefront: IconType;

    export declare const IconStraighten: IconType;

    export declare const IconStreetview: IconType;

    export declare const IconSwipe: IconType;

    export declare const IconSync: IconType;

    export declare const IconTablet: IconType;

    export declare const IconTabletAndroid: IconType;

    export declare const IconTabletCamera: IconType;

    export declare const IconTakeoutDining: IconType;

    export declare const IconTapAndPlay: IconType;

    export declare const IconTarget: IconType;

    export declare const IconTempleBuddhist: IconType;

    export declare const IconThumbUp: IconType;

    export declare const IconTimeAuto: IconType;

    export declare const IconTimeline: IconType;

    export declare const IconTimer: IconType;

    export declare const IconTimerOff: IconType;

    export declare const IconToday: IconType;

    export declare const IconTooltip: IconType;

    export declare const IconTour: IconType;

    export declare const IconTraffic: IconType;

    export declare const IconTranslate: IconType;

    export declare const IconTrendingDown: IconType;

    export declare const IconTrendingFlat: IconType;

    export declare const IconTrendingUp: IconType;

    export declare const IconTune: IconType;

    export declare const IconTv: IconType;

    export declare const IconTvRemote: IconType;

    export declare type IconType = FC<SVGAttributes<SVGElement>>;

    export declare const IconUnarchive: IconType;

    export declare const IconUnpublished: IconType;

    export declare const IconUnsubscribe: IconType;

    export declare const IconUpload: IconType;

    export declare const IconUploadFile: IconType;

    export declare const IconUsbOff: IconType;

    export declare const IconVerified: IconType;

    export declare const IconVibration: IconType;

    export declare const IconVideoChat: IconType;

    export declare const IconVideogameAsset: IconType;

    export declare const IconViewRealSize: IconType;

    export declare const IconVisibility: IconType;

    export declare const IconVisibilityOff: IconType;

    export declare const IconVoiceChat: IconType;

    export declare const IconVoicemail: IconType;

    export declare const IconVoiceOverOff: IconType;

    export declare const IconWarehouse: IconType;

    export declare const IconWarning: IconType;

    export declare const IconWatch: IconType;

    export declare const IconWatchOff: IconType;

    export declare const IconWaterfallChart: IconType;

    export declare const IconWaterVoc: IconType;

    export declare const IconWbIncandescent: IconType;

    export declare const IconWbSunny: IconType;

    export declare const IconWc: IconType;

    export declare const IconWeatherHail: IconType;

    export declare const IconWeatherMix: IconType;

    export declare const IconWeb: IconType;

    export declare const IconWebAsset: IconType;

    export declare const IconWeight: IconType;

    export declare const IconWest: IconType;

    export declare const IconWhereToVote: IconType;

    export declare const IconWidgets: IconType;

    export declare const IconWifi: IconType;

    export declare const IconWifiAdd: IconType;

    export declare const IconWifiCalling: IconType;

    export declare const IconWifiFind: IconType;

    export declare const IconWifiOff: IconType;

    export declare const IconWifiProxy: IconType;

    export declare const IconWifiTethering: IconType;

    export declare const IconWork: IconType;

    export declare const IconWorkAlert: IconType;

    export declare const IconWorkHistory: IconType;

    export declare const IconWrongLocation: IconType;

    export declare const IconWysiwyg: IconType;

    export declare const IconZoomInMap: IconType;

    export declare const IconZoomOut: IconType;

    export declare const IconZoomOutMap: IconType;

    /**
     * Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
     * @param {ImageProps} props
     * @returns {ImageType}
     */
    declare const Image_2: ImageType;
    export { Image_2 as Image }

    export declare type ImageProp = Partial<{
        /**
         * Images in Bootstrap are made responsive with *.img-fluid*. This applies *max-width: 100%;* and *height: auto;* to the image so that it scales with the parent width.
         * @param {boolean} imgFluid boolean
         */
        imgFluid: Responsive<boolean>;
        /**
         * In addition to our border-radius utilities, you can use *.img-thumbnail* to give an image a rounded 1px border appearance.
         * @param {boolean} imgThumbnail boolean
         */
        imgThumbnail: Responsive<boolean>;
        /**
         * Use the object fit utilities to modify how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.
         * @param {string} objectFit "contain", "cover", "fill", "scale", "none"
         */
        objectFit: Responsive<"contain" | "cover" | "fill" | "scale" | "none">;
        /**
         * The CSS object-position property is used to specify how an *<img>* or *<video>* should be positioned within its container.
         * @param {string} objectPosition CSS.Property.ObjectPosition
         */
        objectPosition: Responsive<CSS_2.Property.ObjectPosition>;
    }>;

    declare type ImageProps = ImageProp & ImgHTMLAttributes<Element> & Omit<SaigonProps<"img", HTMLImageElement>, keyof ImageProp>;

    declare type ImageType = ForwardRefComponent<HTMLImageElement, ImageProps>;

    export declare const InputGroup: InputGroupType & {
        Text: InputGroupTextType;
    };

    export declare type InputGroupProp = Partial<{
        /**
         * You may also choose from small and large custom selects to match our similarly sized text inputs.
         *
         * @default undefined
         */
        size: "sm" | "lg";
        /**
         * Apply validation effect depends on the classnames of the directly child `input`.
         *
         * @default false
         */
        hasValidation: boolean;
        /**
         * Set to `true` to make add-on background color will be the same as input background color
         */
        noBackground: boolean;
    }>;

    declare type InputGroupProps = InputGroupProp & Omit<SaigonProps<"div", HTMLElement>, keyof InputGroupProp>;

    declare type InputGroupTextProps = SaigonProps<"span", HTMLElement>;

    declare type InputGroupTextType = ForwardRefComponent<HTMLElement, InputGroupTextProps>;

    declare type InputGroupType = ForwardRefComponent<HTMLElement, InputGroupProps>;

    export declare type LayoutProps = Partial<{
        /**
         * Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.
         * @param {string} display "inline", "inline-block", "block", "grid", "inline-grid", "table", "table-row", "table-cell", "flex", "inline-flex", "none", (CSS.Property.Display & Record<never, never>)
         */
        display: Responsive<"inline" | "inline-block" | "block" | "grid" | "inline-grid" | "table" | "table-row" | "table-cell" | "flex" | "inline-flex" | "none" | (CSS_2.Property.Display & Record<never, never>)>;
        /**
         * Change the display value of elements when printing with our print display utility classes. Includes support for the same display values as our responsive .d-* utilities.
         * @param {string} displayPrint "inline", "inline-block", "block", "grid", "inline-grid", "table", "table-row", "table-cell", "flex", "inline-flex", "none"
         */
        displayPrint: Responsive<"inline" | "inline-block" | "block" | "grid" | "inline-grid" | "table" | "table-row" | "table-cell" | "flex" | "inline-flex" | "none">;
        /**
         * Set css `height: ` with percentage.
         * @param {string} height "25", "50", "75", "100", "auto", (CSS.Property.Height & Record<never, never>), "none"
         */
        height: Responsive<"25" | "50" | "75" | "100" | "auto" | (CSS_2.Property.Height & Record<never, never>) | "none">;
        /**
         * Use .hstack for horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use .gap-* utilities to add space between items.
         * @param {boolean} hstack boolean
         */
        hstack: Responsive<boolean>;
        /**
         * Set css `max-height: ` percentage.
         * @param {string} maxHeight "25", "50", "75", "100", "auto", (CSS.Property.MaxHeight & Record<never, never>), "none"
         */
        maxHeight: Responsive<"25" | "50" | "75" | "100" | "auto" | (CSS_2.Property.MaxHeight & Record<never, never>) | "none">;
        /**
         * Set css `max-width: ` percentage.
         * @param {string} maxWidth "25", "50", "75", "100", "auto", (CSS.Property.MaxWidth & Record<never, never>), "none"
         */
        maxWidth: Responsive<"25" | "50" | "75" | "100" | "auto" | (CSS_2.Property.MaxWidth & Record<never, never>) | "none">;
        /**
         * Set css `min-height: ` percentage.
         * @param {string} minHeight "25", "50", "75", "100", "auto", (CSS.Property.MinHeight & Record<never, never>), "none"
         */
        minHeight: Responsive<"25" | "50" | "75" | "100" | "auto" | (CSS_2.Property.MinHeight & Record<never, never>) | "none">;
        /**
         * Set css `min-width: ` percentage.
         * @param {string} minWidth "25", "50", "75", "100", "auto", (CSS.Property.MinWidth & Record<never, never>), "none"
         */
        minWidth: Responsive<"25" | "50" | "75" | "100" | "auto" | (CSS_2.Property.MinWidth & Record<never, never>) | "none">;
        /**
         * Use these shorthand utilities for quickly configuring how content overflows an element.
         * @param {string} overflow "auto", "hidden", "visible", "scroll", (CSS.Property.Overflow & Record<never, never>), "none"
         */
        overflow: Responsive<"auto" | "hidden" | "visible" | "scroll" | (CSS_2.Property.Overflow & Record<never, never>) | "none">;
        /**
         * Adjust the overflow-x property to affect the overflow of content horizontally.
         * @param {string} overflowX "auto", "hidden", "visible", "scroll", (CSS.Property.OverflowX & Record<never, never>), "none"
         */
        overflowX: Responsive<"auto" | "hidden" | "visible" | "scroll" | (CSS_2.Property.OverflowX & Record<never, never>) | "none">;
        /**
         * Adjust the overflow-y property to affect the overflow of content vertically.
         * @param {string} overflowY "auto", "hidden", "visible", "scroll", (CSS.Property.OverflowY & Record<never, never>), "none"
         */
        overflowY: Responsive<"auto" | "hidden" | "visible" | "scroll" | (CSS_2.Property.OverflowY & Record<never, never>) | "none">;
        /**
         * Control the visibility of elements, without modifying their display, with visibility utilities.
         * @param {string} visibility (CSS.Property.Visibility & Record<never, never>), "none"
         */
        visibility: Responsive<(CSS_2.Property.Visibility & Record<never, never>) | "none">;
        /**
         * Use .vstack to create vertical layouts. Stacked items are full-width by default. Use .gap-* utilities to add space between items.
         * @param {boolean} hstack boolean
         */
        vstack: Responsive<boolean>;
        /**
         * Set css `width: ` with percentage.
         * @param {string} width "25", "50", "75", "100", "auto", (CSS.Property.Width & Record<never, never>), "none"
         */
        width: Responsive<"25" | "50" | "75" | "100" | "auto" | (CSS_2.Property.Width & Record<never, never>) | "none">;
        /**
         * Use our low-level z-index utilities to quickly change the stack level of an element or component.
         * @param {string} zIndex "n1", "0", "1", "2", "3", (CSS.Property.ZIndex & Record<never, never>), "none"
         */
        zIndex: Responsive<"n1" | "0" | "1" | "2" | "3" | (CSS_2.Property.ZIndex & Record<never, never>) | "none">;
    }>;

    export declare const ListGroup: ListGroupType & {
        Item: ListGroupItemType;
    };

    export declare type ListGroupItemProp = Partial<{
        /**
         * @default li
         */
        as: "a" | "li";
        /**
         * Use contextual classes to style list items with a stateful background and color.
         *
         * @default undefined
         */
        variant: ThemeColor;
        /**
         * Add `.active` to a `.list-group-item` to indicate the current active selection.
         *
         * @default false
         */
        active: boolean;
        /**
         * Contextual classes also work with .list-group-item-action for <a> and <button> elements. Note the addition of the hover styles here not present in the previous example. Also supported is the .active state; apply it to indicate an active selection on a contextual list group item.
         *
         * @default false
         */
        action: boolean;
        /**
         * Add `.disabled` to a `.list-group-item` to make it appear disabled.
         *
         * @default false
         */
        disabled: boolean;
        /**
         * Want equal-width list group items when horizontal? Add .flex-fill to each list group item.
         *
         * @default false
         */
        flexFill: boolean;
        /**
         * When rendering list items a links, you can give href attribute the value.
         * @default undefined
         */
        href: string;
    }>;

    declare type ListGroupItemProps = ListGroupItemProp & Omit<SaigonProps<"li" | "a", HTMLElement>, keyof ListGroupItemProp>;

    declare type ListGroupItemType = ForwardRefComponent<HTMLElement, ListGroupItemProps>;

    export declare type ListGroupProp = Partial<{
        /**
         * Add .list-group-flush to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).
         * @default false
         */
        flush: boolean;
        /**
         * Add the .list-group-numbered modifier class (and optionally use an <ol> element) to opt into numbered list group items. Numbers are generated via CSS (as opposed to a <ol>s default browser styling) for better placement inside list group items and to allow for better customization.
         *
         * Numbers are generated by counter-reset on the <ol>, and then styled and placed with a ::before pseudo-element on the <li> with counter-increment and content.
         *
         * @default false
         */
        numbered: boolean;
        /**
         * Add .list-group-horizontal to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant .list-group-horizontal-{sm|md|lg|xl|xxl} to make a list group horizontal starting at that breakpoint’s min-width.
         *
         * **Currently horizontal list groups cannot be combined with flush list groups**.
         *
         * @default false
         */
        horizontal: boolean;
    }>;

    declare type ListGroupProps = ListGroupProp & Omit<SaigonProps<"ul", HTMLElement>, keyof ListGroupProp>;

    declare type ListGroupType = ForwardRefComponent<HTMLElement, ListGroupProps>;

    export declare const Modal: ModalType & {
        Dialog: ModalBodyType;
        Content: ModalContentType;
        Header: ModalHeaderType;
        Title: ModalTitleType;
        Body: ModalBodyType;
        Footer: ModalFooterType;
        CloseButton: ModalCloseButtonType;
    };

    declare type ModalBodyProps = SaigonProps<"div", HTMLElement>;

    declare type ModalBodyType = ForwardRefComponent<HTMLElement, ModalBodyProps>;

    declare type ModalCloseButtonProps = {
        btnCloseWhite?: boolean;
    } & SaigonProps<"button", HTMLElement>;

    declare type ModalCloseButtonType = ForwardRefComponent<HTMLElement, ModalCloseButtonProps>;

    declare type ModalContentProps = SaigonProps<"div", HTMLElement>;

    declare type ModalContentType = ForwardRefComponent<HTMLElement, ModalContentProps>;

    declare type ModalFooterProps = SaigonProps<"div", HTMLElement>;

    declare type ModalFooterType = ForwardRefComponent<HTMLElement, ModalFooterProps>;

    declare type ModalHeaderProps = SaigonProps<"div", HTMLElement>;

    declare type ModalHeaderType = ForwardRefComponent<HTMLElement, ModalHeaderProps>;

    export declare type ModalProp = Partial<{
        /**
         * Modals have three optional sizes, available via modifier classes to be placed on a `.modal-dialog`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
         *
         * | Size | Class | Modal max-width
         * | -------- | ------- | -------
         * | Small | .modal-sm | 300px
         * | Default | None | 500px
         * | Large | .modal-lg | 800px
         * | Extra large | .modal-xl | 1140px
         *
         * @default undefined
         */
        size: "sm" | "lg" | "xl";
        /**
         * Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a `.modal-dialog`.
         */
        fullscreen: boolean | "sm-down" | "md-down" | "lg-down" | "xl-down" | "xxl-down";
        /**
         * When backdrop is set to static, the modal will not close when clicking outside of it. Click the button below to try it.
         *
         * @default false
         */
        staticBackdrop: boolean;
        /**
         * When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.
         *
         * @default false
         */
        scrollable: boolean;
        /**
         * Add .modal-dialog-centered to .modal-dialog to vertically center the modal.
         *
         * @default false
         */
        verticalCentered: boolean;
        /**
         * Apply a CSS fade transition to the toast.
         *
         * @default 'fade'
         */
        animation: AnimationType;
    }>;

    declare type ModalProps = ModalProp & Omit<SaigonProps<"div", HTMLElement>, keyof ModalProp>;

    declare type ModalRef = {
        domRef: React.RefObject<HTMLElement>;
        closed: () => boolean;
        unmounted: () => boolean;
        close: () => void;
    };

    declare type ModalTitleProps = SaigonProps<"h5", HTMLElement>;

    declare type ModalTitleType = ForwardRefComponent<HTMLElement, ModalTitleProps>;

    declare type ModalType = ForwardRefComponent<ModalRef, ModalProps>;

    export declare const Nav: NavType & {
        Item: NavItemType;
        Link: NavLinkType;
        Dropdown: DropdownType;
        DropdownToggle: DropdownToggleType;
        DropdownMenu: DropdownMenuType;
        DropdownItem: DropdownItemType;
        DropdownDivider: DropdownDividerType;
    };

    export declare const Navbar: NavbarType & {
        Brand: NavbarBrandType;
        Toggler: NavbarTogglerType;
        TogglerIcon: NavbarTogglerIconType;
        Collapse: NavbarCollapseType;
        Nav: NavbarNavType;
        Item: NavbarItemType;
        Link: NavbarLinkType;
        Text: NavbarTextType;
        FormControl: FormControlWithIconType;
        Dropdown: DropdownType;
        DropdownToggle: DropdownToggleType;
        DropdownMenu: DropdownMenuType;
        DropdownItem: DropdownItemType;
        DropdownDivider: DropdownDividerType;
    };

    export declare type NavbarBrandProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & SaigonProps<"a", HTMLElement>;

    export declare type NavbarBrandType = ForwardRefComponent<HTMLElement, NavbarBrandProps>;

    export declare type NavbarCollapseProps = SaigonProps<"div", HTMLElement>;

    export declare type NavbarCollapseType = ForwardRefComponent<HTMLElement, NavbarCollapseProps>;

    export declare type NavbarItemProps = SaigonProps<"li", HTMLElement>;

    export declare type NavbarItemType = ForwardRefComponent<HTMLElement, NavbarItemProps>;

    export declare type NavbarLinkProp = Partial<{
        /**
         * set to active state
         *
         * @default false
         */
        active: boolean;
        /**
         * set to disabled state
         *
         * @default false
         */
        disabled: boolean;
    }>;

    export declare type NavbarLinkProps = NavbarLinkProp & React.AnchorHTMLAttributes<HTMLAnchorElement> & Omit<SaigonProps<"a", HTMLElement>, keyof NavbarLinkProp>;

    export declare type NavbarLinkType = ForwardRefComponent<HTMLElement, NavbarLinkProps>;

    export declare type NavbarNavProps = SaigonProps<"ul", HTMLElement>;

    export declare type NavbarNavType = ForwardRefComponent<HTMLElement, NavbarNavProps>;

    export declare type NavbarProp = Partial<{
        /**
         * Navbars require a wrapping .navbar with .navbar-expand{-sm|-md|-lg|-xl|-xxl} for responsive collapsing and color scheme classes.
         *
         * @default undefined
         */
        expand: "sm" | "md" | "lg" | "xl" | "xxl";
        /**
         * Add .navbar-nav-scroll to a .navbar-nav (or other navbar sub-component) to enable vertical scrolling within the toggleable contents of a collapsed navbar
         *
         * @default false
         */
        scroll: boolean;
    }>;

    export declare type NavbarProps = NavbarProp & Omit<SaigonProps<"nav", HTMLElement>, keyof NavbarProp>;

    export declare type NavbarTextProps = SaigonProps<"span", HTMLElement>;

    export declare type NavbarTextType = ForwardRefComponent<HTMLElement, NavbarTextProps>;

    export declare type NavbarTogglerIconProps = SaigonProps<"span", HTMLElement>;

    export declare type NavbarTogglerIconType = ForwardRefComponent<HTMLElement, NavbarTogglerIconProps>;

    export declare type NavbarTogglerProps = SaigonProps<"button", HTMLElement>;

    export declare type NavbarTogglerType = ForwardRefComponent<HTMLElement, NavbarTogglerProps>;

    export declare type NavbarType = ForwardRefComponent<HTMLElement, NavbarProps>;

    declare type NavItemProps = SaigonProps<"ul", HTMLElement>;

    declare type NavItemType = ForwardRefComponent<HTMLElement, NavItemProps>;

    export declare type NavLinkProp = Partial<{
        /**
         * set to active state
         *
         * @default false
         */
        active: boolean;
        /**
         * set to disabled state
         *
         * @default false
         */
        disabled: boolean;
    }>;

    declare type NavLinkProps = NavLinkProp & React.AnchorHTMLAttributes<HTMLAnchorElement> & Omit<SaigonProps<"a", HTMLElement>, keyof NavLinkProp>;

    declare type NavLinkType = ForwardRefComponent<HTMLElement, NavLinkProps>;

    export declare type NavProp = Partial<{
        /**
         * Stack your navigation by changing the flex item direction with the .flex-column utility
         *
         * @default false
         */
        vertical: Responsive<boolean>;
        /**
         * Adding the .nav-tabs class to generate a tabbed interface
         *
         * @default false
         */
        tabs: Responsive<boolean>;
        /**
         * Adding the .nav-pills class to generate a pills interface
         *
         * @default false
         */
        pills: Responsive<boolean>;
        /**
         * Adding the .nav-underline class to generate a underline interface
         *
         * @default false
         */
        underline: Responsive<boolean>;
        /**
         * Force your .nav’s contents to extend the full available width with one of two modifier classes
         *
         * @default false
         */
        fill: boolean;
        /**
         * For equal-width elements, use .nav-justified. All horizontal space will be occupied by nav links, every nav item will be the same width.
         *
         * @default false
         */
        justified: boolean;
    }>;

    declare type NavProps = NavProp & Omit<SaigonProps<"nav", HTMLElement>, keyof NavProp>;

    declare type NavType = ForwardRefComponent<HTMLElement, NavProps>;

    export declare const Offcanvas: OffcanvasType & {
        Header: OffcanvasHeaderType;
        Title: OffcanvasTitleType;
        Body: OffcanvasBodyType;
        CloseButton: OffcanvasCloseButtonType;
    };

    declare type OffcanvasBodyProps = SaigonProps<"div", HTMLElement>;

    declare type OffcanvasBodyType = ForwardRefComponent<HTMLElement, OffcanvasBodyProps>;

    declare type OffcanvasCloseButtonProps = CloseButtonProp & Omit<SaigonProps<"button", HTMLElement>, keyof CloseButtonProp>;

    declare type OffcanvasCloseButtonType = ForwardRefComponent<HTMLElement, OffcanvasCloseButtonProps>;

    declare type OffcanvasHeaderProps = SaigonProps<"div", HTMLElement>;

    declare type OffcanvasHeaderType = ForwardRefComponent<HTMLElement, OffcanvasHeaderProps>;

    export declare type OffcanvasProp = Partial<{
        /**
         * The offcanvas will show itself.
         *
         * @default false
         */
        show: boolean;
        /**
         * When backdrop is set to static, the offcanvas will not close when clicking outside of it.
         *
         * @default true
         */
        backdrop: "static" | boolean;
        /**
         * Closes the offcanvas when escape key is pressed.
         *
         * @default true
         */
        keyboard: boolean;
        /**
         * Scrolling the <body> element is disabled when an offcanvas and its backdrop are visible
         *
         * @default false
         */
        bodyScroll: boolean;
        /**
         * There’s no default placement for offcanvas components, so you must add one of the modifier classes below
         *
         * @default start
         */
        placement: "start" | "end" | "top" | "bottom";
        /**
         * When true The offcanvas will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. Generally this should never be set to false as it makes the offcanvas less accessible to assistive technologies, like screen-readers.
         *
         * @default true
         */
        autoFocus: boolean;
        /**
         * When true The offcanvas will prevent focus from leaving the offcanvas while open. Consider leaving the default value here, as it is necessary to make the offcanvas work well with assistive technologies, such as screen readers.
         *
         * @default true
         */
        enforceFocus: boolean;
        /**
         * When true The offcanvas will restore focus to previously focused element once offcanvas is hidden
         *
         * @default true
         */
        restoreFocus: boolean;
        /**
         * A callback fired when the offcanvas is opening.
         *
         * @default undefined
         */
        onShow: () => void;
        /**
         * A callback fired when the header closeButton or backdrop is clicked. Required if either are specified.
         *
         * @default undefined
         */
        onHide: () => void;
        /**
         * A callback fired when the offcanvas after showing or hiding.
         *
         * @param show true when showing, false when hiding
         * @default undefined
         */
        onDisplay: (show: boolean) => void;
        /**
         * A callback fired when the escape key, if specified in keyboard, is pressed.
         *
         * @default undefined
         */
        onEscapeKeyDown: () => void;
        /**
         * Callback fired before the offcanvas transitions in
         *
         * @default undefined
         */
        onEnter: () => void;
        /**
         * Callback fired as the offcanvas begins to transition in
         *
         * @default undefined
         */
        onEntering: () => void;
        /**
         * Callback fired after the offcanvas finishes transitioning in
         *
         * @default undefined
         */
        onEntered: () => void;
        /**
         * Callback fired right before the offcanvas transitions out
         *
         * @default undefined
         */
        onExit: () => void;
        /**
         * Callback fired as the offcanvas begins to transition out
         *
         * @default undefined
         */
        onExiting: () => void;
        /**
         * Callback fired after the offcanvas finishes transitioning out
         *
         * @default undefined
         */
        onExited: () => void;
    }>;

    declare type OffcanvasProps = OffcanvasProp & Omit<SaigonProps<"div", HTMLElement>, keyof OffcanvasProp>;

    declare type OffcanvasRef = {
        domRef: React.Ref<HTMLElement>;
        show: () => void;
        hide: () => void;
        toggle: () => void;
        isShowed: () => boolean;
        unmounted: () => boolean;
    };

    declare type OffcanvasTitleProps = SaigonProps<"div", HTMLElement>;

    declare type OffcanvasTitleType = ForwardRefComponent<HTMLElement, OffcanvasTitleProps>;

    declare type OffcanvasType = ForwardRefComponent<OffcanvasRef, OffcanvasProps>;

    export declare type OtherProps = Partial<{
        /**
         * Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handling video or slideshow embeds based on the width of the parent.
         * @param {string} aspectRatio "1x1", "4x3", "16x9", "21x9", "none"
         */
        aspectRatio: Responsive<"1x1" | "4x3" | "16x9" | "21x9" | "none">;
        /**
         * Override default `list-style` style with custom styles.
         * @param {string} listStyle "unstyled", "inline", "inline-item", (CSS.Property.ListStyle & Record<never, never>), "none"
         */
        listStyle: Responsive<"unstyled" | "inline" | "inline-item" | (CSS_2.Property.ListStyle & Record<never, never>) | "none">;
        /**
         * The opacity property sets the opacity level for an element. The opacity level describes the transparency level, where 1 is not transparent at all, .5 is 50% visible, and 0 is completely transparent.
         * @param {string} opacity "0", "25", "50", "75", "100", (CSS.Property.Opacity & Record<never, never>), "none"
         */
        opacity: Responsive<"0" | "25" | "50" | "75" | "100" | (CSS_2.Property.Opacity & Record<never, never>) | "none">;
        /**
         * Using Bootstrap `.pe-none` and `.pe-auto` classes to prevent or add element interactions.
         * @param {string} pointerEvents "none", "auto"
         */
        pointerEvents: Responsive<"none" | "auto">;
        /**
         * The `scrollbar-color` property specifies the color of the scrollbar track (background) and thumb (the scroller).
         * @param {CSS.Property.ScrollbarColor} scrollbarColor CSS.Property.ScrollbarColor
         */
        scrollbarColor: Responsive<CSS_2.Property.ScrollbarColor>;
        /**
         * The `CSS.Property.ScrollBehavior` property specifies whether to smoothly animate the scroll position, instead of a straight jump, when the user clicks on a link within a scrollable box.
         * @param {CSS.Property.ScrollBehavior} scrollBehavior CSS.Property.ScrollBehavior
         */
        scrollBehavior: Responsive<CSS_2.Property.ScrollBehavior>;
        /**
         * The `scroll-margin` property specifies the distance between the snap position and the container.
         *
         * This means that when you stop scrolling, the scrolling will quickly adjust and stop at a specified distance between the snap position and the container.
         * @param {CSS.Property.ScrollMargin} scrollMargin CSS.Property.ScrollMargin
         */
        scrollMargin: Responsive<CSS_2.Property.ScrollMargin>;
        /**
         * The `scroll-padding` property specifies the distance from the container to the snap position of child elements.
         *
         * This means that when you stop scrolling, the scrolling will quickly adjust and stop at a specified distance from the container to the snap position of the child element in focus.
         * @param {CSS.Property.ScrollPadding} scrollPadding CSS.Property.ScrollPadding
         */
        scrollPadding: Responsive<CSS_2.Property.ScrollPadding>;
        /**
         * Add or remove shadows to elements with box-shadow utilities.
         * @param {string} shadow boolean, "sm", "lg", "none", (CSS.Property.BoxShadow & Record<never, never>), "none"
         */
        shadow: Responsive<boolean | "sm" | "lg" | "none" | (CSS_2.Property.BoxShadow & Record<never, never>) | "none">;
        /**
         * The `transition` property is a shorthand property for: `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`
         * @param {CSS.Property.Transition} transition CSS.Property.Transition
         */
        transition: Responsive<CSS_2.Property.Transition>;
        /**
         * Change the way in which the content is selected when the user interacts with it.
         * @param {string} userSelect "all", "auto", "none", (CSS.Property.UserSelect & Record<never, never>)
         */
        userSelect: Responsive<"all" | "auto" | "none" | (CSS_2.Property.UserSelect & Record<never, never>)>;
    }>;

    export declare const Pagination: PaginationType & {
        Item: PaginationItemType;
        Link: PaginationLinkType;
    };

    export declare type PaginationItemProp = Partial<{
        /**
         * Set to active state
         *
         * @default false
         */
        active: boolean;
        /**
         * Set to disable state
         *
         * @default false
         */
        disabled: boolean;
    }>;

    declare type PaginationItemProps = PaginationItemProp & Omit<SaigonProps<"li", HTMLElement>, keyof PaginationItemProp>;

    declare type PaginationItemType = ForwardRefComponent<HTMLElement, PaginationItemProps>;

    declare type PaginationLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & SaigonProps<"a", HTMLElement>;

    declare type PaginationLinkType = ForwardRefComponent<HTMLElement, PaginationLinkProps>;

    export declare type PaginationProp = Partial<{
        /**
         * Fancy larger or smaller pagination? Add .pagination-lg or .pagination-sm for additional sizes.
         *
         * @default undefined
         */
        size: "sm" | "lg";
    }>;

    declare type PaginationProps = PaginationProp & Omit<SaigonProps<"ul", HTMLElement>, keyof PaginationProp>;

    declare type PaginationType = ForwardRefComponent<HTMLElement, PaginationProps>;

    export declare const Placeholder: PlaceholderType & {
        Span: PlaceholderSpanType;
        Circle: PlaceholderCircleType;
        Button: PlaceholderButtonType;
    };

    export declare type PlaceholderButtonProp = Partial<{
        /**
         * Bootstrap includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.
         * @param {ThemeColor | 'link'} primary
         */
        variant: ThemeColor | "link";
        /**
         * The same as Button size
         *
         * @default md
         */
        size: "lg" | "sm";
    }>;

    declare type PlaceholderButtonProps = PlaceholderButtonProp & Omit<SaigonProps<typeof Button, HTMLElement>, keyof PlaceholderButtonProp>;

    declare type PlaceholderButtonType = SaigonComponent<PlaceholderButtonProps>;

    declare type PlaceholderCircleProps = SaigonProps<"div", HTMLElement>;

    declare type PlaceholderCircleType = SaigonComponent<PlaceholderCircleProps>;

    export declare type PlaceholderProp = Partial<{
        /**
         * Effect of the skeleton loader
         *
         * @default glow
         */
        animation: "glow" | "wave" | "bouncing";
    }>;

    declare type PlaceholderProps = PlaceholderProp & Omit<SaigonProps<"div", HTMLElement>, keyof PlaceholderProp>;

    export declare type PlaceholderSpanProp = Partial<{
        /**
         * Effect of the skeleton loader
         *
         * @default glow
         */
        /**
         * Apply property on viewports sized XS (extra small) or wider.
         * @NOTE: xs = 0px
         */
        col: Responsive<"auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
        /**
         * For offsetting grid columns you can set an offset value or for a more general layout.
         */
        offset: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
        /**
         * The size of .placeholders are based on the typographic style of the parent element
         *
         * @default undefined equivalent to `md`
         */
        size: "xs" | "sm" | "lg";
        /**
         * Set skeleton background color.
         *
         * @default undefined
         */
        variant: ThemeColor;
    }>;

    declare type PlaceholderSpanProps = PlaceholderSpanProp & Omit<SaigonProps<"span", HTMLElement>, keyof PlaceholderSpanProp>;

    declare type PlaceholderSpanType = SaigonComponent<PlaceholderSpanProps>;

    declare type PlaceholderType = ForwardRefComponent<HTMLElement, PlaceholderProps>;

    export declare type PlacementType = "top-middle" | "top-start" | "top-end" | "right-middle" | "right-start" | "right-end" | "bottom-middle" | "bottom-start" | "bottom-end" | "left-middle" | "left-start" | "left-end";

    export declare const Popover: PopoverType & {
        Toggle: PopoverToggleType;
        Modal: PopoverModalType;
        Title: PopoverTitleType;
        Body: PopoverBodyType;
        CloseButton: PopoverCloseButtonType;
    };

    declare type PopoverBodyProps = SaigonProps<"div", HTMLElement>;

    declare type PopoverBodyType = ForwardRefComponent<HTMLElement, PopoverBodyProps>;

    declare type PopoverCloseButtonProps = SaigonProps<"button", HTMLElement>;

    declare type PopoverCloseButtonType = ForwardRefComponent<HTMLElement, PopoverCloseButtonProps>;

    declare type PopoverModalProps = SaigonProps<"div", HTMLElement>;

    declare type PopoverModalType = SaigonComponent<PopoverModalProps>;

    export declare type PopoverProp = Partial<{
        /**
         * Popovers title
         */
        title: string | React.ReactElement;
        /**
         * Popovers content
         */
        content: string | React.ReactElement;
        /**
         * Popovers display side
         * @default top
         */
        side: "top" | "right" | "bottom" | "left";
        /**
         * Popovers display alignment
         *
         * @default start
         */
        alignment: "start" | "end" | "middle";
        /**
         * Short syntax for `side`-`alignment` props
         *
         * @default placement
         */
        placement: PlacementType;
        /**
         * This is useful when you don’t know which placement will be best for the floating element, or don’t want to have to explicitly specify it.
         * Note: Will ignore `side` and `alignment` props
         *
         * @default false
         */
        autoPlacement: boolean;
        /**
         * Closes the popover when a dismissal is requested
         *
         * @default true
         */
        autoDismiss: boolean;
        /**
         * Closes the popover when a dismissal is requested
         *
         * @default true
         */
        hover: boolean;
        /**
         * CSS .position strategy
         *
         * @default 'absolute'
         */
        strategy: "fixed" | "absolute";
        /**
         * Translates the floating element along the specified axes.
         *
         * @OffsetOptions = number | { mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null }
         * @description More info at: https://floating-ui.com/docs/offset
         */
        offset: OffsetOptions;
        /**
         * Animate the popover on show and hide
         * @default 'fade'
         */
        animation: AnimationType;
        /**
         * Callback fired when the open/close the popover
         * @param open true when open
         * @param event original event object
         * @returns
         */
        onOpenChange: (open: boolean, event?: object) => void;
    }>;

    declare type PopoverProps = PopoverProp & Omit<SaigonProps<"div", HTMLElement>, keyof PopoverProp>;

    export declare type PopoverRef = HTMLElement & {
        show: (relativeDom: HTMLElement) => void;
        close: () => void;
    };

    declare type PopoverTitleProps = SaigonProps<"h3", HTMLElement>;

    declare type PopoverTitleType = ForwardRefComponent<HTMLElement, PopoverTitleProps>;

    declare type PopoverToggleProps = Omit<ButtonProp, "as"> & SaigonProps<"button", HTMLElement>;

    declare type PopoverToggleType = SaigonComponent<PopoverToggleProps>;

    declare type PopoverType = ForwardRefComponent<PopoverRef, PopoverProps>;

    export declare type PositionProps = Partial<{
        /**
         * Setting `bottom: *` css property.
         * @param {string} bottom "0", "50", "100", (CSS.Property.Bottom & Record<never, never>), "none"
         */
        bottom: Responsive<"0" | "50" | "100" | (CSS_2.Property.Bottom & Record<never, never>) | "none">;
        /**
         * Setting `right: *` css property.
         * @param {string} end "0", "50", "100", (CSS.Property.Right & Record<never, never>), "none"
         */
        end: Responsive<"0" | "50" | "100" | (CSS_2.Property.Right & Record<never, never>) | "none">;
        /**
         * Position an element at the top of the viewport, or at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.
         * @param {string} fixed "top", "bottom", "none"
         */
        fixed: Responsive<"top" | "bottom" | "none">;
        /**
         * Toggle floats on any element, across any breakpoint, using our responsive float utilities.
         * @param {string} float "start", "end", "none"
         */
        float: Responsive<"start" | "end" | "none">;
        /**
         * The `inset` property sets the distance between an element and the parent element.
         *
         * **Note:** For this property to take effect it has to have the position property specified.
         * @param {CSS.Property.Inset} inset CSS.Property.Inset
         */
        inset: Responsive<CSS_2.Property.Inset>;
        /**
         * The `inset-block` property sets the distance between an element and the parent element in the block direction.
         *
         * **Note:** For this property to take effect it has to have the position property specified.
         * @param {CSS.Property.InsetBlock} insetBlock CSS.Property.InsetBlock
         */
        insetBlock: Responsive<CSS_2.Property.InsetBlock>;
        /**
         * The `inset-inline` property sets the distance between an element and the parent element in the inline direction.
         *
         * **Note:** For this property to take effect it has to have the position property specified.
         * @param {CSS.Property.InsetInline} insetInline CSS.Property.InsetInline
         */
        insetInline: Responsive<CSS_2.Property.InsetInline>;
        /**
         * Setting `left: *` css property.
         * @param {string} start "0", "50", "100", (CSS.Property.Left & Record<never, never>), "none"
         */
        left: Responsive<"0" | "50" | "100" | (CSS_2.Property.Left & Record<never, never>) | "none">;
        /**
         * Use these helpers for quickly configuring the position of an element.
         *
         * **Fixed top** Position an element at the top of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.
         *
         * **Fixed bottom** Position an element at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.
         *
         * **Sticky top** Position an element at the top of the viewport, from edge to edge, but only after you scroll past it.
         *
         * **Sticky bottom** Position an element at the bottom of the viewport, from edge to edge, but only after you scroll past it.
         *
         * @param {string} position "static", "relative", "absolute", "fixed", "sticky", "none"
         */
        position: Responsive<"static" | "relative" | "absolute" | "fixed" | "sticky" | "none">;
        /**
         * Setting `right: *` css property.
         * @param {string} end "0", "50", "100", (CSS.Property.Right & Record<never, never>), "none"
         */
        right: Responsive<"0" | "50" | "100" | (CSS_2.Property.Right & Record<never, never>) | "none">;
        /**
         * The `rotate` property defines a value for how much an element is rotated clockwise around z-axis. To rotate an element around x-axis or y-axis or in other ways, this must be defined.
         * @param {CSS.Property.Rotate} rotate CSS.Property.Rotate
         */
        rotate: Responsive<CSS_2.Property.Rotate>;
        /**
         * The `scale` property defines values for how much an element is scaled in x- and y-directions. You can also define how much an element is scaled in z-direction.
         * @param {CSS.Property.Scale} scale CSS.Property.Scale
         */
        scale: Responsive<CSS_2.Property.Scale>;
        /**
         * Setting `left: *` css property.
         * @param {string} start "0", "50", "100", (CSS.Property.Left & Record<never, never>), "none"
         */
        start: Responsive<"0" | "50" | "100" | (CSS_2.Property.Left & Record<never, never>) | "none">;
        /**
         * Position an element at the top of the viewport, or bottom of the viewport, from edge to edge, but only after you scroll past it.
         * @param {string} sticky "top", "bottom", "none"
         */
        sticky: Responsive<"top" | "bottom" | "none">;
        /**
         * Setting `top: *` css property.
         * @param {string} top "0", "50", "100", (CSS.Property.Top & Record<never, never>), "none"
         */
        top: Responsive<"0" | "50" | "100" | (CSS_2.Property.Top & Record<never, never>) | "none">;
        /**
         * The `transform` property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.
         * @param {CSS.Property.Transform} transform CSS.Property.Transform
         */
        transform: Responsive<CSS_2.Property.Transform>;
        /**
         * The `translate` property defines x- and y-coordinates of an element in 2D. You can also define the z-coordinate to change position in 3D.
         * @param {CSS.Property.Translate} translate CSS.Property.Translate
         */
        translate: Responsive<CSS_2.Property.Translate>;
        /**
         * Setting `transform: translate(-50%, -50%)` css property.
         * @param {string} translateMiddle boolean
         */
        translateMiddle: Responsive<boolean>;
        /**
         * Setting `transform: translateX(-50%)` css property.
         * @param {string} translateMiddleX boolean
         */
        translateMiddleX: Responsive<boolean>;
        /**
         * Setting `transform: translateY(-50%)` css property.
         * @param {string} translateMiddleY boolean
         */
        translateMiddleY: Responsive<boolean>;
        /**
         * Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.
         * @param {string} vAlign "baseline", "top", "middle", "bottom", "none"
         */
        vAlign: Responsive<"baseline" | "top" | "middle" | "bottom" | "none">;
    }>;

    export declare const Progress: ProgressType;

    export declare type ProgressProp = Partial<{
        /**
         * Use background utility classes to change the appearance of individual progress bars.
         *
         * @default undefined
         */
        variant: ThemeColor;
        /**
         * Current value of progress
         *
         * @default 0
         */
        now: number;
        /**
         * Minimum value progress can begin from
         *
         * @default 0
         */
        min: number;
        /**
         * 	Maximum value progress can reac
         *
         * @default 100
         */
        max: number;
        /**
         * Add `.progress-bar-striped` to any `.progress-bar` to apply a stripe via CSS gradient over the progress bar’s background color.
         *
         * @default false
         */
        striped: boolean;
        /**
         * The striped gradient can also be animated. Add `.progress-bar-animated` to `.progress-bar` to animate the stripes right to left via CSS3 animations.
         *
         * @default false
         */
        animated: boolean;
        /**
         * You can include multiple progress components inside a container with `.progress-stacked` to create a single stacked progress bar.
         *
         * @default false
         */
        multiple: boolean;
    }>;

    declare type ProgressProps = ProgressProp & Omit<SaigonProps<"div", HTMLElement>, keyof ProgressProp>;

    declare type ProgressType = ForwardRefComponent<HTMLElement, ProgressProps>;

    export declare const RadioButton: RadioButtonType & {
        Label: RadioButtonLabelType;
        Feedback: RadioButtonFeedbackType;
    };

    declare type RadioButtonFeedbackProps = FormFeedbackProp & Omit<SaigonProps<"div", HTMLElement>, keyof FormFeedbackProp>;

    declare type RadioButtonFeedbackType = ForwardRefComponent<HTMLElement, RadioButtonFeedbackProps>;

    declare type RadioButtonLabelProps = SaigonProps<"div", HTMLElement>;

    declare type RadioButtonLabelType = ForwardRefComponent<HTMLElement, RadioButtonLabelProps>;

    export declare type RadioButtonProp = Partial<{
        /**
         * Default checked state value
         */
        defaultValue: boolean;
        /**
         * Checked state value
         */
        value: boolean;
        /**
         * Add the disabled attribute and the associated <label>s are automatically styled to match with a lighter color to help indicate the input’s state.
         *
         * @default false
         */
        disabled: boolean;
        /**
         * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
         *
         * @default false
         */
        isValid: boolean;
        /**
         * Callback when checked state changes.
         *
         * @param checked true if selected
         * @param evt native Event object
         */
        onChange: (checked: boolean, evt: Event) => void;
        /**
         * ref object to the input element
         */
        inputRef: React.RefObject<HTMLInputElement>;
        /**
         * Group checkboxes or radios on the same horizontal row by adding `.form-check-inline`.
         *
         * @default false
         */
        inline: boolean;
        /**
         * Put your checkboxes, radios, and switches on the opposite side with the `.form-check-reverse` modifier class.
         *
         * @default false
         */
        reverse: boolean;
        /**
         * Set the `name` attribute for input
         */
        name: string;
    }>;

    declare type RadioButtonProps = RadioButtonProp & Omit<SaigonProps<"div", HTMLElement>, keyof RadioButtonProp>;

    declare type RadioButtonType = ForwardRefComponent<HTMLElement, RadioButtonProps>;

    declare const Range_2: RangeType;
    export { Range_2 as Range }

    export declare type RangeProp = Partial<{
        /**
         * The range label
         */
        label: string;
        /**
         * Default checked state value
         */
        defaultValue: number;
        /**
         * Checked state value
         */
        value: number;
        /**
         * The mininum value of the range
         *
         * @default 0
         */
        min: number;
        /**
         * The maximum value of the range
         *
         * @default 100
         */
        max: number;
        /**
         * The step on increasement
         *
         * @default 1
         */
        step: number;
        /**
         * Add the disabled boolean attribute on a select to give it a grayed out appearance and remove pointer events.
         *
         * @default false
         */
        disabled: boolean;
        /**
         * Callback when the value changes.
         *
         * @param value
         * @param evt native Event object
         */
        onChange: (value: number, evt: Event) => void;
    }>;

    declare type RangeProps = RangeProp & React.InputHTMLAttributes<HTMLInputElement> & Omit<SaigonProps<"input", HTMLInputElement>, keyof RangeProp>;

    declare type RangeType = ForwardRefComponent<HTMLInputElement, RangeProps>;

    export declare type Responsive<Props> = Props | Breakpoint<Props>;

    /**
     * Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins to ensure the content in your columns is visually aligned down the left side. Rows also support modifier classes to uniformly apply column sizing and gutter classes to change the spacing of your content.
     * @param {RowProps} props
     * @returns {RowType}
     */
    export declare const Row: RowType;

    export declare type RowProp = Partial<{
        /**
         *
         * @default div
         */
        as: "div" | React.ReactElement;
        /**
         * Use these row columns classes to quickly create basic grid layouts or to control your card layouts.
         * @default undefined
         */
        rowCols: "auto" | 1 | 2 | 3 | 4 | 5 | 6;
        /**
         * Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.
         */
        g: 1 | 2 | 3 | 4 | 5;
        /**
         * Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.
         */
        gx: 1 | 2 | 3 | 4 | 5;
        /**
         * Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.
         */
        gy: 1 | 2 | 3 | 4 | 5;
    }>;

    declare type RowProps = SaigonProps<"div", HTMLElement> & RowProp;

    declare type RowType = ForwardRefComponent<HTMLElement, RowProps>;

    export declare interface SaigonComponent<PropsType> {
        (props: React.PropsWithChildren<React.PropsWithoutRef<PropsType>>): React.ReactNode;
        displayName?: string;
    }

    export declare type SaigonProps<T extends As, E extends HTMLElement> = 
    /**
    * @param {HTMLAttributes} HTMLAttributes Standard react HTML Attributes
    * @param {as} As slot, depend on component, some allow `as` with ReactElement
    * @param {css} CSS @emotion/react styles patterns
    * @param {SpacingProps} SpacingProps Saigon UI spacing props
    * @param {TextProps} TextProps Saigon UI spacing props
    * @param {BackgroundProps} BackgroundProps Saigon UI spacing props
    */
    React.HTMLAttributes<E> & BaseResponsiveProps<T> & SpacingProps & PositionProps & LayoutProps & TextProps & BackgroundProps & BorderProps & FlexProps & OtherProps;

    export declare const SaigonProvider: SaigonProviderType;

    declare type SaigonProviderType = FC<{
        theme?: ThemeOptions;
        children?: any;
    }>;

    export declare type SelectProp = Partial<{
        /**
         * Default selected value
         */
        defaultValue: boolean;
        /**
         * Controlling selected value
         */
        value: boolean;
        /**
         * You may also choose from small and large custom selects to match our similarly sized text inputs.
         *
         * @default undefined
         */
        size: "sm" | "lg";
        /**
         * Allow multiple selection
         *
         * @default false
         */
        multiple: boolean;
        /**
         * The size attribute of the underlying HTML element. Specifies the number of visible options.
         *
         * @default undefined
         */
        htmlSize: number;
        /**
         * Add the disabled boolean attribute on a select to give it a grayed out appearance and remove pointer events.
         *
         * @default false
         */
        disabled: boolean;
    }>;

    export declare type SpacingProps = Partial<{
        /**
         * `m` - for classes that set `margin`
         * @param {string} m '0'|'1'|'2'|'3'|'4'|'5'|'auto', (CSS.Property.Margin & Record<never, never>), "none"
         */
        m: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | 'auto' | (CSS_2.Property.Margin & Record<never, never>) | "none">;
        /**
         * `mb` - for classes that set `margin-bottom`.
         * @param {string} mb "0", "1", "2", "3", "4", "5", "auto", (CSS.Property.MarginBottom & Record<never, never>), "none"
         */
        mb: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | "auto" | (CSS_2.Property.MarginBottom & Record<never, never>) | "none">;
        /**
         * `me` - for classes that set `margin-right`.
         * @param {string} me "0", "1", "2", "3", "4", "5", "auto", (CSS.Property.MarginRight & Record<never, never>), "none"
         */
        me: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | "auto" | (CSS_2.Property.MarginRight & Record<never, never>) | "none">;
        /**
         * `ms` - for classes that set `margin-left`.
         * @param {string} ms "0", "1", "2", "3", "4", "5", "auto", (CSS.Property.MarginLeft & Record<never, never>), "none"
         */
        ms: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | "auto" | (CSS_2.Property.MarginLeft & Record<never, never>) | "none">;
        /**
         * `mt` - for classes that set `margin-top`.
         * @param {string} mt "0", "1", "2", "3", "4", "5", "auto", (CSS.Property.MarginTop & Record<never, never>), "none"
         */
        mt: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | "auto" | (CSS_2.Property.MarginTop & Record<never, never>) | "none">;
        /**
         * `mx` - for classes that set `margin-left` and `margin-right` equally.
         * @param {string} mx "0", "1", "2", "3", "4", "5", "auto", (CSS.Property.MarginLeft & Record<never, never>), (CSS.Property.MarginRight & Record<never, never>), "none"
         */
        mx: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | "auto" | (CSS_2.Property.MarginLeft & Record<never, never>) | (CSS_2.Property.MarginRight & Record<never, never>) | "none">;
        /**
         * `my` - for classes that set `margin-top` and `margin-bottom` equally.
         * @param {string} my "0", "1", "2", "3", "4", "5", "auto", (CSS.Property.MarginTop & Record<never, never>), (CSS.Property.MarginBottom & Record<never, never>), "none"
         */
        my: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | "auto" | (CSS_2.Property.MarginTop & Record<never, never>) | (CSS_2.Property.MarginBottom & Record<never, never>) | "none">;
        /**
         * `p` - for classes that set `padding`
         * @param {string} p '0'|'1'|'2'|'3'|'4'|'5', (CSS.Property.Padding & Record<never, never>), "none"
         */
        p: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | (CSS_2.Property.Padding & Record<never, never>) | "none">;
        /**
         * `pb` - for classes that set `padding-bottom`.
         * @param {string} pb "0", "1", "2", "3", "4", "5", (CSS.Property.PaddingBottom & Record<never, never>), "none"
         */
        pb: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | (CSS_2.Property.PaddingBottom & Record<never, never>) | "none">;
        /**
         * `pe` - for classes that set `padding-left`.
         * @param {string} pe "0", "1", "2", "3", "4", "5", (CSS.Property.PaddingRight & Record<never, never>), "none"
         */
        pe: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | (CSS_2.Property.PaddingRight & Record<never, never>) | "none">;
        /**
         * `ps` - for classes that set `padding-left`.
         * @param {string} ps "0", "1", "2", "3", "4", "5", (CSS.Property.PaddingLeft & Record<never, never>), "none"
         */
        ps: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | (CSS_2.Property.PaddingLeft & Record<never, never>) | "none">;
        /**
         * `pt` - for classes that set `padding-top`.
         * @param {string} pt "0", "1", "2", "3", "4", "5", (CSS.Property.PaddingTop & Record<never, never>), "none"
         */
        pt: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | (CSS_2.Property.PaddingTop & Record<never, never>) | "none">;
        /**
         * `px` - for classes that set `padding-left` and `padding-right` equally.
         * @param {string} px "0", "1", "2", "3", "4", "5", (CSS.Property.PaddingLeft & Record<never, never>), (CSS.Property.PaddingRight & Record<never, never>)
         */
        px: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | (CSS_2.Property.PaddingLeft & Record<never, never>) | (CSS_2.Property.PaddingRight & Record<never, never>)>;
        /**
         * `py` - for classes that set `padding-top` and `padding-bottom` equally.
         * @param {string} py "0", "1", "2", "3", "4", "5", (CSS.Property.PaddingTop & Record<never, never>), (CSS.Property.PaddingBottom & Record<never, never>), "none"
         */
        py: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | (CSS_2.Property.PaddingTop & Record<never, never>) | (CSS_2.Property.PaddingBottom & Record<never, never>) | "none">;
    }>;

    export declare const Spinner: SpinnerType;

    export declare type SpinnerProp = Partial<{
        /**
         * Changes the animation style of the spinner.
         *
         * @default border
         */
        animation: "border" | "grow" | "dots-1" | "dots-2" | "dots-3" | "dots-4" | "bars-1" | "bars-2" | "beat" | "bounce" | "clock" | "fade" | "hash" | "moon_1" | "moon_2" | "propagate" | "puff" | "pulse-1" | "pulse-2" | "skew" | "scale" | "sync-1" | "sync-2" | "square" | "buddhism_1";
        /**
         * Component size variations. Also works with `CSS.Property.Width` value.
         *
         * @default undefined
         */
        size: CSS_2.Property.Width;
        /**
         * An ARIA accessible role applied to the Menu component.
         *
         * @default 'status'
         */
        role: string;
    }>;

    declare type SpinnerProps = SpinnerProp & SaigonProps<"div", HTMLElement>;

    declare type SpinnerType = ForwardRefComponent<HTMLElement, SpinnerProps>;

    /**
     * Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.
     * @param {StackProps} props
     * @returns {StackType}
     */
    export declare const Stack: StackType;

    export declare type StackProp = Partial<{
        /**
         *
         * @default div
         */
        as: "div" | React.ReactElement;
        /**
         * Applying Bootstrap `flex-fill` classname
         */
        fill: Responsive<boolean>;
        /**
         * Applying Bootstrap `flex-row` classname, aka, `flex-direction: row`
         */
        row: Responsive<boolean>;
        /**
         * Applying Bootstrap `flex-column` classname, aka, `flex-direction: column`
         */
        column: Responsive<boolean>;
        /**
         * Applying Bootstrap `flex-row-reverse` classname, aka, `flex-direction: row-reverse`
         */
        rowReverse: Responsive<boolean>;
        /**
         * Applying Bootstrap `flex-column-reverse` classname, aka, `flex-direction: column-reverse`
         */
        columnReverse: Responsive<boolean>;
        /**
         * Applying Bootstrap `flex-grow-0` classname, aka, `flex-grow: 0`
         */
        grow0: Responsive<boolean>;
        /**
         * Applying Bootstrap `flex-grow-1` classname, aka, `flex-grow: 1`
         */
        grow1: Responsive<boolean>;
        /**
         * Applying Bootstrap `flex-shrink-0` classname, aka, `flex-shrink: 0`
         */
        shrink0: Responsive<boolean>;
        /**
         * Applying Bootstrap `flex-shrink-1` classname, aka, `flex-shrink: 1`
         */
        shrink1: Responsive<boolean>;
        /**
         * Applying Bootstrap `flex-wrap` classname, aka, `flex-wrap: wrap`
         */
        wrap: Responsive<boolean>;
        /**
         * Applying Bootstrap `flex-nowrap` classname, aka, `flex-wrap: nowrap`
         */
        nowrap: Responsive<boolean>;
        /**
         * Applying Bootstrap `flex-wrap-reverse` classname, aka, `flex-wrap: wrap-reverse`
         */
        wrapReverse: Responsive<boolean>;
    }>;

    declare type StackProps = SaigonProps<"div", HTMLElement> & StackProp;

    declare type StackType = ForwardRefComponent<HTMLElement, StackProps>;

    export declare const StaticDateTimePicker: StaticDateTimePickerType;

    declare type StaticDateTimePickerProps = DateTimePickerProp & DivProps;

    declare type StaticDateTimePickerType = ForwardRefComponent<HTMLElement, StaticDateTimePickerProps>;

    export declare const Switch: SwitchType & {
        Feedback: SwitchFeedbackType;
        Label: SwitchLabelType;
    };

    declare type SwitchFeedbackProps = FormFeedbackProp & Omit<SaigonProps<"div", HTMLElement>, keyof FormFeedbackProp>;

    declare type SwitchFeedbackType = ForwardRefComponent<HTMLElement, SwitchFeedbackProps>;

    declare type SwitchLabelProps = SaigonProps<"div", HTMLElement>;

    declare type SwitchLabelType = ForwardRefComponent<HTMLElement, SwitchLabelProps>;

    export declare type SwitchProp = Partial<{
        /**
         * Default checked state value
         */
        defaultValue: boolean;
        /**
         * Checked state value
         */
        value: boolean;
        /**
         * Add the disabled attribute and the associated <label>s are automatically styled to match with a lighter color to help indicate the input’s state.
         *
         * @default false
         */
        disabled: boolean;
        /**
         * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
         *
         * @default false
         */
        isValid: boolean;
        /**
         * Callback when checked state changes.
         *
         * @param checked true if selected
         * @param evt native Event object
         */
        onChange: (checked: boolean, evt: Event) => void;
        /**
         * ref object to the input element
         */
        inputRef: React.RefObject<HTMLInputElement>;
        /**
         * Group checkboxes or radios on the same horizontal row by adding `.form-check-inline`.
         *
         * @default false
         */
        inline: boolean;
        /**
         * Put your checkboxes, radios, and switches on the opposite side with the `.form-check-reverse` modifier class.
         *
         * @default false
         */
        reverse: boolean;
    }>;

    declare type SwitchProps = SwitchProp & Omit<SaigonProps<"div", HTMLElement>, keyof SwitchProp>;

    declare type SwitchType = ForwardRefComponent<HTMLElement, SwitchProps>;

    export declare type TableBodyProp = Partial<{
        /**
         * Add a thicker border, darker between table groups—<thead>, <tbody>, and <tfoot>—with .table-group-divider
         *
         * @default false
         */
        divider: boolean;
        /**
         * Use contextual classes to color tables, table rows or individual cells.
         *
         * @default undefined
         */
        variant: ThemeColor;
        /**
         * Use `.table-light` or `.table-dark` for light/dark theme
         */
        theme: "light" | "dark";
    }>;

    export declare type TableProp = Partial<{
        /**
         * Use contextual classes to color tables, table rows or individual cells.
         *
         * @default undefined
         */
        variant: ThemeColor;
        /**
         * Use `.table-light` or `.table-dark` for light/dark theme
         */
        theme: "light" | "dark";
        /**
         * Add `.table-sm` to make any .table more compact by cutting all cell padding in half.
         *
         * @default undefined
         */
        size: boolean;
        /**
         * Use `.table-striped-columns` to add zebra-striping to any table column.
         *
         * @default false
         */
        striped: boolean;
        /**
         * Add `.table-bordered` for borders on all sides of the table and cells.
         *
         * @default false
         */
        bordered: boolean;
        /**
         * Add `.table-borderless` for a table without borders.
         *
         * @default false
         */
        borderless: boolean;
        /**
         * Add `.table-active` for a table without borders.
         *
         * @default false
         */
        active: boolean;
        /**
         * Add `.table-hover` to enable a hover state on table rows within a <tbody>.
         *
         * @default false
         */
        hover: boolean;
        /**
         * Responsive tables allow tables to be scrolled horizontally with ease
         */
        responsive: "sm" | "md" | "lg" | "xl" | "xxl";
        /**
         * Set the caption position
         *
         * @default top
         */
        caption: "top" | "bottom";
    }>;

    export declare type TableSubProp = Partial<{
        /**
         * Use contextual classes to color tables, table rows or individual cells.
         *
         * @default undefined
         */
        variant: ThemeColor;
        /**
         * Use `.table-light` or `.table-dark` for light/dark theme
         */
        theme: "light" | "dark";
    }>;

    export declare type TextProps = Partial<{
        /**
         * Colorize text with color utilities. If you want to colorize links, you can use the .link-* helper classes which have :hover and :focus states.
         * @param {ThemeColor} color CSS.Property.Color
         */
        color: Responsive<CSS_2.Property.Color>;
        /**
         * The `.focus-ring` helper removes the default outline on :focus, replacing it with a `box-shadow` that can be more broadly customized. The new shadow is made up of a series of CSS variables, inherited from the :root level, that can be modified for any element or component.
         * @param {string} focusRing ThemeColor, "none"
         */
        focusRing: Responsive<ThemeColor | "none">;
        /**
         * The `font` property is a shorthand property for: `font-style`, `font-variant`, `font-weight`, `font-size/line-height` and `font-family`.
         *
         * The font-size and font-family values are required. If one of the other values is missing, their default value are used.
         *
         * **Note:** The line-height property sets the space between lines.
         * @param {CSS.Property.Font} font CSS.Property.Font
         */
        font: Responsive<CSS_2.Property.Font>;
        /**
         * The `font-family` property specifies the font for an element.
         *
         * The `font-family` property can hold several font names as a "fallback" system. If the browser does not support the first font, it tries the next font.
         * @param {CSS.Property.FontFamily} fontFamily CSS.Property.FontFamily
         */
        fontFamily: Responsive<CSS_2.Property.FontFamily>;
        /**
         * The `font-kerning` property controls the usage of the kerning information stored in a font.
         *
         * **Tip:** Kerning defines how letters are spaced.
         *
         * **Note:** For fonts that do not include kerning data, this property will have no visible effect.
         * @param {CSS.Property.FontKerning} fontKerning CSS.Property.FontKerning
         */
        fontKerning: Responsive<CSS_2.Property.FontKerning>;
        /**
         * Change a selection to our monospace font stack with `.font-monospace.`
         * @param {string} fontMonospace boolean
         */
        fontMonospace: Responsive<boolean>;
        /**
         * Quickly change the font-size of text. While our heading classes (e.g., .h1–.h6) apply font-size, font-weight, and line-height, these utilities only apply font-size. Sizing for these utilities matches HTML’s heading elements, so as the number increases, their size decreases.
         * @param {string} fontSize "1", "2", "3", "4", "5", "6", (CSS.Property.FontSize & Record<never, never>), "none"
         */
        fontSize: Responsive<"1" | "2" | "3" | "4" | "5" | "6" | (CSS_2.Property.FontSize & Record<never, never>) | "none">;
        /**
         * The `font-size-adjust` property gives you better control of the font size when the first selected font is not available.
         *
         * When a font is not available, the browser uses the second specified font. This could result in a big change for the font size. To prevent this, use the `font-size-adjust` property.
         * @param {CSS.Property.FontSizeAdjust} fontSizeAdjust CSS.Property.FontSizeAdjust
         */
        fontSizeAdjust: Responsive<CSS_2.Property.FontSizeAdjust>;
        /**
         * The `font-stretch` property allows you to make text narrower (condensed) or wider (expanded).
         *
         * **Note:** Some fonts provide additional faces; condensed faces and expanded faces. For these fonts, you can use the font-stretch property to select a normal, condensed, or expanded font face.
         *
         * **Note:** This property has no effect if the selected font does not offer condensed or expanded faces!
         * @param {CSS.Property.FontStretch} fontStretch CSS.Property.FontStretch
         */
        fontStretch: Responsive<CSS_2.Property.FontStretch>;
        /**
         * Quickly change the `font-weight` of text with these utilities
         * @param {string} fontStyle "italic", "normal", (CSS.Property.FontStyle & Record<never, never>), "none"
         */
        fontStyle: Responsive<"italic" | "normal" | (CSS_2.Property.FontStyle & Record<never, never>) | "none">;
        /**
         * In a small-caps font, all lowercase letters are converted to uppercase letters. However, the converted uppercase letters appears in a smaller font size than the original uppercase letters in the text.
         *
         * The `font-variant` property specifies whether or not a text should be displayed in a small-caps font.
         * @param {CSS.Property.FontVariant} fontVariant CSS.Property.FontVariant
         */
        fontVariant: Responsive<CSS_2.Property.FontVariant>;
        /**
         * The `font-variant-caps` property controls the usage of alternate glyphs for capital letters.
         * @param {CSS.Property.FontVariantCaps} fontVariant CSS.Property.FontVariantCaps
         */
        fontVariantCaps: Responsive<CSS_2.Property.FontVariantCaps>;
        /**
         * Quickly change the `font-style` of text with these utilities
         * @param {string} fontWeight "lighter", "light", "normal", "medium", "semibold", "bold", "bolder", (CSS.Property.FontWeight & Record<never, never>), "none"
         */
        fontWeight: Responsive<"lighter" | "light" | "normal" | "medium" | "semibold" | "bold" | "bolder" | (CSS_2.Property.FontWeight & Record<never, never>) | "none">;
        /**
         * Change the line height with `.lh-*` utilities.
         * @param {string} lineHeight "1", "sm", "base", "lg", (CSS.Property.LineHeight & Record<never, never>), "none"
         */
        lineHeight: Responsive<"1" | "sm" | "base" | "lg" | (CSS_2.Property.LineHeight & Record<never, never>) | "none">;
        /**
         * Colored link helpers have been updated to pair with our link utilities. Use the new utilities to modify the link opacity, underline opacity, and underline offset.
         * @param {string} textTrunc "body-emphasis", ThemeColor, "none"
         */
        linkColor: Responsive<"body-emphasis" | ThemeColor | "none">;
        /**
         * Change the underline’s distance from your text. Offset is set in em units to automatically scale with the element’s current font-size.
         * @param {string} linkOffset "1", "2", "3", (CSS.Property.TextUnderlineOffset & Record<never, never>), "none"
         */
        linkOffset: Responsive<"1" | "2" | "3" | (CSS_2.Property.TextUnderlineOffset & Record<never, never>) | "none">;
        /**
         * Change the alpha opacity of the link rgba() color value with utilities. Please be aware that changes to a color’s opacity can lead to links with insufficient contrast.
         * @param {opacity} textEmphasis "10", "25", "50", "75", "100", number, "none"
         */
        linkOpacity: Responsive<"10" | "25" | "50" | "75" | "100" | number | "none">;
        /**
         * Change the underline’s color independent of the link text color.
         * @param {string} linkUnderline ThemeColor, boolean, "none"
         */
        linkUnderline: Responsive<ThemeColor | boolean | "none">;
        /**
         * Change the underline’s opacity. Requires adding .link-underline to first set an rgba() color we use to then modify the alpha opacity.
         * @param {string} linkUnderlineOpacity "0", "10", "25", "50", "75", "100", number, "none"
         */
        linkUnderlineOpacity: Responsive<"0" | "10" | "25" | "50" | "75" | "100" | number | "none">;
        /**
         * Add .stretched-link to a link to make its containing block clickable via a ::after pseudo element. In most cases, this means that an element with position: relative; that contains a link with the .stretched-link class is clickable. Please note given how CSS position works, .stretched-link cannot be mixed with most table elements.
         * @param {string} stretchedLink boolean
         */
        stretchedLink: Responsive<boolean>;
        /**
         * Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.
         * @param {string} textAlign "start", "end", "center", "none"
         */
        textAlign: Responsive<"start" | "end" | "center" | "none">;
        /**
         * Set background color by adding class names: text-bg-{color}
         * @param {string} textBg ThemeColor, "none"
         */
        textBg: Responsive<ThemeColor | "none">;
        /**
         * Prevent long strings of text from breaking your components’ layout by using .text-break to set word-wrap: break-word and word-break: break-word. We use word-wrap instead of the more common overflow-wrap for wider browser support, and add the deprecated word-break: break-word to avoid issues with flex containers.
         * @param {boolean} textBreak boolean
         */
        textBreak: Responsive<boolean>;
        /**
         * Colorize text with color utilities. If you want to colorize links, you can use the .link-* helper classes which have :hover and :focus states.
         * @param {ThemeColor} textColor ThemeColor, (CSS.Property.Color & Record<never, never>), "black", "white", "body", "muted", "black-50", "white-50", "body-secondary", "body-tertiary", "body-emphasis", "none"
         */
        textColor: Responsive<ThemeColor | (CSS_2.Property.Color & Record<never, never>) | "black" | "white" | "body" | "muted" | "black-50" | "white-50" | "body-secondary" | "body-tertiary" | "body-emphasis" | "none">;
        /**
         * Decorate text in components with text decoration classes.
         * @param {string} textDecoration "none", "underline", "line-through", (CSS.Property.TextDecoration & Record<never, never>)
         */
        textDecoration: Responsive<"none" | "underline" | "line-through" | (CSS_2.Property.TextDecoration & Record<never, never>)>;
        /**
         * For higher contrast text. Not applicable for backgrounds.
         * @param {boolean} textEmphasis boolean
         */
        textEmphasis: Responsive<boolean>;
        /**
         * The `text-indent` property specifies the indentation of the first line in a text-block.
         *
         * **Note**: Negative values are allowed. The first line will be indented to the left if the value is negative.
         * @param {CSS.Property.TextIndent} textIndent CSS.Property.TextIndent
         */
        textIndent: Responsive<CSS_2.Property.TextIndent>;
        /**
         * The `text-justify` property specifies the justification method of text when text-align is set to "justify".
         * @param {CSS.Property.TextJustify} textJustify CSS.Property.TextJustify
         */
        textJustify: Responsive<CSS_2.Property.TextJustify>;
        /**
         * Control the opacity of elements.
         * @param {string} textOpacity "25", "50", "75", "100", (CSS.Property.Opacity & Record<never, never>), "none"
         */
        textOpacity: Responsive<"25" | "50" | "75" | "100" | (CSS_2.Property.Opacity & Record<never, never>) | "none">;
        /**
         * The `text-orientation` property specifies the orientation of characters.
         * @param {CSS.Property.TextOrientation} textOrientation CSS.Property.TextOrientation
         */
        textOrientation: Responsive<CSS_2.Property.TextOrientation>;
        /**
         * The `text-overflow` property specifies how overflowed content that is not displayed should be signaled to the user. It can be clipped, display an ellipsis (...), or display a custom string.
         *
         * **Note:** Both of the following properties are required for text-overflow: `white-space: nowrap` and `overflow: hidden` .
         * @param {CSS.Property.TextOverflow} textOverflow CSS.Property.TextOverflow
         */
        textOverflow: Responsive<CSS_2.Property.TextOverflow>;
        /**
         * Reset a text or link’s color with .text-reset, so that it inherits the color from its parent.
         * @param {boolean} textReset boolean
         */
        textReset: Responsive<boolean>;
        /**
         * The `text-shadow` property adds shadow to text. This property accepts a comma-separated list of shadows to be applied to the text.
         * @param {CSS.Property.TextShadow} textShadow CSS.Property.TextShadow
         */
        textShadow: Responsive<CSS_2.Property.TextShadow>;
        /**
         * Transform text in components with text capitalization classes.
         * @param {string} textTransform "lowercase", "uppercase", "capitalize", (CSS.Property.TextTransform & Record<never, never>), "none"
         */
        textTransform: Responsive<"lowercase" | "uppercase" | "capitalize" | (CSS_2.Property.TextTransform & Record<never, never>) | "none">;
        /**
         * For longer content, you can add a .text-truncate class to truncate the text with an ellipsis. Requires display: inline-block or display: block.
         * @param {string} textTrunc boolean
         */
        textTrunc: Responsive<boolean>;
        /**
         * Wrap text with a .text-wrap or .text-nowrap class.
         * @param {string} textWrap "wrap", "nowrap", "none"
         */
        textWrap: Responsive<"wrap" | "nowrap" | "none">;
        /**
         * Setting the css value `vertical-align: text-bottom`
         * @param {string} vTextAlign "bottom", "top", "none"
         */
        vTextAlign: Responsive<"bottom" | "top" | "none">;
        /**
         * The `zoom` property specifies the zoom factor for an element. An element can be zoomed in and out..
         * @param {CSS.Property.Zoom} zoom CSS.Property.Zoom
         */
        zoom: Responsive<CSS_2.Property.Zoom>;
    }>;

    export declare type ThemeColor = "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "light" | "dark";

    export declare type ThemeOptions = {
        cssVarPrefix: string;
        direction: "ltr" | "rtl";
        colors: {
            white: string;
            gray: {
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            black: string;
            blue: string;
            indigo: string;
            purple: string;
            pink: string;
            red: string;
            orange: string;
            yellow: string;
            green: string;
            teal: string;
            cyan: string;
        };
        variants: {
            primary: ColorValue;
            secondary: ColorValue;
            success: ColorValue;
            info: ColorValue;
            warning: ColorValue;
            danger: ColorValue;
            light: ColorValue;
            dark: ColorValue;
        };
        breakpoints: Breakpoint<string>;
        spacer: {
            base: string;
            spacers: {
                "0": string;
                "1": string;
                "2": string;
                "3": string;
                "4": string;
                "5": string;
            };
        };
    };

    export declare const Toast: ToastType & {
        Header: ToastHeaderType;
        Body: ToastBodyType;
        CloseButton: ToastCloseButtonType;
        Container: FC<Partial<{
        placement: "top-start" | "top-center" | "top-end" | "middle-start" | "middle-center" | "middle-end" | "bottom-start" | "bottom-center" | "bottom-end";
        containerPosition: "static" | "fixed";
        }> & {
        children?: any;
        }>;
    };

    declare type ToastBodyProps = SaigonProps<"div", HTMLElement>;

    declare type ToastBodyType = ForwardRefComponent<HTMLElement, ToastBodyProps>;

    declare type ToastCloseButtonProps = SaigonProps<"button", HTMLElement>;

    declare type ToastCloseButtonType = ForwardRefComponent<HTMLElement, ToastCloseButtonProps>;

    export declare type ToastContainerProp = Partial<{
        /**
         * Building on the above example, you can create different toast color schemes with our color and background utilities
         *
         * @default undefined
         */
        placement: "top-start" | "top-center" | "top-end" | "middle-start" | "middle-center" | "middle-end" | "bottom-start" | "bottom-center" | "bottom-end";
        /**
         * Specify the positioning method for the container.
         *
         * @default fixed
         */
        containerPosition: "static" | "fixed";
    }>;

    declare type ToastHeaderProps = SaigonProps<"div", HTMLElement>;

    declare type ToastHeaderType = ForwardRefComponent<HTMLElement, ToastHeaderProps>;

    export declare type ToastProp = Partial<{
        /**
         * Apply a CSS fade transition to the toast.
         *
         * @default Fade
         */
        animation: AnimationType;
        /**
         * Automatically hide the toast after the delay.
         *
         * @default true
         */
        autoHide: boolean;
        /**
         * Delay in milliseconds before hiding the toast.
         * @default 3600ms
         */
        delay: number;
        /**
         * Set white text color with `.btn-close-white`
         *
         * @default false
         */
        btnCloseWhite: boolean;
    }>;

    declare type ToastProps = ToastProp & SaigonProps<"div", HTMLElement>;

    declare type ToastRef = {
        domRef: React.RefObject<HTMLElement>;
        closed: () => boolean;
        unmounted: () => boolean;
        close: () => void;
        translate: (val: string) => void;
    };

    declare type ToastType = ForwardRefComponent<ToastRef, ToastProps>;

    export declare const ToggleButton: ToggleButtonType;

    export declare type ToggleButtonProp = Partial<{
        /**
         * The .btn classes are designed to be used with the <button> element. However, you can also use these classes on <a> or <input> elements (though some browsers may apply a slightly different rendering).
         * @default button
         */
        as: "button" | "input" | React.ReactElement;
        /**
         * Bootstrap includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.
         * @param {ThemeColor | 'link'} primary
         */
        variant: ThemeColor | "link";
        /**
         * In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button.
         */
        outline: boolean;
        /**
         * Fancy larger or smaller buttons? Add .btn-lg or .btn-sm for additional sizes.
         */
        size: "lg" | "sm";
        /**
         * If you don’t want the button text to wrap, you can add the .text-nowrap class to the button. In Sass, you can set $btn-white-space: nowrap to disable text wrapping for each button.
         */
        noTextWrap: boolean;
        /**
         * Active state, for toogle button style
         */
        active: boolean;
        /**
         * Make buttons look inactive by adding the disabled boolean attribute to any <button> element. Disabled buttons have pointer-events: none applied to, preventing hover and active states from triggering.
         */
        disabled: boolean;
        /**
         * Callback fire when toggling
         * @param selected
         * @param event
         * @returns
         */
        onChange: (selected: boolean, event: object) => void;
        /**
         * When rendering using <input> tag, type need to be specified, by default is 'button'
         */
        type: "button" | "submit" | "reset" | string;
        /**
         * If `true`, disabling the button and showing a spinner.
         * @default false
         */
        isLoading: boolean;
        /**
         * The label to show in the button when `isLoading` is true
         */
        loadingText: React.ReactElement | string;
        /**
         * Replace the spinner component when `isLoading` is set to `true`
         *
         * @type React.ReactElement or one of value from SpinnerProp["animation"], such as, 'dots-1', 'dots-2'...
         */
        loadingSpinner: React.ReactElement | SpinnerProp["animation"];
        /**
         * It determines the placement of the spinner when isLoading is true
         * @default "end"
         */
        spinnerPlacement: "start" | "end";
        /**
         * If added, the button will show an icon before the button's label.
         * @type React.ReactElement
         */
        startIcon: React.ReactElement;
        /**
         * If added, the button will show an icon after the button's label.
         * @type React.ReactElement
         */
        endIcon: React.ReactElement;
        /**
         * The space between the button icon and label.
         * @type string
         * @default "5px"
         */
        iconSpacing: CSS_2.Property.Gap;
        /**
         * Button click effect when pointer-up
         *
         * @default slide
         */
        clickEffect: "ripple" | "puff" | "box-shadow" | "slide" | "stripe";
    }>;

    declare type ToggleButtonProps = ToggleButtonProp & Omit<SaigonProps<"div", HTMLElement>, keyof ToggleButtonProp>;

    declare type ToggleButtonType = ForwardRefComponent<HTMLElement, ToggleButtonProps>;

    export declare const Tooltip: TooltipType;

    export declare type TooltipProp = Partial<{
        /**
         * The informative text is displayed when users hover over, focus on, or tap an element.
         *
         * @default EmptyString
         */
        title: string | React.ReactElement;
        /**
         * Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. Directions are mirrored when using Bootstrap in RTL.
         *
         * @default top
         */
        placement: "top" | "right" | "bottom" | "left";
        /**
         * This is useful when you don’t know which placement will be best for the floating element, or don’t want to have to explicitly specify it.
         * Note: Will ignore `side` and `alignment` props
         *
         * @default false
         */
        autoPlacement: boolean;
        /**
         * CSS .position strategy
         *
         * @default 'absolute'
         */
        strategy: "fixed" | "absolute";
        /**
         * Translates the floating element along the specified axes.
         *
         * @OffsetOptions = number | { mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null }
         * @description More info at: https://floating-ui.com/docs/offset
         */
        offset: OffsetOptions;
        /**
         * Apply a CSS fade transition to the tooltip. Currently, working only with fade or zoom.
         *
         * @default Fade
         */
        animation: AnimationType;
        /**
         * Callback fired when the open/close the popover
         * @param open true when open
         * @param event original event object
         * @returns
         */
        onOpenChange: (open: boolean, event?: object) => void;
    }>;

    declare type TooltipProps = TooltipProp & {
        children?: any;
    };

    declare type TooltipType = SaigonComponent<TooltipProps>;

    export declare const Typography: TypographyType & {
        Span: TypographySpanType;
        Abbr: TypographyAbbrType;
        Mark: TypographyMarkType;
        Del: TypographyDelType;
        Strip: TypographyStripType;
        Ins: TypographyInsType;
        Underline: TypographyUnderlineType;
        Small: TypographySmallType;
        Strong: TypographyStrongType;
        Em: TypographyEmType;
    };

    declare type TypographyAbbrProps = SaigonProps<"abbr", HTMLElement>;

    declare type TypographyAbbrType = ForwardRefComponent<HTMLElement, TypographyAbbrProps>;

    declare type TypographyDelType = SaigonComponent<SaigonProps<"del", HTMLElement>>;

    declare type TypographyEmType = SaigonComponent<SaigonProps<"em", HTMLElement>>;

    declare type TypographyInsType = SaigonComponent<SaigonProps<"ins", HTMLElement>>;

    declare type TypographyMarkType = SaigonComponent<SaigonProps<"mark", HTMLElement>>;

    export declare type TypographyProp = Partial<{
        /**
         * All HTML headings, <h1> through <h6>, are available.
         */
        as: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | React.ReactElement;
        /**
         * Display headings are configured via the $display-font-sizes
         */
        textLevel: "1" | "2" | "3" | "4" | "5" | "6";
        /**
         * Make a paragraph stand out by adding .lead.
         */
        textLead: boolean;
    }>;

    declare type TypographyProps = TypographyProp & Omit<SaigonProps<"p", HTMLElement>, keyof TypographyProp>;

    declare type TypographySmallType = SaigonComponent<SaigonProps<"small", HTMLElement>>;

    declare type TypographySpanProps = SaigonProps<"span", HTMLElement>;

    declare type TypographySpanType = ForwardRefComponent<HTMLElement, TypographySpanProps>;

    declare type TypographyStripType = SaigonComponent<SaigonProps<"s", HTMLElement>>;

    declare type TypographyStrongType = SaigonComponent<SaigonProps<"strong", HTMLElement>>;

    declare type TypographyType = ForwardRefComponent<HTMLElement, TypographyProps>;

    declare type TypographyUnderlineType = SaigonComponent<SaigonProps<"u", HTMLElement>>;

    export { }
