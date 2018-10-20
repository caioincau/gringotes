import React, { Component } from 'react'
import { Provider } from 'react-redux'

import CoinList from './views/CoinList'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import store from './store/store'

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <ErrorBoundary>
            <div>
              <Route exact path="/" component={CoinList}/>
            </div>
          </ErrorBoundary>
        </Provider>
      </Router>
    );
  }
}

export default App;
