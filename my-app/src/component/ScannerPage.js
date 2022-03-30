import React, {useEffect, useState} from 'react';
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import {Style} from "../Style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera, faFloppyDisk} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import axios from 'axios';

function ScannerPage(props) {
    const [input, setInput] = useState("");
    const [contents, setContents] = useState({
        type1: "0", percent1: "0", penalty1: "0",
        type2: "0", percent2: "0", penalty2: "0",
        point_sum: "0"
    });

    const handleChange = (e) => {
        const {value} = e.target;
        setInput(value);
    }

    // 사진 촬영 요청하고 결과값 가져오는 api 호출
    const scanFunction = () => {
        //결과값을 setContents로 저장
        axios.get("/scanner/scan")
            .then((result)=>{
                const penalty_map = result.data;
                let temp_data = {
                    type1: "", percent1: "", penalty1: "",
                    type2: "", percent2: "", penalty2: "",
                    point_sum: ""
                }

                // 벌점 map
                const point_map = {
                    'normal_top' : 0,
                    'open_top' : -1,
                    't_shirt' : -5,
                    'normal_skirt' : 0,
                    'short_skirt' : -4,
                    'pants' : -5,
                    '[DETECT ERROR]: BOTTOM': 0,
                    '[DETECT ERROR]: TOP': 0
                }

                // 출력시킬 이름
                const output_map = {
                    'normal_top' : 'Uniform Shirt',
                    'open_top' : 'Open Shirt',
                    't_shirt' : 'T Shirt',
                    'normal_skirt' : 'Uniform Skirt',
                    'short_skirt' : 'Short Skirt',
                    'pants' : 'Pants',
                    '[DETECT ERROR]: BOTTOM': "No Bottom",
                    '[DETECT ERROR]: TOP': "No Top"
                }

                let i = 1;
                let point_sum = 0;
                for (let key in penalty_map) {
                    temp_data["type"+i] = output_map[key];
                    temp_data["percent"+i] = penalty_map[key];
                    temp_data["penalty"+i] = point_map[key];
                    i ++;
                }
                temp_data["point_sum"] = temp_data["penalty1"] + temp_data["penalty2"]
                setContents(temp_data);
                console.log(contents);
            })
    }

    // 벌점과 출석 저장하는 api 호출
    const saveFunction = () => {
        axios.post("/scanner/add", {student_id:input, point: contents.point_sum})
            .then((result)=>{
                if(result.data.result == "success"){
                    window.location.reload();
                }else{
                    console.log("해당 학번이 없습니다")
                }
            })
            .catch(()=>{console.log("add fail")})
    }

    useEffect(()=>{console.log(window.innerHeight)},[window.innerHeight])
    return (
        <Main>
            <div style={{fontSize: "60px", color: Style.color2, fontWeight: "bold",}}>
                Detect your uniform
            </div>
            <MainInner>
                <div style={{
                    width: "45%",
                    height: "100%",
                    marginRight: "30px",
                    borderRadius: "20px",
                }}><img src={'/video_feed'} style={{width: "100%", height: "100%", borderRadius: "20px"}}/>

                </div>
                <Right>
                    <TableContainer>
                        <TableRow>
                            <TableCell>TYPE</TableCell>
                            <TableCell>Percent(%)</TableCell>
                            <TableCell>Demerit</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{contents.type1}</TableCell>
                            <TableCell>{contents.percent1}</TableCell>
                            <TableCell>{contents.penalty1}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{contents.type2}</TableCell>
                            <TableCell>{contents.percent2}</TableCell>
                            <TableCell>{contents.penalty2}</TableCell>
                        </TableRow>
                        <div style={{
                            color: "white",
                            fontSize: 26,
                            marginTop: 20
                        }}>Total Demerit: {contents.point_sum}
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
  min-height:470px;
  background-color: white;
  border-radius: 20px;
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
  min-height: 270px;
  background-color: ${Style.color3};
  border-radius: 20px;
  padding: 30px 0px;
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
  min-height:150px;
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
  min-height:120px;
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

