import { AuthorType } from "../../author/author.type";
import { FormType } from "../form.type";
import {
  resetForms,
  setForm,
  setForms,
  setFormsHaveMore,
  setFormsOffset,
} from "./action";

export type FormReducerType = {
  formIds: Array<FormType["id"]>;
  formImages: { [formId: string]: FormType["image"] };
  formTitles: { [formId: string]: FormType["short_title"] };
  formPrices: { [formId: string]: FormType["price"] };
  formAuthors: { [formId: string]: Array<AuthorType["id"]> };
  formsLoading: { hasMore: boolean; offset: number };
};

export type FormActionType = ReturnType<
  | typeof setForms
  | typeof setForm
  | typeof resetForms
  | typeof setFormsHaveMore
  | typeof setFormsOffset
>;
