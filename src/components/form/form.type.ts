import { AuthorType } from "../author/author.type";

type FormPriceType = {
  amount: number;
  currency: "EUR";
  includes_taxes: boolean;
};

export type FormType = {
  id: string;
  slug: string;
  short_title: string;
  price?: FormPriceType;
  image: string;
  authors?: Array<AuthorType>;
};
