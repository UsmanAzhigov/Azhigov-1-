import './App.css';
import React from 'react';

export default function App() {
  let email, password;

  function onChangeInput(event) {
    if (event.target.name !== email) {
      email = document.querySelector('input[name = email]').value;
    }
    if (event.target.name !== password) {
      password = document.querySelector('input[name = password]').value;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email && !password) {
      alert('Заполните все поля');
    }

    if (email && password) {
      console.log({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" onChange={onChangeInput} placeholder="E-Mail" type="Email" />
      <br />
      <input name="password" onChange={onChangeInput} placeholder="Пароль" type="password" />
      <br />
      <button>Войти</button>
    </form>
  );
}
