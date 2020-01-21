import React from 'react';
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

export class SymbolText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      symbol: "",
      repeatCount: 0
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
handleInputChange(event) {
  const target = event.target;
  const name = target.name;
  const value = name === "text" ? target.text : target.symbol;
  

  this.setState({
    [name]: value
  });
}

  render() {
    return (
      <form>
        <label>
          Text:
          <input
            name="text"
            type="text"
            value={this.state.text}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Symbols:
          <input
            name="symbol"
            type="text"
            value={this.state.symbol}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Repeat Count:
          <input
            name="repeatCount"
            type="number"
            value={this.state.repeatCount}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}