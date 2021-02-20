import { BookShelfType } from "../../bookshelf.type";
import { SET_BOOKSHELVES } from "../action-type";
import {
  BookshelfActionType,
  BookshelfReducerType,
} from "../bookshelfState.type";

type ReducerType = BookshelfReducerType["bookshelfTitles"];
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
          acc[bookshelf.id] = bookshelf.title;
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
