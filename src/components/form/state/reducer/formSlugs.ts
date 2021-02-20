import { SET_FORM } from "../action-type";
import { FormActionType, FormReducerType } from "../formState.type";

type ReducerType = FormReducerType["formSlugs"];
const defaultState: ReducerType = {};

export function formSlugs(
  state: ReducerType = defaultState,
  action: FormActionType
) {
  switch (action.type) {
    case SET_FORM: {
      const form = action.payload;
      return { ...state, [form.id]: form.slug };
    }
    default: {
      return state;
    }
  }
}
