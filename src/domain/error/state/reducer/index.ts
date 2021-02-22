import { combineReducers } from "redux";
import { defaultState } from "./hasError";
import hasError from "./hasError";

export const errorInitialState = {
  errors: { hasError: defaultState },
};

export const errorReducer = {
  errors: combineReducers({ hasError }),
};
