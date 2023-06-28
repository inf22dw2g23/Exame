import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Perfil = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put('http://localhost:3000/perfil', {
        name: name,
        password: password,
        confirmPassword: confirmPassword,
      });

      // Profile update successful, handle the response as needed
      console.log(response.data);
    } catch (error) {
      // Profile update failed, handle the error 
      console.error(error);
    }
  };

  return (
    <div className="page">
      <div className="cover">
        
        <form onSubmit={handleUpdateProfile} className="login-form">
          <h2>Perfil</h2>
          <div>
            <label>Name:</label>
            <input type="text" className="input" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" className="input" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input type="password" className="input" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button type="submit" className="login-form">Save</button>
        </form>
        <br></br>
        <div align="center">
        <button class="btn" align="center">
          <Link to="/tictactoe" align="center">Jogar Tic Tac Toe</Link>
        </button>
        <button class="btn" align="center" className="logout-btn">
          <Link to="/login" align="center">Logout</Link>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;

