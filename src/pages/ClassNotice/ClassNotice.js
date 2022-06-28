import React from 'react';
import { Link } from 'react-router-dom';

const ClassNotice = () => {
    return (
        <div>
            <h1>ClassNotice</h1>
            <Link to="/student" ><h4>Student page</h4></Link>
        </div>
    );
}

export default ClassNotice;
