import bookshelfTitles, {
  defaultState as bookshelfTitleDefaultState,
} from "./bookshelfTitles";
import bookshelfSlugs, {
  defaultState as bookshelfSlugsDefaultState,
} from "./bookshelfSlugs";
import bookshelfIds, {
  defaultState as bookshelfIdsDefaultState,
} from "./bookshelfIds";
import bookshelfFormCount, {
  defaultState as bookshelfFormCountDefaultState,
} from "./bookshelfFormCount";
import selectedBookshelf, {
  defaultState as selectedBookshelfDefaultState,
} from "./selectedBookshelf";
import { combineReducers } from "redux";

export const bookshelfInitialState = {
  bookshelves: {
    bookshelfIds: bookshelfIdsDefaultState,
    bookshelfSlugs: bookshelfSlugsDefaultState,
    bookshelfTitles: bookshelfTitleDefaultState,
    bookshelfFormCount: bookshelfFormCountDefaultState,
    selectedBookshelf: selectedBookshelfDefaultState,
  },
};

export const bookshelfReducer = {
  bookshelves: combineReducers({
    bookshelfIds,
    bookshelfSlugs,
    bookshelfTitles,
    bookshelfFormCount,
    selectedBookshelf,
  }),
};
