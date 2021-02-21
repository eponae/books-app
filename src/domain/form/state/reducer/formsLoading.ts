import {
  RESET_FORMS_LOADING,
  SET_FORMS_LOADING,
  SET_FORMS_PAGE,
} from "../action-type";
import { FormActionType, FormReducerType } from "../formState.type";

type ReducerType = FormReducerType["formsLoading"];
export const FORMS_COUNT_PER_PAGE = 20;

const defaultState: ReducerType = {
  isLoading: false,
  page: 1,
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
    case SET_FORMS_PAGE: {
      const { page } = action.payload;
      return { ...state, page };
    }
    default: {
      return state;
    }
  }
}

export default formsLoading;
