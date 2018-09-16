import * as React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch  } from 'react-router-dom'

// import { ThemeProvider } from 'styled-components';

import { theme } from './library/theme/theme';

import AppRouter from './domains/apps/AppRouter';
import OldApp from './OldApp'

import { WrappedThemeProvider } from './library/theme/WrappedThemeProvider';

class App extends React.Component {
  public render() {
    return (
        <WrappedThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route path='/apps' component={AppRouter} />
                    <Route path='/' component={OldApp} exact={true} />
                </Switch>
            </BrowserRouter>
       </WrappedThemeProvider>
    );
  }
}

export default App;
