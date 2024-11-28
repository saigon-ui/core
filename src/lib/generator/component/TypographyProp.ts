export type TypographyProp = Partial<{
  /**
   * All HTML headings, <h1> through <h6>, are available.
   */
  as: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | React.ComponentType;

  /**
   * Display headings are configured via the $display-font-sizes
   */
  textLevel: "1" | "2" | "3" | "4" | "5" | "6";

  /**
   * Make a paragraph stand out by adding .lead.
   */
  textLead: boolean;
}>;
