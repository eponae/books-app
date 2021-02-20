import { SET_FORM } from "../action-type";
import { FormActionType, FormReducerType } from "../formState.type";

type ReducerType = FormReducerType["formTitles"];
const defaultState: ReducerType = {};

export function formTitles(
  state: ReducerType = defaultState,
  action: FormActionType
) {
  switch (action.type) {
    case SET_FORM: {
      const form = action.payload;
      return { ...state, [form.id]: form.short_title };
    }
    default: {
      return state;
    }
  }
}
