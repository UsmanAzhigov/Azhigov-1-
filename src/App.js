import logo from './logo.svg';
import './App.css';
import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <p>
          Привет, меня зовут <b>Вася!</b>
          <br></br>
        </p>
        <p>Дата года рождения: 22 июня 2021</p>
      </div>
    );
  }
}

export default Profile;
