import styled from "styled-components";
import checksvg from "../../img/check.svg";

export const FilterDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 10px 0;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  background: #fff;
`;
export const FilterHeader = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin: 0;
  padding: 10px 20px;
`;
export const Checkbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;
export const CheckboxLabel = styled.label`
  display: inline-flex;
  align-items: center;
  user-select: none;
  padding-top: 10px;
  font-size: 13px;
  cursor: pointer;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  &:hover {
    background: #f1fcff;
  }
  &:after,
  &:before {
    content: "";
    width: 20px;
    height: 20px;
    margin-right: 10px;
    box-sizing: border-box;
    border-radius: 2px;
    border: 1px solid ${({ checked }) => (checked ? "#2196f3" : "#9ABBCE")};
    transition: all 2s ease;
  }
  &:after {
    position: absolute;
  }
  &:before {
    opacity: ${({ checked }) => (checked ? 1 : 0)};
    background-image: ${({ checked }) =>
      checked ? `url(${checksvg})` : "none"};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 12px 8px;
    transition: all 0.3s ease-in;
  }
`;
