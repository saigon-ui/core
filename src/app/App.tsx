/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

import styled from "@emotion/styled";
import { useThemeColor } from "@saigon-ui/base/theme";
import { ButtonProps } from "@saigon-ui/component/Button";
import * as Icons from "@saigon-ui/component/Icon";
import { ModalContainerContext } from "@saigon-ui/component/Modal/Context";
import { OffcanvasRef } from "@saigon-ui/component/Offcanvas";
import { OffcanvasContainerContext } from "@saigon-ui/component/Offcanvas/Context";
import { ToastContainerContext } from "@saigon-ui/component/Toast/Context";
import {
  Accordion,
  Alert,
  AlertRef,
  AnimationType,
  Badge,
  Breadcrumb,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  CloseButton,
  Col,
  Container,
  DateTimePicker,
  Div,
  Dropdown,
  DropdownRef,
  Figure,
  Form,
  Image,
  InputGroup,
  ListGroup,
  Modal,
  Nav,
  Navbar,
  Offcanvas,
  Pagination,
  Placeholder,
  Popover,
  PopoverRef,
  Progress,
  RadioButton,
  Range,
  Row,
  SaigonProvider,
  Spinner,
  Stack,
  StaticDateTimePicker,
  Switch,
  Toast,
  ToggleButton,
  Tooltip,
  Typography,
} from "@saigon-ui/index";

import {
  CSSProperties,
  FC,
  forwardRef,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
// import "node_modules/bootstrap/dist/css/bootstrap.css";
//import "../lib/generator/scss/saigon-ui.css";
import { css as cssFunc } from "@emotion/react";
import {
  Animations,
  createElement,
  Placements,
  ThemeColors,
} from "@saigon-ui/base";
import { Breakpoints } from "@saigon-ui/base/constants";
import classNames from "classnames";
import moment from "moment";
import { Link } from "react-router-dom";

function TypographyPage() {
  return (
    <div className="container">
      <Image src="https://bit.ly/dan-abramov" objectFit="contain" />
      <br />
      <Container id="test" breakpoint="fluid" aria-activedescendant="">
        <Row g={5}>
          <Col>col-1</Col>
          <Col>col-2</Col>
        </Row>
      </Container>
      <Stack row width={"100"} position={"relative"}>
        <Div display={"unset"}>div-1</Div>
        <Div>div-2</Div>
      </Stack>
      <h1>Headings</h1>
      <Div id="test" border={true} borderColor={"primary"} borderOpacity={0.4}>
        <Typography as="h1" ps="1px">
          font Monospace
        </Typography>
      </Div>
    </div>
  );
}

function AlertsPage() {
  let [margin, marginSet] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      margin += 1;
      if (margin == 12) margin = 0;
      marginSet(margin);
    }, 60000);
    return () => clearInterval(timer);
  });

  const [isOpen, isOpenSet] = useState(true);
  const [isOpen_2, isOpenSet_2] = useState(true);
  const ref_2 = useRef<AlertRef>(null);
  const [effect, setEffect] = useState<AnimationType>("fade");

  return (
    <div className="container">
      <div className="card">
        <div className="card-header d-flex">
          <Button
            variant="primary"
            onClick={() => {
              isOpenSet(!isOpen);
            }}
          >
            Active 1
          </Button>
          <Button
            ms={"1"}
            variant="primary"
            onClick={() => {
              isOpen_2 ? ref_2.current?.close() : isOpenSet_2(true);
            }}
          >
            Active 2
          </Button>
          <Stack as={Form as any} flexDirection="row" gap="2" flex="2">
            <RadioButton
              name="effect"
              onChange={() => setEffect("clip")}
              value={effect == "clip"}
            >
              <RadioButton.Label>Clip</RadioButton.Label>
            </RadioButton>
            <RadioButton
              name="effect"
              onChange={() => setEffect("blind")}
              value={effect == "blind"}
            >
              <RadioButton.Label>Blind</RadioButton.Label>
            </RadioButton>
            <RadioButton
              name="effect"
              onChange={() => setEffect("bounce")}
              value={effect == "bounce"}
            >
              <RadioButton.Label>Bounce</RadioButton.Label>
            </RadioButton>
            <RadioButton
              name="effect"
              onChange={() => setEffect("drop")}
              value={effect == "drop"}
            >
              <RadioButton.Label>Drop</RadioButton.Label>
            </RadioButton>
            <RadioButton
              name="effect"
              onChange={() => setEffect("fade")}
              value={effect == "fade"}
            >
              <RadioButton.Label>Fade</RadioButton.Label>
            </RadioButton>
            <RadioButton
              name="effect"
              onChange={() => setEffect("fold")}
              value={effect == "fold"}
            >
              <RadioButton.Label>Fold</RadioButton.Label>
            </RadioButton>
            <RadioButton
              name="effect"
              onChange={() => setEffect("puff")}
              value={effect == "puff"}
            >
              <RadioButton.Label>Puff</RadioButton.Label>
            </RadioButton>
            <RadioButton
              name="effect"
              onChange={() => setEffect("scale")}
              value={effect == "scale"}
            >
              <RadioButton.Label>Scale</RadioButton.Label>
            </RadioButton>
            <RadioButton
              name="effect"
              onChange={() => setEffect("shake")}
              value={effect == "shake"}
            >
              <RadioButton.Label>Shake</RadioButton.Label>
            </RadioButton>
            <RadioButton
              name="effect"
              onChange={() => setEffect("slide")}
              value={effect == "slide"}
            >
              <RadioButton.Label>Slide</RadioButton.Label>
            </RadioButton>
            <RadioButton
              name="effect"
              onChange={() => setEffect("shift")}
              value={effect == "shift"}
            >
              <RadioButton.Label>Shift</RadioButton.Label>
            </RadioButton>
            <RadioButton
              name="effect"
              onChange={() => setEffect("pulsate")}
              value={effect == "pulsate"}
            >
              <RadioButton.Label>Pulsate</RadioButton.Label>
            </RadioButton>
            <RadioButton
              name="effect"
              onChange={() => setEffect("rotate")}
              value={effect == "rotate"}
            >
              <RadioButton.Label>Rotate</RadioButton.Label>
            </RadioButton>
          </Stack>
        </div>
        <div className="card-body">
          {isOpen && (
            <Alert
              variant="success"
              dismissible
              animation="fade"
              onClose={() => {
                alert("Alert is hidden!");
                isOpenSet(false);
              }}
            >
              <strong>Holy guacamole!</strong> You should check in on some of
              those fields below.
            </Alert>
          )}
        </div>
        <div className="card-body">
          {isOpen_2 && (
            <Alert
              ref={ref_2}
              variant="danger"
              animation={effect}
              onClose={() => {
                isOpenSet_2(false);
              }}
            >
              <Alert.Heading>Well done!</Alert.Heading>
              <p>
                Aww yeah, you{" "}
                <Alert.Link href="#" linkColor={"danger"}>
                  successfully
                </Alert.Link>{" "}
                read this important alert message. This example text is going to
                run a bit longer so that you can see how spacing within an alert
                works with this kind of content.
              </p>
              <hr />
              <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep
                things nice and tidy.
              </p>
              <hr />
              <Stack justifyContent={"end"}>
                <Button
                  onClick={() => ref_2.current?.close()}
                  variant="success"
                  outline
                >
                  Close me
                </Button>
              </Stack>
            </Alert>
          )}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          width: "100%",
        }}
      >
        <div style={{ width: "50%" }}>
          <h1>Variant</h1>
          <div>
            {ThemeColors.map((variant, k) => (
              <Alert
                key={k}
                variant={variant}
                dismissible={true}
                animation="blind"
              >
                Variant {variant}
              </Alert>
            ))}
          </div>
        </div>

        <div style={{ width: "50%" }}>
          <div>
            <h1>Dismissible</h1>
            <div>
              <Alert variant="success" dismissible={true} animation="drop">
                Dismissible = true
              </Alert>
              <Alert variant="danger" dismissible={false} animation="drop">
                Dismissible = false
              </Alert>
            </div>
          </div>
          <div>
            <h1>No animation</h1>
            <div>
              <Alert
                variant="success"
                animation="none"
                dismissible
                onClose={() => alert("Closed")}
              >
                animation="none"
              </Alert>
              <Alert
                variant="danger"
                dismissible
                onClose={() => alert("Closed")}
              >
                No animation props
              </Alert>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccordionPage() {
  const children = [
    <Accordion.Item key={0}>
      <Accordion.Header>
        <Accordion.Button onClick={() => {}}>
          Accordion Item #1
        </Accordion.Button>
      </Accordion.Header>
      <Accordion.Collapse>
        <Accordion.Body>
          <strong>This is the first item's accordion body.</strong> It is shown
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </Accordion.Body>
      </Accordion.Collapse>
    </Accordion.Item>,
    <Accordion.Item key={1}>
      <Accordion.Header>
        <Accordion.Button>Accordion Item #2</Accordion.Button>
      </Accordion.Header>
      <Accordion.Collapse>
        <Accordion.Body>
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control the
          overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML
          can go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </Accordion.Body>
      </Accordion.Collapse>
    </Accordion.Item>,
    <Accordion.Item key={2}>
      <Accordion.Header>
        <Accordion.Button>Accordion Item #3</Accordion.Button>
      </Accordion.Header>
      <Accordion.Collapse>
        <Accordion.Body className="my-test" mt="5">
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </Accordion.Body>
      </Accordion.Collapse>
    </Accordion.Item>,
  ];

  return (
    <div style={{ width: "32rem" }}>
      <h1>Example</h1>
      <Accordion>{children}</Accordion>
      <br />
      <h1>Flush</h1>
      <Accordion flush>{children}</Accordion>

      <br />
      <h1>Always open </h1>
      <Accordion alwaysOpen>{children}</Accordion>
      <br />
      <h1>Expanded</h1>
      <Accordion expanded>{children}</Accordion>
    </div>
  );
}

function BadgePage() {
  return (
    <>
      <div>
        <h1>
          Example heading <Badge>New</Badge>
        </h1>
        <h2>
          Example heading <Badge badgeColor="secondary">New</Badge>
        </h2>
        <h3>
          Example heading <Badge badgeColor="success">New</Badge>
        </h3>
        <h4>
          Example heading <Badge badgeColor="info">New</Badge>
        </h4>
        <h5>
          Example heading <Badge badgeColor="warning">New</Badge>
        </h5>
        <h6>
          Example heading <Badge badgeColor="danger">New</Badge>
        </h6>
      </div>
      <div>
        <Button variant="primary">
          Notifications <Badge badgeColor="secondary">4</Badge>
        </Button>
      </div>

      <div>
        <h1>
          Example heading{" "}
          <Badge roundedPill badgeColor="danger">
            New
          </Badge>
        </h1>
        <h2>
          Example heading{" "}
          <Badge roundedPill badgeColor="warning">
            New
          </Badge>
        </h2>
        <h3>
          Example heading{" "}
          <Badge roundedPill badgeColor="info">
            New
          </Badge>
        </h3>
        <h4>
          Example heading{" "}
          <Badge roundedPill badgeColor="success">
            New
          </Badge>
        </h4>
        <h5>
          Example heading{" "}
          <Badge roundedPill badgeColor="secondary">
            New
          </Badge>
        </h5>
        <h6>
          Example heading <Badge roundedPill>New</Badge>
        </h6>
      </div>
    </>
  );
}

