export type BreadcrumbProp = Partial<{
  /**
   * Dividers are automatically added in CSS through ::before and content. They can be changed by modifying a local CSS custom property --#{$prefix}breadcrumb-divider, or through the $breadcrumb-divider Sass variable — and $breadcrumb-divider-flipped for its RTL counterpart, if needed. We default to our Sass variable, which is set as a fallback to the custom property. This way, you get a global divider that you can override without recompiling CSS at any time.
   * @default "--#{$prefix}breadcrumb-divider: '>';"
   */
  divider: string;
}>;

export type BreadcrumbItemProp = Partial<{
  /**
   *
   */
  active: boolean;
}>;
