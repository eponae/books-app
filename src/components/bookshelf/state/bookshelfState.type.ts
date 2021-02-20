import { setBookshelves } from "./action";
import { setSelectedBookshelf } from "./action/selectedBookshelf";

export type BookshelfReducerType = {};

export type BookshelfActionType = ReturnType<
  typeof setBookshelves | typeof setSelectedBookshelf
>;
