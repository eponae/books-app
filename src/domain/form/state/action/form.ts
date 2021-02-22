import { resetAuthors, setAuthors } from "../../../author/state/action";
import { BookShelfType } from "../../../bookshelf/bookshelf.type";
import { setBookshelfFormCount } from "../../../bookshelf/state/action";
import { getFormIdsByBookshelf, getFormInformationById } from "../../form.api";
import { FormType } from "../../form.type";
import { SET_FORMS, SET_FORM, RESET_FORMS } from "../action-type";
import { setFormsLoading, setFormsPage } from "./formsLoading";

export const setForms = (formIds: Array<FormType["id"]>) =>
  <const>{ type: SET_FORMS, payload: formIds };

export const setForm = (form: FormType) =>
  <const>{ type: SET_FORM, payload: form };

export const resetForms = () => <const>{ type: RESET_FORMS };

export const getFormsForBookshelfFromOffset = (
  bookshelfId: BookShelfType["id"],
  page: number,
  offset: number,
  limit: number
) => async (dispatch: Dispatch) => {
  dispatch(setFormsLoading(true));

  dispatch(resetAuthors());
  dispatch(resetForms());

  dispatch(setFormsPage(page));

  const { data: formIds, headers } = await getFormIdsByBookshelf(bookshelfId, {
    offset,
    limit,
  });
  console.log(formIds, headers);

  const formCount = headers["x-glose-count"];
  dispatch(setBookshelfFormCount(bookshelfId, formCount));

  if (formIds.length) {
    dispatch(setForms(formIds));
  }

  dispatch(setFormsLoading(false));
};

export const getForm = (formId: FormType["id"]) => async (
  dispatch: Dispatch
) => {
  const { data: form } = await getFormInformationById(formId);
  if (form.authors) {
    dispatch(setAuthors(form.authors));
  }
  dispatch(setForm(form));
};
