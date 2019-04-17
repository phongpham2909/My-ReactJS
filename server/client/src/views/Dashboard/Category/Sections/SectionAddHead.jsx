import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
// components
import CardHeader from "../../../../components/Dashboard/Card/CardHeader";
import CardIcon from "../../../../components/Dashboard/Card/CardIcon";
import Button from "../../../../components/Dashboard/CustomButtons/Button";
// @material-ui/icons
import Category from "@material-ui/icons/Category";
import Clear from "@material-ui/icons/Clear";
// styles jss
import styles from '../../../../assets/jss/material-dashboard-pro-react/views/Category/CategoryStyle';

class SectionAddHead extends Component {
    render() {
        const { classes } = this.props;
        return (
            <CardHeader color="primary" icon>
                <CardIcon color="primary">
                    <Category />
                </CardIcon>
                <Link to="/administration/product-category">
                    <Button color="danger" default className={classes.customCardIcon}>
                        <Clear className={classes.customIcon} />
                    </Button>
                </Link>
            </CardHeader>
        );
    }
}

export default withStyles(styles)(SectionAddHead);