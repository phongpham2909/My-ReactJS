import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import CardHeader from "../../../../components/Dashboard/Card/CardHeader";
import CardIcon from "../../../../components/Dashboard/Card/CardIcon";
import Button from "../../../../components/Dashboard/CustomButtons/Button";
// icons material
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Clear from "@material-ui/icons/Clear";
// jss styles
import styles from "../../../../assets/jss/material-dashboard-pro-react/views/ProductManagement/productManagement";

class CardHeaderActionForm extends Component {
  render() {
    const { classes } = this.props;
    return (
      <CardHeader color="primary" icon>
        <CardIcon color="primary">
          <LibraryBooks />
        </CardIcon>
        <Link to="/dashboard/product-management">
          <Button color="danger" default className={classes.customCardIcon}>
            <Clear className={classes.customIcon} />
          </Button>
        </Link>
      </CardHeader>
    );
  }
}

export default withStyles(styles)(CardHeaderActionForm);