function BreadcrumbPage() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb divider="'@'">
        <Breadcrumb.Item>
          <a href="#">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Library</Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb divider="url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);">
        <Breadcrumb.Item>
          <a href="#">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Library</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#">Data</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

function ButtonPage() {
  return (
    <div>
      <h1>Variants</h1>
      <Stack gap="1" flexWrap="wrap">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button as="a" variant="link">
          Link
        </Button>
      </Stack>
      <h1>Close Button</h1>
      <div style={{ display: "flex", gap: "12px" }}>
        <CloseButton />
        <CloseButton disabled />
      </div>

      <br />
      <h1>Disable text wrapping</h1>
      <div style={{ display: "flex", gap: "12px" }}>
        <Button
          variant="primary"
          noTextWrap={true}
          textTrunc
          style={{ width: "200px" }}
        >
          This button have a very long title at least the size is larger than
          100px
        </Button>
      </div>

      <br />
      <h1>Button tag &lt;input/&gt;</h1>
      <div style={{ display: "flex", gap: "12px" }}>
        <Button as="input" type="submit" variant="primary">
          Primary
        </Button>
      </div>

      <br />
      <h1>Outline buttons </h1>
      <Stack gap="1" flexWrap="wrap">
        <Button>Default</Button>
        <Button variant="primary" outline>
          Primary
        </Button>
        <Button variant="secondary" outline>
          Secondary
        </Button>
        <Button variant="success" outline>
          Success
        </Button>
        <Button variant="danger" outline>
          Danger
        </Button>
        <Button variant="warning" outline>
          Warning
        </Button>
        <Button variant="info" outline>
          Info
        </Button>
        <Button variant="light" outline>
          Light
        </Button>
        <Button variant="dark" outline>
          Dark
        </Button>
        <Button as="a" variant="link" outline>
          Link
        </Button>
      </Stack>

      <h1>Sizes</h1>
      <div style={{ display: "flex", gap: "12px" }}>
        <Button variant="primary" size="lg">
          Primary
        </Button>
        <Button variant="secondary" size="lg">
          Secondary
        </Button>
      </div>
      <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
        <Button variant="primary" size="sm">
          Primary
        </Button>
        <Button variant="secondary" size="sm">
          Secondary
        </Button>
      </div>

      <h1>Disabled state</h1>
      <div style={{ display: "flex", gap: "12px" }}>
        <Button variant="primary" disabled>
          Primary
        </Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
        <Button variant="primary" outline disabled>
          Primary
        </Button>
        <Button variant="secondary" outline disabled>
          Secondary
        </Button>
      </div>
      <p>
        Disabled buttons using the &lt;a&gt; element behave a bit different:
      </p>
      <div style={{ display: "flex", gap: "12px" }}>
        <Button as="a" variant="success" disabled>
          Success
        </Button>
        <Button as="a" variant="danger" disabled>
          Danger
        </Button>
      </div>

      <h1>Loading state</h1>
      <Stack gap="1" flexWrap="wrap">
        <Button variant="primary" isLoading>
          My Button
        </Button>
        <Button
          variant="danger"
          isLoading
          loadingSpinner="bars-2"
          loadingText="Loading"
        >
          My Button
        </Button>
        <Button
          variant="success"
          isLoading
          loadingSpinner="bars-1"
          loadingText="Loading"
          spinnerPlacement="start"
        >
          My Button
        </Button>
        <Button
          variant="danger"
          isLoading
          loadingText={
            <span>
              <b>Sa</b>
              <i>VING</i>
            </span>
          }
          loadingSpinner={<Spinner animation="dots-1" size="24px" />}
        >
          My Button
        </Button>
      </Stack>

      <h1>Button with icons</h1>
      <Stack gap="1" flexWrap="wrap">
        <Button variant="primary" startIcon={<Icons.IconWarning />}>
          My Button
        </Button>
        <Button variant="secondary" endIcon={<Icons.IconError />}>
          My Button
        </Button>
        <Button
          variant="danger"
          startIcon={<Icons.IconWarning />}
          endIcon={<Icons.IconError />}
        >
          My Button
        </Button>
        <Button
          variant="danger"
          startIcon={<Icons.IconWarning />}
          endIcon={<Icons.IconError />}
          iconSpacing="2rem"
        >
          My Button
        </Button>
      </Stack>
      <h1>Ripple effect</h1>
      <Stack gap="1" flexWrap="wrap">
        <Button variant="primary" clickEffect="ripple">
          Ripple
        </Button>
        <Button variant="success" clickEffect="puff">
          Puff
        </Button>
        <Button variant="secondary" clickEffect="slide">
          Slide
        </Button>
        <Button variant="warning" clickEffect="stripe">
          Stripe
        </Button>
        <Button variant="light" clickEffect="slide">
          Slide
        </Button>
        <Button variant="primary" outline clickEffect="ripple">
          Ripple
        </Button>
        <Button variant="success" outline clickEffect="puff">
          Puff
        </Button>
        <Button variant="dark" outline clickEffect="slide">
          Slide
        </Button>
        <Button variant="warning" outline clickEffect="stripe">
          Stripe
        </Button>
      </Stack>
      <Stack gap="1" flexWrap="wrap" mt="5">
        <Button variant="primary" clickEffect="box-shadow">
          Box Shadow
        </Button>
        <Button variant="success" clickEffect="box-shadow">
          Box Shadow
        </Button>
        <Button variant="secondary" clickEffect="box-shadow">
          Box Shadow
        </Button>
        <Button variant="warning" clickEffect="box-shadow">
          Box Shadow
        </Button>
        <Button variant="info" clickEffect="box-shadow">
          Box Shadow
        </Button>
      </Stack>
      <Stack gap="1" flexWrap="wrap" mt="5">
        <Button
          variant="primary"
          startIcon={<Icons.IconWarning />}
          endIcon={<Icons.IconError />}
          clickEffect="ripple"
        >
          My Button
        </Button>
        <Button
          variant="success"
          startIcon={<Icons.IconWarning />}
          endIcon={<Icons.IconError />}
          clickEffect="stripe"
        >
          My Button
        </Button>
        <Button
          variant="danger"
          startIcon={<Icons.IconWarning />}
          endIcon={<Icons.IconError />}
          clickEffect="box-shadow"
        >
          My Button
        </Button>
      </Stack>
      <h1>Responsive</h1>
      <Stack gap="1" flexWrap="wrap">
        <Button
          variant={{
            xs: "primary",
            sm: "secondary",
            md: "success",
            lg: "danger",
            xl: "warning",
            xxl: "info",
          }}
        >
          Primary
        </Button>
      </Stack>
    </div>
  );
}

function ToggleButtonPage() {
  return (
    <div>
      <h1>Variants</h1>
      <Button variant="primary">Left</Button>
      <ButtonGroup>
        <ToggleButton variant="primary" outline clickEffect="ripple">
          <Icons.IconError />
        </ToggleButton>
        <ToggleButton variant="secondary" outline>
          <Icons.IconError />
        </ToggleButton>
        <ToggleButton variant="success" outline>
          <Icons.IconError />
        </ToggleButton>
        <ToggleButton variant="danger" outline>
          <Icons.IconError />
        </ToggleButton>
        <ToggleButton variant="warning" outline>
          <Icons.IconError />
        </ToggleButton>
        <ToggleButton variant="info" outline>
          <Icons.IconError />
        </ToggleButton>
        <ToggleButton variant="light" outline>
          <Icons.IconError />
        </ToggleButton>
        <ToggleButton variant="dark" outline>
          <Icons.IconError />
        </ToggleButton>
        <ToggleButton variant="link" outline>
          <Icons.IconError />
        </ToggleButton>
        <ToggleButton>
          <Icons.IconError />
        </ToggleButton>
      </ButtonGroup>
    </div>
  );
}

