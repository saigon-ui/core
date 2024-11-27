import { Accordion } from "@build_lib/core";
import styled from "@emotion/styled";
import { FC } from "react";
import { useNavigate } from "react-router";

const Wrapper = styled.div<{ width: string }>`
  background-color: var(--bs-gray-100);
  width: ${(props) => props.width};
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 0;
  top: 70px;
  height: calc(100vh - 56px);
  overflow-y: auto;
`;

const ItemWrapper = styled.div`
  width: 100%;
  padding: 0.4rem 0;
  padding-left: 1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--sg-gray-200);
  }
`;

const Item: FC<{ to?: string; children?: any }> = ({ to, children }) => {
  const nav = useNavigate();

  return <ItemWrapper onClick={() => to && nav(to)}>{children}</ItemWrapper>;
};

const SideBar: FC<{ width: string }> = ({ width }) => {
  return (
    <Wrapper width={width}>
      <Accordion flush>
        <Accordion.Item>
          <Accordion.Header>
            <Accordion.Button>Theme</Accordion.Button>
          </Accordion.Header>
          <Accordion.Collapse>
            <Accordion.Body>
              <Item>Light</Item>
              <Item>Dark</Item>
            </Accordion.Body>
          </Accordion.Collapse>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Header>
            <Accordion.Button>Font & Text</Accordion.Button>
          </Accordion.Header>
          <Accordion.Collapse>
            <Accordion.Body>
              <Item to="/bootstrap/font">Font</Item>
              <Item>Typography</Item>
            </Accordion.Body>
          </Accordion.Collapse>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Header>
            <Accordion.Button>Layout</Accordion.Button>
          </Accordion.Header>
          <Accordion.Collapse>
            <Accordion.Body>
              <Item to="/bootstrap/breakpoints">Breakpoints</Item>
              <Item to="/bootstrap/containers">Containers</Item>
              <Item to="/bootstrap/grid">Grid</Item>
              <Item to="/bootstrap/columns">Columns</Item>
              <Item to="/bootstrap/gutters">Gutters</Item>
            </Accordion.Body>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>
            <Accordion.Button>Content</Accordion.Button>
          </Accordion.Header>
          <Accordion.Collapse>
            <Accordion.Body>
              <Item to="/bootstrap/typography">Typography</Item>
              <Item to="/bootstrap/images">Images</Item>
              <Item to="/bootstrap/tables">Tables</Item>
              <Item to="/bootstrap/figures">Figures</Item>
            </Accordion.Body>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>
            <Accordion.Button>Forms</Accordion.Button>
          </Accordion.Header>
          <Accordion.Collapse>
            <Accordion.Body>
              <Item to="/bootstrap/form-controls">Form controls</Item>
              <Item to="/bootstrap/select">Select</Item>
              <Item to="/bootstrap/checks-radios">Checks & radios</Item>
              <Item to="/bootstrap/range">Range</Item>
              <Item to="/bootstrap/input-group">Input group</Item>
              <Item to="/bootstrap/floating-labels">Floating labels</Item>
              <Item to="/bootstrap/layout">Layout</Item>
              <Item to="/bootstrap/validation">Validation</Item>
            </Accordion.Body>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>
            <Accordion.Button>Components</Accordion.Button>
          </Accordion.Header>
          <Accordion.Collapse>
            <Accordion.Body>
              <Item to="/saigon-ui/component/accordion">Accordion</Item>
              <Item to="/saigon-ui/component/alerts">Alerts</Item>
              <Item to="/saigon-ui/component/badge">Badge</Item>
              <Item to="/saigon-ui/component/breadcrumb">Breadcrumb</Item>
              <Item to="/saigon-ui/component/buttons">Buttons</Item>
              <Item to="/saigon-ui/component/button-group">Button group</Item>
              <Item to="/saigon-ui/component/card">Card</Item>
              <Item to="/saigon-ui/component/carousel">Carousel</Item>
              <Item to="/saigon-ui/component/close-button">Close button</Item>
              <Item to="/saigon-ui/component/collapse">Collapse</Item>
              <Item to="/saigon-ui/component/dropdowns">Dropdowns</Item>
              <Item to="/saigon-ui/component/list-group">List group</Item>
              <Item to="/saigon-ui/component/modal">Modal</Item>
              <Item to="/saigon-ui/component/navs-tabs">Navs & tabs</Item>
              <Item to="/saigon-ui/component/navbar">Navbar</Item>
              <Item to="/saigon-ui/component/offcanvas">Offcanvas</Item>
              <Item to="/saigon-ui/component/pagination">Pagination</Item>
              <Item to="/saigon-ui/component/popovers">Popovers</Item>
              <Item to="/saigon-ui/component/progress">Progress</Item>
              <Item to="/saigon-ui/component/spinners">Spinners</Item>
              <Item to="/saigon-ui/component/toasts">Toasts</Item>
              <Item to="/saigon-ui/component/tooltips">Tooltips</Item>
            </Accordion.Body>
          </Accordion.Collapse>
        </Accordion.Item>
      </Accordion>
    </Wrapper>
  );
};

export default SideBar;
