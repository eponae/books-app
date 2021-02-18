import funtch from "funtch";
import { FormType } from "./form.type";

export function getFormIdsByBookshelf(
  sheflId: string,
  params: { offset?: number; limit?: number }
): Promise<Array<string>> {
  const { offset = 0, limit = 10 } = params;
  return funtch.get(
    `/shelves/${sheflId}/forms?offset=${encodeURIComponent(
      offset
    )}&limit=${encodeURIComponent(limit)}`
  );
}

export function getFormInformationById(
  formId: string
): Promise<Array<FormType>> {
  return funtch.get(`/forms/${formId}`);
}
