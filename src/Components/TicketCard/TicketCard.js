import {
  TicketDiv,
  TicketHeader,
  PriceSpan,
  TicketBody,
  TicketSegment,
  TicketSegmentCol,
  TicketSegmentKey,
  TicketSegmentValue,
  TransferInfo,
} from "./TicketCard.styled";

const TicketCard = ({ ticket }) => {
  function minToTime(duration) {
    const hours = parseInt(duration / 60);
    const minutes = duration - hours * 60;
    return hours + "ч " + minutes + "м";
  }

  function countTransfer(transfers) {
    if (transfers.length === 0) return "БЕЗ ПЕРЕСАДОК";
    if (transfers.length === 1) return "1 ПЕРЕСАДКА";
    if (transfers.length < 5) return `${transfers.length} ПЕРЕСАДКИ`;
    if (transfers.length >= 5) return `${transfers.length} ПЕРЕСАДОК`;
  }

  function convertPrice(price) {
    const priceString = String(price);
    return priceString.length > 3
      ? `${priceString.slice(0, priceString.length - 3)} ${priceString.slice(
          -3
        )}`
      : priceString;
  }

  function getArrivalTime(time, duration) {
    const departTime = Date.parse(time);
    const arrivaleTime = new Date(departTime + duration * 60000);
    return (
      convertTime(arrivaleTime.getHours()) +
      ":" +
      convertTime(arrivaleTime.getMinutes())
    );
  }

  function convertTime(value) {
    return String(value).length > 1 ? value : `0${value}`;
  }

  return (
    <TicketDiv>
      <TicketHeader>
        <PriceSpan>{convertPrice(ticket.price)} Р</PriceSpan>
        <img
          src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
          alt={ticket.carrier}
        ></img>
      </TicketHeader>
      <TicketBody>
        {ticket.segments.map((el) => (
          <TicketSegment key={el.origin} style={{ marginBottom: 10 }}>
            <TicketSegmentCol>
              <TicketSegmentKey>
                {el.origin} - {el.destination}
              </TicketSegmentKey>
              <TicketSegmentValue>
                {convertTime(new Date(el.date).getHours())}:
                {convertTime(new Date(el.date).getMinutes())}-
                {getArrivalTime(el.date, el.duration)}
              </TicketSegmentValue>
            </TicketSegmentCol>
            <TicketSegmentCol>
              <TicketSegmentKey>В ПУТИ</TicketSegmentKey>
              <TicketSegmentValue>{minToTime(el.duration)}</TicketSegmentValue>
            </TicketSegmentCol>
            <TicketSegmentCol>
              <TicketSegmentKey>{countTransfer(el.stops)}</TicketSegmentKey>
              <TicketSegmentValue>
                {el.stops.map((el, id) => (
                  <TransferInfo key={id}>{el}</TransferInfo>
                ))}
              </TicketSegmentValue>
            </TicketSegmentCol>
          </TicketSegment>
        ))}
      </TicketBody>
    </TicketDiv>
  );
};

export default TicketCard;
