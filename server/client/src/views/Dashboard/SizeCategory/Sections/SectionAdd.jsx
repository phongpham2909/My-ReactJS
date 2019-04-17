import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
// core components
import CustomInput from '../../../../components/Dashboard/CustomInputs/CustomInput';
import Card from '../../../../components/Dashboard/Card/Card';
import CardBody from '../../../../components/Dashboard/Card/CardBody';
import GridContainer from "../../../../components/Dashboard/Grid/GridContainer";
import GridItem from "../../../../components/Dashboard/Grid/GridItem";
import Button from "../../../../components/Dashboard/CustomButtons/Button";
import CardFooter from "../../../../components/Dashboard/Card/CardFooter";
// icons material
import Save from "@material-ui/icons/Save";
import Cancel from "@material-ui/icons/Cancel";
// styles jss
import styles from '../../../../assets/jss/material-dashboard-pro-react/views/Category/CategoryStyle';
// components
import SectionAddHead from './SectionAddHead';

class SectionAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            description: "",
            image: ""
        }
    }
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.actEditSizeCategory(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.sizeEditing) {
            var { sizeEditing } = nextProps;
            this.setState({
                id: sizeEditing.sizeID,
                name: sizeEditing.sizeName,
                description: sizeEditing.sizeDescription,
                image: sizeEditing.sizeImage
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
        const { id, name, description, image } = this.state;
        const { history, actUpdateSizeCategory, actAddSizeCategory } = this.props;
        const category = {
            sizeID: id,
            sizeName: name,
            sizeDescription: description,
            sizeImage: image
        }
        if (id) {
            actUpdateSizeCategory(category);
            history.goBack();
        }
        else {
            actAddSizeCategory(category);
            history.goBack();
        }
    }
    render() {
        const { name, description, image } = this.state;
        const { classes } = this.props;
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <SectionAddHead />
                        <CardBody>
                            <form onSubmit={this.handleSave}>
                                <GridContainer justify="center">
                                    <GridItem md={3}></GridItem>
                                    <GridItem md={6}>
                                        <CustomInput
                                            labelText="Name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "text",
                                                name: "name",
                                                value: name,
                                                onChange: this.handleChange
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Description"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "text",
                                                name: "description",
                                                value: description,
                                                onChange: this.handleChange
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Url Image"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "text",
                                                name: "image",
                                                value: image,
                                                onChange: this.handleChange
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem md={3}></GridItem>

                                    <CardFooter>
                                        <Button color="info" className={classes.mrRightButton} type="submit">
                                            <Save /> Save
                                    </Button>

                                        <Link to="/administration/size-category">
                                            <Button color="danger">
                                                <Cancel /> Cancel
                                        </Button>
                                        </Link>
                                    </CardFooter>
                                </GridContainer>


                            </form>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

export default withStyles(styles)(SectionAdd);