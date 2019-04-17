import React, { Component } from 'react';
import cx from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link, NavLink, Redirect } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// @material-ui/icons
import AccountCircle from "@material-ui/icons/AccountCircle";
import { connect } from 'react-redux';
// core components
import CustomDropdown from "../../../components/Pages/CustomDropdown/CustomDropdown.jsx";

import headerLinksStyle from "../../../assets/jss/material-kit-pro-react/components/headerLinksStyle";
import menuHeaderRoutes from "../../../routes/menuheader";
import avatar from '../../../assets/img/placeholder.jpg';
//  import { isAuthenticated } from '../../../redux/actions/authenticated';

class HeaderLinks extends Component {
  activeRoute = (routeName) => {
    return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  handleLogOut = (event) => {
    event.preventDefault();
    window.location.href = "/";
    return localStorage.removeItem('UserAccount') + localStorage.removeItem('authAccount');

  }
  render() {
    const { classes, dropdownHoverColor } = this.props;
    var user = JSON.parse(localStorage.getItem('UserAccount'));
    var auth = JSON.parse(localStorage.getItem('authAccount'));
    return (
      <List className={classes.list + " " + classes.mlAuto}>
        {menuHeaderRoutes.navMenuRoutes.map((prop, key) => {
          if (prop.redirect) {
            return null
          }
          const navLink =
            classes.navLink +
            cx({
              [" " + classes.navLinkActive]: this.activeRoute(prop.path)
            });
          return (
            <ListItem key={key} className={classes.listItem}>
              <NavLink to={prop.path} className={navLink}>
                <ListItemIcon className={classes.listItemIcon}>
                  <prop.icon />
                </ListItemIcon>
                <ListItemText
                  primary={prop.short}
                  disableTypography={true}
                  className={classes.listItemText}
                />
              </NavLink>
            </ListItem>
          );
        })}
        {(auth || user) ?
          <ListItem className={classes.listItem} style={{ marginLeft: 10 }}>
            <CustomDropdown
              left
              navDropdown
              noLiPadding
              caret={false}
              hoverColor={dropdownHoverColor}
              buttonText={(
                <div>
                  <img
                    src={user.UrlAvatar ? user.UrlAvatar : avatar}
                    className={classes.img}
                    alt="avatar"
                  /> &nbsp;Hi, {user.firstname + " " + user.lastname}
                </div>)
              }

              buttonProps={{
                className: classes.navLink + " " + classes.imageDropdownButton,
                color: "transparent"
              }}
              dropdownList={[
                <Link to={`/profile-page/${user.customerID ? user.customerID : auth.administrationID}`} className={classes.dropdownLink}>
                  <Icon className={classes.dropdownIcons} >person</Icon> Profile
                </Link>,
                <Link to="/user/check-order" className={classes.dropdownLink}>
                  <Icon className={classes.dropdownIcons} >shopping_cart</Icon> Check Order
                </Link>,
                <Link onClick={this.handleLogOut} to="#" className={classes.dropdownLink}>
                  <Icon className={classes.dropdownIcons} >exit_to_app</Icon> Log Out
                </Link>
              ]}
            />
          </ListItem>
          :
          <ListItem className={classes.listItem} style={{ marginLeft: 10 }}>
            <CustomDropdown
              noLiPadding
              navDropdown
              hoverColor={dropdownHoverColor}
              buttonText="Login/Register"
              buttonProps={{
                className: classes.navLink + " " + classes.noneBorderRadius,
                color: "transparent"
              }}
              buttonIcon={AccountCircle}
              dropdownList={
                menuHeaderRoutes.navDropdownMenuRoutes.map((prop, key) => {
                  if (prop.redirect) {
                    return (
                      <Redirect from={prop.path} to={prop.pathTo} key={key} />
                    );
                  }
                  return (
                    <Link key={key} to={prop.path} className={classes.dropdownLink}>
                      <Icon className={classes.dropdownIcons} >{prop.icon}</Icon> {prop.name}
                    </Link>
                  )
                })}
            />
          </ListItem>
        }
      </List>
    );
  }
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};

export default connect(null, null)(withStyles(headerLinksStyle)(HeaderLinks));
