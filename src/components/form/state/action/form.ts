import { BookShelfType } from "../../../bookshelf/bookshelf.type";
import { getFormIdsByBookshelf } from "../../form.api";
import { FormType } from "../../form.type";
import { SET_FORMS } from "../action-types";

export const setForms = (formIds: Array<FormType["id"]>) =>
  <const>{ type: SET_FORMS, payload: formIds };

export const getFormsForCurrentBookshelf = (
  bookshelfId: BookShelfType["id"]
) => async (dispatch: Dispatch) => {
  const formIds = await getFormIdsByBookshelf(bookshelfId);
  dispatch(setForms(formIds));
};
