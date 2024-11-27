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
    --side-bar-width: 300px;
    --docs-primary: #ffe484;
  }
  .accordion {
    --sg-accordion-btn-padding-y: 10px;
  }

  .app {
    .app-navbar {
      --sg-bg-opacity: 1;
      height: 64px;
      background: var(--docs-primary);

      input {
        ::placeholder {
          opacity: 0.3; /* Firefox */
        }

        ::-ms-input-placeholder {
          /* Edge 12 -18 */
          opacity: 0.3; /* Firefox */
        }
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
