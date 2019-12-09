import React from 'react';
import './App.css';
import Alert from './components/Alert';
import Col from './components/Col';
import Row from './components/Row';
import Container from './components/Container';
import Button from './components/Button';
import TextInput from './components/TextInput';

function App() {
  return (
    <Container center>
      <Row center>
        <h1>Buttons</h1>
      </Row>
      <Row>
        <Col>
          <Button submit>Submit</Button>
          <Button update>Update</Button>
          <Button delete>Delete</Button>
          <Button dark> Dark</Button>
          <Button light>Light</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button submit large>
            Submit
          </Button>
          <Button update large>
            Update
          </Button>
          <Button delete large>
            Delete
          </Button>
          <Button dark large>
            Dark
          </Button>
          <Button light large>
            Light
          </Button>
        </Col>
      </Row>
      <Row center>
        <h1>Col Grid System</h1>
      </Row>
      <Row>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
      </Row>
      <Row>
        <Col>4</Col>
        <Col>4</Col>
        <Col>4</Col>
      </Row>
      <Row>
        <Col>4</Col>
        <Col>8</Col>
      </Row>
      <Row>
        <Col>12</Col>
      </Row>
      <Row center>
        <h1>Text Inputs</h1>
      </Row>
      <Row>
        <Col>
          <h3>Text</h3>
          <TextInput></TextInput>
        </Col>
        <Col>
          <h3>Password</h3>
          <TextInput  type="password"></TextInput>
        </Col>
      </Row>
      <Row center>
        <h1>Alerts</h1>
      </Row>
      <Row>
        <Col>
          <Alert blue>This is an alert!!check it out! </Alert>
          <Alert yellow>This is an alert!!check it out!</Alert>
          <Alert red>This is an alert!!check it out! </Alert>
          <Alert dark> This is an alert!!check it out! </Alert>
          <Alert light> This is an alert!!check it out! </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
