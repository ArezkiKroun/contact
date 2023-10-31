import React, { useEffect } from "react";
import Dashboard from "./component/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { initKeycloak } from "./keycloak";
function App() {
  useEffect(() => {
    initKeycloak();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
