import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Calendar from 'react-calendar';
import {Style} from "../Style";
import CustomCalendar from "./CustomCalendar";


function AttendancePage(props) {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log(date);
    }, [date])
    return (
        <Main>
            <MainInner>
                <Left>
                    <CustomCalendar className="calendar" setDate={setDate}/>
                </Left>
                <Right>
                    <TableContainer>
                        <TableRow>
                            <TableCell>StudentID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Attendance</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>21319</TableCell>
                            <TableCell>신은수 </TableCell>
                            <TableCell>X</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>21320</TableCell>
                            <TableCell>신은수</TableCell>
                            <TableCell>O</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>21320</TableCell>
                            <TableCell>신은수</TableCell>
                            <TableCell>O</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>21320</TableCell>
                            <TableCell>신은수</TableCell>
                            <TableCell>O</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>21320</TableCell>
                            <TableCell>신은수</TableCell>
                            <TableCell>O</TableCell>
                        </TableRow>

                    </TableContainer>
                </Right>
            </MainInner>
        </Main>
    );
}

const Main = styled.div`
  width: 100%;
  height: 80vh;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const MainInner = styled.div`
  width: 95%;
  height: 90%;
  padding: 0px 30px;
  background-color: ${Style.color3};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
`;

const Left = styled.div`
  width: 49%;
  height: 90%;
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 20px;
`;

const Right = styled.div`
  width: 49%;
  height: 90%;
  background-color: ${Style.color2};
  border-radius: 20px;
  overflow: auto;

`;

const TableContainer = styled.div`
  width: 100%;
  background-color: ${Style.color2};
  padding: 50px 0px;
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableRow = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  align-items: flex-end;
  color: white;
  height: 50px;
  font-size: 20px;
  border: 3px solid;
  border-color: transparent;
  border-bottom-color: white;
`;

const TableCell = styled.div`
  width: 33%;
  text-align: center;
`

export default AttendancePage;