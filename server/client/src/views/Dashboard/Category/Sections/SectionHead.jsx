import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import styles from '../../../../assets/jss/material-dashboard-pro-react/views/Category/CategoryStyle';

class SectionHead extends Component {
    render() {
        const { classes } = this.props;
        return (
            <TableHead>
                <TableRow>
                    <TableCell className={classes.textLeft}>#</TableCell>
                    <TableCell className={classes.textLeft}>Name Category</TableCell>
                    <TableCell className={classes.textLeft}>Description</TableCell>
                    <TableCell className={classes.textLeft}>Image</TableCell>
                    <TableCell className={classes.textLeft}>Actions</TableCell> 
                </TableRow>
            </TableHead>
        );
    }
}

export default withStyles(styles)(SectionHead);