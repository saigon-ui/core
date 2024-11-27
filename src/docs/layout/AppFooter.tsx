import styled from "@emotion/styled";

const Wrapper = styled.div`
  min-height: 400px;
  //background-color: var(--bs-gray-100);
  background-color: red;
`;

export default function AppFooter() {
  return (
    <Wrapper>
      <div className="container"></div>
    </Wrapper>
  );
}
