import React, {useEffect, useState} from 'react';
import CustomInput from "./CustomInput";
import CustomTable from "./CustomTable";
import CustomButton from "./CustomButton";
import styled from 'styled-components';
import {Style} from "../Style";
import Swal from "sweetalert2";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import StudentAddForm from "./StudentAddForm";

function PenaltyPage(props) {
    const contents = [{
        student_id: "21319", student_name: "신은수", parent_ph:
            "010-4710-6207", penalty_points: "-17"
    }, {
        student_id: "21320", student_name: "신은수", parent_ph:
            "010-4710-6207", penalty_points: "-17"
    }];

    // const [content, setContent] = useState([]);
    const [word, setWord] = useState({input: "", select: ""});
    const [currentInfo, setCurrentInfo] = useState({
        student_id: "",
        student_name: "",
        parent_ph: "",
        penalty_points: ""
    })

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        // 학생 불러오기
        // setContents([{},{}....])
    }, []);

    const handleSearchFormChange = (e) => {
        const {name, value} = e.target;
        setWord({...word, [name]: value});
    }

    const handleAddFormInputChange = (e) => {
        const {name, value} = e.target;
        setCurrentInfo({
            ...currentInfo,
            [name]: value
        })
    }

    const searchFunction = (e)=>{
        e.preventDefault();
        // 검색 api 요청을 한다.
        // setContent(content)
    }

    const clickAddButtonFunction = () => {
        setCurrentInfo({
            student_id: "",
            student_name: "",
            parent_ph: "",
            penalty_points: ""
        })
        handleOpen();
    }

    const clickEditButtonFunction = (e) => {
        if (e.target.getAttribute('name') != null) {
            setCurrentInfo(contents[parseInt(e.target.getAttribute('name'))])
        } else {
            setCurrentInfo(contents[parseInt(e.target.parentNode.getAttribute('name'))])
        }

        handleOpen();
    }

    const saveStudentFunction = () => {
        // 저장 api 요청 함수
    }

    const deleteFunction = () => {
        Swal.fire({
            title: '정말 삭제하시겠습니까?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: '확인',
            cancelButtonText: '취소',
            confirmButtonColor: Style.color1,
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // db에 삭제요청 보내기
                return fetch(`//api.github.com/users/${login}`)
                    .then(response => {
                        //성공 시 삭제되었습니다 swal창
                    })
                    .catch(error => {
                        //실패 시 다시 한번 시도해주세요 swal창
                    })
            },
            allowOutsideClick: () => !Swal.isLoading()
        })

    }

    return (
        <Main>
            <div style={{
                margin: "30px 0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "80%",
                position:"relative"
            }}>
                <CustomInput type="penaltyInput" width="50%"  onSearchFunction={searchFunction} onChangeFunction={handleSearchFormChange}
                                                         input={word.input}
                                                         select={word.select}/>
                <div style={{position:"absolute", right:"15%"}}><CustomButton width="auto" content={<span>학생추가 +</span>}
                                                          onClickFunction={clickAddButtonFunction}
                                                          backgroundColor={Style.color1}/>
                </div>
            </div>
            <CustomTable type="penaltyTable" contents={contents} deleteFunction={deleteFunction}
                         editFunction={clickEditButtonFunction}/>

            <Modal open={open} style={{padding: "0px"}}>
                <Box sx={style}>
                    <StudentAddForm onChangeFunction={handleAddFormInputChange}
                                    onSaveStudentFunction={saveStudentFunction} onCloseModalFunction={handleClose}
                                    currentInfo={currentInfo}/>
                </Box>
            </Modal>
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
  flex-direction: column;
  align-items: center;

`;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
    p: 4,
    borderRadius: "10px",
    padding: '0px'
};


export default PenaltyPage;