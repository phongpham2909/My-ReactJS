import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import LoginForm from './LoginForm';
import Header from './Header';

const Loading  = () => <div>Loading...</div>;

const Home = Loadable({
Loader: () => import ('./Home'),
loading: Loading,
delay: 0

});
const Products = Loadable({
    Loader: () => import ('./Products'),
    loading: Loading,
    delay: 0
});

class AppRouter extends Component{
    constructor(props)
    {
        super(props);
        this.state = {logged: false}
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
    render()  {
        let loginForm = this.buildLoginForm();
        return(
            <div>
                
            <Header logged={this.state.logged} onLogout={this.onLogout.bind(this)}/> 
                  {loginForm}
                 
            </div>
        );
    }
}

export default AppRouter;