import React, { Component } from 'react';

class CoinItem extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    this.goTo = this.goTo.bind(this);
  }

  goTo(e) {
    console.log(this)
  }

  render(props) {
    return (
      <div className="coin-item">
        <div>{this.state.date.toLocaleTimeString()}</div>
        <div>#{this.props.coin.rank}</div>
        <div onClick={this.goTo}>{this.props.coin.symbol}</div>
        <div onClick={this.goTo}>{this.props.coin.name}</div>
        <div>{this.props.coin.price_usd}</div>
        <div>{this.props.coin['24h_volume_usd']}</div>
      </div>
    )
  }
}

export default CoinItem