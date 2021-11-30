import styled from "styled-components";

export const TicketDiv = styled.div`
  width: 100%;
  border-radius: 6px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin-bottom: 20px;
`;
export const TicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
export const TicketBody = styled.div`
  padding: 0 20px 20px;
`;
export const PriceSpan = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: #2196f3;
`;
export const TicketSegment = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
export const TicketSegmentCol = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TicketSegmentKey = styled.div`
  color: #a0b0b9;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.5px;
`;
export const TicketSegmentValue = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
`;
export const TransferInfo = styled.span`
  &:after {
    content: ", ";
  }
  &:last-of-type:after {
    content: "";
  }
`;
