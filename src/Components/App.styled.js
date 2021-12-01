import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f3f7fa;
    font-family: "Open Sans", sans-serif;
    color: #4A4A4A;
  }
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 754px;
    flex-direction: row;
  }
`;
export const Sidebar = styled.div`
  width: 232px;
  margin: 0 auto;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 502px;
  }
`;
