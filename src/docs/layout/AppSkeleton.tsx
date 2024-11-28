import { SaigonProvider } from "@build_lib/core";
import "@build_lib/saigon-ui.css";
import { injectGlobal } from "@emotion/css";
import { css } from "@emotion/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../../asset/scss/docs.scss";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

export type DocPage = {
  path: string;
  md: string;
};

const AppCSS = css`
  :root {
    --side-bar-width: 350px;

    --docs-yellow: #ffc800;
    --docs-navy: #30323d;
    --docs-gray: #4d5061;
    --docs-blue: #3c7fef;
    --docs-silver: #cdd1c4;
    --docs-red: #da2020;
    --docs-green: #06d6a0;

    --docs-yellow-2: #c19a0b;
    --docs-navy-2: #101639;
    --docs-gray-2: #1b245b;
    --docs-blue-2: #1c4da3;
    --docs-silver-2: #ffe484;
  }
  .accordion {
    --sg-accordion-btn-padding-y: 10px;
  }

  .app {
    .app-navbar {
      --sg-bg-opacity: 1;
      height: 68px;
      margin: 16px 32px;
      background: linear-gradient(
        90deg,
        var(--docs-red) 0%,
        var(--docs-yellow) 27.5%
      );
      border-radius: 16px;
      transition: all 200ms ease-in-out;

      &.scrolled {
        width: 100%;
        margin: 0;
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
        border-radius: 0;
      }

      .hstack {
        margin-left: 1.5rem;
        gap: 25px;
      }

      .logo-svg {
        width: 60px;
        height: 60px;
        color: yellow;
      }

      .logo-text {
        color: yellow;
        font-size: 32px;
        font-weight: bold;
      }

      input {
        ::placeholder {
          opacity: 0.3; /* Firefox */
          color: var(--docs-navy-2);
        }

        ::-ms-input-placeholder {
          /* Edge 12 -18 */
          opacity: 0.3; /* Firefox */
          color: var(--docs-navy-2);
        }

        border-radius: 12px;
        border: 2px solid var(--docs-navy-2);
        color: var(--docs-navy-2);
        background: transparent;
      }

      .ico {
        color: var(--docs-navy-2);
        opacity: 1;
      }

      .nav-link {
        color: var(--docs-navy-2);
        font-size: 18px;
        font-weight: bold;
      }
    }

    .app-body {
      min-height: calc(100vh - 64px);
      margin-top: 2rem;
      padding: 0 1rem 0 2rem;
    }
  }
`;

const AppSkeleton = () => {
  useEffect(() => {
    injectGlobal(AppCSS.styles);
  }, []);

  return (
    <SaigonProvider>
      <div className="app">
        <AppHeader />
        <div className="app-body">
          <Outlet />
        </div>
        <AppFooter />
      </div>
    </SaigonProvider>
  );
};

export default AppSkeleton;
