import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    // Remover o token de acesso dos cookies ou local storage

    // Redirecionar para a página de login ou outra página pública
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
