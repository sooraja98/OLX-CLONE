import React from "react";
import "./App.css";
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exct path="/" element={<Home />} />
          <Route exct  path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
