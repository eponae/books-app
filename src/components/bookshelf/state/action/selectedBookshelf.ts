import { BookShelfType } from "../../bookshelf.type";
import { SET_SELECTED_BOOKSHELF } from "../action-type";

export const setSelectedBookshelf = (bookshelfId: BookShelfType["id"]) =>
  <const>{ type: SET_SELECTED_BOOKSHELF, payload: bookshelfId };
