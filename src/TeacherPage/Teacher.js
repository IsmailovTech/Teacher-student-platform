import React,{useState} from 'react';
import "./Teacher.css"
import * as IoIcons from "react-icons/io";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import {Offcanvas} from 'react-bootstrap';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Teacher = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [show, setShow] = useState(false);

    const handleCloses = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <main>
            <div className="teacherContainer">
                <div className="navbarTeacher"> 
                    <div className="teacherTitle">
                        <h1>Class Manager</h1>
                        <div to="#" className="menu-bars">
                            <IoIcons.IoIosMenu onClick={handleShow} />
                        </div>
                    </div> 

                    <Offcanvas placement="top" show={show} onHide={handleCloses} className="sideCanva" >
                        <Offcanvas.Header className="offCanva-Header" closeButton>
                            <ul className="nav-menu-items" onClick={handleCloses} >
                                <li className="navbar-toggle"> Upload Assignment </li>
                                <li className="navbar-toggle"> Assignment list </li>
                                <li className="navbar-toggle"> View Submission </li>
                                <li className="navbar-toggle"> All Student List </li>
                                <li className="navbar-toggle"> White Notice </li>
                                <li className="navbar-toggle"> Inbox </li>
                                <li className="navbar-toggle"> Profile </li>
                                <li className="navbar-toggle"> Change Password </li>
                                <li className="navbar-toggle"> Logout </li>
                            </ul> 
                        </Offcanvas.Header>
                        
                    </Offcanvas>
                
                        <div className="teacherWrap">
                            <div className="teacherContent">
                                    <img src="./images/login-avatar-2.PNG" alt="avatar" />  
                                    <h1>UserName</h1>
                                    <ul>
                                        <li><i class="fa-solid fa-user"></i> Username: <span>User</span></li>
                                        <li><i class="fa-solid fa-book"></i> Subjectname: <span>Math</span></li>
                                        <li><i class="fa-solid fa-phone"></i> Phone <span>+998999999999</span></li>
                                        <li><i class="fa-solid fa-envelope-open-text"></i> Email: <span>a@gmail.com</span></li>
                                    </ul>   
                                     <Button onClick={handleOpen} className='teach_btn'>Edit Profile</Button>
                                     <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <h1>Input information</h1>
                                        </Box>
                                    </Modal>
                        </div>  
                    </div>      
                </div>
            </div>   
      </main>
    );
}

export default Teacher;
