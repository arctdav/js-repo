import React from 'react';
import './App.css';
import { Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import { Provider } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";
import { SymbolText } from './components/symbolText.components';
import { TankWar } from './components/tankWar.components';
import store from "./components/reduxTodo/js/store/index";
import TodoApp from "./components/reduxTodo/js/components/App";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header>
            <Container fluid>
              <Row>
                <Col>
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand style={{fontSize: 24, fontStyle: 'oblique', color: '#33DCFF'}} href="home">JS-Repo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto">
                        <Nav.Link href="symboltext">Symbol and Text Formatting</Nav.Link>
                        <Nav.Link href="tankwar">Simple Tank War</Nav.Link>
                        <Nav.Link href="reduxtodo">Redux Todo App</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
                </Col>
              </Row>
            </Container>
          </header>
          <Switch>
            <Route exact path="/home">
            <h2>home</h2>
            </Route>
            <Route path="/symboltext">
              <SymbolText />
            </Route>
            <Route path="/tankwar">
              <TankWar />
            </Route>
            <Route path="/reduxtodo">
              <TodoApp />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
