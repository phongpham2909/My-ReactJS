import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
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

class SectionProductBestSeller extends React.Component {
  format_curency = (price) => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
  render() {
    const { classes, data } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            {data.map(product => {
              return (
                <GridItem md={4} sm={4}  key={product.productID}>
                  <Card product plain>
                    <CardHeader image plain>
                      <Link to={`/product-detail/${product.productID}`}>
                        <img src={product.productImageOfficial} alt={product.productName} />
                      </Link>
                      <div
                        className={classes.coloredShadow}
                        style={{ backgroundImage: `url(${product.productImageOfficial})`, opacity: 1 }}
                      />
                    </CardHeader>
                    <CardBody className={classes.textCenter} plain>
                      <h5 className={`${classes.cardTitle} ${classes.customFont}`}>{product.productName}</h5>
                      <p className={classes.cardDescription}>
                        {product.productDescription}
                      </p>
                    </CardBody>
                    <CardFooter plain>
                      <div className={classes.priceContainer}>
                        {product.productSale ?  <span className={classNames(classes.price, classes.priceOld)}>
                          {" "}
                          {this.format_curency(product.productPrice)} VND 
                      
                        </span> :  <span className={classNames(classes.price)}>
                          {" "}
                          {this.format_curency(product.productPrice)} VND 
                      
                        </span>}
                       
                        {product.productSale ? <span className={classNames(classes.price, classes.priceNew)}>
                          {" "}
                          {this.format_curency(product.productPrice - (product.productPrice * product.productSale / 100))} VND 
                        
                        </span> : null}
                        
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
              )
            })}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SectionProductBestSeller);
