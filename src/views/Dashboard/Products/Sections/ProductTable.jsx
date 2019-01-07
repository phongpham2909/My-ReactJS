import React, { Component } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
// core components
import CardBody from "../../../../components/Dashboard/Card/CardBody";
// jss styles
import styles from "../../../../assets/jss/material-dashboard-pro-react/views/ProductManagement/productManagement";

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      page: 0,
      rowsPerPage: 5
    };
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  render() {
    const { classes } = this.props;
    const { page, rowsPerPage, products } = this.state;
    return (
      <CardBody className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.customTableCell}>#</TableCell>
                <TableCell align="right" className={classes.customTableCell}>
                  Image
                </TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.children}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={products.length}
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

export default withStyles(styles)(ProductTable);
