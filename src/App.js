import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import { ThemeProvider } from './ThemeContext';
const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          <Navbar />
          <Home />
        </Router>
      </ThemeProvider>
    </div>
  );
};
export default App;
