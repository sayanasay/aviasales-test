import {
  GET_TICKETS_REQUEST,
  GET_TICKETS_FAILURE,
  GET_TICKETS_SUCCESS,
} from "../store/types/ticketsTypes";

export const getTicketsRequest = () => ({
  type: GET_TICKETS_REQUEST,
});

export const getTicketsSuccess = (tickets) => ({
  type: GET_TICKETS_SUCCESS,
  payload: tickets,
});

export const getTicketsFailure = (err) => ({
  type: GET_TICKETS_FAILURE,
  payload: err,
});

export const getTickets = () => async (dispatch) => {
  dispatch(getTicketsRequest());
  const response = await fetch(`https://front-test.beta.aviasales.ru/search`);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  const data = await response.json();
  try {
    const result = await fetch(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${data.searchId}`
    );
    if (!result.ok) {
      throw new Error(`Request failed with status ${result.status}`);
    }
    const resultData = await result.json();
    dispatch(getTicketsSuccess(resultData.tickets));
  } catch (error) {
    dispatch(getTicketsFailure(error.message));
  }
};
