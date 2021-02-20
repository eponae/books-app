import { SET_FORMS_HAVE_MORE, SET_FORMS_OFFSET } from "../action-type";

export const setFormsHaveMore = (hasMore: boolean) =>
  <const>{ type: SET_FORMS_HAVE_MORE, payload: hasMore };

export const setFormsOffset = (offset: number) =>
  <const>{ type: SET_FORMS_OFFSET, payload: offset };
