import React from "react";
import Form from "./components/Form/Form";
import TODOList from "./components/TODOList/TODOList";
import ControlPanel from "./components/ControlPanel/ControlPanel";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">todos</h1>
      <div className="content">
        <Form />
        <TODOList />
        <ControlPanel />
      </div>
    </div>
  );
}
