/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import Info from "@material-ui/icons/Info";
import Add from "@material-ui/icons/Add";
// core components
import GridContainer from "../../../components/Pages/Grid/GridContainer";
import GridItem from "../../../components/Pages/Grid/GridItem.jsx";
import NavPills from "../../../components/Pages/NavPills/NavPills.jsx";
import Parallax from "../../../components/Pages/Parallax/Parallax.jsx";
import Clearfix from "../../../components/Pages/Clearfix/Clearfix.jsx";
import Button from "../../../components/Pages/CustomButtons/Button.jsx";
import avatar from '../../../assets/img/placeholder.jpg';
import profilePageStyle from "../../../assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";
import SectionInformation from "./Sections/SectionInformation";
import SectionMyOrder from "./Sections/SectionMyOrder";
import SectionFavorite from "./Sections/SectionFavorite";
import { ToastContainer } from 'react-toastify';
import CloseButtonToast from "../../../components/Pages/CloseButtonToast/CloseButtonToast";

class ProfilePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, match, actFetchCustomerById, infoCustomer, actUpdateInfoCustomer, ordersCustomer } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>
         <ToastContainer autoClose={2000} closeButton={<CloseButtonToast/>} newestOnTop />
        <Parallax
          image={require("../../../assets/img/bg5.jpg")}
          filter="dark"
          className={classes.parallax}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={infoCustomer.UrlAvatar ? infoCustomer.UrlAvatar : avatar} alt={infoCustomer.firstname} className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>{`${infoCustomer.firstname} ${infoCustomer.lastname}`}</h3>
                    <h6>WEB DESIGNER</h6>
                  </div>
                </div>
                <div className={classes.follow}>
                  <Tooltip
                    id="tooltip-top"
                    title="Follow this user"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      justIcon
                      round
                      color="primary"
                      className={classes.followButton}
                    >
                      <Add className={classes.followIcon} />
                    </Button>
                  </Tooltip>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.profileTabs}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Information",
                    tabIcon: Info,
                    tabContent: (
                      <SectionInformation 
                          match={match}
                          actFetchCustomerById={actFetchCustomerById}
                          infoCustomer={infoCustomer}
                          actUpdateInfoCustomer={actUpdateInfoCustomer}
                      />
                    )
                  },
                  {
                    tabButton: "My Order",
                    tabIcon: ShoppingBasket,
                    tabContent: (
                      <SectionMyOrder ordersCustomer={ordersCustomer}/>
                    )
                  },
                  {
                    tabButton: "Favorite List",
                    tabIcon: Favorite,
                    tabContent: (
                      <SectionFavorite />
                    )
                  }
                ]}
              />
            </div>
            <Clearfix />
          </div>
        </div>
        <br/>
        <br/>
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
