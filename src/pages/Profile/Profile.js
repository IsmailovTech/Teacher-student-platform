import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
            <Link to="/student" ><h4>Student page</h4></Link>
        </div>
    );
}

export default Profile;
