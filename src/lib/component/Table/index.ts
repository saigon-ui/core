import {
  ForwardRefComponent,
  SaigonProps,
  TableBodyProp,
  TableProp,
  TableSubProp,
} from "../../saigon.types";
import TableFC from "./Table";
import CaptionFC from "./Caption";
import TBodyFC from "./TBody";
import THeadFC from "./THead";
import TFootFC from "./TFoot";
import TDFC from "./TD";
import THFC from "./TH";
import TRFC from "./TR";

export type TableProps = TableProp &
  React.TableHTMLAttributes<HTMLElement> &
  Omit<SaigonProps<"table", HTMLElement>, keyof TableProp>;
export type TableType = ForwardRefComponent<HTMLElement, TableProps>;

export type TableCaptionProps = TableSubProp &
  Omit<SaigonProps<"caption", HTMLElement>, keyof TableSubProp>;
export type TableCaptionType = ForwardRefComponent<
  HTMLElement,
  TableCaptionProps
>;

export type TableTBodyProps = TableBodyProp &
  Omit<SaigonProps<"tbody", HTMLElement>, keyof TableSubProp>;
export type TableTBodyType = ForwardRefComponent<HTMLElement, TableTBodyProps>;

export type TableTHeadProps = TableSubProp &
  Omit<SaigonProps<"thead", HTMLElement>, keyof TableSubProp>;
export type TableTHeadType = ForwardRefComponent<HTMLElement, TableTHeadProps>;

export type TableTFootProps = TableSubProp &
  Omit<SaigonProps<"tfoot", HTMLElement>, keyof TableSubProp>;
export type TableTFootType = ForwardRefComponent<HTMLElement, TableTFootProps>;

export type TableTDProps = TableSubProp &
  React.TdHTMLAttributes<HTMLElement> &
  Omit<SaigonProps<"td", HTMLElement>, keyof TableSubProp>;
export type TableTDType = ForwardRefComponent<HTMLElement, TableTDProps>;

export type TableTHProps = TableSubProp &
  React.ThHTMLAttributes<HTMLElement> &
  Omit<SaigonProps<"th", HTMLElement>, keyof TableSubProp>;
export type TableTHType = ForwardRefComponent<HTMLElement, TableTHProps>;

export type TableTRProps = TableSubProp &
  Omit<SaigonProps<"tr", HTMLElement>, keyof TableSubProp>;
export type TableTRType = ForwardRefComponent<HTMLElement, TableTRProps>;

TableFC.displayName = "Table";
CaptionFC.displayName = "Table.Caption";
TBodyFC.displayName = "Table.TBody";
THeadFC.displayName = "Table.THead";
TFootFC.displayName = "Table.TFoot";
TDFC.displayName = "Table.TD";
THFC.displayName = "Table.TH";
TRFC.displayName = "Table.TR";

const Table = Object.assign(TableFC, {
  Caption: CaptionFC,
  TBody: TBodyFC,
  THead: THeadFC,
  TFoot: TFootFC,
  TD: TDFC,
  TH: THFC,
  TR: TRFC,
});
export default Table;
