import React, { Component } from 'react';
import PropTypes from "prop-types";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from '@material-ui/core/Tooltip';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import styles from '../../../../assets/jss/material-dashboard-pro-react/views/Order/Sections/orderTableHeadStyles';

class CustomerHead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [
                { id: 'customerID', numeric: true, disablePadding: false, label: 'ID' },
                { id: 'firstname', numeric: true, disablePadding: false, label: 'Name' }
            ]
        }
    };
    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };
    render() {
        var { rows } = this.state;
        var { order, orderBy } = this.props;
        return (
            <TableHead>
                <TableRow>
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
                                    >
                                        {row.label}
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                        ),
                        this,
                    )}
                    <TableCell align="right">Phone Number</TableCell>
                    <TableCell align="right">Birthday</TableCell>
                    <TableCell align="right">Created</TableCell>
                    <TableCell align="right"></TableCell>
                </TableRow>

            </TableHead>
        );
    }
}

CustomerHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

export default withStyles(styles)(CustomerHead);