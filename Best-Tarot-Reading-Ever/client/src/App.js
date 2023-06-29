import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import "./styles/App.css";

import Layout from "./components/Layout";
import TarotContainer from "./components/TarotContainer";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TarotContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
