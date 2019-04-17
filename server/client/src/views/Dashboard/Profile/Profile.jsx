import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// @material-ui/icons
import PermIdentity from "@material-ui/icons/PermIdentity";
// core components
import GridContainer from "../../../components/Dashboard/Grid/GridContainer";
import GridItem from "../../../components/Dashboard/Grid/GridItem";
import Button from "../../../components/Dashboard/CustomButtons/Button";
import CustomInput from "../../../components/Dashboard/CustomInputs/CustomInput";
import Clearfix from "../../../components/Dashboard/Clearfix/Clearfix";
import Card from "../../../components/Dashboard/Card/Card";
import CardBody from "../../../components/Dashboard/Card/CardBody";
import CardHeader from "../../../components/Dashboard/Card/CardHeader";
import CardIcon from "../../../components/Dashboard/Card/CardIcon";
import CardAvatar from "../../../components/Dashboard/Card/CardAvatar";
// styles jss
import userProfileStyles from "../../../assets/jss/material-dashboard-pro-react/views/userProfileStyles";
// avatar
import avatar from "../../../assets/img/placeholder.jpg";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            phoneNumber: "",
            address: "",
            aboutme: "",
            UrlAvatar: "",
            UrlFaceBook: "",
            UrlInstagram: "",
            birthday: "",
            created: ""
        }
    }
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.actAdministrationById(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.adminInfo) {
            var { adminInfo } = nextProps;
            this.setState({
                id: adminInfo.administrationID,
                email: adminInfo.adminEmail,
                password: adminInfo.adminPassword,
                firstname: adminInfo.adminFirstname,
                lastname: adminInfo.adminLastname,
                phoneNumber: adminInfo.adminPhoneNumber,
                address: adminInfo.adminAddress,
                aboutme: adminInfo.adminAbout,
                UrlFaceBook: adminInfo.adminLinkFacebook,
                UrlInstagram: adminInfo.adminLinkInstagram,
                UrlAvatar: adminInfo.adminAvatar,
                birthday: adminInfo.adminBirthday,
                created: adminInfo.adminCreated
            })
        }
    }
    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { id, email, firstname, lastname, phoneNumber, address, UrlAvatar, aboutme, UrlFaceBook, UrlInstagram, birthday, created } = this.state;
        const info = {
            administrationID: id,
            adminEmail: email,
            adminFirstname: firstname,
            adminLastname: lastname,
            adminPhoneNumber: phoneNumber,
            adminAddress: address,
            adminAvatar: UrlAvatar,
            adminAbout: aboutme,
            adminLinkFacebook: UrlFaceBook,
            adminLinkInstagram: UrlInstagram,
            adminBirthday: (birthday),
            adminCreated: created
        }
        this.props.actUpdateInfoAdministration(info);
    }
    render() {
        const { email, firstname, lastname, phoneNumber, address, UrlAvatar, aboutme, UrlFaceBook, UrlInstagram, birthday, created } = this.state;
        const { classes } = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card profile>
                                <CardAvatar profile>
                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                        <img src={UrlAvatar ? UrlAvatar : avatar} alt={firstname + " " + lastname} />
                                    </a>
                                </CardAvatar>
                                <CardBody profile>
                                    <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                                    <h4 className={classes.cardTitle}>{firstname + " " + lastname}</h4>
                                    <p className={classes.description}>
                                        {aboutme}
                                    </p>
                                    <Button href={UrlFaceBook ? UrlFaceBook : "#"} target="_blank" color="facebook" simple>
                                        <i className="fab fa-facebook"></i> Facebook
                                </Button>
                                    <Button href={UrlInstagram ? UrlInstagram : "#"} target="_blank" color="reddit" simple>
                                        <i className="fab fa-instagram"></i> Instagram
                                </Button>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={8}>
                            <Card>
                                <CardHeader color="rose" icon>
                                    <CardIcon color="rose">
                                        <PermIdentity />
                                    </CardIcon>
                                    <h4 className={classes.cardIconTitle}>
                                        Edit Profile - <small>Complete your profile</small>
                                    </h4>
                                </CardHeader>
                                <CardBody>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={4}>
                                            <CustomInput
                                                labelText="Company (disabled)"
                                                id="company-disabled"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    disabled: true
                                                }}
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={8}>
                                            <CustomInput
                                                labelText="Email address"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "email",
                                                    name: "email",
                                                    value: email,
                                                    onChange: this.handleChange
                                                }}
                                            />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={6}>
                                            <CustomInput
                                                labelText="First Name"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    name: "firstname",
                                                    value: firstname,
                                                    onChange: this.handleChange
                                                }}
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={6}>
                                            <CustomInput
                                                labelText="Last Name"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    name: "lastname",
                                                    value: lastname,
                                                    onChange: this.handleChange
                                                }}
                                            />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={8}>
                                            <CustomInput
                                                labelText="Address"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    name: "address",
                                                    value: address,
                                                    onChange: this.handleChange
                                                }}
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={4}>
                                            <CustomInput
                                                labelText="Phone Number"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    name: "phoneNumber",
                                                    value: phoneNumber,
                                                    onChange: this.handleChange
                                                }}
                                            />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={6}>
                                            <CustomInput
                                                labelText="Url Facebook"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    name: "UrlFaceBook",
                                                    value: UrlFaceBook,
                                                    onChange: this.handleChange
                                                }}
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={6}>
                                            <CustomInput
                                                labelText="Url Instagram"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    name: "UrlInstagram",
                                                    value: UrlInstagram,
                                                    onChange: this.handleChange
                                                }}
                                            />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={6}>
                                            <CustomInput
                                                labelText="Birthday"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    name: "birthday",
                                                    value: birthday,
                                                    onChange: this.handleChange
                                                }}
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={6}>
                                            <CustomInput
                                                labelText="Created"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    disabled: true,
                                                    type: "text",
                                                    name: "created",
                                                    value: created,
                                                    onChange: this.handleChange
                                                }}
                                            />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                                            <CustomInput
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    multiline: true,
                                                    rows: 5,
                                                    type: "text",
                                                    name: "aboutme",
                                                    value: aboutme,
                                                    onChange: this.handleChange
                                                }}
                                            />
                                        </GridItem>
                                    </GridContainer>
                                    <Button color="rose" type="submit" className={classes.updateProfileButton}>
                                        Update Profile
                                </Button>
                                    <Clearfix />
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </form>
            </div>
        );
    }
}

export default withStyles(userProfileStyles)(Profile);