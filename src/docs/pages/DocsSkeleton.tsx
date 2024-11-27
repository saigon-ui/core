import { Div, Stack } from "@build_lib/core";
import SideBar from "./SideBar.nav";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import "@build_lib/saigon-ui.css";
import "../../asset/scss/docs.scss";

export type DocPage = {
  path: string;
  md: string;
};

const ContentPanel = styled.div`
  flex: 2;
  padding: 0 1rem 0 2rem;
`;
ContentPanel.displayName = "ContentPanel";

const DocsSkeleton = () => {
  return (
    <>
      <SideBar width="var(--side-bar-width)" />
      <Stack flexDirection="row">
        <Div width="var(--side-bar-width)" />
        <ContentPanel className="container">
          <Outlet />
        </ContentPanel>
        <Div width="256px" />
      </Stack>
    </>
  );
};

export default DocsSkeleton;
