import React, { Component } from 'react';
import CoinItem from './CoinItem'

class CoinTable extends Component {
  renderCoinList() {
    let coins = this.props.coins
    let filter = this.props.filter

    if(filter !== '') {
      coins = this.props.coins.filter((e) => {
        return e.name.toLowerCase().includes(filter.toLowerCase())
      })
    }

    return coins.map(function (coin) {
      return <CoinItem key={coin.id} coin={coin}></CoinItem>
    })
  }

  render() {
    return (
      <div>
        <h2>Coins</h2>
        {
          this.renderCoinList()
        }
      </div>
    )
  }
}

export default CoinTable
