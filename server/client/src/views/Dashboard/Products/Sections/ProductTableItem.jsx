import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Chip from "@material-ui/core/Chip";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
// core components
import Button from "../../../../components/Dashboard/CustomButtons/Button";
// material-ui icons
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
// jss styles
import styles from "../../../../assets/jss/material-dashboard-pro-react/views/ProductManagement/productManagement";

class ProductTableItem extends Component {
  handleDelete = (id) => {
    if (confirm('You want to definitely delete?')) { //eslint-disable-line
      this.props.handleDelete(id);
    }
  }
  format_curency = (price) => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
  render() {
    const { classes, product, index } = this.props;
    return (
      <TableRow hover>
        <TableCell className={classes.customTableCell}>{index + 1}</TableCell>
        <TableCell
          component="th"
          scope="row"
          className={classes.customTableCell}
        >
          <div className={classes.imgContainer}>
            <img
              className={classes.img}
              src={product.productImage}
              alt={product.productName}
            />
          </div>
        </TableCell>
        <TableCell align="right">{product.productName}</TableCell>
        <TableCell align="right">{this.format_curency(product.productPrice)} đ</TableCell>
        <TableCell align="right">{product.productQuantity}</TableCell>
        <TableCell align="right">
          <Chip
            label={product.productStatus ? "In Stock" : "Out of Stock"}
            className={`${
              product.productStatus ? classes.tdColorSuccess : classes.tdColorError
              } ${classes.customStatus}`}
          />
        </TableCell>
        <TableCell align="right">
               
          <Link to={`/dashboard/product/${product.productID}/edit`}>
            <Tooltip title="Edit" placement="top">
              <Button
                color="success"
                className={classes.actionButton}
              >
                <Edit className={classes.icon} />
              </Button>
            </Tooltip>
          </Link>
          
          <Tooltip title="Delete" placement="top">
            <Button
              color="danger"
              className={classes.actionButton}
              onClick={() => this.handleDelete(product.productID)}
            >
              <Delete className={classes.icon} />
            </Button>
          </Tooltip>
      
        </TableCell>
      </TableRow>
    );
  }
}
ProductTableItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductTableItem);
