import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = React.useState(false);
  const increment = (e) => {
    e.preventDefault();
    if (error) {
      setError(false);
    }

    return setCount(count + 1);
  };
  return (
    <div className="App" data-test="component-app">
      <h1 className="header" data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      <div data-test="error-message" className={`error ${error ? '' : 'hidden'}`}>
        The counter cannot go below 0
      </div>
      {/* <button data-test="increment-button" onClick={() => setCount(count + 1)}>
        Increment counter
      </button> */}
      <button data-test="increment-button" onClick={(e) => increment(e)}>
        Increment counter
      </button>
      <button
        data-test="decrement-button"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          } else {
            setError(true);
          }
        }}
      >
        Decrement counter
      </button>
    </div>
  );
}

export default App;
