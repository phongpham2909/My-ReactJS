import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../../../components/Pages/Grid/GridContainer.jsx";
import GridItem from "../../../components/Pages/Grid/GridItem.jsx";
import Parallax from "../../../components/Pages/Parallax/Parallax.jsx";

// sections for this page
import SectionProducts from "./Sections/SectionProducts";
import SectionBlog from "./Sections/SectionBlog";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import styles from "../../../assets/jss/material-kit-pro-react/views/ecommerceStyle";

class EcommercePage extends React.Component {
  componentDidMount() {
    this.props.fetchAllCategory();
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, products, fetchAllProduct, categories, GetProductsFollowCategory, productsFollowCategory, match } = this.props;
    return (
      <div>
        <Parallax
          image={require("../../../assets/img/product/product-header.jpg")}
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
                <div className={classes.brand}>
                  <h1 className={classes.title}>Ecommerce Page!</h1>
                  <h4>
                    Free global delivery for all products. Use coupon{" "}
                    <b>25summer</b> for an extra 25% Off
                  </h4>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionProducts
            match={match}
            products={products}
            categories={categories}
            productsFollowCategory={productsFollowCategory}
            GetProductsFollowCategory={GetProductsFollowCategory}
            fetchAllProduct={fetchAllProduct}
          />
        </div>
        <SectionBlog />

      </div>
    );
  }
}

export default withStyles(styles)(EcommercePage);
