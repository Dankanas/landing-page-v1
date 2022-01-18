import React, { FC } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import MainLayout from "./layouts/MainLayout";
import Join from "./layouts/Join";
import routes from "./constants/routes";
import store from "./store/store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={routes.home} exact>
            <MainLayout />
          </Route>
          <Route path={routes.join} exact>
            <Join />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
