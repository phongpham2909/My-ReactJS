import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Add from '@material-ui/icons/Add';
// core components
import GridContainer from "../../../components/Dashboard/Grid/GridContainer";
import GridItem from "../../../components/Dashboard/Grid/GridItem";
import Card from "../../../components/Dashboard/Card/Card";
import CardBody from "../../../components/Dashboard/Card/CardBody";
// jss styles
import styles from "../../../assets/jss/material-dashboard-pro-react/views/ProductManagement/productManagement";
//lodash
import { filter } from 'lodash';
import ProductTable from "./Sections/ProductTable";
import Button from "../../../components/Dashboard/CustomButtons/Button";

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
      <div>
        <GridContainer>
          <GridItem md={3}/>
          <GridItem md={6} xs={12}>
            <Paper className={classes.root2} elevation={1}>
              <IconButton className={classes.iconButton} aria-label="Search">
                <SearchIcon />
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="Search"
                type="text"
                name="filterName"
                value={ProductFilterTable.name}
                onChange={this.handleChange}
              />
            </Paper>
          </GridItem>
          <GridItem md={3} xs={12}>
            <Link to="/administration/new-product">
              <Button color="warning"><Add/>Add new</Button>
            </Link>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12}>
            <Card>
              <CardBody>
                <ProductTable handleDelete={this.handleDelete} products={products} />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

ProductManagement.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductManagement);
