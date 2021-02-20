import { bookshelfTitles } from "./bookshelfTitles";
import { bookshelfSlugs } from "./bookshelfSlugs";
import { selectedBookshelf } from "./selectedBookshelf";
import { combineReducers } from "redux";

export const bookshelfReducer = {
  bookshelves: combineReducers({
    bookshelfSlugs,
    bookshelfTitles,
    selectedBookshelf,
  }),
};
