import {
  RESET_FORMS,
  SET_FORMS_HAVE_MORE,
  SET_FORMS_OFFSET,
} from "../action-type";
import { FormActionType, FormReducerType } from "../formState.type";

type ReducerType = FormReducerType["formsLoading"];
const defaultState: ReducerType = {
  hasMore: true,
  offset: 0,
};

function formsLoading(
  state: ReducerType = defaultState,
  action: FormActionType
) {
  switch (action.type) {
    case RESET_FORMS: {
      return defaultState;
    }
    case SET_FORMS_HAVE_MORE: {
      return { ...state, hasMore: action.payload };
    }
    case SET_FORMS_OFFSET: {
      return { ...state, offset: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default formsLoading;
