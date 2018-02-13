import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CoinItem.css';

class CoinItem extends Component {
  constructor(props) {
    super(props);
    this.goTo = this.goTo.bind(this);
  }

  goTo(e) {
    console.log(this)
  }

  render(props) {
    return (
      <div className="coin-item">
        <div className="coin-item__value">{new Date().toLocaleTimeString()}</div>
        <div className="coin-item__value">#{this.props.coin.rank}</div>
        <div className="coin-item__value" onClick={this.goTo}>{this.props.coin.symbol}</div>
        <div className="coin-item__value" onClick={this.goTo}>{this.props.coin.name}</div>
        <div className="coin-item__value">{this.props.coin.price_usd}</div>
        <div className="coin-item__value">{this.props.coin['24h_volume_usd']}</div>
      </div>
    )
  }

}

CoinItem.propTypes = {
  coin: PropTypes.object.isRequired
}

export default CoinItem
