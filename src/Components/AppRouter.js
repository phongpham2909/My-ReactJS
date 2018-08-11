import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginForm from './LoginForm';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import Accounts from './Accounts';

class AppRouter extends Component{
    render()  {
        return(
            <div>
              <Header key={1}/>
              <Router>
                <Switch>
                  <Route key={1} exact path="/" component={Home}/>
                  <Route key={2} path="/login" component={LoginForm}/>
                  <Route key={3} path="/Shop" component={Products}/>
                  <Route key={4} path="/Accounts" component={Accounts}/>
                  </Switch>
                </Router>
            </div>
        );
    }
}

export default AppRouter;