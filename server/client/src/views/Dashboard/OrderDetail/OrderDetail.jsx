import React, { Component } from 'react';
import PropTypes from "prop-types";
// @material-ui/icons
import Info from "@material-ui/icons/Info";
import Receipt from "@material-ui/icons/Receipt";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import PersonPinOutlined from "@material-ui/icons/PersonPinOutlined";
import QueryBuilder from "@material-ui/icons/QueryBuilder";
import AttachMoney from "@material-ui/icons/AttachMoney";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from '../../../components/Dashboard/Grid/GridContainer';
import GridItem from '../../../components/Dashboard/Grid/GridItem';
import NavPills from '../../../components/Dashboard/NavPills/NavPills';
import Card from '../../../components/Dashboard/Card/Card';
import CardHeader from '../../../components/Dashboard/Card/CardHeader';
import CardBody from '../../../components/Dashboard/Card/CardBody';
// jss styles
import styles from '../../../assets/jss/material-dashboard-pro-react/views/Order/orderDetailStyles';
import SectionOrderDetails from './Sections/SectionOrderDetails';
import SectionOrderStatus from './Sections/SectionOrderStatus';

class OrderDetail extends Component {
    render() {
        const { classes } = this.props;
        return (
            <GridContainer justify="center">
            <GridItem xs={12} sm={12}>
              <h3 className={classes.pageSubcategoriesTitle}>
                Order
              </h3>
              <br />
              <GridContainer>
            <GridItem xs={12} sm={12}>
              <NavPills
                color="warning"
                alignCenter
                tabs={[
                  {
                    tabButton: "Order Details",
                    tabIcon: Info,
                    tabContent: (
                      <Card>
                        <CardHeader>
                          <div>
                          <span className={classes.cardTitle}>
                            <PersonPinOutlined/> </span><p>Customer</p>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <SectionOrderDetails/>
                        </CardBody>
                        <CardHeader>
                          <div>
                          <span className={classes.cardTitle}>
                            <QueryBuilder/></span><p>Order Status</p>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <SectionOrderStatus/>
                        </CardBody>
                        <CardHeader>
                          <div>
                          <span className={classes.cardTitle}>
                            <AttachMoney/></span><p>Payment</p>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <SectionOrderStatus/>
                        </CardBody>
                      </Card>
                    )
                  },
                  {
                    tabButton: "Products",
                    tabIcon: ShoppingBasket,
                    tabContent: (
                      <Card>
                        <CardHeader>
                          <h4 className={classes.cardTitle}>
                            Location of the product
                          </h4>
                          <p className={classes.cardCategory}>
                            More information here
                          </p>
                        </CardHeader>
                        <CardBody>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely deliverables
                          for real-time schemas.
                          <br />
                          <br />
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions.
                        </CardBody>
                      </Card>
                    )
                  },
                  {
                    tabButton: "Invoice",
                    tabIcon: Receipt,
                    tabContent: (
                      <Card>
                        <CardHeader>
                          <h4 className={classes.cardTitle}>
                            Legal info of the product
                          </h4>
                          <p className={classes.cardCategory}>
                            More information here
                          </p>
                        </CardHeader>
                        <CardBody>
                          Completely synergize resource taxing relationships via
                          premier niche markets. Professionally cultivate
                          one-to-one customer service with robust ideas.
                          <br />
                          <br />
                          Dynamically innovate resource-leveling customer service
                          for state of the art customer service.
                        </CardBody>
                      </Card>
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