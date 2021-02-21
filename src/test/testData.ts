import { AuthorType } from "../domain/author/author.type";
import { BookShelfType } from "../domain/bookshelf/bookshelf.type";
import { FormType, FormPriceType } from "../domain/form/form.type";

export const mockedBookshelves: Array<BookShelfType> = [
  { id: "5c6179511d2d140001899fcd", slug: "dystopia-2", title: "Dystopia" },
  {
    id: "5c617433fefd4c0001f061c8",
    slug: "free-books-18",
    title: "Free books",
  },
];

export const mockedForms: Array<FormType["id"]> = [
  "5b3a3da816786c5a863c76a8",
  "5b27a4a516786c5a86eafa0e",
  "5b3ba28e16786c5a8643e1f6",
  "5b240d6816786c5a86fbae1e",
  "5b27a9b016786c5a860f9507",
];

export const mockedFormWithPriceAndAuthors: Omit<
  FormType,
  "authors" | "price"
> & { authors: Array<AuthorType>; price: FormPriceType } = {
  id: "5b3a3da816786c5a863c76a8",
  authors: [
    {
      id: "5b236ccc16786c5a86ebf83c",
      name: "Aldous Huxley",
      slug: "aldous-huxley",
    },
    {
      id: "5b236d7e16786c5a86f15b60",
      name: "Margaret Atwood",
      slug: "margaret-atwood",
    },
  ],
  short_title: "Brave New World",
  image: "img_url",
  price: {
    amount: 849,
    currency: "EUR",
    includes_taxes: true,
  },
};

export const mockedFormWithPrice: Omit<FormType, "authors | 'price"> & {
  price: FormPriceType;
} = {
  id: "5b3a3da816786c5a863c76a8",
  short_title: "Brave New World",
  image: "img_url",
  price: {
    amount: 849,
    currency: "EUR",
    includes_taxes: false,
  },
};

export const mockedFormWithAuthor: Omit<FormType, "price | 'authors"> & {
  authors: Array<AuthorType>;
} = {
  id: "5b3a3da816786c5a863c76a8",
  short_title: "Brave New World",
  image: "img_url",
  authors: [
    {
      id: "5b236d7e16786c5a86f15b60",
      name: "Margaret Atwood",
      slug: "margaret-atwood",
    },
  ],
};

export const mockedForm: Omit<FormType, "authors" | "price"> = {
  id: "5b3a3da816786c5a863c76a8",
  short_title: "Brave New World",
  image: "img_url",
};
