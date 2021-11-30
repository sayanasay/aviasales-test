import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import tickets from "./tickets";

export const store = createStore(
  tickets,
  composeWithDevTools(applyMiddleware(thunk))
);
