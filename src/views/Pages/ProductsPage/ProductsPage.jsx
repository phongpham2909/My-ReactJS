import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../../../components/Pages/Grid/GridContainer.jsx";
import GridItem from "../../../components/Pages/Grid/GridItem.jsx";
import Parallax from "../../../components/Pages/Parallax/Parallax.jsx";
import Button from "../../../components/Pages/CustomButtons/Button.jsx";
import Card from "../../../components/Pages/Card/Card.jsx";
import CardBody from "../../../components/Pages/Card/CardBody.jsx";
import CustomInput from "../../../components/Pages/CustomInput/CustomInput.jsx";
// sections for this page
import SectionProducts from "./Sections/SectionProducts";
import SectionBlog from "./Sections/SectionBlog"; 
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";

import ecommerceHeader from "../../../assets/img/product/product-header.jpg";

import styles from "../../../assets/jss/material-kit-pro-react/views/ecommerceStyle";

class EcommercePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
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
          <SectionProducts />
        </div>
        <SectionBlog />
        <div
          className={classNames(
            classes.subscribeLine,
            classes.subscribeLineImage
          )}
          style={{ backgroundImage: `url(${ecommerceHeader})` }}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={6}
                md={6}
                className={classNames(classes.mlAuto, classes.mrAuto)}
              >
                <div className={classes.textCenter}>
                  <h3 className={classes.title}>Subscribe to our Newsletter</h3>
                  <p className={classes.description}>
                    Join our newsletter and get news in your inbox every week!
                    We hate spam too, so no worries about this.
                  </p>
                </div>
                <Card raised className={classes.card}>
                  <CardBody className={classes.cardBody}>
                    <form>
                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6} lg={8}>
                          <CustomInput
                            id="emailPreFooter"
                            formControlProps={{
                              fullWidth: true,
                              className: classes.cardForm
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Mail />
                                </InputAdornment>
                              ),
                              placeholder: "Your Email..."
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6} lg={4}>
                          <Button
                            color="rose"
                            block
                            className={classes.subscribeButton}
                          >
                            subscribe
                          </Button>
                        </GridItem>
                      </GridContainer>
                    </form>
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

export default withStyles(styles)(EcommercePage);
