import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Button from "../../../../components/Pages/CustomButtons/Button";
import GridContainer from '../../../../components/Pages/Grid/GridContainer';
import GridItem from '../../../../components/Pages/Grid/GridItem';
import Card from "../../../../components/Pages/Card/Card";
import CardBody from "../../../../components/Pages/Card/CardBody";
// jss styles
import shoppingCartStyle from "../../../../assets/jss/material-kit-pro-react/views/shoppingCartStyle";

class SectionCartResult extends Component {
  showTotalAmount = (cart) => {
    var total = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        total += (cart[i].product.productPrice - (cart[i].product.productPrice * cart[i].product.productSale / 100)) * cart[i].quantity;
      }
    }
    return this.props.format_curency(total);
  }
  render() {
    const { classes, cart, handleShowCheckout } = this.props;
    return (
      <Card className={classes.customMrg}>
        <CardBody className={classes.customBackground}>
          <GridContainer>
            <GridItem md={12}>
              <h4>Quantity Product: {cart.length}</h4>
              <h4>
                Grand Total: {this.showTotalAmount(cart)} <small>đ</small>
              </h4>
              <Link to="/cart/checkout">
                <Button color="primary" round onClick={handleShowCheckout}>
                  {"Continue"} <KeyboardArrowRight />
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>

    );
  }
}

export default withStyles(shoppingCartStyle)(SectionCartResult);