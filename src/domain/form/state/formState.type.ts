import { AuthorType } from "../../author/author.type";
import { FormType } from "../form.type";
import {
  resetForms,
  resetFormsLoading,
  setForm,
  setForms,
  setFormsLoading,
  setFormsPage,
} from "./action";

export type FormReducerType = {
  formIds: Array<FormType["id"]>;
  formImages: { [formId: string]: FormType["image"] };
  formTitles: { [formId: string]: FormType["short_title"] };
  formPrices: { [formId: string]: FormType["price"] };
  formAuthors: { [formId: string]: Array<AuthorType["id"]> };
  formsLoading: {
    isLoading: boolean;
    page: number;
  };
};

export type FormActionType = ReturnType<
  | typeof setForms
  | typeof setForm
  | typeof resetForms
  | typeof resetFormsLoading
  | typeof setFormsPage
  | typeof setFormsLoading
>;
