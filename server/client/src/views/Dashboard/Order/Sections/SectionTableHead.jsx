import React, { Component } from 'react';
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import styles from '../../../../assets/jss/material-dashboard-pro-react/views/Order/Sections/orderTableHeadStyles';

class SectionTableHead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [
                { id: 'orderID', numeric: true, disablePadding: false, label: 'ID' },
                { id: 'orderReference', numeric: true, disablePadding: false, label: 'Reference' },
                { id: 'customerName', numeric: true, disablePadding: false, label: 'Customer' },
                { id: 'orderTotalAmount', numeric: true, disablePadding: false, label: 'Total' },
                { id: 'paymentTyper', numeric: true, disablePadding: false, label: 'Payment' },
                { id: 'orderStatusType', numeric: true, disablePadding: false, label: 'Status' },
                { id: 'orderCreated', numeric: true, disablePadding: false, label: 'Created' }
            ]
        }
    };
    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };
    render() {
        var { rows } = this.state;
        var { classes } = this.props;
        return (
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox
                            classes={{
                                root: classes.customCheckbox,
                                checked: classes.checked,
                            }}
                        //indeterminate={numSelected > 0 && numSelected < rowCount}
                        //checked={numSelected === rowCount}
                        //onChange={onSelectAllClick}
                        />
                    </TableCell>
                    {rows.map(
                        row => (
                            <TableCell
                                key={row.id}
                                align={row.numeric ? 'right' : 'left'}
                                padding={row.disablePadding ? 'none' : 'default'}
                                //sortDirection={orderBy === row.id ? order : false}
                            >
                                <Tooltip
                                    title="Sort"
                                    placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        //active={orderBy === row.id}
                                        //direction={order}
                                        onClick={this.createSortHandler(row.id)}
                                    > 
                                    {row.label}
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                        ),
                        this,
                    )}
                </TableRow>

            </TableHead>
        );
    }
}

export default withStyles(styles)(SectionTableHead);