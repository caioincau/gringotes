import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CoinItem.css';

class CoinItem extends Component {
  constructor(props) {
    super(props);
    this.goTo = this.goTo.bind(this);
  }

  goTo(e) {
    console.log('click')
  }

  formatAmount(val) {
    const SPLITED_NUMBER = String(val).split('.')
    const AFTER_COMMA = SPLITED_NUMBER[1] ? SPLITED_NUMBER[1].substring(0,2) : '00'
    return `U$${SPLITED_NUMBER[0]},${AFTER_COMMA}`
  }

  render(props) {
    return (
      <tr className="coin-item">
        <td className="coin-item__value">#{this.props.coin.rank}</td>
        <td className="coin-item__value coin-item__link" onClick={this.goTo}>{this.props.coin.symbol}</td>
        <td className="coin-item__value" onClick={this.goTo}>{this.props.coin.name}</td>
        <td className="coin-item__value">{this.formatAmount(this.props.coin.price_usd)}</td>
        <td className="coin-item__value">{this.formatAmount(this.props.coin['24h_volume_usd'])}</td>
      </tr>
    )
  }

}

CoinItem.propTypes = {
  coin: PropTypes.object.isRequired
}

export default CoinItem
