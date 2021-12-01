import styled from "styled-components";

export const SortingDiv = styled.div`
  display: grid;
  margin-bottom: 20px;
  &:first-child {
    border-radius: 10px;
  }
  @media screen and (min-width: 400px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const RadioButton = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;
export const RadioButtonLabel = styled.label`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  box-sizing: border-box;
  border: 1px solid ${({ checked }) => (checked ? "#2196f3" : "#9ABBCE")};
  margin: -1px -1px 0 0;
  background: ${({ checked }) => (checked ? "#2196F3" : "#fff")};
  color: ${({ checked }) => (checked ? "#fff" : "#4A4A4A")};
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: ${({ checked }) => (checked ? "#2196F3;" : "#f1fcff")};
    color: ${({ checked }) => (checked ? "#fff" : "#2196f3;")};
  }
  &:first-of-type {
    border-radius: 10px 10px 0 0;
  }
  &:last-of-type {
    border-radius: 0 0 10px 10px;
  }
  @media screen and (min-width: 400px) {
    &:first-of-type {
      border-radius: 10px 0 0 10px;
    }
    &:last-of-type {
      border-radius: 0 10px 10px 0;
    }
  }
`;
