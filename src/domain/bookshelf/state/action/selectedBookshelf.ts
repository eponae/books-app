import { resetAuthors } from "../../../author/state/action";
import { resetForms } from "../../../form/state/action";
import { BookShelfType } from "../../bookshelf.type";
import { SET_SELECTED_BOOKSHELF } from "../action-type";

export const setSelectedBookshelf = (bookshelfId: BookShelfType["id"]) =>
  <const>{ type: SET_SELECTED_BOOKSHELF, payload: bookshelfId };

export const setBookshelfId = (bookshelfId: BookShelfType["id"]) => (
  dispatch: Dispatch
) => {
  dispatch(resetForms());
  dispatch(resetAuthors());
  dispatch(setSelectedBookshelf(bookshelfId));
};
