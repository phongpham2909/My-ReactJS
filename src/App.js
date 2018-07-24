import React, { Component } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
    <Header></Header>
    <LoginForm></LoginForm>
    </div>
    );
  }
}

export default App;
