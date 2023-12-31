import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Registo';
import Perfil from './components/auth/Perfil';
import "./App.css";
import TicTacToe from "./TicTacToe";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegistration = () => {
    setIsRegistered(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
      
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/tictactoe" /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/registo"
            element={isRegistered ? <Navigate to="/login" /> : <Register onRegistration={handleRegistration} />}
          />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/perfil" element={<Perfil />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;