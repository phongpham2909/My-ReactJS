import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
//import AuthPagesHeader from "../components/Dashboard/Header/AuthPagesHeader";
import Footer from "../components/Dashboard/Footer/Footer";

import pagesRoutes from "../routes/auth_login";

import pagesStyle from "../assets/jss/material-dashboard-pro-react/layouts/pagesStyle";
import '../assets/css/material-dashboard-pro-react.css?v=1.4.0';

import Background_Login_Admin from "../assets/img/background/background1.jpeg";

class AuthLogin extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "unset";
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.wrapper} ref="wrapper">
          <div
            className={classes.fullPage}
            style={{ backgroundImage: "url(" + Background_Login_Admin + ")" }}
          >
            <Switch>
              {pagesRoutes.map((prop, key) => {
                if (prop.collapse) {
                  return null;
                }
                if (prop.redirect) {
                  return (
                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                  );
                }
                return (
                  <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              })}
            </Switch>
            <Footer white />
          </div>
        </div>
      </div>
    );
  }
}

AuthLogin.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pagesStyle)(AuthLogin);
