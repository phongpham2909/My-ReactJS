import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui icons

// core components
import Header from "../components/Pages/Header/Header";
import Footer from "../components/Pages/Footer/Footer";
import HeaderLinks from "../components/Pages/Header/HeaderLinks";
import GridContainer from "../components/Pages/Grid/GridContainer";
import GridItem from "../components/Pages/Grid/GridItem";

import pagesRoutes from "../routes/pages";
import styles from "../assets/jss/material-kit-pro-react/views/ecommerceStyle";

class Pages extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    }
    render() {
        const { classes, ...rest } = this.props;
        return (
            <div>
                <Header
                    color="transparent"
                    brand="Tap Hoa Hang Hieu"
                    links={<HeaderLinks dropdownHoverColor="primary" {...rest} />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "dark"
                    }}
                    {...rest}
                />
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
                <Footer
                    theme="dark"
                    content={
                        <div>
                            <div className={classes.left}>
                                <List className={classes.list}>
                                    <ListItem className={classes.inlineBlock}>
                                        <a
                                            href="#phongpham"
                                            className={classes.block}
                                        >
                                            Blog
                                        </a>
                                    </ListItem>
                                    <ListItem className={classes.inlineBlock}>
                                        <a
                                            href="#phongpham"
                                            className={classes.block}
                                        >
                                            Presentation
                                        </a>
                                    </ListItem>
                                    <ListItem className={classes.inlineBlock}>
                                        <a
                                            href="#pablito"
                                            onClick={e => e.preventDefault()}
                                            className={classes.block}
                                        >
                                            Discover
                                        </a>
                                    </ListItem>
                                    <ListItem className={classes.inlineBlock}>
                                        <a
                                            href="#pablito"
                                            onClick={e => e.preventDefault()}
                                            className={classes.block}
                                        >
                                            Payment
                                        </a>
                                    </ListItem>
                                    <ListItem className={classes.inlineBlock}>
                                        <a
                                            href="#phongpham"
                                            className={classes.block}
                                        >
                                            Contact us
                                        </a>
                                    </ListItem>
                                </List>
                            </div>
                            <div className={classes.right}>
                                Copyright &copy; {1900 + new Date().getYear()}{" "}
                                <a
                                    href="#phongpham"
                                    className={classes.aClasses}
                                >
                                    Phong Pham
                                </a>{" "}
                                All Rights Reserved.
                            </div>
                        </div>
                    }
                >
                    <GridContainer>
                        <GridItem xs={12} sm={4} md={4}>
                            <h5 className={`${classes.title} ${classes.customFont}`}>About Us</h5>
                            <p>
                                Creative Tim is a startup that creates design tools that make
                                the web development process faster and easier.{" "}
                            </p>
                            <p>
                                We love the web and care deeply for how users interact with a
                                digital product. We power businesses and individuals to create
                                better looking web projects around the world.{" "}
                            </p>
                        </GridItem>
                        <GridItem xs={12} sm={4} md={4}>
                            <h5 className={`${classes.title} ${classes.customFont}`}>Customer Care</h5>
                            <div className={classes.socialFeed}>
                            <a href="#1">
                                <div>
                                   <p>Shopping Guide</p>
                                </div>
                            </a>
                            <a href="#1">
                                <div>
                                   <p>Guarantee</p>
                                </div>
                            </a>
                            <a href="#1">
                                <div>
                                   <p>Gift regulation</p>
                                </div>
                            </a>
                            <a href="#1">
                                <div>
                                   <p>terms of use</p>
                                </div>
                            </a>
                            </div>
                        </GridItem>
                        <GridItem xs={12} sm={4} md={4}>
                            <h5 className={`${classes.title} ${classes.customFont}`}>Location Stores</h5>
                            <div className={classes.galleryFeed}>
                                <div>
                                    <h6>Tp.HCM - LotteMart Quận 7</h6>
                                    <p>469 Nguyễn Hữu Thọ, P. Tân Hưng, Quận 7, TP. Hồ Chí Minh</p>
                                </div>
                                <div>
                                    <h6>Tp.HCM - Bình Tân</h6>
                                    <p>748 Tỉnh Lộ 10, Khu phố 18, Phường Bình Trị Đông, Quận Bình Tân, TP. Hồ Chí Minh</p>
                                </div>
                            </div>
                        </GridItem>
                    </GridContainer>
                </Footer>
            </div>
        );
    }
}

Pages.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Pages);