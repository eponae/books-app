import {
  RESET_FORMS_LOADING,
  SET_FORMS_HAVE_MORE,
  SET_FORMS_LOADING,
  SET_FORMS_OFFSET,
} from "../action-type";
import { FormActionType, FormReducerType } from "../formState.type";

type ReducerType = FormReducerType["formsLoading"];
export const FORMS_COUNT_PER_PAGE = 10;

const defaultState: ReducerType = {
  hasMore: true,
  offset: 0,
  isLoading: false,
};

function formsLoading(
  state: ReducerType = defaultState,
  action: FormActionType
) {
  switch (action.type) {
    case RESET_FORMS_LOADING: {
      return defaultState;
    }
    case SET_FORMS_LOADING: {
      return { ...state, isLoading: action.payload };
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
