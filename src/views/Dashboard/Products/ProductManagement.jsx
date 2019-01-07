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
import ProductTableItem from "./Sections/ProductTableItem";
// connect redux
import { connect } from "react-redux";
// Call Api axios
import callApi from "../../../utils/ConnectApi";

class ProductManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    // GET request for products
    callApi("products", "GET", null).then(res => {
      this.setState({
        products: res.data
      });
    });
  }
  showProducts = products => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductTableItem key={index} product={product} index={index} />;
      });
    }
    return result;
  };
  render() {
    const { products } = this.state;
    return (
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader>
              <GridContainer>
                <GridItem md={12}>
                  <Link to="/dashboard/product/add">
                    <Button color="primary" default>
                      <Add /> Add New
                    </Button>
                  </Link>
                </GridItem>
              </GridContainer>
            </CardHeader>
            <ProductTable>{this.showProducts(products)}</ProductTable>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products
  };
};
ProductManagement.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(ProductManagement));
