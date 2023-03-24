import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/faculty/Dashboard';
import { result } from './pages/faculty/Result';
import { course } from './pages/faculty/Course';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/faculty/dashboard" element={<Dashboard />} />
          <Route path="/faculty/results" element={<Result />} />
          <Route path="/faculty/courses" element={<Course />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
