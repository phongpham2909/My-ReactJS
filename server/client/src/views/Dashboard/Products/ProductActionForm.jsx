import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// Sections Product Action Form
import CardActionForm from "./SectionsActionForm/CardActionForm";
// core components
import GridContainer from "../../../components/Dashboard/Grid/GridContainer";
import GridItem from "../../../components/Dashboard/Grid/GridItem";
// jss styles
import styles from "../../../assets/jss/material-dashboard-pro-react/views/ProductManagement/productManagement";

class ProductActionForm extends Component {
  render() {
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
            <CardActionForm
              history={this.props.history}
              match={this.props.match}
            />
        </GridItem>
      </GridContainer>
    );
  }
}
ProductActionForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductActionForm);
