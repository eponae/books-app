import {
  GO_TO_NEXT_PAGE,
  GO_TO_PREVIOUS_PAGE,
  RESET_FORMS_LOADING,
  SET_FORMS_HAVE_MORE,
  SET_FORMS_LOADING,
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
    case GO_TO_PREVIOUS_PAGE: {
      const newOffset = state.offset - FORMS_COUNT_PER_PAGE;
      if (newOffset === 0) {
        return { offset: 0, hasMore: false };
      }
      return {
        ...state,
        offset: newOffset,
      };
    }
    case GO_TO_NEXT_PAGE: {
      return { ...state, offset: state.offset + FORMS_COUNT_PER_PAGE };
    }
    default: {
      return state;
    }
  }
}

export default formsLoading;
