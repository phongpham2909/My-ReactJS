import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import Person from '@material-ui/icons/Person';
import Phone from '@material-ui/icons/Phone';
import LocationOn from '@material-ui/icons/LocationOn';
import Description from '@material-ui/icons/Description';
// core components
import Parallax from "../../../components/Pages/Parallax/Parallax";
import GridContainer from "../../../components/Pages/Grid/GridContainer";
import GridItem from "../../../components/Pages/Grid/GridItem";
import Card from "../../../components/Pages/Card/Card";
import CardBody from "../../../components/Pages/Card/CardBody";
import CustomInput from "../../../components/Pages/CustomInput/CustomInput";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import Button from "../../../components/Pages/CustomButtons/Button";
import CloseButtonToast from "../../../components/Pages/CloseButtonToast/CloseButtonToast";
// styles jss
import styles from "../../../assets/jss/material-kit-pro-react/views/checkoutPage/checkoutPage";
//  toast
import { toast, ToastContainer } from 'react-toastify';
import { css } from 'glamor';

class CheckOutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            orderCustomerName: "",
            orderTotalAmount: "",
            orderNumberPhone: "",
            orderAddress: "",
            orderDescription: "",
            customerID: "",
            paymentID: 2,
            orderStatusID: 2
        }
    }
    showTotalAmount = (cart) => {
        var total = 0;
        if (!cart) return;
        for (var i = 0; i < cart.length; i++) {
            total += cart[i].product.productPrice * cart[i].quantity;
        }
        return total;
    }
    showTotalAmountItem = (price, quantity) => {
        return this.props.format_curency(price * quantity);
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
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem('UserAccount'));
        const { cart, history } = this.props;
        const { orderCustomerName, orderNumberPhone, orderAddress, orderDescription, paymentID, orderStatusID } = this.state;
        if (cart) {
            const order = {
                orderCustomerName: orderCustomerName,
                orderNumberPhone: orderNumberPhone,
                orderTotalAmount: this.showTotalAmount(cart),
                orderAddress: orderAddress,
                orderDescription: orderDescription,
                customerID: user.customerID,
                paymentID: paymentID,
                orderStatusID: orderStatusID,
            }
            this.props.actAddOrder(order);
            for (var i = 0; i < cart.length; i++) {
                var orderdetail = {
                    productID: cart[i].product.productID,
                    colorID: 2,
                    sizeID: 2,
                    productPrice: cart[i].product.productPrice,
                    quantity: cart[i].quantity,
                    productSale: cart[i].product.productSale
                }
                this.props.actAddOrderDetail(orderdetail);
            }
            localStorage.removeItem("CART");
            toast('Successfully Authenticated', {
                position: toast.POSITION.TOP_RIGHT,
                className: css({
                    background: '#43a047 !important',
                    color: '#fff !important',
                    boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3) !important',
                  }),
                  progressClassName: css({
                    background: '#fff !important'
                  })
              });
            setTimeout( (e)=>{history.push('/cart/complete-order')}, 2000);
        }
        else {
            toast.error('Error! You have not added products to the cart', {
                position: toast.POSITION.TOP_RIGHT
              });
            history.goBack();
        }

    }
    render() {
        const { orderCustomerName, orderNumberPhone, orderAddress, orderDescription } = this.state;
        const { classes, cart } = this.props;
        return (
            <div>
                <ToastContainer autoClose={2000} closeButton={<CloseButtonToast />} newestOnTop />
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
                                <h2 className={classes.title}>Checkout Page</h2>
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
                                                    <h4>To pay for your order, enter your details in the form below and press 'Pay' button. The particulars of your order should be listed after the form</h4>
                                                </GridItem>
                                            </GridContainer>
                                            <GridContainer>
                                                <GridItem xs={12} sm={12} md={3}>
                                                    <FormLabel className={classes.labelHorizontal}>*Full Name</FormLabel>
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={9}>
                                                    <CustomInput
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            type: "text",
                                                            name: "orderCustomerName",
                                                            value: orderCustomerName,
                                                            onChange: this.handleChange,
                                                            endAdornment: (<InputAdornment position="end"><Person /></InputAdornment>)

                                                        }}
                                                        labelText="Enter your name here"
                                                    />
                                                </GridItem>
                                            </GridContainer>
                                            <GridContainer>
                                                <GridItem xs={12} sm={12} md={3}>
                                                    <FormLabel className={classes.labelHorizontal}>*Phone Number</FormLabel>
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={9}>
                                                    <CustomInput
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            type: "number",
                                                            name: "orderNumberPhone",
                                                            value: orderNumberPhone,
                                                            onChange: this.handleChange,
                                                            endAdornment: (<InputAdornment position="end"><Phone /></InputAdornment>)
                                                        }}
                                                        labelText="We will contact this phone number when shipping"
                                                    />
                                                </GridItem>
                                            </GridContainer>
                                            <GridContainer>
                                                <GridItem xs={12} sm={12} md={3}>
                                                    <FormLabel className={classes.labelHorizontal}>*Address</FormLabel>
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={9}>
                                                    <CustomInput
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            type: "text",
                                                            name: "orderAddress",
                                                            value: orderAddress,
                                                            onChange: this.handleChange,
                                                            endAdornment: (<InputAdornment position="end"><LocationOn /></InputAdornment>)
                                                        }}
                                                        labelText="The address where your order will be shipped"
                                                    />
                                                </GridItem>
                                            </GridContainer>
                                            <GridContainer>
                                                <GridItem xs={12} sm={12} md={3}>
                                                    <FormLabel className={classes.labelHorizontal}>*Description</FormLabel>
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={9}>
                                                    <CustomInput
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            multiline: true,
                                                            rows: 5,
                                                            type: "text",
                                                            name: "orderDescription",
                                                            value: orderDescription,
                                                            onChange: this.handleChange,
                                                            endAdornment: (<InputAdornment position="end"><Description /></InputAdornment>)
                                                        }}
                                                        labelText="Enter your note"
                                                    />
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
                                                    <Button round color="primary" type="submit">Delivery to this address <KeyboardArrowRight /></Button>
                                                </GridItem>
                                            </GridContainer>
                                        </CardBody>
                                    </Card>
                                </form>
                            </GridItem>
                            <GridItem md={4}>
                                <Card className={classes.customMrg}>
                                    <CardBody className={classes.customBackground}>
                                        <h4>Quantity Product: {cart.length}</h4>
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
                                                        <h5>Price: {this.props.format_curency(item.product.productPrice)} <small>đ</small></h5>
                                                        <h5>Total: {this.showTotalAmountItem(item.product.productPrice, item.quantity)} <small>đ</small></h5>
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        })}
                                        <h4>Grand Total:  {this.props.format_curency(this.showTotalAmount(cart))} <small>đ</small></h4>
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

export default withStyles(styles)(CheckOutPage);