import { funtcher } from "../../api";
import { FormType } from "./form.type";

export function getFormIdsByBookshelf(
  sheflId: string,
  params: { offset?: number; limit?: number }
): Promise<Array<string>> {
  return funtcher.get(`/shelves/${sheflId}/forms`, params);
}

export function getFormInformationById(
  formId: string
): Promise<Array<FormType>> {
  return funtcher.get(`/forms/${formId}`);
}
