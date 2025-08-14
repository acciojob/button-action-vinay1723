import React, { useState } from "react";
import "./../styles/App.css";

const App = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="App" id="main">
      <p id="para" className={clicked ? "show" : "hide"}>
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
      <button id="click" onClick={(e) => setClicked((click) => !click)}>
        Clicked
      </button>
    </div>
  );
};

export default App;
