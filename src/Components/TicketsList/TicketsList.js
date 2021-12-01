import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../../actions/ticketsActions";
import TicketCard from "../TicketCard/TicketCard";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import styled from "styled-components";
import Loader from "../Loader/Loader";

const Button = styled.button`
  height: 50px;
  background: #2196f3;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  &:hover {
    background: #248fe3;
  }
`;

const TicketsList = ({ filters, sorting }) => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.ticketsList);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.request);
  const [page, setPage] = useState(0);

  const requestTickets = () => {
    dispatch(getTickets());
  };

  const sortTickets = (sorting, tickets) => {
    if (!sorting) return tickets;
    if (sorting === "cheap") return tickets.sort((a, b) => a.price - b.price);
    if (sorting === "fast")
      return tickets.sort(
        (a, b) =>
          a.segments[0].duration +
          a.segments[1].duration -
          (b.segments[0].duration + b.segments[1].duration)
      );
    if (sorting === "optimal")
      return tickets.sort((a, b) =>
        a.price > b.price &&
        a.segments[0].duration + a.segments[1].duration >
          b.segments[0].duration + b.segments[1].duration
          ? 1
          : -1
      );
  };

  const filteredTickets = sortTickets(
    sorting,
    tickets.filter((el) => {
      for (let i = 0; i < filters.length; i++) {
        if (
          (el.segments[0].stops.length === filters[i] &&
            el.segments[1].stops.length <= filters[i]) ||
          (el.segments[1].stops.length === filters[i] &&
            el.segments[0].stops.length <= filters[i])
        )
          return true;
      }
    })
  ).slice(0, 5 * (page + 1));

  const handleLoadClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    requestTickets();
  }, []);

  return (
    <>
      {error ? (
        <ErrorComponent error={error} handleClick={requestTickets} />
      ) : null}
      {loading === 1 ? <Loader>Loading...</Loader> : null}
      {filteredTickets.map((ticket, id) => (
        <TicketCard key={id} ticket={ticket} />
      ))}
      {error ? null : (
        <Button onClick={handleLoadClick}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ! </Button>
      )}
    </>
  );
};

export default TicketsList;
