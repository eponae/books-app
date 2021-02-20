import { Switch, Route } from "react-router-dom";
import Forms from "../domain/form/components/Forms";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/:slug" children={<Forms />} />
    </Switch>
  );
};

export default AppRoutes;
