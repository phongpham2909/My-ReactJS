import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Button from "../../../components/Dashboard/CustomButtons/Button";
import Card from "../../../components/Dashboard/Card/Card";
import CardBody from "../../../components/Dashboard/Card/CardBody";
import CardAvatar from "../../../components/Dashboard/Card/CardAvatar";
import CardFooter from "../../../components/Dashboard/Card/CardFooter";
// @material-ui/icons
import Home from "@material-ui/icons/Home";
import Dashboard from "@material-ui/icons/Dashboard";

import avatar from "../../../assets/img/avatar.jpg";

import lockScreenPageStyle from "../../../assets/jss/material-dashboard-pro-react/views/lockScreenPageStyle";

class LoggedAuthPage extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            cardAnimaton: "cardHidden"
        };
    }
    componentDidMount() {
        // we add a hidden class to the card and after 700 ms we delete it and the transition appears
        this.timeOutFunction = setTimeout(
            function () {
                this.setState({ cardAnimaton: "" });
            }.bind(this),
            700
        );
    }
    componentWillUnmount() {
        clearTimeout(this.timeOutFunction);
        this.timeOutFunction = null;
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <form>
                    <Card
                        profile
                        className={
                            classes.customCardClass + " " + classes[this.state.cardAnimaton]
                        }
                    >
                        <CardAvatar profile className={classes.cardAvatar}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img src={avatar} alt="..." />
                            </a>
                        </CardAvatar>
                        <CardBody profile>
                            <h4 className={classes.cardTitle}>Hello! Phong Phạm</h4>
                            <h4 className={classes.cardTitle}>You are logged in</h4>
                        </CardBody>
                        <CardFooter className={classes.justifyContentCenter}>
                            <div style={{ marginRight: 10 }}>
                                <Link to="/" >
                                    <Button color="primary" block style={{padding: 10 }}>
                                       <Home></Home> Home
                                </Button>
                                </Link>
                            </div>
                            <div>
                                <Link to="/administration/Dashboard">
                                    <Button color="rose" block style={{padding: 10 }}>
                                       <Dashboard></Dashboard> Dashboard
                                </Button>
                                </Link>
                            </div>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        );
    }
}

LoggedAuthPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(lockScreenPageStyle)(LoggedAuthPage);
