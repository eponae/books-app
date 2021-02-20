import { setAuthors } from "../../../author/state/action";
import { BookShelfType } from "../../../bookshelf/bookshelf.type";
import { getFormIdsByBookshelf, getFormInformationById } from "../../form.api";
import { FormType } from "../../form.type";
import { SET_FORMS, SET_FORM, RESET_FORMS } from "../action-type";
import { setFormsHaveMore, setFormsOffset } from "./formsLoading";

export const setForms = (formIds: Array<FormType["id"]>) =>
  <const>{ type: SET_FORMS, payload: formIds };

export const setForm = (form: FormType) =>
  <const>{ type: SET_FORM, payload: form };

export const resetForms = () => <const>{ type: RESET_FORMS };

export const getFormsForCurrentBookshelf = (
  bookshelfId: BookShelfType["id"],
  offset: number
) => async (dispatch: Dispatch) => {
  const formsCountPerPage = 10;
  const formIds = await getFormIdsByBookshelf(bookshelfId, {
    offset,
    limit: formsCountPerPage,
  });
  if (formIds.length) {
    dispatch(setFormsOffset(offset + formIds.length));
    dispatch(setForms(formIds));
  } else {
    dispatch(setFormsHaveMore(false));
  }
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
