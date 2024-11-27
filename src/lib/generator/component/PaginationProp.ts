export type PaginationProp = Partial<{
  /**
   * Fancy larger or smaller pagination? Add .pagination-lg or .pagination-sm for additional sizes.
   *
   * @default undefined
   */
  size: "sm" | "lg";
}>;

export type PaginationItemProp = Partial<{
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
