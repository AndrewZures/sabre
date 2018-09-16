import * as React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch  } from 'react-router-dom'

import { theme } from './library/theme/theme';

import AppRouter from './domains/apps/AppRouter';
import OldApp from './OldApp'

import { ThemeProvider } from './library/theme/ThemeProvider';

class App extends React.Component {
  public render() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route path='/apps' component={AppRouter} />
                    <Route path='/' component={OldApp} exact={true} />
                </Switch>
            </BrowserRouter>
       </ThemeProvider>
    );
  }
}

export default App;
