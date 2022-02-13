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

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        fontFamily: Style.font,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        fontFamily: Style.font

    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(even)': {},
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

// function createData(id, student_id, student_name, parent_ph, penalty_points, etc) {
//     return {id, student_id, student_name, parent_ph, penalty_points, etc};
// }
//
// const rows = [
//     createData('1', "21311", "신은수", "01047107208", -4, ""),
//     createData('2', "21312", "신은수", "01047107208", -4, ""),
//     createData('3', "21313", "신은수", "01047107208", -4, ""),
//     createData('4', "21314", "신은수", "01047107208", -4, ""),
//     createData('5', 21315, "신은수", "01047107208", -4, ""),
//     createData('5', 21315, "신은수", "01047107208", -4, ""),
//     createData('5', 21315, "신은수", "01047107208", -4, ""),
//     createData('5', 21315, "신은수", "01047107208", -4, ""),
//     createData('5', 21315, "신은수", "01047107208", -4, ""),
//     createData('5', 21315, "신은수", "01047107208", -4, ""),
//     createData('5', 21315, "신은수", "01047107208", -4, ""),
//     createData('5', 21315, "신은수", "01047107208", -4, ""),
//     createData('5', 21315, "신은수", "01047107208", -4, ""),
//     createData('5', 21315, "신은수", "01047107208", -4, ""),
//     createData('5', 21315, "신은수", "01047107208", -4, ""),
//     createData('5', 21315, "신은수", "01047107208", -4, ""),
//     createData('5', 21315, "신은수", "01047107208", -4, ""),
//     createData('5', 21315, "신은수", "01047107208", -4, ""),
//     createData('5', 21315, "신은수", "01047107208", -4, ""),
//
//
// ];

function CustomizedTable({type, contents}) {
    let element;
    if (type === "scannerTable") {
        element = <TableContainer sx={{
            width: "400px",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
            maxHeight: 700,
            overflow: "auto",
        }}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">교복분류</StyledTableCell>
                        <StyledTableCell align="center">퍼센트(%)</StyledTableCell>
                        <StyledTableCell align="center">벌점</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contents.map((content, index) => (
                        <StyledTableRow key={content.index}>
                            <StyledTableCell align="center">{content.first}</StyledTableCell>
                            <StyledTableCell align="center">{content.second}</StyledTableCell>
                            <StyledTableCell align="center">{content.third}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    <StyledTableRow>
                        <StyledTableCell colspan ="3" align="center">총 벌점은 nn점 입니다.</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer>
    }
    else if (type === "penaltyTable") {
        element = <TableContainer sx={{
            width: "800px",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
            maxHeight: 700,
            overflow: "auto",
        }}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell align="center">학번</StyledTableCell>
                        <StyledTableCell align="center">이름</StyledTableCell>
                        <StyledTableCell align="center">학부모 전화번호</StyledTableCell>
                        <StyledTableCell align="center">벌점</StyledTableCell>
                        <StyledTableCell align="center"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contents.map((content) => (
                        <StyledTableRow key={content.name}>
                            <StyledTableCell component="th" scope="row" align="center">
                                {content.id}
                            </StyledTableCell>
                            <StyledTableCell align="center">{content.student_id}</StyledTableCell>
                            <StyledTableCell align="center">{content.student_name}</StyledTableCell>
                            <StyledTableCell align="center">{content.parent_ph}</StyledTableCell>
                            <StyledTableCell align="center">{content.penalty_points}</StyledTableCell>
                            <StyledTableCell align="center">
                                <DeleteIcon style={{marginRight: "20px", cursor: "pointer"}}/>
                                <EditIcon style={{cursor: "pointer"}}/>
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

export default CustomizedTable;