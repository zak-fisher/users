import * as React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

// IMPORTANT!
// Import sibling packages from node_modules vs relative paths
// Otherwise they will get bundled together here, which we don't want
// - The only reason to import with a relative path is if you are developing that package
//   and don't want to keep rebuilding it. Either way you ultimately need to ship with
//   the package import.
import UserList from "@fubo/users__components__user-list";
// import UserList from "packages/components/UserList/src"; // imported locally

import UserCounter from "@fubo/users__components__user-counter";
import STACCounter from "@fubo/stac__components__stac-counter";

const Routes = () => (
  <Router>
    <Switch>
      <Route
        path="/"
        element={(
          <>
            <UserList title="Users!" />
            <UserCounter />
            <br />
            <STACCounter />
          </>
        )}
      />
    </Switch>
  </Router>
);

export default Routes;
