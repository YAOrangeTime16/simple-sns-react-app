import React from 'react';
import { HeaderFlexbox, StyledUserName, UserNameCursor } from './style';
import UserIcon from './UserIcon';

function HeaderNameFrame(props){
    
    const showName = props.user.username ? props.user.username :
        props.user.email;
    
    const username = !props.loginStatus 
        ? <HeaderFlexbox>
           <StyledUserName>Welcome</StyledUserName>
           <UserIcon {...props} />
          </HeaderFlexbox>
        : <HeaderFlexbox onClick={props.onOpenMenu}>       
            <UserNameCursor>{ showName }</UserNameCursor><UserIcon {...props} />
          </HeaderFlexbox>;
    
    return(
        <HeaderFlexbox>{ username }</HeaderFlexbox>
    );
    
}

export default HeaderNameFrame;