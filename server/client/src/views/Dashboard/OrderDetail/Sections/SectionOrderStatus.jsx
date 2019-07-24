import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from '@material-ui/core/TableBody';
import Table from "@material-ui/core/Table";
import Chip from "@material-ui/core/Chip";

import styles from '../../../../assets/jss/material-dashboard-pro-react/views/Order/Sections/orderTableStyles';

class SectionOrderStatus extends Component {
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
        const { orderByID, classes } = this.props;
        return (
            <div className={classes.tableResponsive}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Status</TableCell>
                            <TableCell align="right">Updated On</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className={classes.customPadding}>{this.renderOrderStatusType(orderByID.orderStatusType)}</TableCell>
                            <TableCell align="right">2016/04/03 10:06:18</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default withStyles(styles)(SectionOrderStatus);