import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch  } from 'react-router-dom'

import { theme } from './library/theme/theme';

import OldApp from './OldApp'

import { ThemeProvider } from './library/theme/ThemeProvider';

// domain routers
import AppRouter from './domains/apps/AppRouter';
import ExampleRouter from './domains/examples/components/ExampleRouter';

// create store
import { configureStore } from './store/store';
const store = configureStore();

class App extends React.Component {
  public render() {
    return (
        <Provider store={store}>
             <ThemeProvider theme={theme}>
                 <BrowserRouter>
                     <Switch>
                         <Route path='/apps' component={AppRouter} />
                         <Route path='/examples' component={ExampleRouter} />
                         <Route path='/' component={OldApp} exact={true} />
                     </Switch>
                 </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
  }
}

export default App;
