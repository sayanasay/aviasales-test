import {
  GET_TICKETS_REQUEST,
  GET_TICKETS_SUCCESS,
  GET_TICKETS_FAILURE,
} from "./types/ticketsTypes";

export const STATUSES = {
  IDLE: 0,
  REQUEST: 1,
  SUCCESS: 2,
  FAILURE: 3,
};

export const initialState = {
  ticketsList: [],
  request: STATUSES.IDLE,
  error: null,
};

const tickets = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TICKETS_REQUEST:
      return { ...state, request: STATUSES.REQUEST };

    case GET_TICKETS_SUCCESS:
      return {
        ...state,
        ticketsList: payload,
        request: STATUSES.SUCCESS,
        error: null,
      };
    case GET_TICKETS_FAILURE:
      return { ...state, request: STATUSES.FAILURE, error: payload };

    default:
      return state;
  }
};

export default tickets;
