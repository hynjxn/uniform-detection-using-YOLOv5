import React, {useEffect, useState} from 'react';
import CustomInput from "./CustomInput";
import CustomTable from "./CustomTable";
import CustomButton from "./CustomButton";
import styled from 'styled-components';
import {Style} from "../Style";
import Swal from "sweetalert2";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import StudentAddForm from "./StudentAddForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFloppyDisk, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

function PenaltyPage(props) {
   // const contents = [{
   //     student_id: "21319", student_name: "신은수", parent_ph:
   //         "010-4710-6207", penalty_points: "-17"
   // }, {
   //     student_id: "21320", student_name: "신은수", parent_ph:
   //         "010-4710-6207", penalty_points: "-17"
   // }];

    const [contents, setContents] = useState([{
        student_id: "",
        student_name: "",
        parent_ph: "",
        penalty_points: ""
    }]);
    const [word, setWord] = useState({input: "", select: "student_id"});
    const [currentInfo, setCurrentInfo] = useState({
        student_id: "",
        student_name: "",
        parent_ph: "",
        penalty_points: ""
    })

    const [open, setOpen] = React.useState(false);
    const [addOrEdit,setAddOrEdit] = React.useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        // 모든 학생 불러오기 api 호출
        axios.get("/penalty/list")
             .then((result)=>{
                let list = result.data.penalties;
                //console.log("list : ", list);
                setContents(list);
             })
            .catch(()=>{console.log("fail");})
    }, []);

    useEffect(()=>{
        console.log(word)
    },[word])

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
        axios.post("/penalty/search", {id_or_name: word.select==="student_name"?1:0, student_id_or_name: word.input})
            .then((result)=> {
                console.log(result.data)
            })
            .catch(()=>{console.log("search fail")})
    }

    const clickAddButtonFunction = () => {
        setCurrentInfo({
            student_id: "",
            student_name: "",
            parent_ph: "",
            penalty_points: ""
        })
        setAddOrEdit("Add")
        handleOpen();
    }

    const clickEditButtonFunction = (e) => {
        if (e.target.getAttribute('name') != null) {
            setCurrentInfo(contents[parseInt(e.target.getAttribute('name'))])
        } else {
            setCurrentInfo(contents[parseInt(e.target.parentNode.getAttribute('name'))])
        }
        setAddOrEdit("Edit")
        handleOpen();
    }

    const saveStudentFunction = () => {
        if(addOrEdit === "Add"){
            // 새로운 학생 저장 api 호출
            axios.post("/penalty/add", currentInfo)
                .then((result)=>{
                    if(result.data.result == 'success'){
                        window.location.reload(); // 정상적으로 db에 저장되면 현재 페이지 새로고침
                    }
                })
                .catch(()=>{console.log("add fail");})
        }
        else if(addOrEdit === "Edit"){
            // 기존 학생 수정 api 호출
            axios.post("/penalty/fix", currentInfo)
                .then((result)=>{
                    if(result.data.result == 'success'){
                        window.location.reload();
                    }
                })
                .catch(()=>{console.log("edit fail");})
        }
    }

    const deleteFunction = (e) => {
        console.log(e.target);
        console.log(e.target.parentNode);
        console.log(e.target.parentNode.getAttribute('name'));

        if (e.target.getAttribute('name') != null) {
            setCurrentInfo(contents[parseInt(e.target.getAttribute('name'))])
        } else {
            setCurrentInfo(contents[parseInt(e.target.parentNode.getAttribute('name'))])
        };

        Swal.fire({
            title: 'Delete Anyway?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            confirmButtonColor: Style.color1,
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // 기존 학생 삭제 api 호출
                console.log(currentInfo)
                axios.post("/penalty/delete", {student_id : currentInfo.student_id})
                    .then((result)=>{
                        if(result.data.result == 'success'){
                            window.location.reload();
                        }
                     })
                    .catch(()=>{console.log("delete fail")})
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
                <div style={{position:"absolute", right:"13%"}}><CustomButton width="auto" content={
                    <>
                        <FontAwesomeIcon name="scanner" icon={faUserPlus} color="white"
                                         style={{fontSize: 20, marginRight: "10"}}/>
                        <span style={{fontSize: 18}}>Add</span>
                    </>
                }
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
                                    currentInfo={currentInfo}
                                    addOrEdit = {addOrEdit}
                    />

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