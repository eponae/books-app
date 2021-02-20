import { BookShelfType } from "../../bookshelf.type";
import { SET_BOOKSHELVES } from "../action-types";
import { BookshelfActionType } from "../bookshelfState.type";

type ReducerType = {
  [bookshelfId: string]: BookShelfType["title"];
};
const defaultState: ReducerType = {};

export function bookshelfTitles(
  state: ReducerType = defaultState,
  action: BookshelfActionType
) {
  switch (action.type) {
    case SET_BOOKSHELVES: {
      const bookshelves = action.payload;
      return bookshelves.reduce(
        (acc: ReducerType, bookshelf: BookShelfType) => {
          acc[bookshelf.slug] = bookshelf.title;
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
