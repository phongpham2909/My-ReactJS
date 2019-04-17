import React, { Component } from 'react';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from '@material-ui/core/TableBody';
import Table from "@material-ui/core/Table";

class SectionOrderStatus extends Component {
    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Status</TableCell>
                            <TableCell align="right">Updated On</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        );
    }
}

export default SectionOrderStatus;