function ButtonGroupPage() {
  const [boxChecked, boxCheckedSet] = useState<string[]>([]);
  const [radioChecked, radioCheckedSet] = useState("0");
  return (
    <div>
      <h1>Basic example</h1>
      <ButtonGroup>
        <Button variant="primary">Left</Button>
        <Button variant="primary">Middle</Button>
        <Button variant="primary">Right</Button>
      </ButtonGroup>

      <br />
      <h1>Using &lt;a&gt;</h1>
      <ButtonGroup>
        <Button as="a" href="#" variant="primary">
          Active link
        </Button>
        <Button as="a" href="#" variant="primary">
          Link
        </Button>
        <Button as="a" href="#" variant="primary" disabled>
          Link
        </Button>
      </ButtonGroup>

      <h1>Mixed styles</h1>
      <ButtonGroup>
        <Button variant="danger">Left</Button>
        <Button variant="warning">Middle</Button>
        <Button variant="success">Right</Button>
      </ButtonGroup>

      <h1>Outlined styles</h1>
      <ButtonGroup>
        <Button variant="danger" outline>
          Left
        </Button>
        <Button variant="warning" outline>
          Middle
        </Button>
        <Button variant="success" outline>
          Right
        </Button>
      </ButtonGroup>

      <h1>Checkbox button groups</h1>
      <ButtonGroup>
        <input
          type="checkbox"
          className="btn-check"
          autoComplete="off"
          readOnly
          checked={boxChecked.indexOf("0") > -1}
        />
        <label
          className="btn btn-outline-primary"
          onClick={() => {
            let box;
            if (boxChecked.indexOf("0") > -1)
              box = boxChecked.filter((a) => a != "0");
            else box = [...boxChecked, "0"];
            boxCheckedSet(box);
          }}
        >
          Checkbox 1
        </label>

        <input
          type="checkbox"
          className="btn-check"
          autoComplete="off"
          readOnly
          checked={boxChecked.indexOf("1") > -1}
        />
        <label
          className="btn btn-outline-primary"
          onClick={() => {
            let box;
            if (boxChecked.indexOf("1") > -1)
              box = boxChecked.filter((a) => a != "1");
            else box = [...boxChecked, "1"];
            boxCheckedSet(box);
          }}
        >
          Checkbox 2
        </label>

        <input
          type="checkbox"
          className="btn-check"
          autoComplete="off"
          readOnly
          checked={boxChecked.indexOf("2") > -1}
        />
        <label
          className="btn btn-outline-primary"
          onClick={() => {
            let box;
            if (boxChecked.indexOf("2") > -1)
              box = boxChecked.filter((a) => a != "2");
            else box = [...boxChecked, "2"];
            boxCheckedSet(box);
          }}
        >
          Checkbox 3
        </label>
      </ButtonGroup>

      <h1>Radio button groups</h1>
      <ButtonGroup>
        <input
          type="radio"
          className="btn-check"
          autoComplete="off"
          readOnly
          checked={radioChecked == "0"}
        />
        <label
          className="btn btn-outline-primary"
          onClick={() => radioCheckedSet("0")}
        >
          Radio 1
        </label>

        <input
          type="radio"
          className="btn-check"
          autoComplete="off"
          readOnly
          checked={radioChecked == "1"}
        />
        <label
          className="btn btn-outline-primary"
          onClick={() => {
            radioCheckedSet("1");
          }}
        >
          Radio 2
        </label>

        <input
          type="radio"
          className="btn-check"
          autoComplete="off"
          readOnly
          checked={radioChecked == "2"}
        />
        <label
          className="btn btn-outline-primary"
          onClick={() => {
            radioCheckedSet("2");
          }}
        >
          Radio 3
        </label>
      </ButtonGroup>

      <h1>Button toolbar</h1>
      <ButtonGroup></ButtonGroup>

      <br />
      <h1>Sizing</h1>
      <div style={{ marginBottom: "12px" }}>
        <ButtonGroup size="lg">
          <Button variant="primary">Left</Button>
          <Button variant="primary">Middle</Button>
          <Button variant="primary">Right</Button>
        </ButtonGroup>
      </div>
      <div style={{ marginBottom: "12px" }}>
        <ButtonGroup size="md">
          <Button variant="primary">Left</Button>
          <Button variant="primary">Middle</Button>
          <Button variant="primary">Right</Button>
        </ButtonGroup>
      </div>
      <div style={{ marginBottom: "12px" }}>
        <ButtonGroup size="sm">
          <Button variant="primary">Left</Button>
          <Button variant="primary">Middle</Button>
          <Button variant="primary">Right</Button>
        </ButtonGroup>
      </div>

      <br />
      <h1>Nesting</h1>
      <ButtonGroup size="lg">
        <Button variant="primary">1</Button>
        <Button variant="primary">2</Button>
        <Button variant="primary">Right</Button>
      </ButtonGroup>
    </div>
  );
}
function CardPage() {
  return (
    <>
      <div style={{ width: "32rem" }}>
        <h1>Example</h1>
        <Card>
          <Card.Img variant="top" placeholder />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      <div style={{ width: "32rem" }}>
        <h1>Content types</h1>

        <br />
        <h2>Body</h2>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>

        <br />
        <h2>Titles, text, and links</h2>
        <Card>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Subtitle textColor="secondary">Card subtitle</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link>Card link</Card.Link>
            <Card.Link>Another link</Card.Link>
          </Card.Body>
        </Card>

        <br />
        <h2>Images</h2>
        <Card>
          <Card.Img variant="top" placeholder />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <br />
        <h2>List groups </h2>
        <Card>
          <ListGroup>
            <ListGroup.Item>An item</ListGroup.Item>
            <ListGroup.Item>A second item</ListGroup.Item>
            <ListGroup.Item>A third item</ListGroup.Item>
          </ListGroup>
        </Card>

        <br />
        <h2>Kitchen sink</h2>
        <Card>
          <Card.Img variant="top" placeholder />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup flush>
            <ListGroup.Item>An item</ListGroup.Item>
            <ListGroup.Item>A second item</ListGroup.Item>
            <ListGroup.Item>A third item</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link>Card link</Card.Link>
            <Card.Link>Another link</Card.Link>
          </Card.Body>
        </Card>

        <br />
        <h2>Header and footer </h2>
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button as="a" variant="primary" href="#">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

function DropdownPage() {
  const [clickCount, setClickCount] = useState(0);
  const btnRef = useRef<HTMLElement>(null);
  const menuRef = useRef<DropdownRef>(null);

  return (
    <div>
      <h1>Single button</h1>
      <Stack flexDirection="row" gap="1" justifyContent="center">
        <Dropdown animation="fade">
          <Dropdown.Toggle border>Dropdown</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item active>Action</Dropdown.Item>
            <Dropdown.Item as="a" disabled>
              Another action
            </Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown side="left" alignment="start" animation="drop">
          <Dropdown.Toggle border>Left Start</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item active>Action</Dropdown.Item>
            <Dropdown.Item as="a" disabled>
              Another action
            </Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown side="right" alignment="start" animation="bounce">
          <Dropdown.Toggle border>Right Start</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item active>Action</Dropdown.Item>
            <Dropdown.Item as="a" disabled>
              Another action
            </Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown side="left" alignment="end" animation="puff">
          <Dropdown.Toggle border>Left End</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item active>Action</Dropdown.Item>
            <Dropdown.Item as="a" disabled>
              Another action
            </Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown side="right" alignment="end" animation="rotate">
          <Dropdown.Toggle border>Right End</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item active>Action</Dropdown.Item>
            <Dropdown.Item as="a" disabled>
              Another action
            </Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Stack>

      <h1 style={{ marginTop: "1rem" }}>Split button</h1>
      <Dropdown splitButton>
        <Button variant="danger">Action</Button>
        <Dropdown.Toggle variant="success"></Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item active>Action</Dropdown.Item>
          <Dropdown.Item as="a" disabled>
            Another action
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Something else here</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <h1>Programmatically show</h1>
      <Button
        ref={btnRef}
        onClick={() => {
          setTimeout(() => {
            menuRef.current!.show(btnRef.current!);
            setTimeout(() => {
              menuRef.current!.close();
            }, 3200);
          }, 1600);
          setClickCount((v) => v + 1);
        }}
      >
        Delay 1.6s to show, then 3.2s close{" "}
        {clickCount > 0 && `(${clickCount})`}
      </Button>
      <Dropdown ref={menuRef}>
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item as="a" disabled>
            Another action
          </Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

function ListGroupPage() {
  const RichItem = (props: any) => {
    return (
      <ListGroup.Item
        display="flex"
        justifyContent={"between"}
        alignItems={"start"}
      >
        <Div ms={"2"} me={"auto"}>
          <Div fontWeight="bold">Subheading</Div>
          {props.children}
        </Div>
        <Badge textBg={"primary"} roundedPill>
          {String(props.children).length}
        </Badge>
      </ListGroup.Item>
    );
  };

  const CustomContent = () => {
    return (
      <Div>
        <Stack flexDirection={"row"} width={"100"} justifyContent={"between"}>
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </Stack>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
      </Div>
    );
  };

  return (
    <div>
      <h1>Basic example</h1>
      <ListGroup>
        <ListGroup.Item>An item</ListGroup.Item>
        <ListGroup.Item>A second item</ListGroup.Item>
        <ListGroup.Item>A third item</ListGroup.Item>
      </ListGroup>

      <h1>Active items</h1>
      <ListGroup>
        <ListGroup.Item active>An item</ListGroup.Item>
        <ListGroup.Item>A second item</ListGroup.Item>
        <ListGroup.Item>A third item</ListGroup.Item>
      </ListGroup>

      <h1>Disabled items</h1>
      <ListGroup>
        <ListGroup.Item disabled onClick={() => alert("test")}>
          A disabled item
        </ListGroup.Item>
        <ListGroup.Item>An item</ListGroup.Item>
        <ListGroup.Item>A second item</ListGroup.Item>
        <ListGroup.Item>A third item</ListGroup.Item>
      </ListGroup>

      <h1>Flush</h1>
      <ListGroup flush>
        <ListGroup.Item>An item</ListGroup.Item>
        <ListGroup.Item>A second item</ListGroup.Item>
        <ListGroup.Item>A third item</ListGroup.Item>
        <ListGroup.Item>A fourth item</ListGroup.Item>
        <ListGroup.Item>And a fifth one</ListGroup.Item>
      </ListGroup>

      <h1>Numbered</h1>
      <ListGroup numbered>
        <ListGroup.Item>An item</ListGroup.Item>
        <ListGroup.Item>A second item</ListGroup.Item>
        <ListGroup.Item>A third item</ListGroup.Item>
        <ListGroup.Item>A fourth item</ListGroup.Item>
        <ListGroup.Item>And a fifth one</ListGroup.Item>
      </ListGroup>

      <h1>Rich list item</h1>
      <ListGroup numbered>
        <RichItem>An item</RichItem>
        <RichItem>A second item</RichItem>
        <RichItem>A third item</RichItem>
        <RichItem>A fourth item</RichItem>
        <RichItem>And a fifth one</RichItem>
      </ListGroup>

      <h1>Horizontal</h1>
      <ListGroup horizontal>
        <ListGroup.Item>An item</ListGroup.Item>
        <ListGroup.Item>A second item</ListGroup.Item>
        <ListGroup.Item>A third item</ListGroup.Item>
        <ListGroup.Item>A fourth item</ListGroup.Item>
        <ListGroup.Item>And a fifth one</ListGroup.Item>
      </ListGroup>

      <h1>Horizontal with equal item width</h1>
      <ListGroup horizontal>
        <ListGroup.Item flexFill>An item</ListGroup.Item>
        <ListGroup.Item flexFill>A second item</ListGroup.Item>
        <ListGroup.Item flexFill>A third item</ListGroup.Item>
        <ListGroup.Item flexFill>A fourth item</ListGroup.Item>
        <ListGroup.Item flexFill>And a fifth one</ListGroup.Item>
      </ListGroup>

      <h1>Variants</h1>
      <ListGroup>
        <ListGroup.Item>A simple default list group item</ListGroup.Item>
        <ListGroup.Item variant="primary">
          A simple primary list group item
        </ListGroup.Item>
        <ListGroup.Item variant="secondary">
          A simple secondary list group item
        </ListGroup.Item>
        <ListGroup.Item variant="success">
          A simple success list group item
        </ListGroup.Item>
        <ListGroup.Item variant="danger">
          A simple danger list group item
        </ListGroup.Item>
        <ListGroup.Item variant="warning">
          A simple warning list group item
        </ListGroup.Item>
        <ListGroup.Item variant="info">
          A simple info list group item
        </ListGroup.Item>
        <ListGroup.Item variant="light">
          A simple light list group item
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          A simple dark list group item
        </ListGroup.Item>
      </ListGroup>

      <h1>For links and buttons</h1>
      <ListGroup>
        <ListGroup.Item action>A simple default list group item</ListGroup.Item>
        <ListGroup.Item action variant="primary">
          A simple primary list group item
        </ListGroup.Item>
        <ListGroup.Item action variant="secondary">
          A simple secondary list group item
        </ListGroup.Item>
        <ListGroup.Item action variant="success">
          A simple success list group item
        </ListGroup.Item>
        <ListGroup.Item action variant="danger">
          A simple danger list group item
        </ListGroup.Item>
        <ListGroup.Item action variant="warning">
          A simple warning list group item
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
          A simple info list group item
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          A simple light list group item
        </ListGroup.Item>
        <ListGroup.Item action variant="dark">
          A simple dark list group item
        </ListGroup.Item>
      </ListGroup>

      <h1>Custom content</h1>
      <ListGroup>
        <ListGroup.Item as="a" href="#" stretchedLink active>
          <CustomContent />
        </ListGroup.Item>
        <ListGroup.Item as="a" href="#" stretchedLink>
          <CustomContent />
        </ListGroup.Item>
        <ListGroup.Item href="#" stretchedLink>
          <CustomContent />
        </ListGroup.Item>
      </ListGroup>

      <h1>Checkboxes </h1>
      <ListGroup>
        <ListGroup.Item active>
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            id="firstCheckbox"
          />
          <label className="form-check-label">First checkbox</label>
        </ListGroup.Item>
        <ListGroup.Item>
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            id="firstCheckbox"
          />
          <label className="form-check-label">Second checkbox</label>
        </ListGroup.Item>
        <ListGroup.Item>
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            id="firstCheckbox"
          />
          <label className="form-check-label">Third checkbox</label>
        </ListGroup.Item>
      </ListGroup>

      <h1>Radios</h1>
      <ListGroup>
        <ListGroup.Item active>
          <input
            className="form-check-input me-1"
            type="radio"
            name="listGroupRadio"
            id="firstCheckbox"
          />
          <label className="form-check-label">First checkbox</label>
        </ListGroup.Item>
        <ListGroup.Item>
          <input
            className="form-check-input me-1"
            type="radio"
            name="listGroupRadio"
            id="firstCheckbox"
          />
          <label className="form-check-label">Second checkbox</label>
        </ListGroup.Item>
        <ListGroup.Item>
          <input
            className="form-check-input me-1"
            type="radio"
            name="listGroupRadio"
            id="firstCheckbox"
          />
          <label className="form-check-label">Third checkbox</label>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

function PopoversPage() {
  const MyToggle = forwardRef<any>((props: any, ref) => {
    return (
      <Div p="2" border={true} width="220px">
        <h5>Heading</h5>
        <Button ref={ref} {...props} variant="primary">
          Toggle Popover
        </Button>
      </Div>
    );
  });

  const [clickCount, setClickCount] = useState(0);
  const btnRef = useRef<HTMLElement>(null);
  const popRef = useRef<PopoverRef>(null);

  return (
    <Div mt="10rem" ms="5rem">
      <h1>Popover title</h1>
      <Stack flexDirection="row" gap="2" flexWrap="wrap">
        {Animations.map((anim, k) => (
          <Popover key={k} animation={anim}>
            <Popover.Toggle
              variant="success"
              onClick={() => console.log("Click me! callback")}
            >
              Click me! {anim}
            </Popover.Toggle>
            <Popover.Modal>
              <Popover.Title>Popover title</Popover.Title>
              <Popover.Body>
                And here's some amazing content. It's very engaging. Right?
              </Popover.Body>
            </Popover.Modal>
          </Popover>
        ))}
      </Stack>
      <h1>No animation</h1>
      <Popover animation="none" placement="bottom-middle">
        <Popover.Toggle
          variant="success"
          onClick={() => console.log("Click me! callback")}
        >
          Click me!
        </Popover.Toggle>
        <Popover.Modal>
          <Popover.Title>Popover title</Popover.Title>
          <Popover.Body>
            And here's some amazing content. It's very engaging. Right?
          </Popover.Body>
        </Popover.Modal>
      </Popover>

      <h1>Custom toggle</h1>
      <Popover side="right" alignment="start">
        <Popover.Toggle as={MyToggle}></Popover.Toggle>
        <Popover.Modal>
          <Popover.Title>Popover title</Popover.Title>
          <Popover.Body>
            And here's some amazing content. It's very engaging. Right?
          </Popover.Body>
        </Popover.Modal>
      </Popover>

      <h1>No auto dismiss</h1>
      <Popover side="left" alignment="end" autoDismiss={false}>
        <Popover.Toggle>Show it</Popover.Toggle>
        <Popover.Modal>
          <Popover.CloseButton style={{ float: "right", margin: "5px" }} />
          <Popover.Body>
            And here's some amazing content. It's very engaging. Right?
          </Popover.Body>
        </Popover.Modal>
      </Popover>

      <h1>Show on hover</h1>
      <Popover hover>
        <Popover.Toggle>hover me</Popover.Toggle>
        <Popover.Modal>
          <Popover.Body>
            And here's some amazing content. It's very engaging. Right?
          </Popover.Body>
        </Popover.Modal>
      </Popover>

      <h1>Programmatically show</h1>
      <Button
        ref={btnRef}
        onClick={() => {
          setTimeout(() => {
            popRef.current!.show(btnRef.current!);
            setTimeout(() => {
              popRef.current!.close();
            }, 3200);
          }, 1600);
          setClickCount((v) => v + 1);
        }}
      >
        Delay 1.6s to show, then 3.2s close{" "}
        {clickCount > 0 && `(${clickCount})`}
      </Button>
      <Popover
        ref={popRef}
        placement={Placements[clickCount % Placements.length]}
      >
        <Popover.Modal>
          <Popover.Body>
            And here's some amazing content. It's very engaging. Right?
          </Popover.Body>
        </Popover.Modal>
      </Popover>
    </Div>
  );
}

function ProgressBarPage() {
  return (
    <Div mt="10rem" ms="5rem">
      <h1>Progress</h1>
      <Progress now={0} mt="1"></Progress>
      <Progress now={25} mt="1" striped></Progress>
      <Progress now={75} mt="1" striped animated></Progress>
      <Progress now={100} mt="1"></Progress>

      <h1>Height</h1>
      <Progress now={25} mt="1" variant="success" height={"1px"}></Progress>
      <Progress now={75} mt="2" variant="warning" height={"2rem"}>
        height="2rem"
      </Progress>

      <h1>Backgrounds</h1>
      <Progress now={20} mt="1" variant="success">
        variant="success"
      </Progress>
      <Progress now={25} mt="1" variant="info">
        variant="info"
      </Progress>
      <Progress now={50} mt="1" variant="warning">
        variant="warning"
      </Progress>
      <Progress now={75} mt="1" variant="danger">
        variant="danger"
      </Progress>
      <Progress now={100} mt="1" bg="purple">
        bg="purple"
      </Progress>
      <Progress now={80} mt="1" bg="rgb(165, 120, 89)">
        bg="rgb(165, 120, 89)""
      </Progress>
      <Progress now={80} mt="1" bg="secondary">
        bg="secondary"
      </Progress>
      <Progress now={75} mt="2" variant="dark" bgOpacity={0.25}>
        variant="dark" bgOpacity=0.25
      </Progress>

      <h1>Multiple bars</h1>
      <Progress multiple>
        <Progress now={15} variant="success" width="15%">
          width='15%'
        </Progress>
        <Progress now={30} variant="info" width="30%">
          width='30%'
        </Progress>
        <Progress now={20} variant="warning" width="20%">
          width='20%'
        </Progress>
      </Progress>
    </Div>
  );
}

function SpinnerPage() {
  return (
    <Div>
      <h1>Border spinner</h1>
      <Stack gap={"3"}>
        <Spinner
          animation="border"
          textColor={"primary"}
          width={"20px"}
          height={"20px"}
        />
        <Spinner animation="grow" textColor={"success"} />
        <Spinner animation="dots-1" textColor={"info"} />
        <Spinner animation="dots-2" textColor={"warning"} />
        <Spinner animation="dots-3" textColor={"danger"} />
        <Spinner animation="dots-4" textColor={"primary"} />
        <Spinner animation="bars-1" textColor={"info"} />
        <Spinner animation="bars-2" textColor={"warning"} />
        <Spinner animation="pulse-1" textColor={"success"} />
        <Spinner animation="pulse-2" textColor={"primary"} />
        <Spinner animation="moon_1" textColor={"danger"} />
        <Spinner animation="moon_2" textColor={"primary"} />
        <Spinner animation="buddhism_1" textColor={"success"} />
        <Spinner animation="sync-1" textColor={"info"} />
        <Spinner animation="sync-2" textColor={"warning"} />
      </Stack>
      <h1>Button with spinner</h1>
      <Button variant="primary">
        <Spinner
          animation="sync-2"
          textColor={"white"}
          width={"18px"}
          height={"18px"}
          me={"1"}
        />
        Loading
      </Button>
    </Div>
  );
}

let ToastCount = 0;
function ToastPage() {
  const ctx = useContext(ToastContainerContext);

  const createToast = () => {
    const textBg = [
      "dark",
      "light",
      "primary",
      "secondary",
      "success",
      "info",
      "warning",
      "danger",
    ];
    ctx.createToast((ref) => (
      <Toast
        ref={ref}
        border={"0"}
        textBg={textBg[ToastCount++ % textBg.length] as any}
        btnCloseWhite
        autoHide={false}
      >
        <Div display={"flex"}>
          <Toast.Body>
            Hello, world! This is a toast message ({ToastCount}).
          </Toast.Body>
          <Toast.CloseButton />
        </Div>
      </Toast>
    ));
  };

  return (
    <Div>
      <h1>Live demo</h1>
      <Button onClick={() => createToast()}>Show Toast</Button>

      <h1>Toast</h1>
      <Toast.Container>
        <Toast animation="fade">
          <Toast.Header>
            {/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
        <Toast delay={99999999}>
          <Toast.Header>
            {/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
            <strong className="me-auto">Bootstrap</strong>
            <small>1 mins ago</small>
            <Toast.CloseButton />
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
        <Toast delay={99999999}>
          <Div display={"flex"}>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            <Toast.CloseButton />
          </Div>
        </Toast>

        <Toast delay={99999999}>
          <Toast.Body>
            Hello, world! This is a toast message.
            <div className="mt-2 pt-2 border-top">
              <Button variant="primary" size="sm">
                Take action
              </Button>

              <Toast.CloseButton
                as={(props: any) => (
                  <Button variant="danger" size="sm" {...props}>
                    Close
                  </Button>
                )}
              />
            </div>
          </Toast.Body>
        </Toast>

        <Toast border={"0"} textBg="primary" delay={99999999} btnCloseWhite>
          <Div display={"flex"}>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            <Toast.CloseButton />
          </Div>
        </Toast>
      </Toast.Container>
    </Div>
  );
}

function TooltipPage() {
  return (
    <Div>
      <h1>Tooltips on links</h1>
      <div className="muted">
        Placeholder text to demonstrate some{" "}
        <Tooltip title="Default tooltip" animation="fade">
          <a href="#" data-bs-title="Default tooltip">
            inline links
          </a>
        </Tooltip>{" "}
        with tooltips. This is now just filler, no killer. Content placed here
        just to mimic the presence of{" "}
        <Tooltip title="Another tooltip">
          <a href="#">real text </a>
        </Tooltip>
        . And all that just to give you an idea of how tooltips would look when
        used in real-world situations. So hopefully you've now seen how{" "}
        <Tooltip title="Another one here too">
          <a href="#"> these tooltips on links</a>
        </Tooltip>{" "}
        can work in practice, once you use them on{" "}
        <Tooltip title="The last tip!">
          <a href="#">your own</a>
        </Tooltip>{" "}
        site or project. List of effect.{" "}
        <Tooltip title="fade" animation="fade">
          <a href="#">fade</a>
        </Tooltip>
        ,{" "}
        <Tooltip title="clip" animation="clip">
          <a href="#">clip</a>
        </Tooltip>
        ,{" "}
        <Tooltip title="blind" animation="blind">
          <a href="#">blind</a>
        </Tooltip>
        ,{" "}
        <Tooltip title="bounce" animation="bounce">
          <a href="#">bounce</a>
        </Tooltip>
        ,{" "}
        <Tooltip title="drop" animation="drop">
          <a href="#">drop</a>
        </Tooltip>
        ,{" "}
        <Tooltip title="fold" animation="fold">
          <a href="#">fold</a>
        </Tooltip>
        ,{" "}
        <Tooltip title="puff" animation="puff">
          <a href="#">puff</a>
        </Tooltip>
        ,{" "}
        <Tooltip title="scale" animation="scale">
          <a href="#">scale</a>
        </Tooltip>
        ,{" "}
        <Tooltip title="shake" animation="shake">
          <a href="#">shake</a>
        </Tooltip>
        ,{" "}
        <Tooltip title="slide" animation="slide">
          <a href="#">slide</a>
        </Tooltip>
        ,{" "}
        <Tooltip title="shift" animation="shift">
          <a href="#">shift</a>
        </Tooltip>
        ,{" "}
        <Tooltip title="pulsate" animation="pulsate">
          <a href="#">pulsate</a>
        </Tooltip>
        ,{" "}
        <Tooltip title="rotate" animation="rotate">
          <a href="#">rotate</a>
        </Tooltip>
        ,{" "}
        <Tooltip title="none" animation="none">
          <a href="#">none</a>
        </Tooltip>
        .
      </div>
      <h1>Tooltips on links</h1>
      <Stack dir="row" gap={"2"}>
        <Tooltip title="Tooltip on top!" placement="top">
          <Button variant="secondary">Tooltip on top</Button>
        </Tooltip>
        <Tooltip title="Tooltip on right!" placement="right">
          <Button variant="secondary">Tooltip on right</Button>
        </Tooltip>
        <Tooltip title="Tooltip on bottom!" placement="bottom">
          <Button variant="secondary">Tooltip on bottom</Button>
        </Tooltip>
        <Tooltip title="Tooltip on left!" placement="left">
          <Button variant="secondary">Tooltip on left</Button>
        </Tooltip>
      </Stack>

      <h1>Custom tooltips</h1>
      <Tooltip
        title={
          <span>
            Custom <b>title</b> in <span style={{ color: "red" }}>red</span>
          </span>
        }
        placement="left"
        animation="fade"
      >
        <Button variant="secondary">Custom tooltips</Button>
      </Tooltip>
    </Div>
  );
}

function ModalPage() {
  const ctx = useContext(ModalContainerContext);

  const createLiveDialog = (staticBackdrop: boolean) => {
    ctx.createModal((ref) => (
      <Modal ref={ref} staticBackdrop={staticBackdrop} animation="drop">
        <Modal.Dialog>
          <Modal.Content>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
              <Modal.CloseButton />
            </Modal.Header>
            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>
            <Modal.Footer>
              <Modal.CloseButton
                as={(p: any) => (
                  <Button variant="secondary" {...p}>
                    Close
                  </Button>
                )}
              />
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    ));
  };

  return (
    <Div>
      <h1>Live demo</h1>
      <Button onClick={() => createLiveDialog(true)}>
        staticBackdrop=true
      </Button>
      <Button ms="1" onClick={() => createLiveDialog(false)}>
        staticBackdrop=false
      </Button>

      <h1>Scrollable</h1>
      <Button
        onClick={() => {
          ctx.createModal((ref) => (
            <Modal ref={ref} staticBackdrop scrollable>
              <Modal.Dialog>
                <Modal.Content>
                  <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                    <Modal.CloseButton />
                  </Modal.Header>
                  <Modal.Body>
                    <p>Modal body text goes here.</p>
                    <p>
                      This is some placeholder content to show the scrolling
                      behavior for modals. We use repeated line breaks to
                      demonstrate how content can exceed minimum inner height,
                      thereby showing inner scrolling. When content becomes
                      longer than the predefined max-height of modal, content
                      will be cropped and scrollable within the modal.
                    </p>
                    {Array.from(Array(80).keys()).map((a) => (
                      <br key={a} />
                    ))}
                    <p>
                      This content should appear at the bottom after you scroll.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Modal.CloseButton
                      as={(p: any) => (
                        <Button variant="secondary" {...p}>
                          Close
                        </Button>
                      )}
                    />
                    <Button variant="primary">Save changes</Button>
                  </Modal.Footer>
                </Modal.Content>
              </Modal.Dialog>
            </Modal>
          ));
        }}
      >
        Show Modal
      </Button>

      <h1>Tooltips and popovers</h1>
      <Button
        onClick={() => {
          ctx.createModal((ref) => (
            <Modal ref={ref} staticBackdrop scrollable>
              <Modal.Dialog>
                <Modal.Content>
                  <Modal.Header>
                    <Modal.Title>Tooltips and popovers</Modal.Title>
                    <Modal.CloseButton />
                  </Modal.Header>
                  <Modal.Body>
                    <h2 className="fs-5">Popover in a modal</h2>
                    <Popover side="right" alignment="middle">
                      <Popover.Toggle variant="success">
                        Click me!
                      </Popover.Toggle>
                      <Popover.Modal>
                        <Popover.Title>Popover title</Popover.Title>
                        <Popover.Body>
                          And here's some amazing content. It's very engaging.
                          Right?
                        </Popover.Body>
                      </Popover.Modal>
                    </Popover>
                    <hr />
                    <h2 className="fs-5">Tooltips in a modal</h2>
                    <p>
                      <Tooltip title="Tooltip">
                        <a href="#">This link</a>
                      </Tooltip>{" "}
                      and{" "}
                      <Tooltip title="Tooltip">
                        <a href="#">that link</a>
                      </Tooltip>{" "}
                      have tooltips on hover.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Modal.CloseButton
                      as={(p: any) => (
                        <Button variant="secondary" {...p}>
                          Close
                        </Button>
                      )}
                    />
                    <Button variant="primary">Save changes</Button>
                  </Modal.Footer>
                </Modal.Content>
              </Modal.Dialog>
            </Modal>
          ));
        }}
      >
        Show Modal
      </Button>

      <h1>Fullscreen Modal</h1>
      <Button
        onClick={() => {
          ctx.createModal((ref) => (
            <Modal ref={ref} fullscreen={true}>
              <Modal.Dialog>
                <Modal.Content>
                  <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                    <Modal.CloseButton />
                  </Modal.Header>
                  <Modal.Body>
                    <p>Modal body text goes here.</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Modal.CloseButton
                      as={(p: any) => (
                        <Button variant="secondary" {...p}>
                          Close
                        </Button>
                      )}
                    />
                    <Button variant="primary">Save changes</Button>
                  </Modal.Footer>
                </Modal.Content>
              </Modal.Dialog>
            </Modal>
          ));
        }}
      >
        Fullscreen Modal
      </Button>

      <Modal verticalCentered size="lg" staticBackdrop={false}>
        <Modal.Dialog>
          <Modal.Content>
            <Modal.Header>
              <Modal.Title>Static modal</Modal.Title>
              <Modal.CloseButton />
            </Modal.Header>
            <Modal.Body>
              <p>Modal body text goes here.</p>
              <p>
                This is some placeholder content to show the scrolling behavior
                for modals. We use repeated line breaks to demonstrate how
                content can exceed minimum inner height, thereby showing inner
                scrolling. When content becomes longer than the predefined
                max-height of modal, content will be cropped and scrollable
                within the modal.
              </p>
              {Array.from(Array(1).keys()).map((a) => (
                <br key={a} />
              ))}
              <p>This content should appear at the bottom after you scroll.</p>
            </Modal.Body>
            <Modal.Footer>
              <Modal.CloseButton
                as={(p: any) => (
                  <Button variant="secondary" {...p}>
                    Close
                  </Button>
                )}
              />
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    </Div>
  );
}

const PlaceholderPage = () => {
  return (
    <Div>
      <h1>Example</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://placecats.com/millie_neo/100/180"
          placeholder
        />
        <Card.Body>
          <Placeholder as={Card.Title} animation="wave">
            <Placeholder.Span col={6} size="lg" />
          </Placeholder>
          <Placeholder as={Card.Text}>
            <Placeholder.Span col={7} variant="success" />
            &nbsp;
            <Placeholder.Span col={4} />
            &nbsp;
            <Placeholder.Span col={4} />
            &nbsp;
            <Placeholder.Span col={6} />
            &nbsp;
            <Placeholder.Span col={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" width="100px" />
        </Card.Body>
      </Card>
    </Div>
  );
};

function PaginationPage() {
  return (
    <Div>
      <Typography as="h1">Overview</Typography>
      <nav aria-label="Page navigation example">
        <Pagination>
          <Pagination.Item>
            <Pagination.Link href="#">Previous</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">1</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">2</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">3</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">Next</Pagination.Link>
          </Pagination.Item>
        </Pagination>
      </nav>

      <Typography as="h1" mt="2">
        Working with icons
      </Typography>
      <nav aria-label="Page navigation example">
        <Pagination>
          <Pagination.Item>
            <Pagination.Link href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">1</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">2</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">3</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </Pagination.Link>
          </Pagination.Item>
        </Pagination>
      </nav>

      <Typography as="h1" mt="2">
        Disabled and active states
      </Typography>
      <nav aria-label="Page navigation example">
        <Pagination>
          <Pagination.Item disabled>
            <Pagination.Link href="#">Previous</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">1</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item active>
            <Pagination.Link href="#">2</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">3</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">Next</Pagination.Link>
          </Pagination.Item>
        </Pagination>
      </nav>

      <Typography as="h1" mt="2">
        Sizing
      </Typography>
      <nav aria-label="Page navigation example">
        <Pagination size="lg">
          <Pagination.Item active>
            <Pagination.Link href="#">1</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">2</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">3</Pagination.Link>
          </Pagination.Item>
        </Pagination>
      </nav>
      <nav aria-label="Page navigation example">
        <Pagination size="sm">
          <Pagination.Item active>
            <Pagination.Link href="#">1</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">2</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">3</Pagination.Link>
          </Pagination.Item>
        </Pagination>
      </nav>

      <Typography as="h1" mt="2">
        Alignment
      </Typography>
      <Pagination justifyContent={"center"}>
        <Pagination.Item disabled>
          <Pagination.Link href="#">Previous</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#">1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#">2</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#">3</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#">Next</Pagination.Link>
        </Pagination.Item>
      </Pagination>
      <Pagination justifyContent={"end"}>
        <Pagination.Item disabled>
          <Pagination.Link href="#">Previous</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#">1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#">2</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#">3</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#">Next</Pagination.Link>
        </Pagination.Item>
      </Pagination>
    </Div>
  );
}

function OffcanvasPage() {
  const ctx = useContext(OffcanvasContainerContext);
  const doCreateOffcanvas = (ref: React.RefObject<OffcanvasRef>) => {
    return (
      <Offcanvas ref={ref} show>
        <Offcanvas.Header>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          <Offcanvas.CloseButton />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            Content for the offcanvas goes here. You can place just about any
            Bootstrap component or custom elements here.
          </p>
          <Offcanvas.CloseButton
            as={(p: any) => <Button {...p}>Close the drawer</Button>}
          />
        </Offcanvas.Body>
      </Offcanvas>
    );
  };

  const [open, setOpen] = useState(false);
  const ref_2 = useRef<OffcanvasRef>(null);
  const ref_3 = useRef<OffcanvasRef>(null);
  const ref_4 = useRef<OffcanvasRef>(null);
  const ref_5 = useRef<OffcanvasRef>(null);
  const ref_6 = useRef<OffcanvasRef>(null);
  const ref_7 = useRef<OffcanvasRef>(null);
  const ref_8 = useRef<OffcanvasRef>(null);

  return (
    <Div>
      <Typography as="h1">Offcanvas components</Typography>
      <Button
        onClick={() => {
          console.log(`onClick`);
          setOpen(true);
        }}
      >
        Toggle
      </Button>
      <Offcanvas
        show={open}
        onHide={() => {
          console.log(`onHide`);
          setOpen(false);
        }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          <Offcanvas.CloseButton />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            Content for the offcanvas goes here. You can place just about any
            Bootstrap component or custom elements here.
          </p>
          <Offcanvas.CloseButton
            as={(p: any) => <Button {...p}>Close the drawer</Button>}
          />
        </Offcanvas.Body>
      </Offcanvas>

      <Typography as="h1" mt="3">
        Offcanvas components
      </Typography>
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        {/* No backdrop */}
        <Button onClick={() => ref_2.current?.show()}>No backdrop</Button>
        <Offcanvas ref={ref_2} backdrop={false}>
          <Offcanvas.Header>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            <Offcanvas.CloseButton />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p>
              Content for the offcanvas goes here. You can place just about any
              Bootstrap component or custom elements here.
            </p>
            <Button variant="warning" onClick={() => ref_2.current?.hide()}>
              Hide it
            </Button>
          </Offcanvas.Body>
        </Offcanvas>

        {/* With backdrop */}
        <Button onClick={() => ref_3.current?.show()}>With backdrop</Button>
        <Offcanvas ref={ref_3} backdrop={true}>
          <Offcanvas.Header>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            <Offcanvas.CloseButton />
          </Offcanvas.Header>
          <Offcanvas.Body>
            Content for the offcanvas goes here. You can place just about any
            Bootstrap component or custom elements here.
          </Offcanvas.Body>
        </Offcanvas>

        {/* With static backdrop */}
        <Button onClick={() => ref_4.current?.show()}>
          With static backdrop
        </Button>
        <Offcanvas ref={ref_4} backdrop="static">
          <Offcanvas.Header>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            <Offcanvas.CloseButton />
          </Offcanvas.Header>
          <Offcanvas.Body>
            Content for the offcanvas goes here. You can place just about any
            Bootstrap component or custom elements here.
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <Typography as="h1" mt="3">
        Placement
      </Typography>
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        {/* Top */}
        <Button onClick={() => ref_5.current?.show()}>Top</Button>
        <Offcanvas ref={ref_5} placement="top">
          <Offcanvas.Header>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            <Offcanvas.CloseButton />
          </Offcanvas.Header>
          <Offcanvas.Body>
            Content for the offcanvas goes here. You can place just about any
            Bootstrap component or custom elements here.
          </Offcanvas.Body>
        </Offcanvas>

        {/* End */}
        <Button onClick={() => ref_6.current?.show()}>End</Button>
        <Offcanvas ref={ref_6} placement="end">
          <Offcanvas.Header>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            <Offcanvas.CloseButton />
          </Offcanvas.Header>
          <Offcanvas.Body>
            Content for the offcanvas goes here. You can place just about any
            Bootstrap component or custom elements here.
          </Offcanvas.Body>
        </Offcanvas>

        {/* Bottom */}
        <Button onClick={() => ref_7.current?.show()}>Bottom</Button>
        <Offcanvas ref={ref_7} placement="bottom">
          <Offcanvas.Header>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            <Offcanvas.CloseButton />
          </Offcanvas.Header>
          <Offcanvas.Body>
            Content for the offcanvas goes here. You can place just about any
            Bootstrap component or custom elements here.
          </Offcanvas.Body>
        </Offcanvas>

        {/* Start */}
        <Button onClick={() => ref_8.current?.show()}>Start</Button>
        <Offcanvas ref={ref_8} placement="start">
          <Offcanvas.Header>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            <Offcanvas.CloseButton />
          </Offcanvas.Header>
          <Offcanvas.Body>
            Content for the offcanvas goes here. You can place just about any
            Bootstrap component or custom elements here.
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <Typography as="h1" mt="3">
        Using global offcanvas context
      </Typography>
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <Button
          variant="info"
          onClick={() => ctx.createOffcanvas(doCreateOffcanvas)}
        >
          Show
        </Button>
      </div>
    </Div>
  );
}

function NavsAndTabPage() {
  return (
    <Div>
      <Typography as="h1">Base nav</Typography>
      <Nav>
        <Nav.Link href="#" active>
          Active
        </Nav.Link>
        <Nav.Link href="#">Link</Nav.Link>
        <Nav.Link href="#">Link</Nav.Link>
        <Nav.Link disabled href="#">
          Disabled{" "}
        </Nav.Link>
      </Nav>
      <Nav as="ul">
        <Nav.Item>
          <Nav.Link href="#" active>
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link disabled href="#">
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Typography as="h1">Horizontal alignment</Typography>
      <Nav as="ul" justifyContent="center">
        <Nav.Item>
          <Nav.Link href="#" active>
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link disabled href="#">
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav as="nav" justifyContent="end">
        <Nav.Link href="#" active>
          Active
        </Nav.Link>
        <Nav.Link href="#">Link</Nav.Link>
        <Nav.Link href="#">Link</Nav.Link>
        <Nav.Link disabled href="#">
          Disabled
        </Nav.Link>
      </Nav>

      <Typography as="h1">Vertical</Typography>
      <Nav as="ul" flex="column">
        <Nav.Item>
          <Nav.Link href="#" active>
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link disabled href="#">
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Typography as="h1">Tabs</Typography>
      <Nav as="ul" tabs>
        <Nav.Item>
          <Nav.Link href="#" active>
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link disabled href="#">
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Typography as="h1">Pills</Typography>
      <Nav as="ul" pills>
        <Nav.Item>
          <Nav.Link href="#" active>
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link disabled href="#">
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Typography as="h1">Underline</Typography>
      <Nav as="ul" underline>
        <Nav.Item>
          <Nav.Link href="#" active>
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link disabled href="#">
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Typography as="h1">Fill</Typography>
      <p>
        Notice that all horizontal space is occupied, but not every nav item has
        the same width
      </p>
      <Nav as="ul" tabs fill>
        <Nav.Item>
          <Nav.Link href="#" active>
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link disabled href="#">
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Typography as="h1">Justify</Typography>
      <p>
        All horizontal space will be occupied by nav links, but unlike the
        .nav-fill above, every nav item will be the same width.
      </p>
      <Nav as="ul" tabs justified>
        <Nav.Item>
          <Nav.Link href="#" active>
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link disabled href="#">
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Typography as="h1">Pills with dropdowns</Typography>
      <Nav as="ul" pills justified>
        <Nav.Item>
          <Nav.Link href="#" active>
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Dropdown>
          <Nav.DropdownToggle as="a">Dropdown</Nav.DropdownToggle>
          <Nav.DropdownMenu>
            <Nav.DropdownItem active>Action</Nav.DropdownItem>
            <Nav.DropdownItem as="a" disabled>
              Another action
            </Nav.DropdownItem>
            <Nav.DropdownItem>Something else here</Nav.DropdownItem>
          </Nav.DropdownMenu>
        </Nav.Dropdown>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link disabled href="#">
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Div>
  );
}

function NavbarPage() {
  return (
    <Div>
      <Typography as="h1">Base navbar</Typography>
      <Navbar expand="lg" bg="body-tertiary" scroll>
        <Container fluid>
          <Navbar.Brand href="#">BRAND</Navbar.Brand>
          <Navbar.Toggler>
            <Navbar.TogglerIcon />
          </Navbar.Toggler>

          <Navbar.Collapse justifyContent="between">
            <Navbar.Nav>
              <Navbar.Item>
                <Navbar.Link active href="#">
                  Home
                </Navbar.Link>
              </Navbar.Item>

              <Navbar.Item>
                <Navbar.Link href="#">Link</Navbar.Link>
              </Navbar.Item>

              <Navbar.Dropdown>
                <Navbar.DropdownToggle as="a">Dropdown</Navbar.DropdownToggle>
                <Navbar.DropdownMenu>
                  <Navbar.DropdownItem active>Action</Navbar.DropdownItem>
                  <Navbar.DropdownItem as="a" disabled>
                    Another action
                  </Navbar.DropdownItem>
                  <Navbar.DropdownItem>Something else here</Navbar.DropdownItem>
                </Navbar.DropdownMenu>
              </Navbar.Dropdown>
            </Navbar.Nav>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Typography as="h1">Color schemes</Typography>
    </Div>
  );
}

function FigurePage() {
  return (
    <Div>
      <Typography as="h1" mb="3">
        Figure
      </Typography>
      <Figure>
        <Figure.Img imgFluid borderRadius="rounded" />
        <Figure.Caption>A caption for the above image.</Figure.Caption>
      </Figure>
    </Div>
  );
}

function FormPage() {
  return (
    <Div>
      <Typography as="h1" mb="3">
        Overview
      </Typography>
      <Form width={"350px"} border p="3" borderRadius="3">
        <Div mb="3">
          <Form.Label>Add-on label</Form.Label>
          <InputGroup>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control type="email" />
          </InputGroup>
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
        </Div>
        <Div mb="3">
          <Form.Label>Add-on label with noBackground</Form.Label>
          <InputGroup noBackground>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control type="date" />
          </InputGroup>
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
        </Div>
        <Div mb="3">
          <Form.Floating label="Your username">
            <Form.Control type="email" />
          </Form.Floating>
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
        </Div>
        <Div mb="3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="email"></Form.Control>
        </Div>
        <Checkbox defaultValue={true}>
          <Checkbox.Label>Check me out</Checkbox.Label>
        </Checkbox>
        <RadioButton defaultValue={true}>
          <RadioButton.Label>Radio 1</RadioButton.Label>
        </RadioButton>
        <RadioButton>
          <RadioButton.Label>Radio 2</RadioButton.Label>
        </RadioButton>
        <Switch>
          <Switch.Label>My switch</Switch.Label>
        </Switch>
        <Range defaultValue={33} />
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>

      <Typography as="h1" mb="3">
        Disabled forms
      </Typography>
      <Form width={"350px"} border p="3" borderRadius="3">
        <fieldset disabled>
          <legend>Disabled fieldset example</legend>
          <Div mb="3"></Div>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
          <Div mb="3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="email"></Form.Control>
          </Div>
          <Checkbox defaultValue={true}>
            <Checkbox.Label>Check me out</Checkbox.Label>
          </Checkbox>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </fieldset>
      </Form>

      <Typography as="h1" mb="3">
        Validation
      </Typography>
      <Form width={"350px"} border p="3" borderRadius="3">
        <Div mb="3">
          <Form.Label>Email address</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control type="email" isValid={false} />
            <Form.Feedback isValid={false}>
              Please choose a username..
            </Form.Feedback>
          </InputGroup>
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
        </Div>
        <Div mb="3">
          <Form.Floating label="Your username" textColor="#f933e9">
            <Form.Control type="text" isValid={false} />
          </Form.Floating>
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
        </Div>
        <Div mb="3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password" isValid />
        </Div>
        <Div mb="3">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="Password" isValid={false} />
          <Form.Feedback isValid={false}>
            Please reenter your password
          </Form.Feedback>
        </Div>
        <Checkbox defaultValue={true} isValid={false}>
          <Checkbox.Label>Check me out</Checkbox.Label>
          <Form.Feedback isValid={false}>
            You must agree before submitting.
          </Form.Feedback>
        </Checkbox>
        <RadioButton defaultValue={true} isValid={false}>
          <RadioButton.Label>Radio 2</RadioButton.Label>
          <RadioButton.Feedback isValid={false}>
            Testing msg
          </RadioButton.Feedback>
        </RadioButton>
        <Switch isValid={false}>
          <Switch.Label>The switch</Switch.Label>
          <Switch.Feedback isValid={false}>Some errors!</Switch.Feedback>
        </Switch>
        <Range defaultValue={33} />
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </Div>
  );
}

function IconPage() {
  function printName(str: string) {
    str = str.slice(4);
    const a = str.match(/[A-Z][a-z]+/g)?.join(" ");
    return a || str;
  }

  return (
    <Div>
      <Stack flexDirection="row" gap="1" flexWrap={"wrap"}>
        {Object.values(Icons).map((Comp, k) => (
          <Stack
            key={k}
            flexDirection="column"
            p={"1"}
            width="64px"
            height="100px"
            border
            justifyContent={"around"}
          >
            <Comp
              width="32px"
              height="32px"
              style={{ display: "block", margin: "auto", marginTop: "5px" }}
            />
            <Typography
              fontSize="xx-small"
              textAlign="center"
              width="100%"
              m="0"
            >
              {printName(Comp.name)}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Div>
  );
}

type RippleType = {
  className?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  m: number;
  a?: any;
};
function RippleTest(props: ButtonProps) {
  const color = useThemeColor();
  const rgb = color.theme.variants.primary.rgb;

  const Effects = {
    Ripple: {
      Wrapper: ({ x, y, m }: RippleType) => {
        const Span = styled.div`
          position: absolute;
          left: ${x - m * 0.5}px;
          top: ${y - m * 0.5}px;
          width: ${m}px;
          height: ${m}px;
          border-radius: ${m}px;
          transform: scale(0);
          opacity: 0.3;
          background: white;
          pointer-events: none;
          animation: 400ms linear btn-ripple;
          @keyframes btn-ripple {
            to {
              opacity: 0;
              transform: scale(2.5);
            }
          }
        `;
        return <Span />;
      },
      Duration: 400,
      Style: { position: "relative", overflow: "hidden" } as CSSProperties,
    },
    Puff: {
      Wrapper: styled.div<RippleType>`
        position: absolute;
        left: ${(props) => `${props.x - 12}px`};
        top: ${(props) => `${props.y - 12}px`};
        width: 24px;
        height: 24px;
        border-radius: 12px;
        transform: scale(5); // 53.3 = 1280px / 24px
        opacity: 0;
        background: white;
        pointer-events: none;
        animation: 200ms linear btn-puff;

        @keyframes btn-puff {
          to {
            opacity: 0.3;
            transform: scale(0);
          }
        }
      `,
      Duration: 200,
      Style: { position: "relative", overflow: "hidden" } as CSSProperties,
    },
    BoxShadow: {
      Wrapper: styled.div<RippleType>`
        position: absolute;
        top: -1px;
        left: -1px;
        background: transparent !important;
        width: ${(props) => `${props.w}px`};
        height: ${(props) => `${props.h}px`};
        box-shadow: 0px 0px 0px 0px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.75);
        pointer-events: none;
        animation: 400ms linear btn-shadow;
        @keyframes btn-shadow {
          to {
            box-shadow: 0px 0px 0px 5px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1);
          }
        }
      `,
      Duration: 400,
      Style: { position: "relative", overflow: "visible" } as CSSProperties,
    },
    Slide: {
      Wrapper: ({ w, h }: RippleType) => {
        const Span = styled.div`
          position: absolute;
          left: 0;
          top: 0;
          width: ${w}px;
          height: ${h}px;
          transform: scaleY(0);
          transform-origin: 0 0;
          opacity: 0.3;
          background: white;
          pointer-events: none;
          animation: 400ms linear btn-slide;
          @keyframes btn-slide {
            to {
              opacity: 0;
              transform: scaleY(1.5);
            }
          }
        `;
        return <Span />;
      },
      Duration: 400,
      Style: { position: "relative", overflow: "hidden" } as CSSProperties,
    },
    Stripe: {
      Wrapper: ({ w, h }: RippleType) => {
        const Span = styled.div`
          position: absolute;
          transform: scaleX(0);
          transform-origin: 0 0;
          opacity: 0.3;
          background: white;
          pointer-events: none;
          animation-duration: 400ms;
          animation-timing-function: linear;
          @keyframes btn-stripe {
            to {
              opacity: 0;
              transform: scaleX(1);
            }
          }
          @keyframes btn-stripe2 {
            to {
              opacity: 0;
              transform: scaleX(-1);
            }
          }
        `;
        return (
          <>
            <Span
              style={{
                left: `${w * 0.5}px`,
                top: `${h * 0.5 - h * 0.25}px`,
                animationName: "btn-stripe",
                width: `${w}px`,
                height: `${h * 0.1}px`,
              }}
            />
            <Span
              style={{
                left: `${w * 0.5}px`,
                top: `${h * 0.5 - h * 0.05}px`,
                animationName: "btn-stripe",
                width: `${w}px`,
                height: `${h * 0.1}px`,
              }}
            />
            <Span
              style={{
                left: `${w * 0.5}px`,
                top: `${h * 0.5 + h * 0.15}px`,
                animationName: "btn-stripe",
                width: `${w}px`,
                height: `${h * 0.1}px`,
              }}
            />

            <Span
              style={{
                left: `${w * 0.5}px`,
                top: `${h * 0.5 - h * 0.25}px`,
                animationName: "btn-stripe2",
                width: `${w}px`,
                height: `${h * 0.1}px`,
              }}
            />
            <Span
              style={{
                left: `${w * 0.5}px`,
                top: `${h * 0.5 - h * 0.05}px`,
                animationName: "btn-stripe2",
                width: `${w}px`,
                height: `${h * 0.1}px`,
              }}
            />
            <Span
              style={{
                left: `${w * 0.5}px`,
                top: `${h * 0.5 + h * 0.15}px`,
                animationName: "btn-stripe2",
                width: `${w}px`,
                height: `${h * 0.1}px`,
              }}
            />
          </>
        );
      },
      Duration: 400,
      Style: { position: "relative", overflow: "hidden" } as CSSProperties,
    },
  };

  const UE = Effects.Stripe;
  const [effects, setEffects] = useState<ReactNode>(undefined);
  const btnRef = useRef<HTMLButtonElement>(null);
  const rippleRef = useRef({ timerId: 0 });

  const handlePointerUp = (evt: React.PointerEvent) => {
    if (btnRef.current) {
      const clientRect = btnRef.current?.getBoundingClientRect();
      const x = evt.clientX - clientRect.left;
      const y = evt.clientY - clientRect.top;

      setEffects(
        <UE.Wrapper
          className={`btn btn-${props.variant || "primary"}`}
          w={clientRect.width}
          h={clientRect.height}
          m={Math.max(clientRect.height, clientRect.width)}
          x={x}
          y={y}
        />
      );
    }

    clearTimeout(rippleRef.current.timerId);
    rippleRef.current.timerId = setTimeout(() => {
      setEffects(undefined);
    }, UE.Duration) as any;
  };

  return (
    <button
      ref={btnRef}
      className="btn btn-primary"
      style={UE.Style}
      onPointerUp={handlePointerUp}
    >
      {effects}
      My button
    </button>
  );
}

const ReponsiveColor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");

  useEffect(() => {
    const onResize = () => {
      const { width } = ref.current!.getBoundingClientRect();
      let name = "";
      // xs
      if (width < Breakpoints.sm) name = "xs";
      // sm
      else if (width >= Breakpoints.sm && width < Breakpoints.md) name = "sm";
      // md
      else if (width >= Breakpoints.md && width < Breakpoints.lg) name = "md";
      // lg
      else if (width >= Breakpoints.lg && width < Breakpoints.xl) name = "lg";
      //  xl
      else if (width >= Breakpoints.xl && width < Breakpoints.xxl) name = "xl";
      // xxl
      else if (width >= Breakpoints.xxl) name = "xxl";
      setName(name);
    };
    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <Div
      ref={ref}
      style={{ width: "100%", fontSize: "small", height: "5px" }}
      css_xs={{
        background: "red",
      }}
      css_sm={{
        background: "orange",
      }}
      css_md={{
        background: "yellow",
      }}
      css_lg={{
        background: "green",
      }}
      css_xl={{
        background: "blue",
      }}
      css_xxl={{
        background: "violet",
      }}
    >
      &nbsp;{name}
    </Div>
  );
};

type FieldHL = "Y" | "M" | "D" | "H" | "m" | "s" | "unset";
type SelectionRangeFmtType = {
  from: number;
  to: number;
  fmt: string;
  prev: FieldHL;
  next: FieldHL;
  clearFunc: (val: moment.Moment) => void;
};

function InitSelectionRangeFmt(format: string): {
  good: boolean;
  ranger: { [key in FieldHL]: SelectionRangeFmtType };
} {
  const ranger = {
    Y: {
      from: 0,
      to: 0,
      fmt: "YYYY",
      prev: "unset" as FieldHL,
      next: "M" as FieldHL,
      clearFunc: (m: moment.Moment) => m.year(0),
    },
    M: {
      from: 0,
      to: 0,
      fmt: "MM",
      prev: "Y" as FieldHL,
      next: "D" as FieldHL,
      clearFunc: (m: moment.Moment) => m.month(0), // Accepts numbers from 0 to 11
    },
    D: {
      from: 0,
      to: 0,
      fmt: "DD",
      prev: "M" as FieldHL,
      next: "H" as FieldHL,
      clearFunc: (m: moment.Moment) => m.date(1), // Accepts numbers from 1 to 31
    },
    H: {
      from: 0,
      to: 0,
      fmt: "HH",
      prev: "D" as FieldHL,
      next: "m" as FieldHL,
      clearFunc: (m: moment.Moment) => m.hour(0), // Accepts numbers from 0 to 23. If the range is exceeded, it will bubble up to the day.
    },
    m: {
      from: 0,
      to: 0,
      fmt: "mm",
      prev: "H" as FieldHL,
      next: "s" as FieldHL,
      clearFunc: (m: moment.Moment) => m.minute(0), // Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the hour.
    },
    s: {
      from: 0,
      to: 0,
      fmt: "ss",
      prev: "m" as FieldHL,
      next: "unset" as FieldHL,
      clearFunc: (m: moment.Moment) => m.second(0), // // Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the minute.
    },
    unset: {
      from: 9999,
      to: -9999,
      fmt: "",
      prev: "unset" as FieldHL,
      next: "unset" as FieldHL,
      clearFunc: () => {},
    },
  };
  let good = false;
  if (/^YYYY.MM.DD(.HH.mm(.ss)?)?$/.test(format)) {
    good = true;
    for (const [k, obj] of Object.entries(ranger)) {
      if (k == "unset") continue;

      let idx = format.indexOf(obj.fmt);
      if (idx == -1) {
        obj.from = format.length;
        obj.to = format.length;
      } else {
        obj.from = idx;
        obj.to = idx + obj.fmt.length;
      }
    }
  }
  return { good, ranger };
}

function NumDateOfMonth(year: number, month: number) {
  if (month == 2) {
    const leapYear = year % 4 == 0 && year % 100 != 0;
    return leapYear ? 29 : 28;
  }

  return [1, 3, 5, 7, 8, 10, 12].indexOf(month) > 0 ? 31 : 30;
}

function Clamp(val: number, min: number, max: number) {
  return Math.max(Math.min(val, max), min);
}

const MyInput: FC<
  Partial<{
    value: Date;
    defaultValue: Date;
    format: string;
    required: boolean;
    onChange: (val: Date | undefined) => void;
    onClear: (val: Date | undefined) => void;
  }>
> = ({ value, defaultValue, format, required, onChange, onClear }) => {
  //format = format || "YYYY-MM-DD";
  format = format || "YYYY-MM-DD HH:mm:ss";
  required = required === undefined ? true : required;

  const domRef = useRef<HTMLInputElement>(null);

  const initStateDate = value || defaultValue || new Date();
  const [date, setDate] = useState<Date>(initStateDate);
  const [inputValue, setInputValue] = useState(
    required ? moment(initStateDate).format(format) : ""
  );
  // highlight field for direct typing mode
  const [fieldHL, setFieldHL] = useState<FieldHL>("unset");
  const [valueHL, setValueHL] = useState("");
  const lastKeyDown = useRef(0);

  useEffect(() => {
    value && setDate(new Date(value.getTime()));
  }, [value]);

  const selectionRangeFmt = useMemo(
    () => InitSelectionRangeFmt(format),
    [format]
  );

  const isActiveTypingHelper = useMemo(
    () => inputValue == moment(date).format(format),
    [date, format, inputValue]
  );

  const handleSetUndefined = useCallback(() => {
    if (required) {
      const d = moment();
      setDate(d.toDate());
      setInputValue(d.format(format));

      onClear && onClear(d.toDate());
      onChange && onChange(d.toDate());
    } else {
      setInputValue("");

      onClear && onClear(undefined);
      onChange && onChange(undefined);
    }
  }, [required]);

  const setSelectionRage = useCallback(
    (range: SelectionRangeFmtType) => {
      if (
        !domRef.current ||
        !selectionRangeFmt.good ||
        !isActiveTypingHelper ||
        domRef.current.selectionStart == null // don't mix between 0 and null
      )
        return;

      setTimeout(() => {
        const len = inputValue.length;
        const from = Math.min(range.from, len);
        const to = Math.min(range.to, len);
        domRef.current!.setSelectionRange(from, to);
      }, 33);
    },
    [inputValue, isActiveTypingHelper, selectionRangeFmt]
  );

  const handleInputChange = useCallback(
    (evt: any) => {
      const old = moment(date);
      const setFunc = (d: moment.Moment, moveNextField: boolean = false) => {
        setDate(d.toDate());
        setInputValue(d.format(format));

        let fd = moveNextField
          ? selectionRangeFmt.ranger[fieldHL].next
          : fieldHL;
        if (moveNextField) {
          setValueHL("");
          setFieldHL(fd);
        }
        setSelectionRage(selectionRangeFmt.ranger[fd]);

        onChange && onChange(d.toDate());
      };

      let n, s;
      switch (fieldHL) {
        case "Y":
          s = `${valueHL}${lastKeyDown.current}`.substring(0, 4);
          n = Clamp(Number(s), 0, 9999);

          old.year(n);
          setValueHL(s);
          setFunc(old, s.length >= 4);
          break;
        case "M": // Accepts numbers from 0 to 11. If the range is exceeded, it will bubble up to the year.
          s = `${valueHL}${lastKeyDown.current}`.substring(0, 2);
          n = Clamp(Number(s), 1, 12);

          old.month(n - 1);
          setValueHL(String(lastKeyDown.current));
          setFunc(old, s.length >= 2);
          break;
        case "D": // Accepts numbers from 1 to 31. If the range is exceeded, it will bubble up to the months.
          s = `${valueHL}${lastKeyDown.current}`.substring(0, 2);
          n = Clamp(Number(s), 1, NumDateOfMonth(old.year(), old.month() + 1));

          old.date(n);
          setValueHL(s);
          setFunc(old, s.length >= 2);
          break;
        case "H": // Accepts numbers from 0 to 23. If the range is exceeded, it will bubble up to the day.
          s = `${valueHL}${lastKeyDown.current}`.substring(0, 2);
          n = Clamp(Number(s), 0, 23);

          old.hour(n);
          setValueHL(s);
          setFunc(old, s.length >= 2);
          break;

        case "m": // Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the hour.
          s = `${valueHL}${lastKeyDown.current}`.substring(0, 2);
          n = Clamp(Number(s), 0, 59);

          old.minute(n);
          setValueHL(s);
          setFunc(old, s.length >= 2);
          break;
        case "s": // Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the minute.
          s = `${valueHL}${lastKeyDown.current}`.substring(0, 2);
          n = Clamp(Number(s), 0, 59);

          old.second(n);
          setValueHL(s);
          setFunc(old, s.length >= 2);
          break;
        case "unset":
        default:
          if (evt.target.value?.length === format.length) {
            const customDate = moment(evt.target.value, format);
            if (customDate.isValid()) {
              setDate(customDate.toDate());

              setValueHL("");
              setFieldHL("Y");

              setSelectionRage(selectionRangeFmt.ranger["Y"]);

              onChange && onChange(customDate.toDate());
            }
          }

          setInputValue(evt.target.value);
          break;
      }
    },
    [fieldHL, valueHL, date, selectionRangeFmt]
  );

  const handleInputKeyDown = useCallback(
    (evt: any) => {
      if (!isActiveTypingHelper) return;

      const key = evt.key.toUpperCase();

      if ((key == "C" || key == "V") && (evt.metaKey || evt.ctrlKey)) {
        return; // shortcut to copy & paste
      }
      // Short cut ctrl + a
      else if (key == "A" && (evt.metaKey || evt.ctrlKey)) {
        setValueHL("");
        setFieldHL("unset");
      }
      // move to the next field
      else if (key == "ENTER") {
        const fd = selectionRangeFmt.ranger[fieldHL].next;
        setValueHL("");
        setFieldHL(fd);
        setSelectionRage(selectionRangeFmt.ranger[fd]);
      }
      // moving left right
      else if (key == "TAB") {
        if (evt.shiftKey) {
          const prev = selectionRangeFmt.ranger[fieldHL].prev;
          if (prev !== "unset") {
            setValueHL("");
            setFieldHL(prev);
            setSelectionRage(selectionRangeFmt.ranger[prev]);

            evt.preventDefault();
            evt.stopPropagation();
          }
        } else {
          const next = selectionRangeFmt.ranger[fieldHL].next;
          if (next !== "unset") {
            setValueHL("");
            setFieldHL(next);
            setSelectionRage(selectionRangeFmt.ranger[next]);

            evt.preventDefault();
            evt.stopPropagation();
          }
        }
      } else if (key == "HOME") {
        setValueHL("");
        setFieldHL("Y");
        setSelectionRage(selectionRangeFmt.ranger["Y"]);
      }
      // clean up field
      else if (key == "DELETE" || key == "BACKSPACE") {
        // when fieldHL == "unset", trick as normal input like text field
        if (fieldHL != "unset") {
          const old = moment(date);
          selectionRangeFmt.ranger[fieldHL].clearFunc(old);

          setDate(old.toDate());
          setInputValue(old.format(format));

          setValueHL("");
          setSelectionRage(selectionRangeFmt.ranger[fieldHL]);

          onChange && onChange(old.toDate());

          evt.preventDefault();
          evt.stopPropagation();
        }
      }
      // allow number digit number
      else if (
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(evt.key) > -1
      ) {
        lastKeyDown.current = Number(evt.key);
      }
      // allow custom cursor moving by arrow keys
      else if (key == "ARROWLEFT" || key == "ARROWRIGHT") {
        setValueHL("");
        setFieldHL("unset");
      } else {
        evt.preventDefault();
        evt.stopPropagation();
      }
    },
    [fieldHL, date, selectionRangeFmt, isActiveTypingHelper]
  );

  const handleInputFocus = useCallback(() => {
    if (!domRef.current || !selectionRangeFmt.good || !isActiveTypingHelper)
      return;

    const start = domRef.current.selectionEnd || 0;

    for (const [k, v] of Object.entries(selectionRangeFmt.ranger)) {
      const fd = k as FieldHL;
      if (fd != "unset" && fieldHL != fd && start >= v.from && start <= v.to) {
        setFieldHL(fd);
        setSelectionRage(selectionRangeFmt.ranger[fd]);
        setValueHL("");
        break;
      }
    }
  }, [isActiveTypingHelper, fieldHL, selectionRangeFmt]);

  useEffect(() => {
    const inputCSS = [];
    if (endIconRef.current) {
      inputCSS.push(
        `padding-right: ${endIconRef.current.getBoundingClientRect().width}px;`
      );
    }
    setDomStyle(inputCSS);
  }, []);
  const endIconRef = useRef<HTMLDivElement>(null);
  const [domStyle, setDomStyle] = useState<string[]>([]);
  const [domHover, setDomHover] = useState(false);
  const handleOnBlur = useCallback(() => {
    if (!isActiveTypingHelper) {
      const d = moment(date);
      if (required) {
        setDate(d.toDate());
        setInputValue(d.format(format));

        onChange && onChange(d.toDate());
      } else {
        const val = moment(inputValue, format);
        onChange && onChange(val.isValid() ? d.toDate() : undefined);
      }
    }
    setDomHover(false);
  }, [required, inputValue, date, isActiveTypingHelper]);

  const handleOnPaste = useCallback(
    (evt: any) => {
      const clipboardData: DataTransfer =
        evt.clipboardData || (window as any).clipboardData;
      if (clipboardData && clipboardData.types.indexOf("text/plain") >= 0) {
        const str = clipboardData.getData("Text");
        const d = moment(str || "", format);
        if (d.isValid()) {
          setDate(d.toDate());
          setInputValue(d.format(format));

          onChange && onChange(d.toDate());

          evt.preventDefault();
          evt.stopPropagation();
        }

        setValueHL("");
        setFieldHL("unset");
      }
    },
    [format]
  );

  return (
    <div
      className="ico-control"
      onFocus={() => setDomHover(true)}
      onBlur={handleOnBlur}
    >
      {createElement("input", {
        ref: domRef,
        value: inputValue,
        placeholder: format,
        className: "form-control",
        css: cssFunc([...domStyle, "width: 100%"]),
        // onFocus={handleInputFocus} working not well on selectionEnd, onPointerUp yield more precise selectionEnd
        onChange: handleInputChange,
        onPointerUp: handleInputFocus,
        onKeyDown: handleInputKeyDown,
        onPaste: handleOnPaste,
      })}
      {Boolean(domRef.current) && [
        <div
          key="ico1"
          ref={endIconRef}
          className={classNames("ico end", {
            hover: domHover,
          })}
        >
          <Icons.IconCalendarMonth />
        </div>,
        <div
          key="ico2"
          className={classNames("ico end hoverable", {
            hover: domHover,
          })}
          onClick={handleSetUndefined}
          style={{ cursor: "pointer" }}
        >
          <Icons.IconClose />
        </div>,
      ]}
    </div>
  );
};

const App = () => {
  const [label, setLabel] = useState("");

  return (
    <SaigonProvider>
      <ReponsiveColor />
      <Div px="2rem" pt="2rem" overflow="auto">
        <Stack p="5" justifyContent="center">
          {
            <StaticDateTimePicker
              value={new Date()}
              clock12Hour={false}
              pickerMode="DateTime"
              style={{ boxShadow: "none" }}
            />
          }
          <Div width="300px">
            <label>{label}</label>
            <DateTimePicker />
            {/* <Form.DateTimeControl
              required={true}
              format="YYYY - MMM"
              onChange={(val) =>
                setLabel(val ? (val as any).toISOString() : "undefined")
              } 
            />*/}
          </Div>
        </Stack>
        {/* <DropdownPage /> */}
        <IconPage />
        {/* <RippleTest variant="primary" /> */}
      </Div>
    </SaigonProvider>
  );
};
export default App;
