import { BookShelfType } from "../../bookshelf.type";
import { SET_BOOKSHELVES } from "../action-types";
import {
  BookshelfActionType,
  BookshelfReducerType,
} from "../bookshelfState.type";

type ReducerType = BookshelfReducerType["bookshelfSlugs"];
const defaultState: ReducerType = [];

export function bookshelfSlugs(
  state: ReducerType = defaultState,
  action: BookshelfActionType
) {
  switch (action.type) {
    case SET_BOOKSHELVES: {
      const bookshelves = action.payload;
      return bookshelves.map((bookshelf: BookShelfType) => bookshelf.slug);
    }
    default: {
      return state;
    }
  }
}
