import React from 'react'
import Sidebar from './sidebarStudent';
import './Student.css';

const Student = () => {
  return (
      <main>
    <div className="studentContainer">
                  <Sidebar />
        <div className="navbarStudent">
            <div className="studentTitle">
                <h1>Class Manager</h1>
            </div>   
                  <div className="studentWrap">
            <div className="studentContent">
                      <img src="./images/login-avatar-2.PNG" alt="avatar" />  
                      <h1>UserName</h1>
                      <ul>
                          <li><i class="fa-solid fa-user"></i> Username: <span>User</span></li>
                          <li><i class="fa-solid fa-book"></i> Subjectname: <span>Math</span></li>
                          <li><i class="fa-solid fa-phone"></i> Phone <span>+998999999999</span></li>
                          <li><i class="fa-solid fa-envelope-open-text"></i> Email: <span>a@gmail.com</span></li>
                      </ul>   
                      <button className='std_btn'>Edit Profile</button>
            </div>
            </div>      
        </div>
     </div>   
      </main>
  )
}

export default Student