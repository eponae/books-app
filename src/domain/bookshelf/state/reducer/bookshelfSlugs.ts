import { BookShelfType } from "../../bookshelf.type";
import { SET_BOOKSHELVES } from "../action-type";
import {
  BookshelfActionType,
  BookshelfReducerType,
} from "../bookshelfState.type";

type ReducerType = BookshelfReducerType["bookshelfSlugs"];
export const defaultState: ReducerType = {};

function bookshelfSlugs(
  state: ReducerType = defaultState,
  action: BookshelfActionType
) {
  switch (action.type) {
    case SET_BOOKSHELVES: {
      const bookshelves = action.payload;
      return bookshelves.reduce(
        (acc: ReducerType, bookshelf: BookShelfType) => {
          acc[bookshelf.id] = bookshelf.slug;
          return acc;
        },
        {}
      );
    }
    default: {
      return state;
    }
  }
}

export default bookshelfSlugs;
