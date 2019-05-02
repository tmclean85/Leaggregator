import React, { Component } from 'react';
import Results from '../Results/Results';
import './styles.css';

class Input extends Component {

  constructor(props) {
    super(props);

    this.state = {
      summoner: '',
      data: null,
      isLoading: false
    }
  }

  onChange = (event) => {
    this.setState({ summoner: event.target.value });
  }

  onClick = (event) => {
    event.preventDefault();
    console.log('clicked', this.state.summoner);
    this.setState({ isLoading: true, data: null});
    fetch(`http://localhost:8000?summoner=${this.state.summoner}`)
    .then(result => { return result.json() })
    .then(res => { this.setState({ data: res }) })
    .then(() => this.setState({ isLoading: false}));
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          value={this.state.value}
          onChange={this.onChange}
        />
        <button onClick={this.onClick}>Submit</button>
        <Results 
          isLoading={this.state.isLoading}
          data={this.state.data}
        />
      </div>
    )
  }
}

export default Input;