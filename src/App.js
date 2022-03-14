import React from "react";
import { UseStateCompuesto } from "./UseStateCompuesto";
import { ClassState } from "./ClassState.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UseStateCompuesto name="UseState" />
      <ClassState name="ClassState" />
    </div>
  );
}

export default App;
