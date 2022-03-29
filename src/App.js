import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//pages
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Budgets from "./components/Bugets";
import Income from "./components/Income";
import Costs from "./components/Costs";
import Stats from "./components/Stats";

export default function App() {
  return (
    <Div>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bugets" element={<Budgets />} />
          <Route path="/income" element={<Income />} />
          <Route path="/costs" element={<Costs />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Router>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
`;
