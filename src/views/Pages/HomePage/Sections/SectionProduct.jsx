import React from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "../../../../components/Pages/Grid/GridContainer.jsx";
import GridItem from "../../../../components/Pages/Grid/GridItem.jsx";
import Card from "../../../../components/Pages/Card/Card";
import CardHeader from "../../../../components/Pages/Card/CardHeader";
import CardBody from "../../../../components/Pages/Card/CardBody";
import CardFooter from "../../../../components/Pages/Card/CardFooter";
import Button from "../../../../components/Pages/CustomButtons/Button";

import styles from "../../../../assets/jss/material-kit-pro-react/views/ecommerceSections/latestOffersStyle";

import gucci from "../../../../assets/img/product/gucci.jpg";
import tomFord from "../../../../assets/img/product/tom-ford.jpg";
import dolce from "../../../../assets/img/product/dolce.jpg";

class SectionProduct extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
        <GridContainer>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={`${classes.mlAuto} ${classes.mrAuto} ${
              classes.textCenter
              }`}
          >
            <h2 className={classes.title}>Features Product</h2>
          </GridItem>
        </GridContainer>
          <GridContainer>
            <GridItem md={4} sm={4}>
              <Card product plain>
                <CardHeader image plain>
                  <a href="#pablo">
                    <img src={gucci} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${gucci})`, opacity: 1 }}
                  />
                </CardHeader>
                <CardBody className={classes.textCenter} plain>
                  <h4 className={classes.cardTitle}>Gucci</h4>
                  <p className={classes.cardDescription}>
                    The structured shoulders and sleek detailing ensure a sharp
                    silhouette. Team it with a silk pocket square and leather
                    loafers.
                </p>
                </CardBody>
                <CardFooter plain>
                  <div className={classes.priceContainer}>
                    <span className={classNames(classes.price, classes.priceOld)}>
                      {" "}
                      €1,430
                  </span>
                    <span className={classNames(classes.price, classes.priceNew)}>
                      {" "}
                      €743
                  </span>
                  </div>
                  <div className={classNames(classes.stats, classes.mlAuto)}>
                    <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button justIcon simple color="rose">
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem md={4} sm={4}>
              <Card product plain>
                <CardHeader image plain>
                  <a href="#pablo">
                    <img src={dolce} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${dolce})`, opacity: 1 }}
                  />
                </CardHeader>
                <CardBody className={classes.textCenter} plain>
                  <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                  <p className={classes.cardDescription}>
                    The structured shoulders and sleek detailing ensure a sharp
                    silhouette. Team it with a silk pocket square and leather
                    loafers.
                </p>
                </CardBody>
                <CardFooter plain>
                  <div className={classes.priceContainer}>
                    <span className={classNames(classes.price, classes.priceOld)}>
                      {" "}
                      €1,430
                  </span>
                    <span className={classNames(classes.price, classes.priceNew)}>
                      {" "}
                      €743
                  </span>
                  </div>
                  <div className={classNames(classes.stats, classes.mlAuto)}>
                    <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button justIcon simple color="rose">
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem md={4} sm={4}>
              <Card product plain>
                <CardHeader image plain>
                  <a href="#pablo">
                    <img src={tomFord} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${tomFord})`, opacity: 1 }}
                  />
                </CardHeader>
                <CardBody className={classes.textCenter} plain>
                  <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                  <p className={classes.cardDescription}>
                    The structured shoulders and sleek detailing ensure a sharp
                    silhouette. Team it with a silk pocket square and leather
                    loafers.
                </p>
                </CardBody>
                <CardFooter plain>
                  <div className={classes.priceContainer}>
                    <span className={classNames(classes.price, classes.priceOld)}>
                      {" "}
                      €1,430
                  </span>
                    <span className={classNames(classes.price, classes.priceNew)}>
                      {" "}
                      €743
                  </span>
                  </div>
                  <div className={classNames(classes.stats, classes.mlAuto)}>
                    <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button justIcon simple color="rose">
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SectionProduct);
