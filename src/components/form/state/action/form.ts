import { FormType } from "../../form.type";
import { SET_FORM } from "../action-types";

export const setForm = (form: FormType) =>
  <const>{ type: SET_FORM, payload: form };
