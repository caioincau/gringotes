import React, { Component } from 'react';

class Filter extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <label htmlFor="search">
        Buscar
        <input type="search" name="search" onInput={this.props.myFunc}></input>
      </label>
    )
  }
}

export default Filter
