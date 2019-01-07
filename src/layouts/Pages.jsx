import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
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


import face1 from "../assets/img/avatar.jpg";
import face2 from "../assets/img/avatar.jpg";
import face3 from "../assets/img/avatar.jpg";
import face4 from "../assets/img/avatar.jpg";
import face5 from "../assets/img/avatar.jpg";
import face6 from "../assets/img/avatar.jpg";
import face7 from "../assets/img/avatar.jpg";
import face8 from "../assets/img/avatar.jpg";

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
                    brand="My Project"
                    links={<HeaderLinks dropdownHoverColor="rose" {...rest} />}
                    fixed
                    changeColorOnScroll={{
                        height: 300,
                        color: "info"
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
                <br/>
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
                                    Creative Tim
                                </a>{" "}
                                All Rights Reserved.
                            </div>
                        </div>
                    }
                >
                    <GridContainer>
                        <GridItem xs={12} sm={4} md={4}>
                            <h5>About Us</h5>
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
                            <h5>Social Feed</h5>
                            <div className={classes.socialFeed}>
                                <div>
                                    <i className="fab fa-twitter" />
                                    <p>How to handle ethical disagreements with your clients.</p>
                                </div>
                                <div>
                                    <i className="fab fa-twitter" />
                                    <p>The tangible benefits of designing at 1x pixel density.</p>
                                </div>
                                <div>
                                    <i className="fab fa-facebook-square" />
                                    <p>
                                        A collection of 25 stunning sites that you can use for
                                        inspiration.
                                    </p>
                                </div>
                            </div>
                        </GridItem>
                        <GridItem xs={12} sm={4} md={4}>
                            <h5>Instagram Feed</h5>
                            <div className={classes.galleryFeed}>
                                <img
                                    src={face1}
                                    className={classNames(
                                        classes.img,
                                        classes.imgRaised,
                                        classes.imgRounded
                                    )}
                                    alt="..."
                                />
                                <img
                                    src={face2}
                                    className={classNames(
                                        classes.img,
                                        classes.imgRaised,
                                        classes.imgRounded
                                    )}
                                    alt="..."
                                />
                                <img
                                    src={face3}
                                    className={classNames(
                                        classes.img,
                                        classes.imgRaised,
                                        classes.imgRounded
                                    )}
                                    alt="..."
                                />
                                <img
                                    src={face4}
                                    className={classNames(
                                        classes.img,
                                        classes.imgRaised,
                                        classes.imgRounded
                                    )}
                                    alt="..."
                                />
                                <img
                                    src={face5}
                                    className={classNames(
                                        classes.img,
                                        classes.imgRaised,
                                        classes.imgRounded
                                    )}
                                    alt="..."
                                />
                                <img
                                    src={face6}
                                    className={classNames(
                                        classes.img,
                                        classes.imgRaised,
                                        classes.imgRounded
                                    )}
                                    alt="..."
                                />
                                <img
                                    src={face7}
                                    className={classNames(
                                        classes.img,
                                        classes.imgRaised,
                                        classes.imgRounded
                                    )}
                                    alt="..."
                                />
                                <img
                                    src={face8}
                                    className={classNames(
                                        classes.img,
                                        classes.imgRaised,
                                        classes.imgRounded
                                    )}
                                    alt="..."
                                />
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