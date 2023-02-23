import "./styles.css";
import React from "react";
import { ClasComponent } from "./component/ClassComponent";
import { FunctionComponent } from "./component/FunctionComponent";

export default function App() {
  return (
    <div className="App">
      <ClasComponent />
      <FunctionComponent />
    </div>
  );
}
