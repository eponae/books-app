import { setAuthors } from "../../../author/state/action";
import { BookShelfType } from "../../../bookshelf/bookshelf.type";
import { getFormIdsByBookshelf, getFormInformationById } from "../../form.api";
import { FormType } from "../../form.type";
import {
  SET_FORMS,
  SET_FORM,
  RESET_FORMS,
  SET_FORMS_LOADING,
} from "../action-type";

export const setForms = (formIds: Array<FormType["id"]>) =>
  <const>{ type: SET_FORMS, payload: formIds };

export const setForm = (form: FormType) =>
  <const>{ type: SET_FORM, payload: form };

export const resetForms = () => <const>{ type: RESET_FORMS };

export const setFormsLoading = (isLoading: boolean) =>
  <const>{ type: SET_FORMS_LOADING, payload: isLoading };

export const getFormsForCurrentBookshelf = (
  bookshelfId: BookShelfType["id"]
) => async (dispatch: Dispatch) => {
  dispatch(setFormsLoading(true));
  const formIds = await getFormIdsByBookshelf(bookshelfId, {
    offset: 0,
  });
  dispatch(setForms(formIds));
  dispatch(setFormsLoading(false));
};

export const getForm = (formId: FormType["id"]) => async (
  dispatch: Dispatch
) => {
  const form = await getFormInformationById(formId);
  if (form.authors) {
    dispatch(setAuthors(form.authors));
  }
  dispatch(setForm(form));
};
