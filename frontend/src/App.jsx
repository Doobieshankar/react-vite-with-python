import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./components/Home";
import Signup from "./components/user/Signup";
import Login from "./components/user/Login";
function App() {
  return (
    <div className="flex justify-center dark:bg-slate-900">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
