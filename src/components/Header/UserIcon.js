import React from 'react';
import Icon from '../General/Icon';

//Parent : (Header) index.js

function UserIcon(props){
    return(
        <div>UserIcon</div>
    );
}

const withUserCheck = (BasicComponent)=>(props)=>{
    return props.user ? <BasicComponent {...props} />: <Icon {...props} />
}

const UserIconWithUserCheck = withUserCheck(UserIcon);
export default UserIconWithUserCheck;