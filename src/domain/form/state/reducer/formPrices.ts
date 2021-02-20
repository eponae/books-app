import produce from "immer";
import { RESET_FORMS, SET_FORM } from "../action-type";
import { FormActionType, FormReducerType } from "../formState.type";

type ReducerType = FormReducerType["formPrices"];
const defaultState: ReducerType = {};

function formPrices(state: ReducerType = defaultState, action: FormActionType) {
  switch (action.type) {
    case RESET_FORMS: {
      return defaultState;
    }
    case SET_FORM: {
      const form = action.payload;
      if (form.price) {
        return produce(state, (draftState) => {
          draftState[form.id] = form.price;
        });
      }
      return state;
    }
    default: {
      return state;
    }
  }
}

export default formPrices;
