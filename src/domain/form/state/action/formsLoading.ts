import {
  GO_TO_NEXT_PAGE,
  GO_TO_PREVIOUS_PAGE,
  RESET_FORMS_LOADING,
  SET_FORMS_HAVE_MORE,
  SET_FORMS_LOADING,
} from "../action-type";

export const setFormsHaveMore = (hasMore: boolean) =>
  <const>{ type: SET_FORMS_HAVE_MORE, payload: hasMore };

export const goToPreviousPage = () => <const>{ type: GO_TO_PREVIOUS_PAGE };

export const goToNextPage = () => <const>{ type: GO_TO_NEXT_PAGE };

export const resetFormsLoading = () => <const>{ type: RESET_FORMS_LOADING };

export const setFormsLoading = (isLoading: boolean) =>
  <const>{ type: SET_FORMS_LOADING, payload: isLoading };
