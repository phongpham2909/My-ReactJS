import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from '@material-ui/core/TableBody';
import Table from "@material-ui/core/Table";
//jss styles 
import styles from "../../../../assets/jss/material-dashboard-pro-react/views/Order/orderDetailStyles";

class SectionOrderPayment extends Component {
    render() {
        var { orderByID, classes } = this.props;
        return (
            <div className={classes.tableResponsive}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>TransactionID</TableCell>
                            <TableCell align="right">Payment Method</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className={classes.customPadding}></TableCell>
                            <TableCell align="right">{orderByID.paymentType}</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default withStyles(styles)(SectionOrderPayment);