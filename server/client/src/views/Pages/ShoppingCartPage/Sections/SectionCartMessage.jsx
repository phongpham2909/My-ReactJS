import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import shoppingCartStyle from "../../../../assets/jss/material-kit-pro-react/views/shoppingCartStyle";

class SectionCartMessage extends Component {
    render() {
        var { classes, message } = this.props;
        return (
            <h5 className={classes.textCenter}>{message}</h5>
        );
    }
}

export default withStyles(shoppingCartStyle)(SectionCartMessage);