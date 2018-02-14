import React, { Component } from 'react';

class Filter extends Component {

  render() {
    return (
      <label htmlFor="search">
        Buscar
        <input type="text"  placeholder="Coin name" name={this.props.name} onInput={this.props.change}></input>
      </label>
    )
  }
}

export default Filter
