import React from "react";
import MainFrame from "./components/mainFrame/MainFrame";
import "./App.css";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <MainFrame />
      <Redirect to="/system"></Redirect>
    </div>
  );
}

export default App;
