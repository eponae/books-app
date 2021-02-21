import { AppStateType } from "../../../../state/state.type";
import { BookShelfType } from "../../bookshelf.type";

export function findBookshelfIdFromSlug(
  bookShelfSlugs: AppStateType["bookshelves"]["bookshelfSlugs"],
  slug?: BookShelfType["slug"]
): BookShelfType["id"] | undefined {
  const result = Object.entries(bookShelfSlugs).find(
    ([currentId, currentSlug]) => currentSlug === slug
  );
  return result ? result[0] : undefined;
}
