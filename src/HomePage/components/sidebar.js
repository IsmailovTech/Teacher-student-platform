
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const SideBarModal = () => {
  return (
    <Menu>
      
          <ul>
           <Link to='./login' ><li>Login</li> </Link> 
          </ul>
    </Menu>
    )
}

export default SideBarModal; 