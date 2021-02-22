import { SET_ERROR } from "../action-type";

export const setError = (hasError: boolean) =>
  <const>{ type: SET_ERROR, payload: hasError };

export const logAndSaveError = (error: Error) => async (dispatch: Dispatch) => {
  // todo : log error
  dispatch(setError(true));
};
