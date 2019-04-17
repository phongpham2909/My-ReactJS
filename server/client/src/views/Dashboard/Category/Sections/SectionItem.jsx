import React, { Component } from 'react';
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
// @material-ui/icons
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import Button from "../../../../components/Pages/CustomButtons/Button";

import Styles from '../../../../assets/jss/material-dashboard-pro-react/views/Category/CategoryStyle';

import imageDefault from '../../../../assets/img/image_placeholder.jpg';

class SectionItem extends Component {
    handleDelete = (id) => {
        if (confirm('You want to definitely delete?')) { //eslint-disable-line
            this.props.actDeleteCategory(id);
        }
    }
    render() {
        const { category, index, classes } = this.props;
        return (
            <TableRow  hover>
                <TableCell>{index + 1}</TableCell>
                <TableCell><b>{category.categoryName}</b></TableCell>
                <TableCell>{category.categoryDescription}</TableCell>
                <TableCell>
                    <div className={classes.imgContainer}>
                        <img src={category.categoryImage ? category.categoryImage : imageDefault} alt={category.categoryName} className={classes.img} />
                    </div>
                </TableCell>
                <TableCell>
                    <Link to={`/administration/category/${category.categoryID}/edit`}>
                        <Tooltip
                            title="Edit"
                            placement="top"
                            classes={{ tooltip: classes.tooltip }}
                        >
                            <Button color="success" className={classes.actionButton}>
                                <Edit />
                            </Button>
                        </Tooltip>
                    </Link>
                    <Tooltip
                        title="Delete"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                    >
                        <Button
                            color="danger"
                            className={classes.actionButton}
                            onClick={() => this.handleDelete(category.categoryID)}
                        >
                            <Delete />
                        </Button>
                    </Tooltip>
                </TableCell>
            </TableRow>
        );
    }
}

export default withStyles(Styles)(SectionItem);