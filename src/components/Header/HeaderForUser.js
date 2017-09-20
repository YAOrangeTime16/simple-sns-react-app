import React from 'react';
import { HeaderUser } from './style';

function HeaderForUser(props){
    return(
        <div>
        <HeaderUser>
        <input type="checkbox" id="check" value={!props.filteringChecked} onClick={props.onFilteringCheck} />
        <label htmlFor="check" >Only My Posts</label>
        </HeaderUser>
        
        </div>
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