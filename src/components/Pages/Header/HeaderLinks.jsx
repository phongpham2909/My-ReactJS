/* eslint-disable */
import React from "react";
import cx from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link, NavLink } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";

// core components
import CustomDropdown from "../../../components/Pages/CustomDropdown/CustomDropdown.jsx";

import headerLinksStyle from "../../../assets/jss/material-kit-pro-react/components/headerLinksStyle";
import menuHeaderRoutes from "../../../routes/menuheader";

function HeaderLinks({ ...props }) {
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  const { classes, dropdownHoverColor } = props;
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      {menuHeaderRoutes.navMenuRoutes.map((prop, key) => {
        if (prop.redirect) {
          return null
        }
        const navLink =
          classes.navLink +
          cx({
            [" " + classes.navLinkActive]: activeRoute(prop.path)
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
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Menu"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
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
    </List>
  );
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

export default withStyles(headerLinksStyle)(HeaderLinks);
