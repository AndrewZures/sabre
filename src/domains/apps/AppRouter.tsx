import * as React from 'react';

import { Route, Switch  } from 'react-router-dom'
import FakeApps from './FakeApps';

import { appWrapper } from './AppWrapper';

export default class AppRouter extends React.Component {
  public render() {
      return (
          <Switch>
              <Route path='/apps/howdy' component={appWrapper(FakeApps)} />
              <Route path='/' component={FakeApps} />
          </Switch>
      );
  }
}