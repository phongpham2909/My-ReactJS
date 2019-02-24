import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import indexRoutes from "./routes/index";
//Create Store
import { createStore, applyMiddleware, compose } from 'redux';
//reducer quản lý các state
import myReducer from './redux/reducers/index';
//connect react với redux phải dùng Provider
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './assets/css/material-dashboard-pro-react.css?v=1.4.0';

const store = createStore(
    myReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                {indexRoutes.map((prop, key) => {
                    return <Route path={prop.path} component={prop.component} key={key} />;
                })}
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));
