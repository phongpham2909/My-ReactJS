import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Parallax from "../../../components/Pages/Parallax/Parallax";
import GridContainer from "../../../components/Pages/Grid/GridContainer";
import GridItem from "../../../components/Pages/Grid/GridItem";
import Card from "../../../components/Pages/Card/Card";
import CardBody from "../../../components/Pages/Card/CardBody";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import Button from "../../../components/Pages/CustomButtons/Button";
// styles jss
import styles from "../../../assets/jss/material-kit-pro-react/views/checkoutPage/checkoutPage";

class CompleteOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false
        }
    }
    componentWillUnmount() {
        if (localStorage && localStorage.getItem("CART")) {
            this.setState({
                logged: !this.state.logged
            });
        }
    }
    showTotalAmount = (cart) => {
        var total = 0;
        if (!cart) return;
        for (var i = 0; i < cart.length; i++) {
            total += (cart[i].product.productPrice - (cart[i].product.productPrice * cart[i].product.productSale / 100)) * cart[i].quantity;
        }
        return total;
    }
    showTotalAmountItem = (price, quantity, sale) => {
        return this.props.format_curency((price - (price * sale / 100)) * quantity);
    }
    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = (event) => {

    }
    render() {
        const { logged } = this.state;
        const { classes, cart } = this.props;
        if (logged === true) {
            return <Redirect to="/cart" />
        }
        return (
            <div>
                <Parallax
                    image={require("../../../assets/img/product/bg2.jpg")}
                    filter="dark"
                    small
                >
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem
                                md={8}
                                sm={8}
                                className={classNames(
                                    classes.mlAuto,
                                    classes.mrAuto,
                                    classes.textCenter
                                )}
                            >
                                <h2 className={classes.title}>Complete Checkout</h2>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem md={8}>
                                <form onSubmit={this.handleSubmit}>
                                    <Card plain>
                                        <CardBody>
                                            <GridContainer>
                                                <GridItem md={12}>
                                                    <h4>
                                                        Congratulations on your successful order</h4>
                                                </GridItem>
                                            </GridContainer>
                                            <br />
                                            <GridContainer>
                                                <GridItem md={12}>
                                                    <span>Should you have any questions do email us at <a href="mailto:phongpham2140051@gmail.com">phongpham2140051@gmail.com</a></span>
                                                </GridItem>
                                            </GridContainer>
                                            <br />
                                            <GridContainer>
                                                <GridItem md={6} className={classes.textLeft}>
                                                    <Link to="/cart">
                                                        <Button link color="primary"><KeyboardArrowLeft /> Continue With Cart</Button>
                                                    </Link>
                                                </GridItem>
                                                <GridItem md={6} className={classes.textCenter}>
                                                    <Button round color="primary" type="submit">View Orders <KeyboardArrowRight /></Button>
                                                </GridItem>
                                            </GridContainer>
                                        </CardBody>
                                    </Card>
                                </form>
                            </GridItem>
                            <GridItem md={4}>
                                <Card className={classes.customMrg}>
                                    <CardBody className={classes.customBackground}>
                                        <h4><b>Quantity Product:</b> {cart.length}</h4>
                                        {cart.map((item, index) => {
                                            return (
                                                <GridContainer key={index}>
                                                    <GridItem md={4}>
                                                        <div className={classes.imgContainer}>
                                                            <img src={item.product.productImageOfficial} alt={item.product.productName} className={classes.img} />
                                                        </div>
                                                    </GridItem>
                                                    <GridItem md={8}>
                                                        <h5 className={classes.customName}>{item.product.productName}</h5>
                                                        <h5>Quantity: {item.quantity}</h5>
                                                        <h5>Price: {this.props.format_curency(item.product.productPrice)} <small>đ</small>(-{item.product.productSale} %) </h5>
                                                        <h5>Total: {this.showTotalAmountItem(item.product.productPrice, item.quantity, item.product.productSale)} <small>đ</small></h5>
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        })}
                                        <h4><b>Grand Total:</b>  {this.props.format_curency(this.showTotalAmount(cart))} <small>đ</small></h4>
                                    </CardBody>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(CompleteOrder);