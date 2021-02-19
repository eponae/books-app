type FormAuthorType = {
  name: string;
  slug: string;
};

type FormPriceType = {
  amount: number;
  currency: "EUR";
  includes_taxes: boolean;
};

export type FormType = {
  slug: string;
  title: string;
  short_title: string;
  price?: FormPriceType;
  image: string;
  authors?: Array<FormAuthorType>;
};
