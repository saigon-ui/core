import { SaigonProvider } from "./base/context";
import { extendTheme } from "./base/theme";
import Animation from "./component/Animation";
import Badge from "./component/Badge";
import Breadcrumb from "./component/Breadcrumb";
import Button from "./component/Button";
import ButtonGroup from "./component/ButtonGroup";
import {
  DateTimePicker,
  StaticDateTimePicker,
} from "./component/CalendarPicker";
import Card from "./component/Card";
import Checkbox from "./component/Checkbox";
import CloseButton from "./component/CloseButton";
import Col from "./component/Col";
import Container from "./component/Container";
import Div from "./component/Div";
import Figure from "./component/Figure";
import Form from "./component/Form";
import Image from "./component/Image";
import InputGroup from "./component/InputGroup";
import ListGroup from "./component/ListGroup";
import Modal from "./component/Modal";
import Nav from "./component/NavsAndTab";
import Offcanvas from "./component/Offcanvas";
import Pagination from "./component/Pagination";
import Placeholder from "./component/Placeholder";
import Popover from "./component/Popover";
import Progress from "./component/Progress";
import RadioButton from "./component/RadioButton";
import Range from "./component/Range";
import Row from "./component/Row";
import Spinner from "./component/Spinner";
import Stack from "./component/Stack";
import Switch from "./component/Switch";
import Toast from "./component/Toast";
import ToggleButton from "./component/ToggleButton";
import Tooltip from "./component/Tooltip";
import Typography from "./component/Typography";

export { default as Accordion } from "./component/Accordion";
export * from "./saigon.types";

export * from "./component/Icon";

export type { IconType } from "./component/Icon";

export type { DropdownRef } from "./component/Dropdown";
export type { PopoverRef } from "./component/Popover";

export * from "./component/Alert";
// export type { AlertRef } from "./component/Alert";

export * from "./component/Dropdown";
export * from "./component/Navbar";

export {
  // Components
  //Alert,
  Animation,
  Badge,
  Breadcrumb,
  Button,
  ButtonGroup,
  Card,
  // Carousel,
  Checkbox,
  CloseButton,
  Col,
  Container,
  DateTimePicker,
  Div,
  //Dropdown,
  extendTheme,
  Figure,
  Form,
  Image,
  InputGroup,
  ListGroup,
  Modal,
  Nav,
  //Navbar,
  Offcanvas,
  //Overlay,
  Pagination,
  Placeholder,
  Popover,
  Progress,
  RadioButton,
  Range,
  Row,
  // Theme functions
  SaigonProvider,
  Spinner,
  Stack,
  StaticDateTimePicker,
  Switch,
  //Tabbed ,
  //Table ,
  Toast,
  ToggleButton,
  Tooltip,
  Typography,
};
