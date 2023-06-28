import React, { useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put('http://localhost:3000/perfil', {
        name: name,
        email: email,
        password: password,
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
        <h2>Profile</h2>
        <form onSubmit={handleUpdateProfile} className="login-form">
          <div>
            <label>Name:</label>
            <input type="text" className="input" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" className="input" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" className="input" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="login-form">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
