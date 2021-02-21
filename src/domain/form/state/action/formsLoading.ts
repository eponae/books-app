import actions from "../../../../state/action";
import {
  RESET_FORMS_LOADING,
  SET_FORMS_HAVE_MORE,
  SET_FORMS_LOADING,
  SET_FORMS_OFFSET,
} from "../action-type";

export const setFormsHaveMore = (hasMore: boolean) =>
  <const>{ type: SET_FORMS_HAVE_MORE, payload: hasMore };

export const setFormsOffset = (offset: number) =>
  <const>{ type: SET_FORMS_OFFSET, payload: offset };

export const resetFormsLoading = () => <const>{ type: RESET_FORMS_LOADING };

export const setFormsLoading = (isLoading: boolean) =>
  <const>{ type: SET_FORMS_LOADING, payload: isLoading };
