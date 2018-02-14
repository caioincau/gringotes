import React, { Component } from 'react'

import CoinList from './views/CoinList'
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
        <div>
          <Route exact path="/" component={CoinList}/>
        </div>
      </Router>
    );
  }
}

export default App;
