import React from "react";
import PropTypes from "prop-types";
import { ToastContainer } from 'react-toastify';
import { Redirect } from 'react-router-dom';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import SentimentSatisfiedAlt from "@material-ui/icons/SentimentSatisfiedAlt"
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "../../../components/Dashboard/Grid/GridContainer";
import GridItem from "../../../components/Dashboard/Grid/GridItem";
import Button from "../../../components/Dashboard/CustomButtons/Button";
import CustomInput from "../../../components/Dashboard/CustomInputs/CustomInput";
import InfoArea from "../../../components/Dashboard/InfoArea/InfoArea";
import Card from "../../../components/Dashboard/Card/Card";
import CardBody from "../../../components/Dashboard/Card/CardBody";

import registerPageStyle from "../../../assets/jss/material-dashboard-pro-react/views/registerPageStyle";

import { connect } from "react-redux";
import { toast } from 'react-toastify';
import { actFetchUserRequest } from "../../../redux/actions/authenticated";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      logged: false,
      registerFirstname: "",
      registerLastname: "",
      registerUsername: "",
      registerPassword: "",
      registerFirstnameState: "",
      registerLastnameState: "",
      registerUsernameState: "",
      registerPasswordState: ""
    };
  }
  componentWillMount() {
    if (localStorage.getItem("UserAccount")) {
      this.setState({
        logged: !this.state.logged
      });
    }
  }
  // function that returns true if value is email, false otherwise
  verifyEmail(value) {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  }
  // function that verifies if a string has a given length or not
  verifyLength(value, length) {
    if (value.length >= length) {
      return true;
    }
    return false;
  }
  handleChange = (event, stateName, type) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
    switch (type) {
      case "firstname":
        if (this.verifyLength(event.target.value, 1)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "lastname":
        if (this.verifyLength(event.target.value, 1)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "username":
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
  handleToggle = (value) => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    var { firstname, lastname, username, password } = this.state;
    var user = {
      firstname: firstname,
      lastname: lastname,
      userEmail: username,
      password: password
    }
    if (firstname === "" || lastname === "" || username === "" || password === "") {
      toast.error("Error Register!! Please confirm again", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
    else {
      this.props.fetchRegisterUser(user);
    }
  }
  render() {
    const { firstname, lastname, username, password, logged, registerFirstnameState, registerLastnameState, registerUsernameState, registerPasswordState } = this.state;
    const { classes } = this.props;
    if (logged === true) {
      return (<Redirect to="/"></Redirect>);
    }
    return (
      <div className={classes.container}>
        <ToastContainer autoClose={3000} />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <Card className={classes.cardSignup}>
              <h2 className={classes.cardTitle}>CREATE AN ACCOUNT</h2>
              <CardBody>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={5}>
                    <InfoArea
                      title="Marketing"
                      description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                      icon={Timeline}
                      iconColor="rose"
                    />
                    <InfoArea
                      title="Fully Coded in HTML5"
                      description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                      icon={Code}
                      iconColor="primary"
                    />
                    <InfoArea
                      title="Built Audience"
                      description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                      icon={Group}
                      iconColor="info"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={8} md={5}>
                    <div className={classes.center}>
                      <Button justIcon round color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      {` `}
                      <Button justIcon round color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      {` `}
                      <Button justIcon round color="facebook">
                        <i className="fab fa-facebook-f" />
                      </Button>
                      {` `}
                      <h4 className={classes.socialTitle}>or be classical</h4>
                    </div>
                    <form className={classes.form} onSubmit={this.handleSubmit}>
                      <CustomInput
                        success={registerFirstnameState === "success"}
                        error={registerFirstnameState === "error"}
                        labelText="Firstname *"
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Face className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          type: "text",
                          name: "firstname",
                          value: firstname,
                          onChange: event => this.handleChange(event, "registerFirstname", "firstname")
                        }}
                      />
                      <CustomInput
                        success={registerLastnameState === "success"}
                        error={registerLastnameState === "error"}
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <SentimentSatisfiedAlt className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          type: "text",
                          name: "lastname",
                          placeholder: "Last Name *",
                          value: lastname,
                          onChange: event => this.handleChange(event, "registerLastname", "lastname")
                        }}
                      />
                      <CustomInput
                        success={registerUsernameState === "success"}
                        error={registerUsernameState === "error"}
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Email className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          type: "text",
                          name: "username",
                          placeholder: "Email Address *",
                          value: username,
                          onChange: event => this.handleChange(event, "registerUsername", "username")
                        }}
                      />
                      <CustomInput
                        success={registerPasswordState === "success"}
                        error={registerPasswordState === "error"}
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Icon className={classes.inputAdornmentIcon}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          ),
                          type: "password",
                          name: "password",
                          placeholder: "Password *",
                          value: password,
                          onChange: event => this.handleChange(event, "registerPassword", "password")
                        }}
                      />
                      <FormControlLabel
                        classes={{
                          root: classes.checkboxLabelControl,
                          label: classes.checkboxLabel
                        }}
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => this.handleToggle(1)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                              root: classes.checkRoot
                            }}
                          />
                        }
                        label={
                          <span>
                            I agree to the{" "}
                            <a href="#pablo">terms and conditions</a>.
                          </span>
                        }
                      />
                      <div className={classes.center}>
                        <Button round color="primary" type="submit">
                          Register
                        </Button>
                      </div>
                    </form>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRegisterUser: (user) => {
      dispatch(actFetchUserRequest(user));
    }
  }
};
RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, mapDispatchToProps)(withStyles(registerPageStyle)(RegisterPage));
