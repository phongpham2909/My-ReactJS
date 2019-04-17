import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import shoppingCartStyle from "../../../../assets/jss/material-kit-pro-react/views/shoppingCartStyle";

class SectionCartHead extends Component {
  render() {
    const { classes } = this.props;
    return (
      <TableHead>
        <TableRow>
          <TableCell className={classes.textCenter}></TableCell>
          <TableCell >PRODUCT</TableCell>
          <TableCell className={classes.textLeft}>QUANTITY</TableCell>
          <TableCell className={classes.textLeft}>AMOUNT</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
    );
  }
}

export default withStyles(shoppingCartStyle)(SectionCartHead);