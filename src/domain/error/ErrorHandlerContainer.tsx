import { connect, ConnectedProps } from "react-redux";
import { AppStateType } from "../../state/state.type";
import { setError } from "./state/action";

const mapStateToProps = (state: AppStateType) => ({
  hasError: state.errors.hasError,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setHasError(hasError: boolean) {
    dispatch(setError(hasError));
  },
});

export const Connect = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof Connect>;
