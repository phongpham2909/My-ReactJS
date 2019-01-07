import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "../../../components/Pages/Grid/GridContainer.jsx";
import GridItem from "../../../components/Pages/Grid/GridItem.jsx";
import Parallax from "../../../components/Pages/Parallax/Parallax.jsx";
// sections for this page
import SectionPills from "./Sections/SectionPills.jsx";
import SectionInterested from "./Sections/SectionInterested.jsx";
import SectionImage from "./Sections/SectionImage.jsx";
import SubscribeLine from "./Sections/SubscribeLine.jsx";

import blogPostsPageStyle from "../../../assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";

class BlogPostsPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Parallax image={require("../../../assets/img/bg5.jpg")} filter="dark" small>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                <h2 className={classes.title}>
                  A Place for Entrepreneurs to Share and Discover New Stories
                </h2>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
            <SectionPills />
            <SectionInterested />
          </div>
          <SectionImage />
          <SubscribeLine />
        </div>
      </div>
    );
  }
}

export default withStyles(blogPostsPageStyle)(BlogPostsPage);
