import * as React from 'react';

import { Route, Switch  } from 'react-router-dom'

import Counter from './components/counter/Counter';
import { ExampleIndex } from './components/ExampleIndex';
import Tacos from './components/tacos/Tacos';

export default class ExampleRouter extends React.Component {
  public render() {
      return (
          <Switch>
              <Route path='/examples/counter' component={Counter} />
              <Route path='/examples/tacos' component={Tacos} />
              <Route path='/examples' component={ExampleIndex} />
          </Switch>
      );
  }
}