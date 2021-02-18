import funtch from "funtch";
import { BookShelfType } from "./bookshelf.type";

export function getBookshelvesForUser(): Promise<Array<BookShelfType>> {
  return funtch.get("/users/5a8411b53ed02c04187ff02a/shelves");
}
