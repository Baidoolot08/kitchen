import { createStore } from "redux";
import { Reducer } from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

export const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
