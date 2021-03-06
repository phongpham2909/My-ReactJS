import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// core components
import GridContainer from "../../../components/Dashboard/Grid/GridContainer";
import GridItem from "../../../components/Dashboard/Grid/GridItem";
import CustomInput from "../../../components/Dashboard/CustomInputs/CustomInput";
import Button from "../../../components/Dashboard/CustomButtons/Button";
import Card from "../../../components/Dashboard/Card/Card";
import CardBody from "../../../components/Dashboard/Card/CardBody";
import CardHeader from "../../../components/Dashboard/Card/CardHeader";
import CardFooter from "../../../components/Dashboard/Card/CardFooter";
import LoggedAuthPage from "./LoggedAuthPage";

import loginPageStyle from "../../../assets/jss/material-dashboard-pro-react/views/loginPageStyle";

import { connect } from "react-redux";
import { actFetchAdminRequest } from "../../../redux/actions/authenticated";

class LoginAuthPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      logged: false,
      username: '',
      password: '',
      // login form
      loginEmail: "",
      loginEmailState: "",
      loginPassword: "",
      loginPasswordState: "",
    };
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem("authAccount")) {
      this.setState({
        logged: !this.state.logged
      });
    }
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
  // function that verifies if a string has a given length or not
  verifyLength(value, length) {
    if (value.length >= length) {
      return true;
    }
    return false;
  }
  // function that returns true if value is email, false otherwise
  verifyEmail(value) {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  }
  loginClick = () => {
    if (this.state.loginEmailState === "") {
      this.setState({ loginEmailState: "error" });
    }
    if (this.state.loginPasswordState === "") {
      this.setState({ loginPasswordState: "error" });
    }
  }
  handleChange = (event, stateName, type) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "password":
        if (this.verifyLength(event.target.value, 1)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      default:
        break;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var { username, password } = this.state;
    var auth = {
      adminName: username,
      adminPassword: password
    }
    this.props.fetchLoginAuth(auth);
  }
  render() {
    const { cardAnimaton, loginEmailState, loginPasswordState, username, password, logged } = this.state;
    const { classes } = this.props;
    if (logged === true) {
      return (<LoggedAuthPage></LoggedAuthPage>);
    }
    return (
      <div className={classes.container}>
        <ToastContainer autoClose={3000}/>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form onSubmit={this.handleSubmit}>
              <Card login className={classes[cardAnimaton]}>
                <CardHeader
                  className={`${classes.cardHeader} ${classes.textCenter}`}
                  color="rose"
                >
                  <h4 className={classes.cardTitle}>LOGIN TO THE SYSTEM</h4>
                  <h6 className={classes.cardTitle}>Only for Admin</h6>
                </CardHeader>
                <CardBody>
                  <CustomInput
                    success={loginEmailState === "success"}
                    error={loginEmailState === "error"}
                    labelText="Email Address *"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "email",
                      name: "username",
                      value: username,
                      onChange: event => this.handleChange(event, "loginEmail", "email"),
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    success={loginPasswordState === "success"}
                    error={loginPasswordState === "error"}
                    labelText="Password *"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "password",
                      name: "password",
                      value: password,
                      onChange: event => this.handleChange(event, "loginPassword", "password"),
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputAdornmentIcon}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      )
                    }}
                  />
                </CardBody>
                <CardFooter className={classes.justifyContentCenter}>
                  <div className={classes.center}>
                    <Button color="rose" size="md" block type="submit">
                      Login
                    </Button>
                  </div>
                  <div className={classes.center}>
                    <Button color="rose" size="md" link><Link to="/"> Back to Home</Link></Button>
                  </div>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLoginAuth: (auth) => {
      dispatch(actFetchAdminRequest(auth));
    }
  }
};

LoginAuthPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, mapDispatchToProps)(withStyles(loginPageStyle)(LoginAuthPage));
