
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as coinActions from '../../store/actions/coins'

import Filter from '../../components/Filter'
import CoinTableContainer from '../../components/CoinTable'
import axios from 'axios'
import './CoinList.css';

class CoinList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
      // coins: []
    };
    this.onChangeInput = this.onChangeInput.bind(this);
  }


  onChangeInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
    .then(response => {
      this.props.setCoins(response.data)
      // this.setState({coins: response.data})
    })
  }

  render = () => {
    return (
      <div className="coin-list">
        <h2 className="coin-list__header">Coins</h2>
        <Filter name="filter" change={this.onChangeInput} ></Filter>
        <div className="card">
          {this.props.coinList.length > 0 &&
            <CoinTableContainer coins={this.props.coinList} filter={this.state.filter}></CoinTableContainer>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  coinList: state.coins
})

const mapDispatchToProps = dispatch => bindActionCreators(coinActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CoinList)
