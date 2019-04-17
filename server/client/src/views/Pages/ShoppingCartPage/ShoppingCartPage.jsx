import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import DeleteSweep from "@material-ui/icons/DeleteSweep";
// core components
import Parallax from "../../../components/Pages/Parallax/Parallax";
import GridContainer from "../../../components/Pages/Grid/GridContainer";
import GridItem from "../../../components/Pages/Grid/GridItem";
import Card from "../../../components/Pages/Card/Card";
import CardBody from "../../../components/Pages/Card/CardBody";
import SectionCartHead from './Sections/SectionCartHead';
import Button from "../../../components/Pages/CustomButtons/Button";
// jss styles
import shoppingCartStyle from "../../../assets/jss/material-kit-pro-react/views/shoppingCartStyle";
// Toast
import { ToastContainer } from 'react-toastify';
import CloseButtonToast from "../../../components/Pages/CloseButtonToast/CloseButtonToast";
import SectionCartResult from "./Sections/SectionCartResult";

class ShoppingCartPage extends React.Component {
  render() {
    const { classes, children, format_curency, cart } = this.props;
    return (
      <div>
        <ToastContainer autoClose={3000} closeButton={<CloseButtonToast />} newestOnTop />
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
                <h2 className={classes.title}>Shopping Cart Page</h2>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Card plain>
              <CardBody plain>
                <h3 className={classes.cardTitle}>Shopping Cart</h3>
                <GridContainer>
                  <GridItem md={8}>
                    <div className={classes.tableResponsive}>
                      <Table className={classes.table}>

                        {cart.length ? <SectionCartHead /> : null}

                        <TableBody>
                          {children}
                        </TableBody>

                      </Table>
                      {cart.length ? <Button link color="primary" onClick={this.props.handleClearCart}><DeleteSweep /> Clear Cart</Button> : null}
                      {!cart.length ? 
                        <span>Should you have any questions do email us at <a href="mailto:phongpham2140051@gmail.com">phongpham2140051@gmail.com</a></span>
                        : null}
                        <br/>
                      {!cart.length ? <Link to="/"><Button color="primary">Back</Button></Link> : null}
                    </div>
                  </GridItem>
                  {cart.length ? <GridItem md={4}>
                    <SectionCartResult handleShowCheckout={this.handleShowCheckout} cart={cart} format_curency={format_curency} />
                  </GridItem> : null}
                </GridContainer>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

ShoppingCartPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(shoppingCartStyle)(ShoppingCartPage);
