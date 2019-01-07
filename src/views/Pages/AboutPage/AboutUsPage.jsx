import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "../../../components/Pages/Grid/GridContainer";
import GridItem from "../../../components/Pages/Grid/GridItem";
import Parallax from "../../../components/Pages/Parallax/Parallax.jsx";
// sections for this page
import SectionDescription from "./Sections/SectionDescription.jsx";
import SectionTeam from "./Sections/SectionTeam.jsx";
import SectionServices from "./Sections/SectionServices.jsx";
import SectionOffice from "./Sections/SectionOffice.jsx";
import SectionContact from "./Sections/SectionContact";

import aboutUsStyle from "../../../assets/jss/material-kit-pro-react/views/aboutUsStyle.jsx";

class AboutUsPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Parallax image={require("../../../assets/img/full-screen-image-2.jpg")} filter="dark" small>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem
                md={8}
                sm={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <h1 className={classes.title}>About Us</h1>
                <h4>
                  Meet the amazing team behind this project and find out more
                  about how we work.
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionDescription />
            <SectionTeam />
            <SectionServices />
            <SectionOffice />
            <SectionContact />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(aboutUsStyle)(AboutUsPage);
