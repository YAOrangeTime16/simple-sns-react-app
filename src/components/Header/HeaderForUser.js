import React from 'react';
import { HeaderUser } from './style';

function HeaderForUser(props){
    return(
        <div>
        <HeaderUser>
        <div>
            <input type="radio" id="radio1" name="latestFirst" value="1" onClick={props.onChange} defaultChecked />
            <label htmlFor="radio1" className="radiobutton">Latest</label>
            <input type="radio" id="radio2" name="latestFirst" value="0" onClick={props.onChange} />
            <label htmlFor="radio2" className="radiobutton">Oldest</label>
        </div>
        
        <input type="checkbox" id="check" name="userFilter" onClick={props.onFilteringCheck} />
        <label htmlFor="check" className="checkbox">Only My Posts</label>
        <input type="checkbox" id="likes" name="likesFilter"  onClick={props.onFilteringCheck} />
        <label htmlFor="likes" className="checkbox">Most Likes</label>
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