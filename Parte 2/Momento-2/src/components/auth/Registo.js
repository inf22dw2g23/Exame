import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './LoginForm.css';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/registo', {
        name: name,
        email: email,
        password: password,
      });

      // Registration successful, handle the response as needed
      console.log(response.data);
      navigate('/login'); // Redirecionamento para a página de login após o registro
    } catch (error) {
      // Registration failed, handle the error
      console.error(error);
    }
  };

  return (
    <div className="page">
      <div className="cover">
      
      <form onSubmit={handleRegister} className="login-form">
        <h2>Register</h2>
        <div>
          <br></br>
          <label>Name:</label>
          <input type="name" className="input" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <br></br>
          <label>Email:</label>
          <input type="email" className="input" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <br></br>
          <label>Password:</label>
          <input type="password" className="input" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="login-form">Register</button>
        <p>
          <br></br>
          Já possui uma conta? <Link to="/login">Faça Login</Link>
        </p>
      </form>
      
      </div>
    </div>
  );
};

export default Register;