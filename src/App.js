import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [errorMessage, setErrorMessage] = React.useState("");

  const increment = () => {
    setCount(count + 1);

    if(errorMessage) {
      setErrorMessage("");
    }
  }

  const decrement = () => {
    if(count > 0) {
      setCount(count - 1);
    }
    else {
      setErrorMessage("The counter cant't go below zero!");
    }
  }

  return (
    <div 
      style={{ margin: 40 }}
      data-test="component-app"
    >
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>

      <p 
        style={{ color: "red" }}
        data-test="error-message"
      >{errorMessage}</p>

      <button 
        data-test="increment-button"
        onClick={increment}
      >
        Increment counter
      </button>

      <button 
        data-test="decrement-button"
        onClick={decrement}
      >
        Decrement counter
      </button>
    </div>
  );
}

export default App;
