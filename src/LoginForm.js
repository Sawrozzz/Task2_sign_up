import React, { useState } from 'react';

function LoginForm({ socialMedia }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in to ${socialMedia} as ${name}`);
    setName('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login to {socialMedia}</h2>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
