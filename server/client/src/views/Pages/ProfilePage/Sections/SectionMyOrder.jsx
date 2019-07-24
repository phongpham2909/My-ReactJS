import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Table, TableHead, TableCell, TableBody, TableRow, Chip } from '@material-ui/core';
import Card from "../../../../components/Pages/Card/Card";
import CardBody from "../../../../components/Pages/Card/CardBody";
// core components
import styles from '../../../../assets/jss/material-kit-pro-react/views/profileSections/sectionOrdersCustomer';

class SectionMyOrder extends Component {
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
        var { ordersCustomer, classes } = this.props;
        return (
            <Card>
                <CardBody className={classes.root}>
                    <div className={classes.tableResponsive}>
                        <Table className={classes.table} aria-labelledby="tableTitle">
                            <TableHead>
                                <TableRow>
                                    <TableCell>STT</TableCell>
                                    <TableCell>Reference</TableCell>
                                    <TableCell padding='none'>Customer Name</TableCell>
                                    <TableCell>TotalAmount</TableCell>
                                    <TableCell padding='none'>Status</TableCell>
                                    <TableCell>Payment Type</TableCell>
                                    <TableCell>Number Phone</TableCell>
                                    <TableCell padding='none'>Address</TableCell>
                                    <TableCell>Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {ordersCustomer.map((item, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{item.orderReference}</TableCell>
                                            <TableCell>{item.orderCustomerName}</TableCell>
                                            <TableCell>{item.orderTotalAmount}</TableCell>
                                            <TableCell>{this.renderOrderStatusType(item.orderStatusType)}</TableCell>
                                            <TableCell>{item.paymentType}</TableCell>
                                            <TableCell>{item.orderNumberPhone}</TableCell>
                                            <TableCell component="th" scope="row" padding="none">{item.orderAddress}</TableCell>
                                            <TableCell>{item.orderDescription}</TableCell>
                                        </TableRow>
                                    )
                                })}

                            </TableBody>
                        </Table>
                    </div>
                </CardBody>
            </Card>
        );
    }
}

export default withStyles(styles)(SectionMyOrder);