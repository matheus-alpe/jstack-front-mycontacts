import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateContact from './pages/CreateContact';
import EditContact from './pages/EditContact';

export default function Routes() {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={Home}
      />
      <Route
        path="/create"
        component={CreateContact}
      />
      <Route
        path="/edit/:id"
        component={EditContact}
      />
    </Switch>
  );
}
