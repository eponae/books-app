import { AppStateType } from "../../../../state/state.type";
import { AuthorType } from "../../../author/author.type";
import { FormType } from "../../form.type";

export function getFormVisibleInformation(
  id: FormType["id"],
  forms: AppStateType["forms"],
  authors: AppStateType["authors"]
): FormType | null {
  const { formIds, formImages, formAuthors, formPrices, formTitles } = forms;
  const { authorIds, authorNames, authorSlugs } = authors;
  if (formIds.includes(id)) {
    const authors = forms.formAuthors[id]
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
      authors,
      price: formPrices[id],
    };
  }
  return null;
}

export function formatFormPrice(
  formPrice: Exclude<FormType["price"], undefined>
) {
  const price = [String(formPrice.amount)];
  if (formPrice.currency) {
    price.push("€");
  }
  if (formPrice.includes_taxes) {
    price.push(formPrice.includes_taxes ? "TTC" : "HT");
  }
  return price.join(" ");
}

export function getOffsetFromPage(page: number, limit: number) {
  return page > 0 ? (page - 1) * limit : 0;
}

export function getPageFromUrl(pageUrl?: string) {
  const pageNumber = pageUrl ? parseInt(pageUrl) : 1;
  return Number.isNaN(pageNumber) || pageNumber < 1 ? 1 : pageNumber;
}
