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
            this.props.actDeleteSizeCategory(id);
        }
    }
    render() {
        const { size, index, classes } = this.props;
        return (
            <TableRow  hover>
                <TableCell>{index + 1}</TableCell>
                <TableCell><b>{size.sizeName}</b></TableCell>
                <TableCell>{size.sizeDescription}</TableCell>
                <TableCell>
                    <div className={classes.imgContainer}>
                        <img src={size.sizeImage ? size.sizeImage : imageDefault} alt={size.sizeName} className={classes.img} />
                    </div>
                </TableCell>
                <TableCell>
                    <Link to={`/administration/size/${size.sizeID}/edit`}>
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
                            onClick={() => this.handleDelete(size.sizeID)}
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