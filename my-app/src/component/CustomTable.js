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
            borderRadius: "20px",
            border: "1px solid #E5E4E2",
            maxHeight: 700,
            overflow: "auto",
        }}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell align="center">Student ID</StyledTableCell>
                        <StyledTableCell align="center">Student Name</StyledTableCell>
                        <StyledTableCell align="center">Parent PhoneNumber</StyledTableCell>
                        <StyledTableCell align="center">Penalty Points</StyledTableCell>
                        <StyledTableCell align="center"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contents.length != 0 ?

                        contents.map((content, index) => (
                            <StyledTableRow key={index + 1}>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {index + 1}
                                </StyledTableCell>
                                <StyledTableCell align="center">{content.student_id}</StyledTableCell>
                                <StyledTableCell align="center">{content.student_name}</StyledTableCell>
                                <StyledTableCell align="center">{content.parent_ph}</StyledTableCell>
                                <StyledTableCell align="center">{content.penalty_points}</StyledTableCell>
                                <StyledTableCell name={index} align="center">
                                    <DeleteIcon name={index} style={{marginRight: "20px", cursor: "pointer"}}
                                                onClick={deleteFunction}/>
                                    <EditIcon name={index} style={{cursor: "pointer"}} onClick={editFunction}/>
                                </StyledTableCell>

                            </StyledTableRow>
                        ))

                        :
                        <StyledTableRow>
                            <TableCell colSpan="6" style={{textAlign:"center"}}>No Data
                            </TableCell>
                        </StyledTableRow>
                    }
                    {/*<StyledTableRow>*/}
                    {/*    <StyledTableCell component="th" scope="row" align="center">*/}
                    {/*        2*/}
                    {/*    </StyledTableCell>*/}
                    {/*    <StyledTableCell align="center">a</StyledTableCell>*/}
                    {/*    <StyledTableCell align="center">b</StyledTableCell>*/}
                    {/*    <StyledTableCell align="center">c</StyledTableCell>*/}
                    {/*    <StyledTableCell align="center">d</StyledTableCell>*/}
                    {/*    <StyledTableCell align="center">*/}
                    {/*        <DeleteIcon style={{marginRight: "20px", cursor: "pointer"}}*/}
                    {/*                    onClick={deleteFunction}/>*/}
                    {/*        <EditIcon  style={{cursor: "pointer"}} onClick={editFunction}/>*/}
                    {/*    </StyledTableCell>*/}
                    {/*</StyledTableRow>*/}
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
