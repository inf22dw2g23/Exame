import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import GitHubLogin from 'react-github-login';
import { FaGithub } from 'react-icons/fa';
import './LoginForm.css';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAuthMessage, setShowAuthMessage] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: email,
        password: password,
      });

      // Login successful, handle the response as needed
      console.log(response.data);
      navigate('/tictactoe'); // Redirecionamento para a página TicTacToe
    } catch (error) {
      // Login failed, handle the error
      console.error(error);
      setShowAuthMessage(true); // Mostrar mensagem de autenticação necessária
    }
  };

  const responseGithub = (response) => {
    axios
      .post('http://localhost:3000/auth/github', response)
      .then((res) => {
        // Handle the response after GitHub login
        console.log(res.data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <div className="page">
      <div className="cover">
        <br></br>
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <div>
            <br></br>
            <label>Email:</label>
            <input type="email" className="input" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <br></br>
          <div>
            <br></br>
            <label>Password:</label>
            <input type="password" className="input" name="email" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {showAuthMessage && <p>Faça autenticação antes de prosseguir.</p>}
          <button type="submit" className="login-form">
            Login
          </button>
          <p>
            <br></br>
            Ainda não possui uma conta? <Link to="/registo">Registe-se</Link>
          </p>
        </form>

        <div className="github-btn-container">
          <GitHubLogin
            clientId="8149bd792fa6e752b682"
            redirectUri="http://localhost:3000/callback"
            onSuccess={responseGithub}
            onFailure={responseGithub}
            className="github-btn"
          >
            <FaGithub className="github-icon" />
            Continua com o GitHub
          </GitHubLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;