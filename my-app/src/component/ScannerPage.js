import React, {useEffect, useState} from 'react';
import CustomTable from "./CustomTable";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import {Style} from "../Style";

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
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "80vh"}}>
            {/*<div style={{width: "500px", height: "500px", background: "pink", marginRight: "30px"}}></div>*/}
            <img src={'/video_feed'} className="App-logo" alt="logo" />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{marginBottom: "20px"}}>
                    <CustomTable type="scannerTable" contents={contents}/>
                </div>
                <div style={{marginBottom: "20px"}}>
                    <CustomInput type="normalInput" name="input" onChangeFunction={handleChange} input={input} placeholder="학번 입력"/>

                </div>
                <div style={{display: "flex"}}>
                    <div style={{marginRight: "20px"}}>
                        <CustomButton content="스캔하기"
                                      backgroundColor={Style.color3} borderColor={Style.color1} color={Style.color2}
                                      onClickFunction={scanFunction}/>
                    </div>
                    <CustomButton content="저장하기" backgroundColor={Style.color1} borderColor={Style.color1}
                                  onClickFunction={saveFunction}/>
                </div>
            </div>
        </div>
    );
}

export default ScannerPage;