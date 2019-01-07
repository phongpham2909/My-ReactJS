import React, { Component } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Chip from "@material-ui/core/Chip";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
// core components
import Button from "../../../../components/Dashboard/CustomButtons/Button";
// material-ui icons
import Info from "@material-ui/icons/Info";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
// jss styles
import styles from "../../../../assets/jss/material-dashboard-pro-react/views/ProductManagement/productManagement";

class ProductTableItem extends Component {
  render() {
    const { classes, product, index } = this.props;
    const simpleButtons = [
      { color: "info", icon: Info, title: "Info" },
      { color: "success", icon: Edit, title: "Edit" },
      { color: "danger", icon: Delete, title: "Delete" }
    ].map((prop, key) => {
      return (
        <Tooltip key={key} title={prop.title} placement="top">
          <Button color={prop.color} default className={classes.actionButton}>
            <prop.icon className={classes.icon} />
          </Button>
        </Tooltip>
      );
    });
    return (
      <TableRow>
        <TableCell className={classes.customTableCell}>{index + 1}</TableCell>
        <TableCell
          component="th"
          scope="row"
          className={classes.customTableCell}
        >
          <div className={classes.imgContainer}>
            <img
              className={classes.img}
              src={product.image}
              alt={product.name}
            />
          </div>
        </TableCell>
        <TableCell align="right">{product.name}</TableCell>
        <TableCell align="right">{product.price}</TableCell>
        <TableCell align="right">
          <Chip
            label={product.status ? "In Stock" : "Out of Stock"}
            className={`${
              product.status ? classes.tdColorSuccess : classes.tdColorError
            } ${classes.customStatus}`}
          />
        </TableCell>
        <TableCell align="right">{simpleButtons}</TableCell>
      </TableRow>
    );
  }
}
ProductTableItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductTableItem);
