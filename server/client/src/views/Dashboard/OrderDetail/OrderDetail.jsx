import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
// @material-ui/icons
import Info from "@material-ui/icons/Info";
import Receipt from "@material-ui/icons/Receipt";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import AccountCircle from "@material-ui/icons/AccountCircle";
import QueryBuilder from "@material-ui/icons/QueryBuilder";
import AttachMoney from "@material-ui/icons/AttachMoney";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from '../../../components/Dashboard/Grid/GridContainer';
import GridItem from '../../../components/Dashboard/Grid/GridItem';
import Card from '../../../components/Dashboard/Card/Card';
import CardHeader from '../../../components/Dashboard/Card/CardHeader';
import CardBody from '../../../components/Dashboard/Card/CardBody';
import CardIcon from "../../../components/Dashboard/Card/CardIcon.jsx";
import CustomTabs from "../../../components/Dashboard/CustomTabs/CustomTabs";
//import Button from "../../../components/Dashboard/CustomButtons/Button";
// jss styles
import styles from '../../../assets/jss/material-dashboard-pro-react/views/Order/orderDetailStyles';
import SectionOrderDetails from './Sections/SectionOrderDetails';
import SectionOrderStatus from './Sections/SectionOrderStatus';
import SectionOrderPayment from './Sections/SectionOrderPayment';
import SectionProductsOrder from './Sections/SectionProductsOrder';
import SectionInvoice from './Sections/SectionInvoice';

class OrderDetail extends Component {
  render() {
    const { classes, orderByID, productsOrder, format_curency } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <Link to="/administration/orders"><KeyboardBackspace className={classes.hoverIcon} /></Link>
          <h3 className={classes.pageSubcategoriesTitle}>
            Order {orderByID.orderReference}
          </h3>
          <h4 className={classes.pageSubcategoriesTitle}>From {orderByID.orderCustomerName}</h4>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={12}>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Info",
                    tabIcon: Info,
                    tabContent: (
                      <Card plain>
                        <CardHeader icon>
                          <CardIcon color="primary">
                            <AccountCircle />
                          </CardIcon>
                          <h4 className={classes.pageSubcategoriesTitle}>Customer</h4>
                        </CardHeader>
                        <CardBody>
                          <SectionOrderDetails orderByID={orderByID} />
                        </CardBody>
                        <br />
                        <br />
                        <CardHeader icon>
                          <CardIcon color="primary">
                            <QueryBuilder />
                          </CardIcon>
                          <h4 className={classes.pageSubcategoriesTitle}>Order Status</h4>

                        </CardHeader>

                        <CardBody>
                          <SectionOrderStatus orderByID={orderByID} />
                        </CardBody>
                        <br />
                        <br />
                        <CardHeader icon>
                          <CardIcon color="primary">
                            <AttachMoney />
                          </CardIcon>
                          <h4 className={classes.pageSubcategoriesTitle}>Payment</h4>

                        </CardHeader>
                        <CardBody>
                          <SectionOrderPayment orderByID={orderByID} />
                        </CardBody>
                      </Card>
                    )
                  },
                  {
                    tabName: "Products",
                    tabIcon: ShoppingBasket,
                    tabContent: (
                      <SectionProductsOrder productsOrder={productsOrder} />
                    )
                  },
                  {
                    tabName: "Invoice",
                    tabIcon: Receipt,
                    tabContent: (
                      <SectionInvoice
                        orderByID={orderByID}
                        productsOrder={productsOrder}
                        format_curency={format_curency}
                      />
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>

    );
  }
}
OrderDetail.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OrderDetail);