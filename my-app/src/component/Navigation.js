import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSchool} from '@fortawesome/free-solid-svg-icons'
import {Style} from "../Style";

function Navigation() {
    let a = document.location.pathname.replace("/", "")
    console.log(a)

    const [selected, setSelected] = useState(() => {
        if (a === "") {
            return "scanner"
        } else {
            return a;
        }
    });

    const onClickFunction = (event) => {
        setSelected(event.target.getAttribute('name'));
    }

    return (
        <div style={{
            width: "100%",
            height: "100px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 10px"
        }}>
            <div style={{width: "33%",}}>
                <Link to={"/"} style={{
                    textDecoration: "none",
                    display: "flex"
                }}>
                    <FontAwesomeIcon name="scanner" onClick={onClickFunction} icon={faSchool}
                                     style={{fontSize: "30px", color: Style.color4}}/>
                    <div name="scanner" onClick={onClickFunction} style={{
                        color: Style.color2,
                        fontSize: "30px",
                        fontWeight: 600,
                        marginLeft: "10px",
                    }}>OO여고 교복탐지시스템</div>
                </Link>
            </div>
            <div style={{width: "33%", display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
                <StyledLink to={"/scanner"} onClick={(event) => onClickFunction(event)}>
                    <StyledMenu name="scanner"
                                style={{
                                    backgroundColor: `${selected === "scanner" ? Style.color2 : "transparent"}`,
                                    color: `${selected === "scanner" ? "white" : Style.color2}`
                                }}
                    >스캐너</StyledMenu>
                </StyledLink>
                <StyledLink to={"/penalty"} onClick={(event) => onClickFunction(event)}>
                    <StyledMenu name="penalty"
                                style={{
                                    backgroundColor: `${selected === "penalty" ? Style.color2 : "transparent"}`,
                                    color: `${selected === "penalty" ? "white" : Style.color2}`
                                }}
                    >벌점기록부</StyledMenu>
                </StyledLink>
                <StyledLink to={"/attendance"} onClick={(event) => onClickFunction(event)}>
                    <StyledMenu name="attendance"
                                style={{
                                    backgroundColor: `${selected === "attendance" ? Style.color2 : "transparent"}`,
                                    color: `${selected === "attendance" ? "white" : Style.color2}`
                                }}
                    >출석부</StyledMenu>
                </StyledLink>
            </div>
            <div style={{width: "33%"}}></div>

        </div>

    );
}

const StyledLink = styled(Link)`
text-decoration: none;
width: 33%;
	&:hover > div {
        background-color: rgba(18,50,66,0.5);
        color: white;
    }
 
`;

const StyledMenu = styled.div`
  width: 80%;
  padding: 10px;
  border-radius: 20px;
  font-weight: 600;
  text-align: center;
`;

export default Navigation;

