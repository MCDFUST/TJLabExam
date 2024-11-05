import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    const response = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      navigate('/');
    } else {
      console.error('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" value={formData.password} onChange={handleChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
