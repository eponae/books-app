import { SET_FORM } from "../action-type";
import { FormActionType, FormReducerType } from "../formState.type";

type ReducerType = FormReducerType["formAuthors"];
const defaultState: ReducerType = {};

export function formAuthors(
  state: ReducerType = defaultState,
  action: FormActionType
) {
  switch (action.type) {
    case SET_FORM: {
      const form = action.payload;
      if (form.authors) {
        return { ...state, [form.id]: form.authors.map((author) => author.id) };
      }
      return state;
    }
    default: {
      return state;
    }
  }
}
