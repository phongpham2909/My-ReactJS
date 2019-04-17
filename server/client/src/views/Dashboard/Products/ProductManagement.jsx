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
// material-ui icons
import Add from "@material-ui/icons/Add";
// jss styles
import styles from "../../../assets/jss/material-dashboard-pro-react/views/ProductManagement/productManagement";
import ProductTable from "./Sections/ProductTable";
// connect redux
import { connect } from "react-redux";
import { actDeleteProductRequest, FILTER_TABLE_PRODUCT } from "../../../redux/actions";
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
  handleDelete = (id) => {
    this.props.deleteProduct(id);
  }
  render() {
    var { products, SearchProduct, ProductFilterTable } = this.props;
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
                  <Link to="/administration/new-product">
                    <Button color="primary" default>
                      <Add /> Add New Product
                    </Button>
                  </Link>
                </GridItem>
                <GridItem xs={1}/>
                <GridItem md={4} xs={10}>
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
                <GridItem xs={1}/>
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
    products: state.products, // this.props.products
    SearchProduct: state.SearchProduct,
    ProductFilterTable: state.productFilterTable,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
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
