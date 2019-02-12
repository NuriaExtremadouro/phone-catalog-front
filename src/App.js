import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import PhoneListContainer from './components/PhoneListContainer';
import PhoneDetailComponent from './components/PhoneDetailComponent';
import Header from './components/Header';
import NotFound from './components/NotFound';

/**
 * Main component to serve as a container for everything else.
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"/>
            <Header></Header>
            <Switch>
              <Route exact path="/" component={PhoneListContainer} />} />
              <Route path="/detail/:id" component={PhoneDetailComponent} />} />
              <Route component={NotFound} />} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
