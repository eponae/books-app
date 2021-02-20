import { AppStateType } from "../../../../state/state.type";
import { BookShelfType } from "../../bookshelf.type";

export function findBookshelfIdFromSlug(
  slug: BookShelfType["slug"],
  bookShelfSlugs: AppStateType["bookshelves"]["bookshelfSlugs"]
): BookShelfType["id"] | null {
  const result = Object.entries(bookShelfSlugs).find(
    ([currentId, currentSlug]) => currentSlug === slug
  );
  return result ? result[0] : null;
}
