import { FC } from "react";
import { Provider } from "react-redux";

const AppProviders: FC = ({ children }) => {
  return <Provider store={{}}>{children}</Provider>;
};

export default AppProviders;
