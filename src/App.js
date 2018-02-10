import React, { Component } from 'react';
import CoinItem from './components/CoinItem'
import Filter from './components/Filter'

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
    this.handleChildFunc = this.handleChildFunc.bind(this);
  }

  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
    .then(response => this.setState({coins: response.data}))
  }


  renderCoinList() {
    let coins = this.state.coins
    let filter = this.state.filter

    if(filter !== '') {
      coins = this.state.coins.filter((e) => {
        // return e.name.toLowerCase().includes(filter.toLowerCase())
        return e.name.toLowerCase().includes(filter.toLowerCase())
      })
    }
    console.log(coins.length)

    return coins.map(function (coin) {
      return <CoinItem key={coin.id} coin={coin}></CoinItem>
    })
  }

  handleChildFunc(e) {
    this.setState({filter: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Filter myFunc={this.handleChildFunc} ></Filter>
        {this.state.coins.length > 0 &&
          this.renderCoinList()
        }
      </div>
    );
  }
}

export default App;
