// pages/Login.tsx
import React, { useState } from 'react';

interface LoginProps {
  onLogin: (username: string, password: string) => void; // Declaração da prop
}

const Login: React.FC<LoginProps> = ({ onLogin }) => { // Componente recebe a prop
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ margin: '10px', padding: '10px', width: '200px' }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: '10px', padding: '10px', width: '200px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
