export type AccordionProp = Partial<{
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
