import React from 'react';
import { HeaderStyled, Logo } from './style';
import HeaderForUser from './HeaderForUser';
import HeaderNameFrame from './HeaderNameFrame';
import UserMenu from './UserMenu';



// Parent : App.js

function Header(props){
    return(
        <div>
        <HeaderStyled>
            <Logo>SNS APP</Logo>
            <HeaderNameFrame {...props} />
            <UserMenu {...props}/>
        </HeaderStyled>
            <HeaderForUser {...props} />
        </div>
    );
}

export default Header;