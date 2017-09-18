import React from 'react';
import { HeaderUser } from './style';

function HeaderForUser(props){
    return(
        <HeaderUser><div>Only My Posts</div></HeaderUser>
    );
    
}

const withLoggedInUser = (BasicComponent) => (props) =>
    props.loginStatus ? <BasicComponent {...props} /> : null;

const withMainPage = (AnotherComponent) => (props) => {
    return !props.toggleAdmin ? <AnotherComponent {...props} /> : null;
}

const HeaderWithLoggedInUser = withLoggedInUser(HeaderForUser);

const HeaderWithLoggedInUserWithMainPage = withMainPage(HeaderWithLoggedInUser);

export default HeaderWithLoggedInUserWithMainPage;