import React, { Component } from 'react'

import CoinList from './views/CoinList'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css';



import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <ErrorBoundary>
          <div>
            <Route exact path="/" component={CoinList}/>
          </div>
        </ErrorBoundary>
      </Router>
    );
  }
}

export default App;
