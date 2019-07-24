import React, { Component } from 'react';
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from '../../../../components/Dashboard/Grid/GridContainer';
import GridItem from '../../../../components/Dashboard/Grid/GridItem';
import Card from '../../../../components/Dashboard/Card/Card';
import CardBody from '../../../../components/Dashboard/Card/CardBody';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from '@material-ui/core/TableBody';
import Table from "@material-ui/core/Table";
//jss styles 
import styles from "../../../../assets/jss/material-dashboard-pro-react/views/Order/orderDetailStyles"
import CardHeader from '../../../../components/Dashboard/Card/CardHeader';


class SectionInvoice extends Component {
    showTotalAmountItem = (price, quantity, sale) => {
        return this.props.format_curency((price - (price * sale / 100)) * quantity);
    }
    render() {
        var { orderByID, productsOrder, classes } = this.props;
        return (
            <div>
                <GridContainer>
                    <GridItem md={6} xs={12}>
                        <h3>Invoice: {orderByID.orderReference}</h3>
                        <br />
                        <h4>Customer: {orderByID.orderCustomerName}</h4>
                        <h5>Address: {orderByID.orderAddress}</h5>
                        <h5>Email: {orderByID.userEmail}</h5>
                        <h5>Phone: {orderByID.orderNumberPhone}</h5>
                    </GridItem>
                    <GridItem md={6} xs={12}>
                    <Card color="primary">
                    <CardHeader>
                      
                    </CardHeader>
                    <CardBody>
                        <h4>Company: TAP HOA HANG HIEU</h4>
                        <h5>Address: 19 Street, Quang Trung Software Park, Q.12, TP.HCM</h5>
                        <h5>Email: phongpham2140051@gmail.com</h5>
                        <h5>Phone: 038 604 6002</h5>
                        </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12}>
                    <div className={classes.tableResponsive}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>PRODUCT</TableCell>
                                        <TableCell>PRICE</TableCell>
                                        <TableCell>QUANTITY</TableCell>
                                        <TableCell>TOTAL</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {productsOrder.map((product, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell padding="none"><b>{product.productName}</b></TableCell>
                                                <TableCell>{product.productSale > 0 ? <span>(-{product.productSale}%)</span> : null}
                                                <div className={classes.priceContainer}>
                                                {product.productSale ?  <p className={classNames(classes.price, classes.priceOld)}>
                                                        {" "}
                                                        {this.props.format_curency(product.productPrice)} VND
                                                        </p>  : <p className={classNames(classes.price)}>
                                                        {" "}
                                                        {this.props.format_curency(product.productPrice)} VND 
                                                        </p>}
                                                        {product.productSale ? <p className={classNames(classes.price, classes.priceNew)}>
                                                        {" "}
                                                        {this.props.format_curency(product.productPrice - (product.productPrice * product.productSale / 100))} VND 
                                                        
                                                        </p> : null}
                                                </div>
                                                </TableCell>
                                                <TableCell>{product.quantity}</TableCell>
                                                <TableCell><p>{this.showTotalAmountItem(product.productPrice, product.quantity, product.productSale)} VND</p></TableCell>
                                            </TableRow>
                                        );
                                    })}

                                </TableBody>
                            </Table>
                        </div>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem md={12}>
                    <div className={classes.tableResponsive}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Discount</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Total</TableCell>
                                <TableCell padding="none" align="right"><h3>{this.props.format_curency(orderByID.orderTotalAmount)}</h3><small>VND</small></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    </div>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(styles)(SectionInvoice);