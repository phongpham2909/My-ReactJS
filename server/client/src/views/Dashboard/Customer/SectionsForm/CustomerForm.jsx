import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
// core components
import CustomInput from "../../../../components/Dashboard/CustomInputs/CustomInput";
import GridContainer from "../../../../components/Dashboard/Grid/GridContainer";
import GridItem from "../../../../components/Dashboard/Grid/GridItem";
import Card from "../../../../components/Dashboard/Card/Card";
import CardBody from "../../../../components/Dashboard/Card/CardBody";
import CardFooter from "../../../../components/Dashboard/Card/CardFooter";
import Button from "../../../../components/Dashboard/CustomButtons/Button";
// core components material
import FormLabel from "@material-ui/core/FormLabel";
// icons material
import Save from "@material-ui/icons/Save";
import Cancel from "@material-ui/icons/Cancel";
// styles JSS
import styles from '../../../../assets/jss/material-dashboard-pro-react/views/Customer/Sections/SectionCustomerFormStyles';

class CustomerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            numberphone: "",
            birthday: "",
            address: "",
            created: ""
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
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.customerEditing) {
            var { customerEditing } = nextProps;
            this.setState({
                id: customerEditing.customerID,
                email: customerEditing.userEmail,
                password: customerEditing.password,
                firstname: customerEditing.firstname,
                lastname: customerEditing.lastname,
                numberphone: customerEditing.phoneNumber,
                birthday: customerEditing.birthday,
                address: customerEditing.address,
                created: customerEditing.Created
            });
        }
    }
    handleSave = (event) => {
        event.preventDefault();
        const { id, firstname, lastname, email, password, numberphone, address, birthday, created } = this.state;
        const { history } = this.props;
        var infoCustomers = {
            customerID: id,
            firstname: firstname,
            lastname: lastname,
            userEmail: email,
            password: password,
            phoneNumber: numberphone,
            birthday: birthday,
            address: address,
            customerCreated: created
        }
        console.log(id)
        if (id) {
            this.props.UpdateCustomer(infoCustomers);
            history.goBack();
        }
    }
    render() {
        const { classes } = this.props;
        const { firstname, lastname, email, password, numberphone,address, birthday, created } = this.state;
        return (
            <GridContainer>
                <GridItem xs={12}>
                    <Card>
                        <CardBody>
                            <form onSubmit={this.handleSave}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <FormLabel className={classes.labelHorizontal}>First Name</FormLabel>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={9}>
                                        <CustomInput
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "text",
                                                name: "firstname",
                                                value: firstname,
                                                onChange: this.handleChange
                                            }}
                                            helpText="Your firstname..."
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <FormLabel className={classes.labelHorizontal}>Last Name</FormLabel>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={9}>
                                        <CustomInput
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "text",
                                                name: "lastname",
                                                value: lastname,
                                                onChange: this.handleChange
                                            }}
                                            helpText="Your lastname..."
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <FormLabel className={classes.labelHorizontal}>Email</FormLabel>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={9}>
                                        <CustomInput
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "email",
                                                name: "email",
                                                value: email,
                                                onChange: this.handleChange
                                            }}
                                            helpText="Your email..."
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <FormLabel className={classes.labelHorizontal}>Password</FormLabel>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={9}>
                                        <CustomInput
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "password",
                                                name: "password",
                                                value: password,
                                                onChange: this.handleChange
                                            }}
                                            helpText="Your password..."
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <FormLabel className={classes.labelHorizontal}>Number Phone</FormLabel>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={9}>
                                        <CustomInput
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "number",
                                                name: "numberphone",
                                                value: numberphone,
                                                onChange: this.handleChange
                                            }}
                                            helpText="Your number phone..."
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <FormLabel className={classes.labelHorizontal}>Address</FormLabel>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={9}>
                                        <CustomInput
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "text",
                                                name: "address",
                                                value: address,
                                                onChange: this.handleChange
                                            }}
                                            helpText="Your address..."
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <FormLabel className={classes.labelHorizontal}>Birthday</FormLabel>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={9}>
                                        <CustomInput
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "text",
                                                name: "birthday",
                                                value: birthday,
                                                onChange: this.handleChange
                                            }}
                                            helpText="Your birthday..."
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <FormLabel className={classes.labelHorizontal}>Created</FormLabel>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={9}>
                                        <CustomInput
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                disabled: true,
                                                type: "datetime",
                                                name: "created",
                                                value: created,
                                                onChange: this.handleChange
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <CardFooter>
                                    <Button color="info" className={classes.mrRightButton} type="submit">
                                        <Save /> Save
                                    </Button>

                                    <Link to="/administration/customers-management">
                                        <Button color="danger">
                                            <Cancel /> Cancel
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </form>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}
CustomerForm.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerForm);