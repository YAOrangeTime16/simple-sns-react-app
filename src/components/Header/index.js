import React, { Component } from 'react';
import { HeaderFlexbox, HeaderStyled, Logo, StyledUserName, UserNameCursor } from './style';
import HeaderForUser from './HeaderForUser';
import UserMenu from './UserMenu';
import UserIcon from './UserIcon';

// Parent : App.js

class Header extends Component {
    
    render(){
        const showName = !this.props.user.username ? this.props.user.email :
        this.props.user.username;
        const userName = !this.props.loginStatus 
        ? <HeaderFlexbox>
           <StyledUserName>Welcome</StyledUserName>
           <UserIcon {...this.props} />
          </HeaderFlexbox>
        : <HeaderFlexbox onClick={this.props.onOpenMenu}>       
            <UserNameCursor>{ showName }</UserNameCursor><UserIcon {...this.props} />
          </HeaderFlexbox>;        
        
        return(
            <div>
            <HeaderStyled>
                <Logo>LOGO</Logo>
                { userName }
                <UserMenu {...this.props}/>
            </HeaderStyled>
            <HeaderForUser {...this.props} />
            </div>
        );
    }
}

export default Header;