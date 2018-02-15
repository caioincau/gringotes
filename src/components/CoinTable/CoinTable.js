import React, { Component } from 'react';
import CoinItem from '../CoinItem'

class CoinTableContainer extends Component {
  filterCoins(coins, filter) {
    console.log(coins, filter)
    return (coins && filter) ? coins.filter(coin => coin.name.toLowerCase().includes(filter.toLowerCase())) : coins
  }

  render() {
    return <CoinTable coins={this.filterCoins(this.props.coins, this.props.filter)} />
  }

}

const CoinTable = ({coins}) => (
  <table className="striped">
    <tbody>
      { coins && coins.map(coin => <CoinItem key={coin.id} coin={coin}></CoinItem>) }
    </tbody>
  </table>
)

export default CoinTableContainer
