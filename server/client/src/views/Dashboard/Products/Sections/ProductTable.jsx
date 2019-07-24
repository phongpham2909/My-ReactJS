import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactTable from 'react-table';
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Tooltip from '@material-ui/core/Tooltip';
// components
import Button from "../../../../components/Dashboard/CustomButtons/Button";
// material-ui icons
import Close from "@material-ui/icons/Close";
import Edit from "@material-ui/icons/Edit";
import Dvr from "@material-ui/icons/Dvr";
// jss styles
import styles from "../../../../assets/jss/material-dashboard-pro-react/views/ProductManagement/productManagement";

class ProductTable extends Component {
  handleDelete = (id) => {
    if (confirm('You want to definitely delete?')) { //eslint-disable-line
      this.props.handleDelete(id);
    }
  }
  format_curency = (price) => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
  render() {
    var { classes, products } = this.props;
    const columns = [
      {
        Header: "Image",
        accessor: "productImageOfficial",
        Cell: cellInfo => (<div className={classes.imgContainer}>
          <img
            className={classes.img}
            src={cellInfo.row.productImageOfficial}
            alt={cellInfo.row.productName}
          />
        </div>),
        sortable: false
      },
      {
        Header: "Name",
        accessor: "productName",
        minWidth: 250,
      },
      {
        Header: "Price",
        accessor: "productPrice",
        Cell: cellInfo => (
          <div>{this.format_curency(cellInfo.row.productPrice)}<small>đ</small></div>
        ),
      },
      {
        Header: "Quantity",
        accessor: "productQuantity",
      },
      {
        Header: "Status",
        accessor: "productStatus",
        Cell: cellInfo => (
          <Chip
            label={cellInfo.row.productStatus ? "In Stock" : "Out of Stock"}
            className={`${
              cellInfo.row.productStatus ? classes.tdColorSuccess : classes.tdColorError
              } ${classes.customStatus}`}
          />
        ),
      },
      {
        Header: "Actions",
        accessor: "productID",
        Cell: cellInfo => (
          <div className="actions-right">
            <Link to={`/administration/${cellInfo.row.productID}/edit`}>
              <Tooltip title="Edit" placement="top">
                <Button
                  justIcon
                  round
                  simple
                  color="info"
                  className={classes.actionButton}
                >
                  <Edit className={classes.icon} />
                </Button>
              </Tooltip>
            </Link>{" "}
            <Button
              justIcon
              round
              simple
              onClick={() => this.handleDelete(cellInfo.row.productID)}
              color="danger"
              className={classes.actionButton}
            >
              <Close className={classes.icon} />
            </Button>{" "}
          </div>
        ),
        sortable: false
      }
    ]
    return (
      <div>
        <ReactTable
          style={{
            height: "500px"
          }}
          hover
          data={products}
          columns={columns}
          defaultPageSize={10}
          showPaginationTop
          showPaginationBottom={false}
          className="-highlight"
        />
      </div>
    );
  }
}
ProductTable.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ProductTable);
