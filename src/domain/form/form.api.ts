import { funtcher } from "../../apiConfig";
import { FormType } from "./form.type";

export function getFormIdsByBookshelf(
  sheflId: string,
  params?: { offset?: number; limit?: number }
): Promise<{ data: Array<string>; headers: { "x-glose-count": number } }> {
  return funtcher.get(`/shelves/${sheflId}/forms`, { ...params });
}

export function getFormInformationById(
  formId: string
): Promise<{ data: FormType }> {
  return funtcher.get(`/forms/${formId}`);
}
