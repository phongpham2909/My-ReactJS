import React, { Component } from 'react';
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from '@material-ui/core/TableBody';
import Table from "@material-ui/core/Table";
//jss styles 
import styles from "../../../../assets/jss/material-dashboard-pro-react/views/Order/orderDetailStyles"

class SectionProductsOrder extends Component {
    format_curency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      }
    render() {
        var { productsOrder, classes } = this.props;
        return (
            <div className={classes.tableResponsive}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Discounted</TableCell>
                            <TableCell>Quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productsOrder.map((product, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell
                                    >
                                        {index + 1}
                                    </TableCell>
                                    <TableCell>
                                        <div className={classes.imgContainer}>
                                            <img className={classes.img} src={product.productImageOfficial} alt={product.productName} />
                                        </div>
                                    </TableCell>
                                    <TableCell padding="none">{product.productName}</TableCell>
                                    <TableCell>
                                    <div className={classes.priceContainer}>
                        {product.productSale ?  <p className={classNames(classes.price, classes.priceOld)}>
                          {" "}
                          {this.format_curency(product.productPrice)} VND 
                      
                        </p> :  <p className={classNames(classes.price)}>
                          {" "}
                          {this.format_curency(product.productPrice)} VND 
                      
                        </p>}
                       
                        {product.productSale ? <p className={classNames(classes.price, classes.priceNew)}>
                          {" "}
                          {this.format_curency(product.productPrice - (product.productPrice * product.productSale / 100))} VND 
                        
                        </p> : null}
                        
                      </div>
                                    </TableCell>
                                    <TableCell>{product.productSale} %</TableCell>
                                    <TableCell>{product.quantity}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default withStyles(styles)(SectionProductsOrder);