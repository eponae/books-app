import { funtcher, API_USER_ID } from "../../apiConfig";
import { BookShelfType } from "./bookshelf.type";

export function getBookshelvesForUser(params?: {
  offset?: number;
  limit?: number;
}): Promise<{ data: Array<BookShelfType> }> {
  return funtcher.get(`/users/${API_USER_ID}/shelves`, { ...params });
}
