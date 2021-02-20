import { FormType } from "../form.type";
import { setForms } from "./action";

export type FormReducerType = Array<FormType["id"]>;

export type FormActionType = ReturnType<typeof setForms>;
