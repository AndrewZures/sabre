import * as React from 'react';

import { Route, Switch  } from 'react-router-dom'
import FakeApps from './FakeApps';

export default class AppRouter extends React.Component {
  public render() {
      return (
          <Switch>
              <Route path='/apps/howdy' component={FakeApps} />
              <Route path='/' component={FakeApps} />
          </Switch>
      );
  }
}