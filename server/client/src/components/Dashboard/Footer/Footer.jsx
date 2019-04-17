import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import footerStyle from "../../../assets/jss/material-dashboard-pro-react/components/footerStyle";

function Footer({ ...props }) {
  const { classes, fluid, white, rtlActive } = props;
  var container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white
  });
  var anchor =
    classes.a +
    cx({
      [" " + classes.whiteColor]: white
    });
  var block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white
  });
  return (
    <footer className={classes.footer}>
      <div className={container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/" className={block}>
                {rtlActive ? "Trang Chủ" : "Home"}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/products-page" className={block}>
                {rtlActive ? "Sản Phẩm" : "Product"}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/about-page" className={block}>
                {rtlActive ? "Giới Thiệu" : "About"}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/blog-posts-page" className={block}>
                {rtlActive ? "Bài Viết" : "Blog"}
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          &copy; {1900 + new Date().getYear()}{" "}
          <a href="https://www.facebook.com/phong2140051" className={anchor}>
            {rtlActive ? "Phong Phạm" : "PhongPham"}
          </a>
          {rtlActive
            ? ", Phát triển với tất cả niềm đam mê với web"
            : ", made with love for a better web"}
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);