import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import PagesHeader from "../components/Dashboard/Header/PagesHeader";
import Footer from "../components/Dashboard/Footer/Footer";

import pagesRoutes from "../routes/signinup";

import pagesStyle from "../assets/jss/material-dashboard-pro-react/layouts/pagesStyle";
import '../assets/css/material-dashboard-pro-react.css?v=1.4.0';

import bgImage from "../assets/img/sunrise-phu-quoc-island-ocean.jpg";

class SignInUp extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "unset";
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <PagesHeader {...rest} />
        <div className={classes.wrapper} ref="wrapper">
          <div
            className={classes.fullPage}
            style={{ backgroundImage: "url(" + bgImage + ")" }}
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

SignInUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pagesStyle)(SignInUp);
