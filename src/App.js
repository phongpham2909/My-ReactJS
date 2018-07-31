import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css';
import LoginForm from './Components/LoginForm';



class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {logged: false};
  }
  onLogged()
  {
    this.setState({logged: true});
  }
  onLogout()
  {
    this.setState({logged: false});
  }
  
  buildLoginForm() {
    let loginForm = [];
    if (this.state.logged === false) {
      loginForm.push((<LoginForm onShow={this.onLogged.bind(this)} key={1} />))
    }
    return loginForm;
  }
  render() {
    let loginForm = this.buildLoginForm();
    return (
      <div>
    <Header logged={this.state.logged} onLogout={this.onLogout.bind(this)}/>
    {loginForm}
    </div>
    );
  }
}

export default App;
