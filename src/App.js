import React from 'react';
import './App.css';
import Col from './components/Col';
import Row from './components/Row';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        Button 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       <div>
        <Button submit >Submit </Button>
        <Button update >Update </Button>
        <Button delete >Delete </Button>
        <Button dark >  Dark </Button>
        <Button light > Light </Button>
        </div>
        <div>
        <Button submit large >Submit </Button>
        <Button update large>Update </Button>
        <Button delete large >Delete </Button>
        <Button dark large >  Dark </Button>
        <Button light large > Light </Button>
        </div>
      <Container>
      <Row>
        <Col md="1">1</Col>
        <Col md="1">1</Col>
        <Col md="1">1</Col>
        <Col md="1">1</Col>
        <Col md="1">1</Col>
        <Col md="1">1</Col>
        <Col md="1">1</Col>
        <Col md="1">1</Col>
        <Col md="1">1</Col>
        <Col md="1">1</Col>
        <Col md="1">1</Col>
        <Col md="1">1</Col>
      </Row>
      <Row>
        <Col md="4">4</Col>
        <Col md="4">4</Col>
        <Col md="4">4</Col>
      </Row>
      <Row>
        <Col md="4">4</Col>
        <Col md="8">8</Col>
      </Row>
      <Row>
        <Col md="12">12</Col>
      </Row>
      </Container>

      </header>
    </div>
  );
}

export default App;
