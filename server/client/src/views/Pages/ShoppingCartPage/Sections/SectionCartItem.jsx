import React, { Component } from 'react';
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import Warning from "@material-ui/icons/Warning";
// core components
import Button from "../../../../components/Pages/CustomButtons/Button";
// jss styles
import shoppingCartStyle from "../../../../assets/jss/material-kit-pro-react/views/shoppingCartStyle";
// toast
import { toast } from 'react-toastify';
import { css } from 'glamor';

class SectionCartItem extends Component {
    showTotalAmountItem = (price, quantity) => {
        return this.props.format_curency(price * quantity);
    }
    handleRemove = (product) => {
        if (confirm('You want to be sure to remove this product from the shopping cart?')) { //eslint-disable-line
            this.props.actRemoveProductInCart(product);
        }
    }
    handleUpdateQuantity = (product, quantity) => {
        const { item } = this.props;
        if (quantity > 0) {
            this.props.actUpdateProductInCart(product, quantity);
        }
        if (quantity >= item.product.productQuantity) {
            toast((<div>
                <span><Warning /></span>
                &nbsp;
                <span>
                    <b>WARNING: </b> The number of products is only {item.product.productQuantity} products
                </span>
            </div>), {
                    position: toast.POSITION.TOP_RIGHT,
                    className: css({
                        background: '#ffa21a !important',
                        color: '#fff !important',
                        boxShadow: '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2) !important',
                    }),
                    progressClassName: css({
                        background: '#fff !important'
                    })
                });
        }
    }
    render() {
        const { classes, item } = this.props;
        return (
            <TableRow hover>
                <TableCell> 
                    <div className={classes.imgContainer}>
                        <img src={item.product.productImageOfficial} alt={item.product.productName} className={classes.img} />
                    </div>
                </TableCell>
                <TableCell className={`${classes.tdName} ${classes.customPadding}`}>
                    <span>
                        <Link to={`/product-detail/${item.product.productID}`} className={classes.tdNameAnchor}>
                            {item.product.productName}
                        </Link>
                        <br />
                        <br />
                        <small className={classes.tdNumberSmall}>
                            Color: 
                        </small>
                        <br/>
                        <small className={classes.tdNumberSmall}>
                            Size: 
                        </small>
                        <br/>
                        <small className={classes.tdNumberSmall}>
                            Price: {this.props.format_curency(`${item.product.productPrice}`)} <small>đ</small>
                        </small>
                    </span>
                </TableCell>
                <TableCell className={`${classes.tdNumber} ${classes.textCenter} ${classes.tdNumberAndButtonGroup} ${classes.customPadding}`}>
                    <span>
                        {item.quantity}{` `}
                        <div className={classes.buttonGroup}>
                            <Button
                                color="primary"
                                size="sm"
                                round
                                className={classes.firstButton}
                                onClick={() => this.handleUpdateQuantity(item.product, item.quantity - 1)}
                            >
                                <Remove />
                            </Button>
                            <Button
                                color="primary"
                                size="sm"
                                round
                                className={classes.lastButton}
                                onClick={() => this.handleUpdateQuantity(item.product, (item.quantity >= item.product.productQuantity) ? item.quantity + 0 : item.quantity + 1)}
                            >
                                <Add />
                            </Button>
                        </div>
                    </span>
                </TableCell>
                <TableCell className={`${classes.tdNumber} ${classes.textLeft} ${classes.customFont}`}>
                    <span>
                        {this.showTotalAmountItem(item.product.productPrice, item.quantity)}<small>đ</small>
                    </span>
                </TableCell>
                <TableCell padding="checkbox">
                    <Tooltip
                        title="Remove"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                    >
                        <Button link className={classes.actionButton} onClick={() => this.handleRemove(item.product)}>
                            <Close />
                        </Button>
                    </Tooltip>
                </TableCell>
            </TableRow>
        );
    }
}

export default withStyles(shoppingCartStyle)(SectionCartItem);