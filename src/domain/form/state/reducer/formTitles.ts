import { RESET_FORMS, SET_FORM } from "../action-type";
import { FormActionType, FormReducerType } from "../formState.type";

type ReducerType = FormReducerType["formTitles"];
export const defaultState: ReducerType = {};

function formTitles(state: ReducerType = defaultState, action: FormActionType) {
  switch (action.type) {
    case RESET_FORMS: {
      return defaultState;
    }
    case SET_FORM: {
      const form = action.payload;
      return { ...state, [form.id]: form.short_title };
    }
    default: {
      return state;
    }
  }
}

export default formTitles;
