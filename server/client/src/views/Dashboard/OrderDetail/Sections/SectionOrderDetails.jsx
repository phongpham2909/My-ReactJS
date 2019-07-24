import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from '@material-ui/core/TableBody';
import Table from "@material-ui/core/Table";
//jss styles 
import styles from "../../../../assets/jss/material-dashboard-pro-react/views/Order/orderDetailStyles"

class SectionOrderDetails extends Component {
    render() {
        var { orderByID, classes } = this.props;
        return (
            <div className={classes.tableResponsive}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Company</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                            <TableCell className={classes.customPadding}>{orderByID.orderCustomerName}</TableCell>
                            <TableCell align="right">{orderByID.userEmail}</TableCell>
                            <TableCell align="right">{orderByID.orderNumberPhone}</TableCell>
                            <TableCell align="right" padding="none">{orderByID.orderAddress}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        );
    }
}

export default withStyles(styles)(SectionOrderDetails);