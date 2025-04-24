import './App.css'

import React from "react";
import {  Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsAuthenticated(true);
  }, []);
  const access=localStorage.getItem('token')

  return (
<>
{/* <Dashboard/> */}

      <Routes>
        <Route path="/login" element={<Login  />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={<Dashboard />}
          />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
          </>
  
  );
}

export default App;

