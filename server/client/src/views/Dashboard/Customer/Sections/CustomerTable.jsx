import React, { Component } from 'react';
import { Link } from "react-router-dom";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from '@material-ui/core/Tooltip';
import TablePagination from "@material-ui/core/TablePagination";
import CardBody from '../../../../components/Dashboard/Card/CardBody';
import Button from "../../../../components/Dashboard/CustomButtons/Button";
import CustomerHead from '../Sections/CustomerHead';
import styles from '../../../../assets/jss/material-dashboard-pro-react/views/Customer/Sections/SectionCustomerTableStyles';
// material-ui icons
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import { stableSort, getSorting } from '../../../../utils/ModuleSort';

class CustomerTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: 'desc',
            orderBy: 'orderID',
            page: 0,
            rowsPerPage: 5,
            selected: [],
        };
    }
    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }

        this.setState({ order, orderBy });
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
    render() {
        const { classes, Customers } = this.props;
        const { order, orderBy, page, rowsPerPage, selected } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, Customers.length - page * rowsPerPage);
        return (
            <CardBody>
                <div className={classes.tableResponsive}>
                    <Table className={classes.table}>
                        <CustomerHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={this.handleRequestSort}
                            rowCount={Customers.length} />
                        <TableBody>
                            {stableSort(Customers, getSorting(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((customer, index) => {
                                    return (
                                        <TableRow
                                            hover
                                            tabIndex={-1}
                                            key={customer.customerID}
                                        >
                                            <TableCell align="right">{customer.customerID}</TableCell>
                                            <TableCell align="right">{customer.firstname}</TableCell>
                                            <TableCell align="right">{customer.phoneNumber}</TableCell>
                                            <TableCell align="right">{customer.birthday}</TableCell>
                                            <TableCell align="right">{customer.Created}</TableCell>
                                            <TableCell align="right">
                                                <Link to={`/administration/customer/${customer.customerID}/edit`}>
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
                                                        onClick={() => this.handleDelete(customer.customerID)}
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
                    count={Customers.length}
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

export default withStyles(styles)(CustomerTable);