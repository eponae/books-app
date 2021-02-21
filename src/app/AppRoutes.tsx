import { Switch, Route, Redirect } from "react-router-dom";
import Forms from "../domain/form/components/Forms";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/:slug/:pageNumber" children={<Forms />} />
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRoutes;
