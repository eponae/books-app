import { SET_ERROR } from "../action-type";
import { ErrorActionType, ErrorReducerType } from "../errorState.type";

type ReducerType = ErrorReducerType["hasError"];
export const defaultState: ReducerType = false;

function hasError(state: ReducerType = defaultState, action: ErrorActionType) {
  switch (action.type) {
    case SET_ERROR: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default hasError;
