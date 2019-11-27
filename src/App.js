import React from 'react';
import './App.css';
import Button from './components/Button';

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

      </header>
    </div>
  );
}

export default App;
