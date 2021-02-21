import { resetAuthors, setAuthors } from "../../../author/state/action";
import { BookShelfType } from "../../../bookshelf/bookshelf.type";
import { getFormIdsByBookshelf, getFormInformationById } from "../../form.api";
import { FormType } from "../../form.type";
import { SET_FORMS, SET_FORM, RESET_FORMS } from "../action-type";
import {
  goToNextPage,
  goToPreviousPage,
  setFormsHaveMore,
  setFormsLoading,
} from "./formsLoading";

export const setForms = (formIds: Array<FormType["id"]>) =>
  <const>{ type: SET_FORMS, payload: formIds };

export const setForm = (form: FormType) =>
  <const>{ type: SET_FORM, payload: form };

export const resetForms = () => <const>{ type: RESET_FORMS };

export const getFormsForBookshelfFromOffset = (
  bookshelfId: BookShelfType["id"],
  offset: number,
  limit: number,
  goNext: boolean
) => async (dispatch: Dispatch) => {
  dispatch(setFormsLoading(true));
  dispatch(resetAuthors());
  dispatch(resetForms());

  const formIds = await getFormIdsByBookshelf(bookshelfId, {
    offset,
    limit,
  });

  if (goNext) {
    dispatch(goToNextPage());
  } else {
    dispatch(goToPreviousPage());
  }

  if (formIds.length) {
    dispatch(setForms(formIds));
  }
  if (formIds.length < 10) {
    dispatch(setFormsHaveMore(false));
  }
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
