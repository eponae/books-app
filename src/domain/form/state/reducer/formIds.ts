import { RESET_FORMS, SET_FORMS } from "../action-type";
import { FormActionType, FormReducerType } from "../formState.type";

type ReducerType = FormReducerType["formIds"];
const defaultState: ReducerType = [];

function formIds(state: ReducerType = defaultState, action: FormActionType) {
  switch (action.type) {
    case RESET_FORMS: {
      return defaultState;
    }
    case SET_FORMS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default formIds;
