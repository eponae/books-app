import { Component, ReactNode } from "react";
import styles from "./ErrorHandler.module.scss";
import { Connect, PropsFromRedux } from "./ErrorHandlerContainer";

type Props = PropsFromRedux & { children: ReactNode };

class RawErrorHandler extends Component<Props> {
  componentDidCatch(error: Error) {
    const { setHasError } = this.props;
    setHasError(true);
  }

  render() {
    const { children, hasError } = this.props;

    if (!hasError) {
      return children;
    }
    return <h1 className={styles.error}>Une erreur s'est produite.</h1>;
  }
}
const ErrorHandler = Connect(RawErrorHandler);

export default ErrorHandler;
