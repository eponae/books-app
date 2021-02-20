import produce from "immer";
import { RESET_FORMS, SET_FORM } from "../action-type";
import { FormActionType, FormReducerType } from "../formState.type";

type ReducerType = FormReducerType["formAuthors"];
const defaultState: ReducerType = {};

function formAuthors(
  state: ReducerType = defaultState,
  action: FormActionType
) {
  switch (action.type) {
    case RESET_FORMS: {
      return defaultState;
    }
    case SET_FORM: {
      const form = action.payload;
      return produce(state, (draftState) => {
        if (form.authors) {
          draftState[form.id] = form.authors.map((author) => author.id);
        }
      });
    }
    default: {
      return state;
    }
  }
}

export default formAuthors;
