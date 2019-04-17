import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "../../../components/Pages/Grid/GridContainer";
import GridItem from "../../../components/Pages/Grid/GridItem";
import Button from "../../../components/Pages/CustomButtons/Button";
import Parallax from "../../../components/Pages/Parallax/Parallax";
import NavPills from "../../../components/Pages/NavPills/NavPills";
import Stars from "@material-ui/icons/Stars";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import LocalOffer from "@material-ui/icons/LocalOffer";

import HomePageStyle from "../../../assets/jss/material-kit-pro-react/views/landingPageStyle";

// Sections for this page
import SectionProductFeatured from "./Sections/SectionProductFeatured";
import SectionCollection from "./Sections/SectionCollection";
import SectionProductSales from "./Sections/SectionProductSales";
import SectionContact from "./Sections/SectionContact";
import SectionNewProduct from "./Sections/SectionNewProduct";
import SectionProductBestSeller from "./Sections/SectionProductBestSeller";
// connect redux
import { connect } from "react-redux";
import { actFetchProductsRequest, actFetchProductSaleRequest, actFetchProductFeaturedRequest } from "../../../redux/actions/index";

class HomePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    this.props.fetchProductFeatured();
    this.props.fetchProductSale();
    this.props.fetchAllProducts();
  }
  render() {
    var { classes, products, productSale, productFeatured } = this.props;
    return (
      <div>
        <Parallax image={require("../../../assets/img/background/banner.jpg")} filter="dark">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h5>HAPPY HOLIDAYS</h5>
                <h2 className={classes.title1}>MAKE EVERY GIFT SPECIAL</h2>
                <h4 className={classes.description}>
                  10% OFF GIFT SETS
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
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
                <h2 className={classes.title}>
                shop by product
                  </h2>
              </GridItem>
            </GridContainer>
              <NavPills
                alignCenter
                color="rose"
                tabs={[
                  {
                    tabButton: "Featured",
                    tabIcon: Stars,
                    tabContent: (
                      <SectionProductFeatured data={productFeatured} />
                    )
                  },
                  {
                    tabButton: "Best Seller",
                    tabIcon: ShoppingBasket,
                    tabContent: (
                      <SectionProductBestSeller data={products} />
                    )
                  },
                  {
                    tabButton: "Hot Sales",
                    tabIcon: LocalOffer,
                    tabContent: (
                      <SectionProductSales data={productSale} />
                    )
                  },

                ]}
              />
              <div className={classes.tabSpace} />
              <SectionNewProduct data={products}/>
              <SectionCollection />
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <SectionContact/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    productSale: state.productSale,
    productFeatured: state.productFeatured
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    fetchProductSale: () => {
      dispatch(actFetchProductSaleRequest());
    },
    fetchProductFeatured: () => {
      dispatch(actFetchProductFeaturedRequest());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(HomePageStyle)(HomePage));
