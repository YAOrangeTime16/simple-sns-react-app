import React, { Component } from 'react';
import {HeaderStyled, Logo, UserName, UserNameCursor} from './style';
import HeaderForUser from './HeaderForUser';
import UserMenu from './UserMenu';
import UserIcon from './UserIcon';

// Parent : App.js

class Header extends Component {
    
    render(){
        
        const userName = this.props.loginStatus ? <UserNameCursor onClick={this.props.onOpenMenu}>{this.props.user.email}</UserNameCursor> : <UserName>Welcome</UserName>;        
        
        return(
            <div>
            <HeaderStyled>
                <Logo>LOGO</Logo>
                { userName }
                <UserIcon {...this.props} />
                <UserMenu {...this.props}/>
            </HeaderStyled>
            <HeaderForUser {...this.props} />
            </div>
        );
    }
}

export default Header;