import React from 'react';
import { Link } from 'react-router-dom';

const Marks = () => {
    return (
        <div>
            <h1>Marks page</h1>
            <Link to="/student" ><h4>Student page</h4></Link>
        </div>
    );
}

export default Marks;
