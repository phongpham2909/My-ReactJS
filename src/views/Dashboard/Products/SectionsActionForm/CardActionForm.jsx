import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// core components
import ImageUpload from "../../../../components/Dashboard/CustomUpload/ImageUpload";
import CustomInput from "../../../../components/Dashboard/CustomInputs/CustomInput";
import GridContainer from "../../../../components/Dashboard/Grid/GridContainer";
import GridItem from "../../../../components/Dashboard/Grid/GridItem";
import Button from "../../../../components/Dashboard/CustomButtons/Button";
import CardBody from "../../../../components/Dashboard/Card/CardBody";
import CardFooter from "../../../../components/Dashboard/Card/CardFooter";
// core components material
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// icons material
import Check from "@material-ui/icons/Check";
import Save from "@material-ui/icons/Save";
import Cancel from "@material-ui/icons/Cancel";
// jss styles
import styles from "../../../../assets/jss/material-dashboard-pro-react/views/ProductManagement/productManagement";

class EnterActionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multipleSelect: [],
      simpleSelect: "",
      data: {
        id: "",
        txtName: "",
        txtColor: "",
        txtPrice: "",
        ckbStatus: ""
      }
    };
  }
  handleMultiple = event => {
    this.setState({ multipleSelect: event.target.value });
  };
  handleChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.data);
  }
  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { txtName, txtPrice, txtColor, ckbStatus } = this.state.data;
    const { classes } = this.props;
    return (
      <CardBody>
        <form onSubmit={this.handleSubmit}>
          <GridContainer justify="center">
            <GridItem md={6} style={{ textAlign: "center" }}>
              <legend>Image Product</legend>
              <ImageUpload
                addButtonProps={{
                  color: "primary",
                  default: true
                }}
                changeButtonProps={{
                  color: "primary",
                  default: true
                }}
                removeButtonProps={{
                  color: "danger",
                  default: true
                }}
              />
            </GridItem>
            <GridItem md={6}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <FormLabel className={classes.labelHorizontal}>Name</FormLabel>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                    value={txtName}
                    name="txtName"
                    onChange={this.handleChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text"
                    }}
                    helpText="Enter your product name here."
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <FormLabel className={classes.labelHorizontal}>Price</FormLabel>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                    value={txtPrice}
                    name="txtPrice"
                    onChange={this.handleChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "number"
                    }}
                    helpText="Enter your price here."
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <FormLabel className={classes.labelHorizontal}>Color</FormLabel>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                    value={txtColor}
                    name="txtColor"
                    onChange={this.handleChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text"
                    }}
                    helpText="Enter your color here."
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <FormLabel className={classes.labelHorizontal}>Category</FormLabel>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel
                      htmlFor="multiple-select"
                      className={classes.selectLabel}
                    >
                      Choose Category
                    </InputLabel>
                    <Select
                      multiple
                      value={this.state.multipleSelect}
                      onChange={this.handleMultiple}
                      MenuProps={{ className: classes.selectMenu }}
                      classes={{ select: classes.select }}
                      inputProps={{
                        name: "multipleSelect",
                        id: "multiple-select"
                      }}
                    >
                      <MenuItem
                        disabled
                        classes={{
                          root: classes.selectMenuItem
                        }}
                      >
                        Choose Category
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelectedMultiple
                        }}
                        value="2"
                      >
                        Classic Black
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelectedMultiple
                        }}
                        value="3"
                      >
                        Classic
                      </MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
              </GridContainer>
              <GridContainer style={{ marginTop: "15px" }}>
                <GridItem md={3}>
                  <FormLabel className={classes.labelHorizontal}>Status</FormLabel>
                </GridItem>
                <GridItem md={9}>
                  <div className={classes.inlineChecks}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="ckbStatus"
                          value={ckbStatus}
                          onChange={this.onChange}
                          checkedIcon={<Check className={classes.checkedIcon} />}
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot
                          }}
                        />
                      }
                      classes={{
                        label: classes.label
                      }}
                      label="Còn Hàng"
                    />
                  </div>
                </GridItem>
              </GridContainer>
            </GridItem>
            <CardFooter>
            <Button color="info" className={classes.mrRightButton} type="submit" >
              <Save /> Save
            </Button>

            <Button color="danger">
              <Cancel /> Cancel
            </Button>
            </CardFooter>
          </GridContainer>
        </form>
      </CardBody>
    );
  }
}
EnterActionForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnterActionForm);
