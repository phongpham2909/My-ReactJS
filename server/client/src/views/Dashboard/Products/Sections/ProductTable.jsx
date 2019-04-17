import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Chip from "@material-ui/core/Chip";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
// core components
import CardBody from "../../../../components/Dashboard/Card/CardBody";
import Button from "../../../../components/Dashboard/CustomButtons/Button";
import ProductTableHead from "./ProductTableHead";
// connect redux
import { connect } from "react-redux";
// material-ui icons
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
// jss styles
import styles from "../../../../assets/jss/material-dashboard-pro-react/views/ProductManagement/productManagement";

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'desc',
      orderBy: 'productName',
      page: 0,
      rowsPerPage: 5,
      selected: [],
    };
  }

  handleDelete = (id) => {
    if (confirm('You want to definitely delete?')) { //eslint-disable-line
      this.props.handleDelete(id);
    }
  }
  format_curency = (price) => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState({ selected: this.props.data.map(n => n.productID) });
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    var { classes, data } = this.props;
    const { order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    return (
      <CardBody className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle"
          >
            <ProductTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(product => {
                  const isSelected = this.isSelected(product.productID);
                  return (

                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, product.productID)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={product.productID}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          classes={{
                            root: classes.customCheckbox,
                            checked: classes.checked,
                          }}
                          checked={isSelected} />
                      </TableCell>

                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.customTableCell}
                      >
                        <div className={classes.imgContainer}>
                          <img
                            className={classes.img}
                            src={product.productImageOfficial}
                            alt={product.productName}
                          />
                        </div>
                      </TableCell>
                      <TableCell align="right"><b>{product.productName}</b></TableCell>
                      <TableCell align="right">{this.format_curency(product.productPrice)}đ</TableCell>
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

                        <Link to={`/administration/${product.productID}/edit`}>
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
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>

              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          className={classes.mr1}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </CardBody>
    );
  }
}

ProductTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null,
  null
)(withStyles(styles)(ProductTable));
