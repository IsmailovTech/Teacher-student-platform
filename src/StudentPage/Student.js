import React, { useState, useEffect } from "react";
import "./Student.css";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Offcanvas } from "react-bootstrap";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "../api/Axios";

import { get_student } from "../redux/action";

const DATA_URL = "/users/profile";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Student = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const token = window.localStorage.getItem("Token");
  // console.log("getting token", token);

  useEffect(() => {
    axios
      .get("http://192.168.1.207:8080/users/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        dispatch(get_student(res.data.data))
        console.log(res.data.data.user.firstName)
      })
      .catch((err) => {
        return err;
      });
  }, []);
  console.log(state)
  //
  // var axios = require('axios');

  // var config = {
  //   method: 'get',
  //   url: 'http://192.168.1.207:8080/users/profile',
  //   headers: {
  //     'Authorization': token
  //   }
  // };

  // axios(config)
  // .then(function (response) {
  //   console.log(response.data);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [show, setShow] = useState(false);

  const handleCloses = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main>
      <div className="studentContainer">
        <div className="navbarStudent">
          <div className="studentTitle">
            <Link to="/student">
              <h1>Class Manager</h1>
            </Link>
            <div to="#" className="menu-bars">
              <IoIcons.IoIosMenu onClick={handleShow} />
            </div>
          </div>

          <Offcanvas
            placement="top"
            show={show}
            onHide={handleCloses}
            className="sideCanva"
          >
            <Offcanvas.Header className="offCanva-Header" closeButton>
              <ul className="nav-menu-items" onClick={handleCloses}>
                <Link to="/marks">
                  <li className="navbar-toggle"> Marks </li>
                </Link>
                <Link to="/classNotice">
                  <li className="navbar-toggle"> Class Notice </li>
                </Link>
                <Link to="/classAssignment">
                  <li className="navbar-toggle"> Class Assignment </li>
                </Link>
                <Link to="/teacherList">
                  <li className="navbar-toggle"> Teacher List </li>
                </Link>
                <Link to="/Profile">
                  <li className="navbar-toggle"> Profile </li>
                </Link>
                <Link to="/changePassword">
                  <li className="navbar-toggle"> Change Password </li>
                </Link>
                <Link to="/">
                  <li className="navbar-toggle"> Logout </li>
                </Link>
              </ul>
            </Offcanvas.Header>
          </Offcanvas>

          <div className="studentWrap">
            <div className="studentContent">
              <img src="./images/login-avatar-2.PNG" alt="avatar" />
              <h1>User</h1>
              <ul>
                <li>
                  <i class="fa-solid fa-user"></i> Firstname: <span>{state?.studentdata.user.firstName}</span>
                </li>
                <li>
                  <i class="fa-solid fa-user"></i> Lastname: <span>{state?.studentdata.user.lastName}</span>
                </li>
                
                <li>
                  <i class="fa-solid fa-book"></i> Subjectname:{" "}
                  <span>Math</span>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i> Phone{" "}
                  <span>{state?.studentdata.user.phone}</span>
                </li>
                <li>
                  <i class="fa-solid fa-envelope-open-text"></i> Email:{" "}
                  <span>{state?.studentdata.user.email}</span>
                </li>
              </ul>
              <Button onClick={handleOpen} className="std_btn">
                Edit Profile
              </Button>
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
};

export default Student;
