//Import the React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a React Component

const App = () => {
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
}; 

//Show React Component On Screen
ReactDOM.render(<App />, document.querySelector("#root"));
