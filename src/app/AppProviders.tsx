import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../state/store";

const AppProviders: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

export default AppProviders;
