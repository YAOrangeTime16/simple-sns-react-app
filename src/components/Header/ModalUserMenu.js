import React, { Component } from 'react';
import UserMenu from './UserMenu';

// Parent : App.js

function ModalUserMenu(props){
    return(
        <div>
            <UserMenu {...props}/>
        </div>
    );
}

export default ModalUserMenu;