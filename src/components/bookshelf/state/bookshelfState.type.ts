import { BookShelfType } from "../bookshelf.type";
import { setBookshelves } from "./action";
import { setSelectedBookshelf } from "./action/selectedBookshelf";

export type BookshelfReducerType = {
  bookshelfSlugs: Array<BookShelfType["slug"]>;
  bookshelfTitles: { [bookshelfId: string]: BookShelfType["title"] };
  selectedBookshelf: BookShelfType["slug"] | null;
};

export type BookshelfActionType = ReturnType<
  typeof setBookshelves | typeof setSelectedBookshelf
>;
