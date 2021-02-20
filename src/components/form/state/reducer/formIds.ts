import { SET_FORMS } from "../action-type";
import { FormActionType, FormReducerType } from "../formState.type";

type ReducerType = FormReducerType["formIds"];
const defaultState: ReducerType = [];

export function formIds(
  state: ReducerType = defaultState,
  action: FormActionType
) {
  switch (action.type) {
    case SET_FORMS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
