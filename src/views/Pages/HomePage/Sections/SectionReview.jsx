import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "../../../../components/Pages/Grid/GridContainer";
import GridItem from "../../../../components/Pages/Grid/GridItem";
import InfoArea from "../../../../components/Pages/InfoArea/InfoArea.jsx";
// @material-ui/icons
import Code from "@material-ui/icons/Code";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Dashboard from "@material-ui/icons/Dashboard";
import ViewCarousel from "@material-ui/icons/ViewCarousel";

import featuresStyle from "../../../../assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";

import iphone from "../../../../assets/img/iphone.png";

class SectionReview extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.features4}>
        <GridContainer>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={`${classes.mlAuto} ${classes.mrAuto} ${
              classes.textCenter
              }`}
          >
            <h2 className={classes.title}>Your life will be much easier</h2>
            <h5 className={classes.description}>
              This is the paragraph where you can write more details about
              your product. Keep you user engaged by providing meaningful
              information.
              </h5>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mlAuto}>
            <InfoArea
              icon={Code}
              title="For Developers"
              description="The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before."
              iconColor="info"
            />
            <InfoArea
              icon={FormatPaint}
              title="For Designers"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              iconColor="danger"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={4}>
            <div className={classes.phoneContainer}>
              <img src={iphone} alt="..." />
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mrAuto}>
            <InfoArea
              icon={Dashboard}
              title="@material-ui/core Grid"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              iconColor="primary"
            />
            <InfoArea
              icon={ViewCarousel}
              title="Example Pages Included"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              iconColor="success"
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(featuresStyle)(SectionReview);