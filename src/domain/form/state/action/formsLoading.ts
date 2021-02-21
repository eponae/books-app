import {
  RESET_FORMS_LOADING,
  SET_FORMS_LOADING,
  SET_FORMS_PAGE,
} from "../action-type";

export const setFormsPage = (page: number) =>
  <const>{ type: SET_FORMS_PAGE, payload: { page } };

export const resetFormsLoading = () => <const>{ type: RESET_FORMS_LOADING };

export const setFormsLoading = (isLoading: boolean) =>
  <const>{ type: SET_FORMS_LOADING, payload: isLoading };
