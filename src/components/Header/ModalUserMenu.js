import React, { Component } from 'react';
//import { ModalContent, ModalOverlay } from './style';
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