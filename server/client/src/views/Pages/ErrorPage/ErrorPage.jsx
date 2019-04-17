import React from "react";
import { Link } from "react-router-dom";
// @material-ui/icons
import Home from "@material-ui/icons/Home";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "../../../components/Pages/Grid/GridContainer";
import GridItem from "../../../components/Pages/Grid/GridItem";
import Button from "../../../components/Dashboard/CustomButtons/Button";

import errorPageStyle from "../../../assets/jss/material-kit-pro-react/views/errorPageStyles";

import Background404 from "../../../assets/img/background/404_background.jpg";

class Components extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [1]
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + Background404 + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          {/* <div className={classes.container}> */}
          <div className={classes.contentCenter}>
            <GridContainer>
              <GridItem md={12}>
                <h1 className={classes.title}>404</h1>
                <h2 className={classes.subTitle}>Page not found :(</h2>
                <h4 className={classes.description}>
                  Ooooups! Looks like you got lost.
                </h4>
                <Link to="">
                    <Button color="rose" size="md"><Home></Home> Back to Home</Button>
                </Link>
              </GridItem>
            </GridContainer>
          </div>
        </div>
    );
  }
}

export default withStyles(errorPageStyle)(Components);
