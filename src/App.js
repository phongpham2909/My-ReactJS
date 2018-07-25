import React, { Component } from 'react';
import Header from './Components/Header';
import LoginForm from './Components/LoginForm';
import './App.css';
import Products from './Components/Products';

class App extends Component {
  render() {
    return (
      <div>
    <Header></Header>
    <LoginForm></LoginForm>
    <Products></Products>
    </div>
    );
  }
}

export default App;
