import React, { Component } from 'react';
import Check from "@material-ui/icons/Check";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import SnackbarContent from "../../../../components/Pages/Snackbar/SnackbarContent";
import shoppingCartStyle from "../../../../assets/jss/material-kit-pro-react/views/shoppingCartStyle";

class SectionMessage extends Component {
    render() {
        var { msg } = this.props;
        return (
            <SnackbarContent
                message={
                    <h5>{msg}</h5>
                }
                close
                color="success"
                icon={Check}
            />
        );
    }
}

export default withStyles(shoppingCartStyle)(SectionMessage);