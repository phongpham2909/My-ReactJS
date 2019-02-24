import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
// core components
import Button from "../../../components/Dashboard/CustomButtons/Button";
import GridContainer from "../../../components/Dashboard/Grid/GridContainer";
import GridItem from "../../../components/Dashboard/Grid/GridItem";
import Card from "../../../components/Dashboard/Card/Card";
import CardHeader from "../../../components/Dashboard/Card/CardHeader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
// material-ui icons
import Add from "@material-ui/icons/Add";
// jss styles
import styles from "../../../assets/jss/material-dashboard-pro-react/views/ProductManagement/productManagement";
import ProductTable from "./Sections/ProductTable";
// connect redux
import { connect } from "react-redux";
import { actFetchProductsRequest, actDeleteProductRequest, FILTER_TABLE_PRODUCT } from "../../../redux/actions";
import CustomInput from "../../../components/Dashboard/CustomInputs/CustomInput";
//lodash
import { filter } from 'lodash';

class ProductManagement extends React.Component {
  handleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    var { ProductFilterTable } = this.props;
    var filter = {
      name: name === 'filterName' ? value : ProductFilterTable.name,
      status: name === 'filterStatus' ? value : ProductFilterTable.status
    };
    this.props.handleProductFilterTable(filter);
    this.setState({
      [name]: value
    });
  }
  componentDidMount() {
    this.props.fetchAllProducts();
  }
  handleDelete = (id) => {
    this.props.deleteProduct(id);
  }
  render() {
    var { products, SearchProduct, ProductFilterTable, classes } = this.props;
    //Điều kiện Filter Table
    if (ProductFilterTable.name) {
      //use lodash
      products = filter(products, (product) => {
        return product.productName.toLowerCase().indexOf(ProductFilterTable.name.toLowerCase()) !== -1;
      });
    }
    //Điều kiện Search
    if (SearchProduct) {
      //use lodash
      products = filter(products, (product) => {
        return product.productName.toLowerCase().indexOf(SearchProduct.toLowerCase()) !== -1;
      });
    }
    return (
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader>
              <GridContainer>
                <GridItem md={3} xs={12}>
                  <Link to="/dashboard/product-management/new-product">
                    <Button color="primary" default>
                      <Add /> Add New Product
                    </Button>
                  </Link>
                </GridItem>
                <GridItem md={4} xs={12}>
                  <CustomInput
                    labelText="Search..."
                    formControlProps={{
                      fullWidth: true,
                      style: { margin: -10 }
                    }}
                    inputProps={{
                      type: "text",
                      name: "filterName",
                      value: ProductFilterTable.name,
                      onChange: this.handleChange
                    }}
                  />                  
                </GridItem>
                <GridItem md={2} xs={6} style={{margin : -13}}>
                  <FormControl
                    fullWidth
                    className={classes.selectFormControl}
                  >
                    <InputLabel
                      htmlFor="simple-select"
                      className={classes.selectLabel}
                    >
                      Select a colum
                    </InputLabel>
                    <Select
                      MenuProps={{
                        className: classes.selectMenu
                      }}
                      classes={{
                        select: classes.select
                      }}
                      value={""}
                      onChange={this.handleSimple}
                      inputProps={{
                        name: "simpleSelect",
                        id: "simple-select"
                      }}
                    >
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                      >
                        Name
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="2"
                      >
                        Category
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="3"
                      >
                      Price
                      </MenuItem>
                    </Select>
                  </FormControl>
                  </GridItem>
              </GridContainer>
            </CardHeader>
            <ProductTable
              data={products}
              handleDelete={this.handleDelete} />
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    SearchProduct: state.SearchProduct,
    ProductFilterTable: state.productFilterTable,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    deleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    },
    handleProductFilterTable: (filter) => {
      dispatch(FILTER_TABLE_PRODUCT(filter));
    }
  }
}
ProductManagement.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ProductManagement));
