import React, { Component } from 'react'
import Filter from './components/Filter'
import CoinTable from './components/CoinTable'
import logo from './logo.svg';
import './App.css';

import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
      filter: ''
    };
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
    .then(response => this.setState({coins: response.data}))
  }

  onChangeInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Filter name="filter" change={this.onChangeInput} ></Filter>
        {this.state.coins.length > 0 &&
          <CoinTable coins={this.state.coins} filter={this.state.filter}></CoinTable>
        }
      </div>
    );
  }
}

export default App;
