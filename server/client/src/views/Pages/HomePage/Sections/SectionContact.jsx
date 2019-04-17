import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "../../../../components/Pages/Grid/GridContainer";
import GridItem from "../../../../components/Pages/Grid/GridItem";
import Card from "../../../../components/Pages/Card/Card";
import CardBody from "../../../../components/Pages/Card/CardBody";
import CustomInput from "../../../../components/Pages/CustomInput/CustomInput";
import Button from "../../../../components/Pages/CustomButtons/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";

import ecommerceHeader from "../../../../assets/img/product/product-header.jpg";

import styles from "../../../../assets/jss/material-kit-pro-react/views/ecommerceStyle";

class SectionContacts extends React.Component {
  render() {
    const { classes } = this.props;
    return (
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
    );
  }
}

export default withStyles(styles)(SectionContacts);
