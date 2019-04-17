import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
// core components dashboard 
import Card from '../../../components/Dashboard/Card/Card';
import CardBody from '../../../components/Dashboard/Card/CardBody';
import GridContainer from '../../../components/Dashboard/Grid/GridContainer';
import GridItem from '../../../components/Dashboard/Grid/GridItem';
import Button from '../../../components/Dashboard/CustomButtons/Button';
// icons material ui
import Add from '@material-ui/icons/Add';
// components Section
import SectionHead from './Sections/SectionHead';

import styles from '../../../assets/jss/material-dashboard-pro-react/views/Category/CategoryStyle';

class SizeCategory extends Component {
    render() {
        const { classes, children } = this.props;
        return (
            <div>
            <Card>
              <CardBody>
                <GridContainer>
                  <GridItem md={3}>
                    <Link to="/administration/add-size-category">
                      <Button color='primary'><Add />Add new category</Button>
                    </Link>
                  </GridItem>
                </GridContainer>
                    <div className={classes.tableResponsive}>
                      <Table className={classes.table}>
                        <SectionHead />
    
                        <TableBody>
                          {children}
                        </TableBody>
    
                      </Table>
                    </div>
              </CardBody>
            </Card>
          </div>
        );
    }
}

SizeCategory.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(styles)(SizeCategory);