// import React, {useEffect, useState} from 'react';
// import {Link} from "react-router-dom";
// import styled from "styled-components";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faSchool} from '@fortawesome/free-solid-svg-icons'
// import {Style} from "../Style";
//
// function Navigation() {
//     let a = document.location.pathname.replace("/", "")
//     console.log(a)
//
//     const [selected, setSelected] = useState(() => {
//         if (a === "") {
//             return "scanner"
//         } else {
//             return a;
//         }
//     });
//
//     const onClickFunction = (event) => {
//         console.dir(event.target);
//         setSelected(event.target.getAttribute('name'));
//     }
//
//     return (
//         <div style={{
//             height: "90px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             padding: "20px 30px",
//             backgroundColor: Style.color2,
//             borderRadius: "20px"
//         }}>
//             <div style={{
//                 width: "auto"
//             }}>
//                 <Link to={"/"} style={{
//                     textDecoration: "none",
//                     display: "flex",
//                     alignItems: "center",
//                 }}>
//                     <div style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         width: "50px",
//                         height: "50px",
//                         borderRadius: "50%",
//                         backgroundColor: Style.color4
//                     }} onClick={onClickFunction} name="scanner">
//                         <FontAwesomeIcon name="scanner" onClick={onClickFunction} icon={faSchool}
//                                          style={{fontSize: "20px", color: "white"}}/>
//                     </div>
//                     <div name="scanner" onClick={onClickFunction} style={{
//                         fontSize: "30px",
//                         fontWeight: 600,
//                         marginLeft: "10px",
//                         color: Style.color3
//                     }}>OO여고 교복탐지시스템
//                     </div>
//                 </Link>
//             </div>
//             <div style={{width: "40%", display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
//                 <StyledLink to={"/scanner"} onClick={(event) => onClickFunction(event)}>
//                     <StyledMenu name="scanner"
//                                 style={{
//                                     backgroundColor: `${selected === "scanner" ? "rgba(255, 255, 255, 0.3)" : "transparent"}`,
//                                     color: "white"
//                                 }}
//                     >스캐너</StyledMenu>
//                 </StyledLink>
//                 <StyledLink to={"/penalty"} onClick={(event) => onClickFunction(event)}>
//                     <StyledMenu name="penalty"
//                                 style={{
//                                     backgroundColor: `${selected === "penalty" ? "rgba(255, 255, 255, 0.3)" : "transparent"}`,
//                                     color: "white"
//                                 }}
//                     >벌점기록부</StyledMenu>
//                 </StyledLink>
//                 <StyledLink to={"/attendance"} onClick={(event) => onClickFunction(event)}>
//                     <StyledMenu name="attendance"
//                                 style={{
//                                     backgroundColor: `${selected === "attendance" ? "rgba(255, 255, 255, 0.3)" : "transparent"}`,
//                                     color: "white"
//                                 }}
//                     >출석부</StyledMenu>
//                 </StyledLink>
//             </div>
//
//         </div>
//
//     );
// }
//
// const StyledMenu = styled.div`
//   width: 80%;
//   padding: 10px;
//   border-radius: 20px;
//   font-weight: 600;
//   text-align: center;
// `;
//
// const StyledLink = styled(Link)`
//   text-decoration: none;
//   width: 33%;
//
//   &:hover ${StyledMenu} {
//     background-color: rgba(255, 255, 255, 0.3);
//   }
//
// `;
//
//
// export default Navigation;

import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSchool} from '@fortawesome/free-solid-svg-icons'
import {Style} from "../Style";

function Navigation() {
    let a = document.location.pathname.replace("/", "")
    const [selected, setSelected] = useState(() => {
        if (a === "") {
            return "scanner"
        } else {
            return a;
        }
    });

    const onClickFunction = (event) => {
        console.dir(event.target);
        setSelected(event.target.getAttribute('name'));
    }

    return (
        <div style={{
            height: "10%",
            maxHeight: "85px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 30px",
            backgroundColor: Style.color2,
            borderRadius: "20px"
        }}>
            <div style={{
                width: "auto"
            }}>
                <Link to={"/"} style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: Style.color4,
                        marginRight: "10px"
                    }} onClick={onClickFunction} name="scanner">
                        <FontAwesomeIcon name="scanner" onClick={onClickFunction} icon={faSchool}
                                         style={{fontSize:"25px", color: "white"}}/>
                    </div>
                    <div name="scanner" onClick={onClickFunction} style={{
                        fontSize: "25px",
                        fontWeight: 600,
                        marginLeft: "10px",
                        color: Style.color3,
                        textAlign:"center",
                        lineHeight:"140%",
                        fontStretch:"extra-expanded",
                    }}>OO Girl's High School<br /> Uniform Detecting System
                    </div>
                </Link>
            </div>
            <div style={{width: "45%", display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
                <StyledLink to={"/scanner"} onClick={(event) => onClickFunction(event)}>
                    <StyledMenu name="scanner"
                                style={{
                                    backgroundColor: `${selected === "scanner" ? "rgba(255, 255, 255, 0.3)" : "transparent"}`,
                                    color: "white",
                                    fontSize: window.innerWidth<1700?"18px": "25px"
                                }}
                    >Scanner</StyledMenu>
                </StyledLink>
                <StyledLink to={"/penalty"} onClick={(event) => onClickFunction(event)}>
                    <StyledMenu name="penalty"
                                style={{
                                    backgroundColor: `${selected === "penalty" ? "rgba(255, 255, 255, 0.3)" : "transparent"}`,
                                    color: "white",
                                    fontSize: window.innerWidth<1700?"18px": "25px"

                                }}
                    >School Record</StyledMenu>
                </StyledLink>
                <StyledLink to={"/attendance"} onClick={(event) => onClickFunction(event)}>
                    <StyledMenu name="attendance"
                                style={{
                                    backgroundColor: `${selected === "attendance" ? "rgba(255, 255, 255, 0.3)" : "transparent"}`,
                                    color: "white",
                                    fontSize: window.innerWidth<1700?"18px": "25px"

                                }}
                    >Attendance</StyledMenu>
                </StyledLink>
            </div>

        </div>

    );
}

const StyledMenu = styled.div`
  width: 90%;
  padding: 10px;
  border-radius: 20px;
  font-weight: 600;
  text-align: center;
  font-size: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 33%;

  &:hover ${StyledMenu} {
    background-color: rgba(255, 255, 255, 0.3);
  }

`;


export default Navigation;



