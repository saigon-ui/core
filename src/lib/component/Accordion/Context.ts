/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";

export type KeyType = number;

export type AccordionContextType = {
  listKeys: number[];
  generateKey: () => number;
  activeKey: { [key: KeyType]: boolean };
  lastActiveKey: { [key: KeyType]: boolean };
  toggleKey: (eventKey: KeyType, event: object) => void;
  collapsingState: number;
};

export const initData = {
  listKeys: [],
  generateKey: undefined as any,
  activeKey: {},
  lastActiveKey: {},
  toggleKey: undefined as any,
  collapsingState: 0,
};

const AccordionContext = createContext<AccordionContextType>(initData);
AccordionContext.displayName = "Accordion.Context";

export default AccordionContext;
