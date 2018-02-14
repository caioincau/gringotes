import React, { Component } from 'react';
import CoinItem from '../CoinItem'

class CoinTable extends Component {
  filterCoins(filter) {
    return this.props.coins.filter((e) => {
      return e.name.toLowerCase().includes(filter.toLowerCase())
    })
  }
  renderCoinList() {
    let coins = this.props.coins
    let filter = this.props.filter

    coins = filter ? this.filterCoins(filter) : coins

    return coins.map(function (coin) {
      return <CoinItem key={coin.id} coin={coin}></CoinItem>
    })
  }

  render() {
    return (
      <table className="striped">
        <tbody>
          {
            this.renderCoinList()
          }
        </tbody>
      </table>
    )
  }
}

export default CoinTable
