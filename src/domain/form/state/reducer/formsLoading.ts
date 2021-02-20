import { SET_FORMS_LOADING } from "../action-type";
import { FormActionType, FormReducerType } from "../formState.type";

type ReducerType = FormReducerType["formsLoading"];
const defaultState: ReducerType = false;

function formsLoading(
  state: ReducerType = defaultState,
  action: FormActionType
) {
  switch (action.type) {
    case SET_FORMS_LOADING: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default formsLoading;
