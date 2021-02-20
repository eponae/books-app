import { FC } from "react";
import { Provider } from "react-redux";
import store from "./state/store";

const AppProviders: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProviders;
