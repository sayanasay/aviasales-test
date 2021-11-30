import styled from "styled-components";

export const SortingDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 20px;
  &:first-child {
    color: red;
    border-radius: 10px;
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
  &:first-of-type {
    border-radius: 10px 0 0 10px;
  }
  &: last-of-type {
    border-radius: 0 10px 10px 0;
  }
`;
