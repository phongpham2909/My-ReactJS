import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { NavLink, Route } from 'react-router-dom';
// plugin that creates slider
import nouislider from "nouislider";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Reorder from '@material-ui/icons/Reorder';
import ListSubheader from '@material-ui/core/ListSubheader';
// @material-ui icons
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Cached from "@material-ui/icons/Cached";
// core components
import Accordion from "../../../../components/Pages/Accordion/Accordion";
import Clearfix from "../../../../components/Pages/Clearfix/Clearfix";
import GridContainer from "../../../../components/Pages/Grid/GridContainer";
import GridItem from "../../../../components/Pages/Grid/GridItem";
import Card from "../../../../components/Pages/Card/Card";
import CardBody from "../../../../components/Pages/Card/CardBody";
import Button from "../../../../components/Pages/CustomButtons/Button";
// styles jss
import styles from "../../../../assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle";
import SectionContentRight from "./SectionContentRight";
import SectionContentRightAll from "./SectionContentRightAll";

class SectionProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      checked: [1, 9, 27],
      priceRange: [101, 790]
    };
  }
  componentDidMount() {
    var slider = this.refs.slider1;
    var priceLow = this.refs.priceLow;
    var priceHigh = this.refs.priceHigh;
    nouislider
      .create(slider, {
        start: this.state.priceRange,
        connect: true,
        range: { min: 30, max: 900 },
        step: 1
      })
      .on("update", function (values, handle) {
        let currencyLow = priceLow.dataset.currency;
        let currencyHigh = priceHigh.dataset.currency;
        priceLow.innerHTML = currencyLow + Math.round(values[0]);
        priceHigh.innerHTML = currencyHigh + Math.round(values[1]);
      });
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  handleOpen = () => {
    this.setState(state => ({ open: !state.open }));
  };
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
  format_curency = (price) => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
  render() {
    const { classes, products, categories, GetProductsFollowCategory, productsFollowCategory, match } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <h2>Find what you need</h2>
          <GridContainer>
            <GridItem md={3} sm={3}>
              <Card>
                <CardBody className={classes.cardBodyRefine}>
                  <h4 className={`${classes.cardTitle} ${classes.textLeft}`}>
                    Refine
                    <Tooltip
                      id="tooltip-top"
                      title="Reset Filter"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        link
                        justIcon
                        size="sm"
                        className={`${classes.pullRight} ${
                          classes.refineButton
                          }`}
                      >
                        <Cached />
                      </Button>
                    </Tooltip>
                    <Clearfix />
                  </h4>
                  <Accordion
                    active={[0, 2]}
                    activeColor="rose"
                    collapses={[
                      {
                        title: "Price Range",
                        content: (
                          <CardBody className={classes.cardBodyRefine}>
                            <span
                              ref="priceLow"
                              data-currency="€"
                              className={classNames(
                                classes.pullLeft,
                                classes.priceSlider
                              )}
                            >
                              €101
                            </span>
                            <span
                              ref="priceHigh"
                              data-currency="€"
                              className={classNames(
                                classes.pullRight,
                                classes.priceSlider
                              )}
                            >
                              €790
                            </span>
                            <br />
                            <br />
                            <div ref="slider1" className="slider-rose" />
                          </CardBody>
                        )
                      }]}
                  />
                  <List
                    component="nav"
                    subheader={<ListSubheader component="div">Categories</ListSubheader>}
                    className={classes.root}
                  >
                    <ListItem button onClick={this.handleOpen}>
                      <ListItemIcon>
                        <Reorder />
                      </ListItemIcon>
                      <ListItemText inset primary="All" />
                      {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {categories.map(item => {
                          return (
                            <ListItem key={item.categoryID} button className={classes.nested}>
                              <NavLink className={classes.customNavLink} to={`${match.url}/category/${item.categoryName}/${item.categoryID}`}>
                                <ListItemText key={item.categoryID} inset primary={item.categoryName} />
                              </NavLink>
                            </ListItem>
                          )
                        })}
                      </List>
                    </Collapse>
                  </List>

                </CardBody>
              </Card>
            </GridItem>

            <Route path={`${match.path}/category/:name/:id`} render={(match) => <SectionContentRight productsFollowCategory={productsFollowCategory} GetProductsFollowCategory={GetProductsFollowCategory} match={match} />} />
            <Route exact path={`${match.path}`} render={() => <SectionContentRightAll products={products}/>} />

          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SectionProducts);
