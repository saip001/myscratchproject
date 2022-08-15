import React from "react";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import NavBar from "./components/NavBar"
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div>
      <NavBar/>
      <Dashboard/>
    </div>
  );
}
