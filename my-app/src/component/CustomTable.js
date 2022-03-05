import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Style} from "../Style";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function CustomTable({type, contents, deleteFunction, editFunction}) {
    let element;
   if (type === "penaltyTable") {
        element = <TableContainer sx={{
            width: "80%",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
            maxHeight: 700,
            overflow: "auto",
        }}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell align="center">StudentID</StyledTableCell>
                        <StyledTableCell align="center">StudentName</StyledTableCell>
                        <StyledTableCell align="center">Parent PhoneNumber</StyledTableCell>
                        <StyledTableCell align="center">PenaltyPoints</StyledTableCell>
                        <StyledTableCell align="center"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contents.map((content, index) => (
                        <StyledTableRow key={index+1}>
                            <StyledTableCell component="th" scope="row" align="center">
                                {index+1}
                            </StyledTableCell>
                            <StyledTableCell align="center">{content.student_id}</StyledTableCell>
                            <StyledTableCell align="center">{content.student_name}</StyledTableCell>
                            <StyledTableCell align="center">{content.parent_ph}</StyledTableCell>
                            <StyledTableCell align="center">{content.penalty_points}</StyledTableCell>
                            <StyledTableCell align="center">
                                <DeleteIcon name={index} style={{marginRight: "20px", cursor: "pointer"}} onClick={deleteFunction}/>
                                <EditIcon name={index} style={{cursor: "pointer"}} onClick={editFunction}/>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    } else {
        element = <div></div>
    }
    return (
        element
    );
}
const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        fontFamily: Style.font,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        fontFamily: Style.font,


    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(even)': {},
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default CustomTable;
