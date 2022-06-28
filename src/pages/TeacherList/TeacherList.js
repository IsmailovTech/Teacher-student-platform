import React from 'react';
import { Link } from 'react-router-dom';

const TeacherList = () => {
    return (
        <div>
            <h1>Teacher List</h1>
            <Link to="/student" ><h4>Student page</h4></Link>
        </div>
    );
}

export default TeacherList;
