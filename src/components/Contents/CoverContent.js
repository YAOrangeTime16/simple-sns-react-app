import React from 'react';
import { Flexbox } from '../General/style';
import { ButtonStyled, BackgroundColor, StyledText } from './style';

function CoverContent(props){
    return(
        <BackgroundColor>
            <Flexbox col>
                <StyledText>please login to use this app</StyledText>
                <ButtonStyled primary onClick={props.onModalShow}>Login</ButtonStyled>
                <StyledText>or</StyledText>
                <ButtonStyled attention name="loginType" value="false" onMouseDown={props.userType} onClick={props.onModalShow}>Sign Up</ButtonStyled>
            </Flexbox>
    </BackgroundColor>
    );
}

export default CoverContent;