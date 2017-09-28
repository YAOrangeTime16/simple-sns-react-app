import React from 'react';
import Image from 'react-image-resizer';
import Icon from '../General/Icon';

//Parent : (Header) index.js

function UserIcon(props){
    
    return(
        <div>
           <Image 
            src={ props.user.photoURL }
            alt=""
            width={50}
            height={50}
            style={{ margin: '1rem'}}
           />
        </div>
    );
}

const withUserCheck = (BasicComponent)=>(props)=>{
    return props.user ? <BasicComponent {...props} />: <Icon {...props} />
}

const UserIconWithUserCheck = withUserCheck(UserIcon);

export default UserIconWithUserCheck;