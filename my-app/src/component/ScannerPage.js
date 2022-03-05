import React, {useEffect, useState} from 'react';
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import {Style} from "../Style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera, faFloppyDisk} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

function ScannerPage(props) {
    const [input, setInput] = useState("");


    const handleChange = (e) => {
        const {value} = e.target;
        setInput(value);
    }

    // 사진 촬영 요청하고 결과값 가져오는 함수
    const scanFunction = () => {
        //결과값을 setContents로 저장
    }

    // db에 저장 요청하는 함수
    const saveFunction = () => {

    }
    return (
        <Main>
            <div style={{fontSize: "60px", color: Style.color2, fontWeight: "bold",}}>
                Detect your uniform
            </div>
            <MainInner>
                <div style={{
                    width: "45%",
                    height: "100%",
                    background: "pink",
                    marginRight: "30px",
                    borderRadius: "20px"
                }}>이미지
                </div>
                <Right>
                    <TableContainer>
                        <TableRow>
                            <TableCell>TYPE</TableCell>
                            <TableCell>Percent(%)</TableCell>
                            <TableCell>Demerit</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>T-shirt</TableCell>
                            <TableCell>74.2 </TableCell>
                            <TableCell>-5</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Pants</TableCell>
                            <TableCell>94.1</TableCell>
                            <TableCell>-5</TableCell>
                        </TableRow>
                        <div style={{
                            color: "white",
                            fontSize: 26,
                            marginTop: 20
                        }}>Total Demerit: -10
                        </div>
                    </TableContainer>
                    <RightBottom>
                        <CustomInput type="normalInput" name="input" onChangeFunction={handleChange} input={input}
                                     placeholder="Please Enter your Student ID"/>
                        <ButtonContainer>
                            <CustomButton
                                width="45%"
                                content={<>
                                    <FontAwesomeIcon name="scanner" icon={faCamera}
                                                     style={{fontSize: 30, marginRight: "20"}}/>
                                    <span style={{fontSize: 25, fontWeight: "bold"}}>SCAN</span>
                                </>}
                                backgroundColor={"white"} borderColor={Style.color1}
                                color={Style.color2}
                                onClickFunction={scanFunction}/>
                            <CustomButton width="45%"
                                          content={<>
                                              <FontAwesomeIcon name="scanner" icon={faFloppyDisk} color={Style.color1}
                                                               style={{fontSize: 30, marginRight: "20"}}/>
                                              <span style={{fontSize: 25, fontWeight: "bold"}}>SAVE</span>
                                          </>} backgroundColor={"white"} borderColor={Style.color1} color={Style.color2}

                                          onClickFunction={saveFunction}/>
                        </ButtonContainer>
                    </RightBottom>

                </Right>
            </MainInner>
        </Main>
    );
}

export default ScannerPage;

const Main = styled.div`
  width: 100%;
  height: 80vh;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const MainInner = styled.div`
  display: flex;
  width: 93%;
  height: 75%;
  background-color: ${Style.color3};
  border-radius: 20px;
  padding: 40px 0px;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableContainer = styled.div`
  width: 100%;
  height: 65%;
  background-color: ${Style.color2};
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TableRow = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 20px;
  border: 3px solid;
  border-color: transparent;
  border-bottom-color: white;
`;

const TableCell = styled.div`
  width: 33%;
  text-align: center;
`;

const RightBottom = styled.div`
  width: 100%;
  height: 55%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-top: 10px;`;

