import React, { Component } from 'react';
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from '@material-ui/core/Checkbox';
import Chip from "@material-ui/core/Chip";
import TablePagination from "@material-ui/core/TablePagination";
// core components
import CardBody from "../../../../components/Dashboard/Card/CardBody";
// jss styles
import styles from "../../../../assets/jss/material-dashboard-pro-react/views/Order/Sections/orderTableStyles";
import SectionTableHead from './SectionTableHead';

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

class SectionOrderTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: 'desc',
            orderBy: 'customerName',
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
    handleSelectAllClick = event => {
        if (event.target.checked) {
            this.setState({ selected: this.props.data.map(n => n.orderID) });
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
    handleOrderDetail = (event, id) => {
        event.preventDefault();
        window.location.href = `/administration/order/${id}`;
        console.log("handle")
    }
    renderOrderStatusType(param) {
        var { classes } = this.props;
        switch (param) {
            case 'Waiting for payment':
                return <Chip label="Waiting for payment" className={`${classes.tdColorWaitingPayment} ${classes.customStatus}`} />;
            case 'Preparing the order':
                return <Chip label="Preparing the order" className={`${classes.tdColorWarning} ${classes.customStatus}`} />;
            case 'Shipped':
                return <Chip label="Shipped" className={`${classes.tdColorShipped} ${classes.customStatus}`} />;
            case 'Delivered':
                return <Chip label="Delivered" className={`${classes.tdColorSuccess} ${classes.customStatus}`} />;
            case 'Awaiting Cash-on-delivery payment':
                return <Chip label="Awaiting Cash-on-delivery payment" className={`${classes.tdColorCashOnDelivery} ${classes.customStatus}`} />;
            default:
                return <Chip label="Payment Error" className={`${classes.tdColorError} ${classes.customStatus}`} />;
        }
    }
    render() {
        const { classes, orders } = this.props;
        const { order, orderBy, selected, rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, orders.length - page * rowsPerPage);
        return (
            <CardBody>
                <div className={classes.tableResponsive}>
                    <Table className={classes.table}>
                        <SectionTableHead />
                        <TableBody>
                            {stableSort(orders, getSorting(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((order, index) => {
                                    const isSelected = this.isSelected(order.orderID);
                                    return (
                                        <TableRow
                                            hover
                                            onClick={event => this.handleOrderDetail(event, order.orderID)}
                                            role="checkbox"
                                            aria-checked={isSelected}
                                            tabIndex={-1}
                                            key={order.orderID}
                                            selected={isSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    onClick={event => this.handleClick(event, order.orderID)}
                                                    classes={{
                                                        root: classes.customCheckbox,
                                                        checked: classes.checked,
                                                    }}
                                                    checked={isSelected} />
                                            </TableCell>
                                            <TableCell align="right">{index + 1}</TableCell>
                                            <TableCell align="right">{order.orderReference}</TableCell>
                                            <TableCell align="right">{order.orderCustomerName}</TableCell>
                                            <TableCell align="right">{this.props.format_curency(order.orderTotalAmount)}đ</TableCell>
                                            <TableCell align="right">{order.paymentType}</TableCell>
                                            <TableCell align="right">{this.renderOrderStatusType(order.orderStatusType)}</TableCell>
                                            <TableCell align="right">{order.Created}</TableCell>
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
                    count={orders.length}
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

export default withStyles(styles)(SectionOrderTable);