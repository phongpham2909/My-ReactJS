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

import HomePageStyle from "../../../assets/jss/material-kit-pro-react/views/landingPageStyle";

// Sections for this page
import SectionProduct from "./Sections/SectionProduct";
import SectionTeam from "./Sections/SectionTeam";
import SectionWork from "./Sections/SectionWork";
import SectionReview from "./Sections/SectionReview";

class HomePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Parallax image={require("../../../assets/img/start-page-hero.jpg")} filter="dark">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h5>HAPPY HOLIDAYS</h5>
                <h2 className={classes.title}>MAKE EVERY GIFT SPECIAL</h2>
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
          <div className={classes.container}>
            <SectionProduct />
            <SectionReview />
            <SectionTeam />
            <SectionWork />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(HomePageStyle)(HomePage);
