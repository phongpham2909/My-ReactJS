import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "../components/Dashboard/Header/Header";
import Footer from "../components/Dashboard/Footer/Footer";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import FixedPlugin from "../components/Dashboard/FixedPlugin/FixedPlugin";

import ErrorPage from "../views/Pages/ErrorPage/ErrorPage";

import dashboardRoutes from "../routes/dashboard";

import appStyle from "../assets/jss/material-dashboard-pro-react/layouts/dashboardStyle";

import image from "../assets/img/sunrise-phu-quoc-island-ocean.jpg";
import logoWhite from "../assets/img/reactlogo.png";
import logoBlue from "../assets/img/reactlogo.png";

import { connect } from 'react-redux';
import { actionFetchCategoryRequest, actFetchProductsRequest } from '../redux/actions/index';


const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
      if (prop.collapse)
        return prop.views.map((prop, key) => {
          return (
            <Route exact={prop.exact} path={prop.path} component={prop.component} key={key} />
          );
        });
      return <Route exact={prop.exact} path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      miniActive: false,
      image: image,
      color: "purple",
      bgColor: "black",
      hasImage: true,
      fixedClasses: "dropdown",
      logged: false
    };
  }
  handleImageClick = (image) => {
    this.setState({ image: image });
  }
  handleColorClick = (color) => {
    this.setState({ color: color });
  }
  handleBgColorClick = (bgColor) => {
    this.setState({ bgColor: bgColor });
  }
  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/maps/full-screen-maps";
  }
  sidebarMinimize = () => {
    this.setState({ miniActive: !this.state.miniActive });
  }
  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem("authAccount")) {
      this.setState({
        logged: !this.state.logged
      });
      this.props.fetchAllProducts();
      this.props.fetchAllCategory();
    }
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", this.resizeFunction);
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
    window.removeEventListener("resize", this.resizeFunction);
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  render() {
    const { logged } = this.state;
    const { classes, ...rest } = this.props;
    const mainPanel =
      classes.mainPanel +
      " " +
      cx({
        [classes.mainPanelSidebarMini]: this.state.miniActive,
        [classes.mainPanelWithPerfectScrollbar]:
          navigator.platform.indexOf("Win") > -1
      });
    if (logged === false) {
      return (
        <div ref="mainPanel">
            <ErrorPage></ErrorPage>
        </div>
      );
    }
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={dashboardRoutes}
          logoText={"My Project"}
          logo={this.state.bgColor === "white" ? logoBlue : logoWhite}
          image={this.state.image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color={this.state.color}
          bgColor={this.state.bgColor}
          miniActive={this.state.miniActive}
          {...rest}
        />
         <ToastContainer autoClose={2000} />
        <div className={mainPanel} ref="mainPanel">
          <Header
            sidebarMinimize={this.sidebarMinimize}
            miniActive={this.state.miniActive}
            routes={dashboardRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {/* On the /maps/full-screen-maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
              <div className={classes.map}>{switchRoutes}</div>
            )}
          {this.getRoute() ? <Footer fluid /> : null}
          <FixedPlugin
            handleImageClick={this.handleImageClick}
            handleColorClick={this.handleColorClick}
            handleBgColorClick={this.handleBgColorClick}
            handleHasImage={this.handleHasImage}
            color={this.state["color"]}
            bgColor={this.state["bgColor"]}
            bgImage={this.state["image"]}
            handleFixedClick={this.handleFixedClick}
            fixedClasses={this.state.fixedClasses}
            sidebarMinimize={this.sidebarMinimize.bind(this)}
            miniActive={this.state.miniActive}
          />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchAllProducts: () => {
          dispatch(actFetchProductsRequest());
      },
      fetchAllCategory: () => {
          dispatch(actionFetchCategoryRequest());
      },
  }
}

export default connect(null, mapDispatchToProps)(withStyles(appStyle)(Dashboard));

