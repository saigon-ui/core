import AppLogo from "@asset/image/sg_logo.svg";
import { Div, Navbar, NavbarProps, Stack } from "@build_lib/core";
import {
  IconAutoMode,
  IconCheck,
  IconDarkMode,
  IconLightMode,
  IconSearch,
} from "@build_lib/icons";
import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const IconGithub = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    className="navbar-nav-svg"
    viewBox="0 0 512 500"
    role="img"
  >
    <title>GitHub</title>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"
    ></path>
  </svg>
);

const IconNPM = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27.23 27.23"
      aria-hidden="true"
      width="20"
      height="20"
    >
      <rect fill="#333333" width="27.23" height="27.23" rx="2"></rect>
      <polygon
        fill="var(--docs-primary)"
        points="5.8 21.75 13.66 21.75 13.67 9.98 17.59 9.98 17.58 21.76 21.51 21.76 21.52 6.06 5.82 6.04 5.8 21.75"
      ></polygon>
    </svg>
  );
};

const VerticleBar = styled.div`
  width: 5px;
  height: 24px;
  margin-top: 10px;
  border-left: 1px solid red;
`;

const ThemeItem: FC<{
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}> = ({ label, icon, active }) => {
  return (
    <Navbar.DropdownItem
      css={{ background: active ? "var(--docs-primary)" : "unset" }}
    >
      <Stack flexDirection="row" justifyContent="around">
        {icon}
        <Div as="span" flex={2} ps="1">
          {label}
        </Div>
        {active && <IconCheck />}
      </Stack>
    </Navbar.DropdownItem>
  );
};

const ThemeOptions = () => {
  return (
    <Navbar.Dropdown autoPlacement animation="fold">
      <Navbar.DropdownToggle>
        <IconLightMode />
      </Navbar.DropdownToggle>
      <Navbar.DropdownMenu p="2px">
        <ThemeItem active label="Light" icon={<IconLightMode />} />
        <ThemeItem label="Dark" icon={<IconDarkMode />} />
        <ThemeItem label="Auto" icon={<IconAutoMode />} />
      </Navbar.DropdownMenu>
    </Navbar.Dropdown>
  );
};

export default function AppHeader() {
  let [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (!hasScroll && window.scrollY > 32) {
        setHasScroll(true);
      } else if (hasScroll && window.scrollY < 32) {
        setHasScroll(false);
      }
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  });

  return (
    <Navbar
      expand="lg"
      className="app-navbar bg-body-tertiary"
      sticky="top"
      style={{
        boxShadow: hasScroll ? "0px 5px 5px 0px rgba(0,0,0,0.25)" : "unset",
      }}
    >
      <Div width="var(--side-bar-width)" bg="red">
        <Navbar.Brand href="/" ms="2.5rem">
          <AppLogo width="42px" height="42px" color="var(--docs-primary)" />
          <Div
            as="span"
            ms="2"
            fontWeight="bold"
            lineHeight="12px"
            color="var(--docs-primary)"
          >
            Saigon UI
          </Div>
        </Navbar.Brand>
        <Navbar.Toggler>
          <Navbar.TogglerIcon />
        </Navbar.Toggler>
      </Div>

      {/* Searching bar */}
      <Navbar.Collapse justifyContent="between">
        <Navbar.Nav className="ms-3 me-auto">
          <Navbar.Item>
            <Navbar.FormControl
              placeholder="Type keywords..."
              width="350px"
              startIcon={<IconSearch opacity={0.5} />}
            />
          </Navbar.Item>
        </Navbar.Nav>
      </Navbar.Collapse>

      <Navbar.Collapse className="justify-content-end me-3">
        {/* App main menu */}
        <Navbar.Nav>
          <Navbar.Link
            as={(p) => (
              <Link to="/docs/5.3/getting-started/introduction" {...p}>
                Docs
              </Link>
            )}
          />
          <VerticleBar />
          <Navbar.Link
            as={(p) => (
              <Link to="/example" {...p}>
                Example
              </Link>
            )}
          />
          <VerticleBar />
          <Navbar.Link
            as={(p) => (
              <Link to="/theme" {...p}>
                Theme
              </Link>
            )}
          />
          <VerticleBar />
          <Navbar.Link
            as={(p) => (
              <Link to="/resources" {...p}>
                Resources
              </Link>
            )}
          />
        </Navbar.Nav>
        {/** Login avatar */}
        <Navbar.Nav>
          <Navbar.Link href="#">
            <IconGithub />
          </Navbar.Link>
          <Navbar.Link href="#">
            <IconNPM />
          </Navbar.Link>
          <VerticleBar />
          <ThemeOptions />
          <VerticleBar />
          <Navbar.Text>
            Hi, <a href="#login">Quoc</a>
          </Navbar.Text>
        </Navbar.Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
