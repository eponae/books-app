import { SET_FORM } from "../action-type";
import { FormActionType, FormReducerType } from "../formState.type";

type ReducerType = FormReducerType["formPrices"];
const defaultState: ReducerType = {};

export function formPrices(
  state: ReducerType = defaultState,
  action: FormActionType
) {
  switch (action.type) {
    case SET_FORM: {
      const form = action.payload;
      if (form.price) {
        return { ...state, [form.id]: form.price };
      }
      return state;
    }
    default: {
      return state;
    }
  }
}
