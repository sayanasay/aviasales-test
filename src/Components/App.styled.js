import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f3f7fa;
    font-family: "Open Sans", sans-serif;
    color: #4A4A4A;
  }
`;
export const Container = styled.div`
  width: 754px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
export const Sidebar = styled.div`
  width: 232px;
  margin-right: 20px;
`;
export const Content = styled.div`
  width: 502px;
  display: flex;
  flex-direction: column;
`;
