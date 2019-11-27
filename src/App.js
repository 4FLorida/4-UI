import React from 'react';
import './App.css';
import Col from './components/Col';
import Row from './components/Row';
import Container from './components/Container';
import Button from './components/Button';
import TextInput from './components/TextInput'

function App() {
  return (
    <Container>
      <Row>
        <h1>Buttons</h1>
      </Row>
      <Row>
        <Col md="5">
        <Button submit >Submit </Button>
        <Button update >Update </Button>
        <Button delete >Delete </Button>
        <Button dark >  Dark </Button>
        <Button light > Light </Button>
        </Col>
      </Row>
      <Row>
        <Col md="7">
        <Button submit large >Submit </Button>
        <Button update large>Update </Button>
        <Button delete large >Delete </Button>
        <Button dark large >  Dark </Button>
        <Button light large > Light </Button>
        </Col>
      </Row>
      <Row>
        <h1>Col Grid System</h1>
      </Row>
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
      <Row>
        <h1>Text Inputs</h1>
      </Row>
      <Row>
        <Col md="3">
          <h3>Text</h3>
          <TextInput></TextInput>
        </Col>
        <Col md="3">
          <h3>Password</h3>
          <TextInput type="password"></TextInput>
        </Col>
      </Row>
    </Container>
  );
}

export default App;