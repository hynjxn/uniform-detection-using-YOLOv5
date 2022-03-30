import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Calendar from 'react-calendar';
import {Style} from "../Style";
import CustomCalendar from "./CustomCalendar";
import axios from 'axios';

function AttendancePage(props) {
    const [date, setDate] = useState(new Date());
    const [contents, setContents] = useState([]);

    useEffect(() => {
        const str_date = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate() // ex)2022-3-26
        console.log(str_date)

        axios.post("/attendance/get", {attend_date : str_date})
            .then((result)=>{
                const list = result.data.student_list;
                console.log(list)
                setContents(list);
            })
            .catch(()=>{console.log("get attendance fail")})

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
                            <TableCell>Student ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Attendance</TableCell>
                        </TableRow>
                        {contents.length!==0?
                            contents.map((content)=>{
                                return  <TableRow>
                                    {content.map((item)=>{return <TableCell>{item}</TableCell>})}
                                </TableRow>
                            }):
                            null
                        }
                    </TableContainer>
                </Right>
            </MainInner>
        </Main>
    );
}

const Main = styled.div`
  width: 100%;
  height: 80vh;
   min-height:470px;
  background-color: white;
  border-radius: 20px;
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
  align-items: center;
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
  width: 75%;
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
  font-size: 18px;
`

export default AttendancePage;