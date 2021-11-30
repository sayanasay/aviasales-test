import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
`;
const RetryButton = styled.button`
  height: 50px;
  background: #122d43;
  border: 1px solid #dfe5ec;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-transform: uppercase;
`;

const ErrorComponent = ({ error, handleClick }) => {
  return (
    <StyledDiv>
      <h3>Error: {error}</h3>
      <RetryButton onClick={handleClick} danger>
        Retry
      </RetryButton>
    </StyledDiv>
  );
};

export default ErrorComponent;
