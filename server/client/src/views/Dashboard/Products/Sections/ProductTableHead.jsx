import React, { Component } from 'react';
import PropTypes from "prop-types";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from '@material-ui/core/Tooltip';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';
// jss styles
import styles from "../../../../assets/jss/material-dashboard-pro-react/views/ProductManagement/productManagement";

class ProductTableHead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [
                { id: 'productName', numeric: true, disablePadding: false, label: 'Name' },
                { id: 'productPrice', numeric: true, disablePadding: false, label: 'Price' },
                { id: 'productQuantity', numeric: true, disablePadding: false, label: 'Quantity' },
                { id: 'productStatus', numeric: true, disablePadding: false, label: 'Status' }
            ]
        }
    };
    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };
    render() {
        var { rows } = this.state;
        var { classes, onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;
        return (
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox
                            classes={{
                                root: classes.customCheckbox,
                                checked: classes.checked,
                            }} 
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={numSelected === rowCount}
                            onChange={onSelectAllClick}
                        />
                    </TableCell>
                    <TableCell align="right" className={classes.customTableCell}>
                        Image
                    </TableCell>
                    {rows.map(
                        row => (
                            <TableCell
                                key={row.id}
                                align={row.numeric ? 'right' : 'left'}
                                padding={row.disablePadding ? 'none' : 'default'}
                                sortDirection={orderBy === row.id ? order : false}
                            >
                                <Tooltip
                                    title="Sort"
                                    placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === row.id}
                                        direction={order}
                                        onClick={this.createSortHandler(row.id)}
                                    > {row.label}
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                        ),
                        this,
                    )}
                    <TableCell align="right">Actions</TableCell>
                </TableRow>
            </TableHead>
        );
    }
}

ProductTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

export default withStyles(styles)(ProductTableHead);
