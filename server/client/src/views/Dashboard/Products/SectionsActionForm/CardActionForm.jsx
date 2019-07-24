import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
// core components
import ImageUpload from "../../../../components/Dashboard/CustomUpload/ImageUpload";
import GridContainer from "../../../../components/Dashboard/Grid/GridContainer";
import GridItem from "../../../../components/Dashboard/Grid/GridItem";
import Button from "../../../../components/Dashboard/CustomButtons/Button";
import CardFooter from "../../../../components/Dashboard/Card/CardFooter";
import Card from "../../../../components/Dashboard/Card/Card";
import CardHeader from "../../../../components/Dashboard/Card/CardHeader";
import CardBody from "../../../../components/Dashboard/Card/CardBody";
// core components material
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// icons material
import Check from "@material-ui/icons/Check";
import Save from "@material-ui/icons/Save";
import Cancel from "@material-ui/icons/Cancel";
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Info from '@material-ui/icons/Info';
import PermMedia from '@material-ui/icons/PermMedia';
import LocalShipping from '@material-ui/icons/LocalShipping';
import Store from '@material-ui/icons/Store';
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
      categoryID: "",
      txtQuantity: "",
      txtDescription: "",
      ckbStatus: true,
      newValue: 0
    };
  }
  componentWillMount() {
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
        txtImage: productEditing.productImageOfficial,
        txtPrice: productEditing.productPrice,
        txtQuantity: productEditing.productQuantity,
        categoryID: productEditing.categoryID,
        txtDescription: productEditing.productDescription,
        ckbStatus: ((productEditing.productStatus === 1) ? true : false)
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
  handleChangeIndex = (event, newValue) => {
    this.setState({
      newValue
    })
  }
  handleChangImage = (event) => {

  }
  handleSave = (event) => {
    event.preventDefault();
    const { id, txtName, txtPrice, txtQuantity, categoryID, txtImage, txtDescription, ckbStatus } = this.state;
    const { history } = this.props;
    var product = {
      productID: id,
      productName: txtName,
      productImageOfficial: txtImage,
      productPrice: txtPrice,
      productQuantity: txtQuantity,
      categoryID: categoryID,
      productDescription: txtDescription,
      productStatus: ckbStatus
    }
    if (id) {
      this.props.actUpdateProduct(product);
      history.goBack();
    } else {
      this.props.actAddProduct(product);
      this.setState({ id: product.productID })
      history.goBack();
    }
  }
  render() {
    const { txtName, txtImage, txtPrice, txtQuantity, categoryID, txtColor, txtDescription, ckbStatus, newValue } = this.state;
    const { classes, categories } = this.props;
    return (
      <Card>
        <form onSubmit={this.handleSave}>
          <div className={classes.root3}>
            
              <Tabs
                className={classes.customTabs}
                value={newValue}
                onChange={this.handleChangeIndex}
                indicatorColor="primary"
                textColor="primary"
                scrollable
                scrollButtons="auto"
              >
                <Tab label="Basic Info" icon={<Info />} />
                <Tab label="Product Images" icon={<PermMedia />} />
                <Tab label="Pricing" icon={<ShoppingBasket />} />
                <Tab label="Inventory" icon={<Store />} />
                <Tab label="Shipping" icon={<LocalShipping />} />
              </Tabs>
           
            <CardBody>
              {newValue === 0 && <GridContainer>
                <GridItem xs={12} md={12}>
                  <TextField
                    label="Name*"
                    type="text"
                    className={classes.textField}
                    name="txtName"
                    value={txtName}
                    variant="outlined"
                    onChange={this.handleChange}
                  />
                </GridItem>

                <GridItem xs={12} md={12}>
                  <TextField
                    label="Description"
                    type="text"
                    multiline
                    rows="4"
                    className={classes.textField}
                    name="txtDescription"
                    value={txtDescription}
                    variant="outlined"
                    onChange={this.handleChange}
                  />
                </GridItem>
                <GridItem xs={12} md={12}>
                  <GridContainer>
                    <GridItem xs={12} md={6}>
                      <TextField
                        label="Color"
                        type="text"
                        className={classes.textField}
                        name="txtColor"
                        value={txtColor}
                        variant="outlined"
                        onChange={this.handleChange}
                      />
                    </GridItem>
                    <GridItem xs={12} md={6}>
                      <TextField
                        select
                        label="Select"
                        className={classes.textField}
                        name="categoryID"
                        value={categoryID ? categoryID : ''}
                        onChange={this.handleChange}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        margin="normal"
                        variant="outlined"
                      >
                        {categories.map(item => {
                          return (
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              key={item.categoryID}
                              value={item.categoryID ? item.categoryID : ''}>
                              {item.categoryName}
                            </MenuItem>
                          )
                        })}
                      </TextField>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>}
              {newValue === 1 &&
                <GridContainer>
                  <GridItem xs={12} md={12}>
                    <TextField
                      label="Url"
                      type="text"
                      className={classes.textField}
                      name="txtImage"
                      value={txtImage}
                      variant="outlined"
                      onChange={this.handleChange}
                    />
                  </GridItem>
                  <GridItem xs={12} md={12}>
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
                </GridContainer>
              }
              {newValue === 2 &&
                <GridContainer>
                  <GridItem xs={12} md={12}>
                    <TextField
                      label="Price*"
                      type="number"
                      className={classes.textField}
                      name="txtPrice"
                      value={txtPrice}
                      variant="outlined"
                      onChange={this.handleChange}
                    />
                  </GridItem>

                </GridContainer>
              }
              {newValue === 3 &&
                <GridContainer>
                  <GridItem xs={12} md={12}>
                    <TextField
                      label="Quantity*"
                      type="number"
                      className={classes.textField}
                      name="txtQuantity"
                      value={txtQuantity}
                      variant="outlined"
                      onChange={this.handleChange}
                    />
                  </GridItem>
                  <GridItem xs={12} md={12}>
                    <FormLabel className={classes.labelHorizontal}>Status :</FormLabel>
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
                  </GridItem>
                </GridContainer>
              }
              {newValue === 4 && <div>Item Five</div>}
            </CardBody>
          </div>
          <CardFooter>
            <Button color="info" className={classes.mrRightButton} type="submit">
              <Save /> Save
              </Button>

            <Link to="/administration/products-management">
              <Button color="danger">
                <Cancel /> Cancel
                </Button>
            </Link>
          </CardFooter>
        </form>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productEditing: state.productEditing,
    categories: state.categories
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
    },

  };
};
CardActionForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CardActionForm));
