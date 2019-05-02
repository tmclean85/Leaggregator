import React, { Component } from 'react';
import './styles.css';

class Input extends Component {

  constructor(props) {
    super(props);

    this.state = {
      summoner: ''
    }
  }

  onChange = (event) => {
    this.setState({ summoner: event.target.value });
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default Input;