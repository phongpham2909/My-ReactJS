import React, { Component } from 'react';
// core components
import GridContainer from "../../../../components/Pages/Grid/GridContainer";
import GridItem from "../../../../components/Pages/Grid/GridItem";
import CustomInput from "../../../../components/Pages/CustomInput/CustomInput";
import Card from "../../../../components/Pages/Card/Card";
import CardBody from "../../../../components/Pages/Card/CardBody";
import CardHeader from "../../../../components/Pages/Card/CardHeader";
import CardFooter from "../../../../components/Pages/Card/CardFooter";
import Button from "../../../../components/Pages/CustomButtons/Button";
import Tooltip from "@material-ui/core/Tooltip";

class SectionInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            firstname: '',
            lastname: '',
            phoneNumber: '',
            address: '',
            birthday: '',
            created: ''
        }
    }
    componentWillMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.actFetchCustomerById(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.infoCustomer) {
            var { infoCustomer } = nextProps;
            this.setState({
                id: infoCustomer.customerID,
                email: infoCustomer.userEmail,
                firstname: infoCustomer.firstname,
                lastname: infoCustomer.lastname,
                phoneNumber: infoCustomer.phoneNumber,
                birthday: infoCustomer.birthday,
                address: infoCustomer.address,
                created: infoCustomer.Created
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
    handleSave = (event) => {
        event.preventDefault();
        var { id, email, firstname, lastname, phoneNumber, address, birthday, created } = this.state;
        var infoCustomer = {
            customerID: id,
            firstname: firstname,
            lastname: lastname,
            userEmail: email,
            phoneNumber: phoneNumber,
            birthday: birthday,
            address: address,
            customerCreated: created
        }
        this.props.actUpdateInfoCustomer(infoCustomer);
    }
    render() {
        var { email, firstname, lastname, phoneNumber, address, created, birthday } = this.state;
        return (
            <form onSubmit={this.handleSave}>
                <Card plain>
                    <CardHeader style={{ marginRight: 0 }}>
                        <h3>Update Your Personal Information</h3>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                            <GridItem md={6} sm={12}>
                                <CustomInput
                                    labelText="Your firstname"
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
                                <CustomInput
                                    labelText="Your email"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        type: "email",
                                        name: "email",
                                        value: email,
                                        onChange: this.handleChange,
                                        disabled: true
                                    }}
                                />
                                <CustomInput
                                    labelText="Your phone number"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        type: "number",
                                        name: "phoneNumber",
                                        value: phoneNumber,
                                        onChange: this.handleChange,
                                    }}
                                />
                                <CustomInput
                                    labelText="Created"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        type: "text",
                                        name: "created",
                                        value: created,
                                        onChange: this.handleChange,
                                        disabled: true
                                    }}
                                />
                            </GridItem>
                            <GridItem md={6} sm={12}>
                                <CustomInput
                                    labelText="Your lastname"
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
                                <CustomInput
                                    labelText="Your birthday"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        type: "text",
                                        name: "birthday",
                                        value: birthday,
                                        onChange: this.handleChange,
                                    }}
                                />

                                <CustomInput
                                    labelText="Your address"
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
                        </GridContainer>
                    </CardBody>
                    <CardFooter>
                        <Tooltip
                            id="tooltip-top"
                            title="Update Profile"
                            placement="top"
                        >
                            <Button color="primary" type="submit">Update</Button>
                        </Tooltip>
                    </CardFooter>
                </Card>

            </form>
        );
    }
}

export default SectionInformation;