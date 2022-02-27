import React, {useEffect, useState} from 'react';
import CustomTable from "./CustomTable";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import {Style} from "../Style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera, faFloppyDisk, faSchool} from "@fortawesome/free-solid-svg-icons";

function ScannerPage(props) {
    let contents = [{first: "Tshirts", second: "73.29", third: "-5"}, {first: "Tshirts", second: "73.29", third: "-5"}]

    const [input, setInput] = useState("");
    // const [contents, setContents] = useState([]);


    const handleChange = (e) => {
        const {value} = e.target;
        setInput(value);
    }

    useEffect(() => {
        console.log(input)
    }, [input])


    // 사진 촬영 요청하고 결과값 가져오는 함수
    const scanFunction = () => {
        //결과값을 setContents로 저장
    }

    // db에 저장 요청하는 함수
    const saveFunction = () => {

    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            height: "80vh",
            backgroundColor: "white",
            marginTop: "10px",
            borderRadius: "10px"

        }}>
            <div style={{fontSize: "60px", color: Style.color2, fontWeight: "bold",}}>
                Detect your uniform
            </div>
            <div style={{
                display: "flex",
                width: "90%",
                height: "75%",
                backgroundColor: Style.color3,
                borderRadius: "20px",
                padding: "20px 50px",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{
                    width: "45%",
                    height: "100%",
                    background: "pink",
                    marginRight: "30px",
                    borderRadius: "20px"
                }}></div>
                <div style={{
                    width: "45%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    {/*    <div style={{marginBottom: "20px"}}>*/}
                    {/*        <CustomTable type="scannerTable" contents={contents}/>*/}
                    {/*    </div>*/}
                    {/*    <div style={{marginBottom: "20px"}}>*/}
                    {/*        <CustomInput type="normalInput" name="input" onChangeFunction={handleChange} input={input}*/}
                    {/*                     placeholder="학번 입력"/>*/}

                    {/*    </div>*/}
                    {/*    <div style={{display: "flex"}}>*/}
                    {/*        <div style={{marginRight: "20px"}}>*/}
                    {/*            <CustomButton content="스캔하기"*/}
                    {/*                          backgroundColor={Style.color3} borderColor={Style.color1} color={Style.color2}*/}
                    {/*                          onClickFunction={scanFunction}/>*/}
                    {/*        </div>*/}
                    {/*        <CustomButton content="저장하기" backgroundColor={Style.color1} borderColor={Style.color1}*/}
                    {/*                      onClickFunction={saveFunction}/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div style={{
                        width: "100%",
                        height: "65%",
                        backgroundColor: Style.color2,
                        borderRadius: "20px",
                        marginBottom: "20px"
                    }}>

                    </div>
                    <div style={{
                        width: "100%",
                        height: "45%",
                        backgroundColor: "white",
                        borderRadius: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <CustomInput type="normalInput" name="input" onChangeFunction={handleChange} input={input}
                                     placeholder="Please Enter your Student ID"/>
                        <div
                            style={{display: "flex", width: "80%", justifyContent: "space-between", marginTop: "10px"}}>
                            <CustomButton
                                width="45%"
                                content={<>
                                    <FontAwesomeIcon name="scanner" icon={faCamera}
                                                     style={{fontSize: 30, marginRight: "20"}}/>
                                    <span style={{fontSize: 25}}>SCAN</span>
                                </>}
                                style={{fontSize: "20px", color: "white"}}
                                backgroundColor={Style.color3} borderColor={Style.color1}
                                color={Style.color2}
                                onClickFunction={scanFunction}/>
                            <CustomButton width="45%"
                                          content={<>
                                              <FontAwesomeIcon name="scanner" icon={faFloppyDisk}
                                                               style={{fontSize: 30, marginRight: "20"}}/>
                                              <span style={{fontSize: 25}}>SAVE</span>
                                          </>} backgroundColor={Style.color1} borderColor={Style.color1}
                                          onClickFunction={saveFunction}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ScannerPage;