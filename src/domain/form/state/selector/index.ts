import { AppStateType } from "../../../../state/state.type";
import { AuthorType } from "../../../author/author.type";
import { FormType } from "../../form.type";

export function getFormVisibleInformation(
  id: FormType["id"],
  forms: AppStateType["forms"],
  authors: AppStateType["authors"]
): FormType {
  const { formImages, formAuthors, formPrices, formTitles } = forms;
  const { authorIds, authorNames, authorSlugs } = authors;

  const formattedAuthors = forms.formAuthors[id]
    ? formAuthors[id].reduce((acc: Array<AuthorType>, authorId) => {
        if (authorIds.includes(authorId)) {
          acc.push({
            id: authorId,
            slug: authorSlugs[authorId],
            name: authorNames[authorId],
          });
        }
        return acc;
      }, [])
    : [];

  return {
    id,
    image: formImages[id],
    short_title: formTitles[id],
    authors: formattedAuthors,
    price: formPrices[id],
  };
}

export function formatFormPrice(
  formPrice: Exclude<FormType["price"], undefined>
) {
  const price = [String(formPrice.amount / 100)];
  if (formPrice.currency) {
    price.push("€");
  }
  price.push(formPrice.includes_taxes ? "TTC" : "HT");

  return price.join(" ");
}

export function getOffsetFromPage(page: number, itemsPerPage: number) {
  return page > 0 ? (page - 1) * itemsPerPage : 0;
}

export function getPageNumberFromUrl(pageUrl?: string) {
  const pageNumber = pageUrl ? parseInt(pageUrl) : 1;
  return Number.isNaN(pageNumber) || pageNumber < 1 ? 1 : pageNumber;
}

export function getLastPageNumber(
  itemsTotalCount: number,
  itemsPerPage: number
) {
  if (itemsPerPage <= 0 || itemsTotalCount <= 0) {
    return 1;
  }
  const numberOfPages = Math.floor(itemsTotalCount / itemsPerPage);
  const lastPageItemsCount = itemsTotalCount % itemsPerPage;
  if (lastPageItemsCount > 0) {
    return numberOfPages + 1;
  }
  return numberOfPages;
}
