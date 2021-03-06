import { RESET_FORMS, SET_FORM } from "../action-type";
import { FormActionType, FormReducerType } from "../formState.type";

type ReducerType = FormReducerType["formImages"];
export const defaultState: ReducerType = {};

function formImages(state: ReducerType = defaultState, action: FormActionType) {
  switch (action.type) {
    case RESET_FORMS: {
      return defaultState;
    }
    case SET_FORM: {
      const form = action.payload;
      return { ...state, [form.id]: form.image };
    }
    default: {
      return state;
    }
  }
}

export default formImages;
