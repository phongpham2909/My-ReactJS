import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
// core components
import ImageUpload from "../../../../components/Dashboard/CustomUpload/ImageUpload";
import CustomInput from "../../../../components/Dashboard/CustomInputs/CustomInput";
import GridContainer from "../../../../components/Dashboard/Grid/GridContainer";
import GridItem from "../../../../components/Dashboard/Grid/GridItem";
import Button from "../../../../components/Dashboard/CustomButtons/Button";
import CardBody from "../../../../components/Dashboard/Card/CardBody";
import CardFooter from "../../../../components/Dashboard/Card/CardFooter";
// core components material
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// icons material
import Check from "@material-ui/icons/Check";
import Save from "@material-ui/icons/Save";
import Cancel from "@material-ui/icons/Cancel";
// jss styles
import styles from "../../../../assets/jss/material-dashboard-pro-react/views/ProductManagement/productManagement";
// connect redux
import { connect } from "react-redux";
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from "../../../../redux/actions";

class CardActionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtColor: "",
      txtImage: "",
      txtPrice: "",
      txtQuantity: "",
      txtDescription: "",
      ckbStatus: true
    };
  }
  componentWillMount() {
    const { productEditing } = this.props;
    if (productEditing.productStatus === null || productEditing.productStatus !== -1) {
      return false;
    }
    else {
      return true;
    }
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.actEditProduct(id);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.productEditing) {
      var { productEditing } = nextProps;
      this.setState({
        id: productEditing.productID,
        txtName: productEditing.productName,
        txtImage: productEditing.productImage,
        txtPrice: productEditing.productPrice,
        txtQuantity: productEditing.productQuantity,
        txtColor: productEditing.productColor,
        txtDescription: productEditing.productDescription,
        ckbStatus: productEditing.productStatus
      });
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
  handleChangImage = (event) => {

  }
  handleSave = (event) => {
    event.preventDefault();
    const { id, txtName, txtPrice, txtQuantity, txtImage, txtColor, txtDescription, ckbStatus } = this.state;
    const { history } = this.props;
    var product = {
      productID: id,
      productName: txtName,
      productImage: txtImage,
      productPrice: txtPrice,
      productQuantity: txtQuantity,
      productColor: txtColor,
      productDescription: txtDescription,
      productStatus: ckbStatus
    }
    if (id) {
      this.props.actUpdateProduct(product);
      history.goBack();
    } else {
      this.props.actAddProduct(product);
      history.goBack();
    }
  }
  render() {
    const { txtName, txtImage, txtPrice, txtQuantity, txtColor, txtDescription, ckbStatus } = this.state;
    const { classes } = this.props;
    return (
      <CardBody>
        <form onSubmit={this.handleSave}>
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
                onChange={this.handleChangImage}
              />
            </GridItem>
            <GridItem md={6}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <FormLabel className={classes.labelHorizontal}>Name</FormLabel>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      name: "txtName",
                      value: txtName,
                      onChange: this.handleChange
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
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "number",
                      value: txtPrice,
                      name: "txtPrice",
                      onChange: this.handleChange
                    }}
                    helpText="Enter your price here."
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <FormLabel className={classes.labelHorizontal}>Quantity</FormLabel>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "number",
                      value: txtQuantity,
                      name: "txtQuantity",
                      onChange: this.handleChange
                    }}
                    helpText="Enter your quantity here."
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <FormLabel className={classes.labelHorizontal}>Color</FormLabel>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      value: txtColor,
                      name: "txtColor",
                      onChange: this.handleChange
                    }}
                    helpText="Enter your color here."
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <FormLabel className={classes.labelHorizontal}>Url Image</FormLabel>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      name: "txtImage",
                      value: txtImage,
                      onChange: this.handleChange
                    }}
                    helpText="Enter your Url Image here."
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <FormLabel className={classes.labelHorizontal}>Description</FormLabel>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      value: txtDescription,
                      name: "txtDescription",
                      onChange: this.handleChange
                    }}
                    helpText="Enter your description here."
                  />
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
                          value={`${ckbStatus}`}
                          checked={ckbStatus}
                          onChange={this.handleChange}
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
                      label={ckbStatus ? "In Stock" : "Out of Stock"}
                    />
                  </div>
                </GridItem>
              </GridContainer>
            </GridItem>
            <CardFooter>
              <Button color="info" className={classes.mrRightButton} type="submit">
                <Save /> Save
              </Button>

              <Link to="/dashboard/product-management/view-products">
                <Button color="danger">
                  <Cancel /> Cancel
                </Button>
              </Link>
            </CardFooter>
          </GridContainer>
        </form>
      </CardBody>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productEditing: state.productEditing
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    actEditProduct: (id) => {
      dispatch(actGetProductRequest(id));
    },
    actUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    }
  };
};
CardActionForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CardActionForm));
