import { setAuthors } from "../../../author/state/action";
import { BookShelfType } from "../../../bookshelf/bookshelf.type";
import { getFormIdsByBookshelf, getFormInformationById } from "../../form.api";
import { FormType } from "../../form.type";
import { SET_FORMS, SET_FORM } from "../action-type";

export const setForms = (formIds: Array<FormType["id"]>) =>
  <const>{ type: SET_FORMS, payload: formIds };

export const setForm = (form: FormType) =>
  <const>{ type: SET_FORM, payload: form };

export const getFormsForCurrentBookshelf = (
  bookshelfId: BookShelfType["id"]
) => async (dispatch: Dispatch) => {
  const formIds = await getFormIdsByBookshelf(bookshelfId);
  dispatch(setForms(formIds));
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
