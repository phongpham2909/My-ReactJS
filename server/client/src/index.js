import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
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
import 'react-toastify/dist/ReactToastify.css';
import "react-image-gallery/styles/css/image-gallery-no-icon.css";

const store = createStore(
    myReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const render = () => {
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
}
window.onload = () => {
    render();
};
serviceWorker.unregister();


