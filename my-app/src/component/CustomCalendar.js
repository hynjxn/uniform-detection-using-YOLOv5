import React, {useState} from 'react';
import Calendar from "react-calendar";
import './Calendar.css';
import styled from "styled-components";
import {faAngleLeft, faAngleRight, faSchool} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function CustomCalendar({setDate}) {
    const [value, setValue] = useState(new Date());
    const month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
        <Container>
           <ContainerInner>
               <Calendar
                   onChange={(day) => {
                       setValue(day);
                       setDate(day);

                       // onData(); 여기에 넣으면 setState가 늦게 되어버림..
                   }}
                   value={value}
                   calendarType="US"
                   locale="en"
                   formatMonth={(locale, date) => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()]}
                   formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
                   formatMonthYear={(locale, date) => ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]}
                   nextLabel={<FontAwesomeIcon name="scanner" icon={faAngleRight}
                                               style={{fontSize: "20px", color: "black"}}/>}
                   prevLabel={<FontAwesomeIcon name="scanner" icon={faAngleLeft}
                                               style={{fontSize: "20px", color: "black"}}/>}
                   maxDetail="month"
                   minDetail="month"
                   navigationLabel={({ date }) => ` ${month[date.getMonth()]} ${date.getFullYear()}`}
               />
           </ContainerInner>
        </Container>
    );
}

export default CustomCalendar;

const Container = styled.div`
  width: 60%;
  height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
`;

const ContainerInner = styled.div`
    height: 77%;
`;
