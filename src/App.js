import React from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Container fluid>
            <Row>
              <Col>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Navbar.Brand style={{fontSize: 24, fontStyle: 'oblique', color: '#33DCFF'}} href="home">JS-Repo</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="f1">Function1</Nav.Link>
                      <Nav.Link href="f2">Function2</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Col>
            </Row>
          </Container>
        </header>
        <Switch>
          <Route path="/:id" children = {<Child />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Child() {
  let { id } = useParams();
  return (
    <div>
      <h1>ID: {id}</h1>
    </div>
  )
}