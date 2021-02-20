import { AuthorType } from "../../author/author.type";
import { FormType } from "../form.type";
import { setForm, setForms } from "./action";

export type FormReducerType = {
  formIds: Array<FormType["id"]>;
  formImages: { [formId: string]: FormType["image"] };
  formSlugs: { [formId: string]: FormType["slug"] };
  formTitles: { [formId: string]: FormType["short_title"] };
  formPrices: { [formId: string]: FormType["price"] };
  formAuthors: { [formId: string]: Array<AuthorType["id"]> };
};

export type FormActionType = ReturnType<typeof setForms | typeof setForm>;
