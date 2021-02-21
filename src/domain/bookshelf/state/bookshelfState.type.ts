import { BookShelfType } from "../bookshelf.type";
import { setBookshelfFormCount, setBookshelves } from "./action";
import { setSelectedBookshelf } from "./action/selectedBookshelf";

export type BookshelfReducerType = {
  bookshelfIds: Array<BookShelfType["id"]>;
  bookshelfSlugs: { [bookshelfId: string]: BookShelfType["slug"] };
  bookshelfTitles: { [bookshelfId: string]: BookShelfType["title"] };
  bookshelfFormCount: { [bookshelfId: string]: number };
  selectedBookshelf: BookShelfType["id"] | null;
};

export type BookshelfActionType = ReturnType<
  | typeof setBookshelves
  | typeof setSelectedBookshelf
  | typeof setBookshelfFormCount
>;
