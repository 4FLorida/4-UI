import React from 'react';
import './App.css';
import Col from './components/Col';
import Row from './components/Row';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
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
      
    </div>
  );
}

export default App;
