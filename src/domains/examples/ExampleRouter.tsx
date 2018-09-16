import * as React from 'react';

import { Route, Switch  } from 'react-router-dom'
import Example from './components/Example';

export default class ExampleRouter extends React.Component {
  public render() {
      return (
          <Switch>
              <Route path='/examples/counter' component={Example} />
          </Switch>
      );
  }
}