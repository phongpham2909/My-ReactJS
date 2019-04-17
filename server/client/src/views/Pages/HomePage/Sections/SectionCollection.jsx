/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Build from "@material-ui/icons/Build";
import Subject from "@material-ui/icons/Subject";
// core components
import GridContainer from "../../../../components/Pages/Grid/GridContainer";
import GridItem from "../../../../components/Pages/Grid/GridItem";
import Card from "../../../../components/Pages/Card/Card.jsx";
import CardBody from "../../../../components/Pages/Card/CardBody.jsx";
import Button from "../../../../components/Pages/CustomButtons/Button.jsx";

import projectsStyle from "../../../../assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx";

import collection2 from "../../../../assets/img/collection/collection2.jpg";
import collection1 from "../../../../assets/img/collection/collection1.jpg";
import bannerSale from "../../../../assets/img/background/salebanner.png";

function SectionProjects({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
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
              Collection
              </h2>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card
              raised
              background
              style={{ backgroundImage: `url(${collection2})` }}
            >
              <CardBody background className={classes.customCollection}>
                <a href="#pablito" onClick={e => e.preventDefault()}>
                  <h3 className={classes.cardTitleWhite}>
                    Summer Fall 2018
                    </h3>
                  <p className={classes.cardDescription}>
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                </a>
                <Button round color="danger">
                  <Icon>content_copy</Icon> View Collection
                  </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card
              raised
              background
              style={{ backgroundImage: `url(${collection1})` }}
            >
              <CardBody background className={classes.customCollection}>
                <a href="#pablito" onClick={e => e.preventDefault()}>
                  <h3 className={classes.cardTitleWhite}>
                    Fall Winter 2018
                    </h3>
                </a>
                <p className={classes.cardDescription}>
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                <Button round color="info">
                  <Build />
                  View Collection
                  </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
              <Card
                raised
                background
                style={{ backgroundImage: `url(${bannerSale})` }}
              >
                <CardBody background className={classes.customCollection}>
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                    <h3 className={classes.cardTitleWhite}>
                      0 to 100.000 Customers in 6 months
                    </h3>
                  </a>
                  <p className={classes.cardDescription}>
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <Button round color="warning">
                    <Subject /> Case study
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default withStyles(projectsStyle)(SectionProjects);
