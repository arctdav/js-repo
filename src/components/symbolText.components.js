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
      repeatCount: 0,
      result: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCopyToClipboard = this.handleCopyToClipboard.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = name === "text" ? target.value : target.value;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  handleClick(event) {
    event.preventDefault();
    const symbol = this.state.symbol;
    console.log(this.state.symbol);
    const repeatCount = this.state.repeatCount;
    let result = symbol.repeat(repeatCount) + this.state.text + symbol.repeat(repeatCount);
    this.setState({ 
      result: result,
    });
  }

  handleCopyToClipboard(event) {
    event.preventDefault();
    const symbol = this.state.symbol;
    console.log(this.state.symbol);
    const repeatCount = this.state.repeatCount;
    let result = symbol.repeat(repeatCount) + this.state.text + symbol.repeat(repeatCount);
    this.setState({ 
      result: result,
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            {"Text: "}
            <input
              name="text"
              type="text"
              value={this.state.text}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            {"Symbols: "}
            <input
              name="symbol"
              type="text"
              value={this.state.symbol}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            {"Repeat Count: "}
            <input
              name="repeatCount"
              type="number"
              value={this.state.repeatCount}
              onChange={this.handleInputChange} />
          </label>
        </form>
        <Container>
          <Row>
            <Col sm></Col>
            <Col sm></Col>
            <Col sm>
            <Button variant="outline-success" onClick={ this.handleClick }>Submit</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>Result: { this.state.result }</Col>
            <Col sm={4}><Button variant="outline-primary" onClick={ this.handleCopyToClipboard }>Copy</Button></Col>
          </Row>
        </Container>
      </div>
    );
  }
}