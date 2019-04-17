import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
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
import ExitToApp from "@material-ui/icons/ExitToApp";

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
    handleLogOut = (event) => {
        event.preventDefault();
        if(localStorage)
        {
            localStorage.clear();
            toast.success('Successfully LogOut Website', {
                position: toast.POSITION.TOP_CENTER
              });
            setTimeout( (e)=>{window.location.href="/user/sign-in"}, 3000);
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
            <ToastContainer autoClose={3000} />
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
                                <Button onClick={this.handleLogOut} color="rose" block style={{padding: 10 }}>
                                    <ExitToApp></ExitToApp> Log Out
                                </Button>
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
