import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// core components
import GridContainer from "../../../components/Dashboard/Grid/GridContainer";
import GridItem from "../../../components/Dashboard/Grid/GridItem";
import Card from "../../../components/Dashboard/Card/Card";
import CustomerTable from "./Sections/CustomerTable";

import styles from '../../../assets/jss/material-dashboard-pro-react/views/Customer/CustomerPage';

class CustomerPage extends Component {
    render() {
        const { classes, Customers } = this.props;
        return (
            <GridContainer>
                <GridItem xs={12}>
                <GridContainer>
                        <GridItem md={3} xs={1}></GridItem>
                        <GridItem md={6} xs={10}>
                            <Paper className={classes.root} elevation={1}>
                                <IconButton className={classes.iconButton} aria-label="Menu">
                                    <MenuIcon />
                                </IconButton>
                                <InputBase className={classes.input} placeholder="Search" />
                                <IconButton className={classes.iconButton} aria-label="Search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </GridItem>
                        <GridItem md={3} xs={1}></GridItem>
                    </GridContainer>
                    <Card>
                        <CustomerTable Customers={Customers}/>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

export default withStyles(styles)(CustomerPage);