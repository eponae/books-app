import { bookshelfTitles } from "./bookshelfTitles";
import { bookshelfSlugs } from "./bookshelfSlugs";
import { bookshelfIds } from "./bookshelfIds";
import { selectedBookshelf } from "./selectedBookshelf";
import { combineReducers } from "redux";

export const bookshelfReducer = {
  bookshelves: combineReducers({
    bookshelfIds,
    bookshelfSlugs,
    bookshelfTitles,
    selectedBookshelf,
  }),
};
