import { BookShelfType } from "../../bookshelf.type";
import { SET_SELECTED_BOOKSHELF } from "../action-types";

export const setSelectedBookshelf = (bookshelfId: BookShelfType["slug"]) =>
  <const>{ type: SET_SELECTED_BOOKSHELF, payload: bookshelfId };
