import React from 'react';
import { Flexbox } from '../General/style';
import { ButtonStyled, BackgroundColor, StyledText } from './style';

function CoverContent(props){
    return(
        <BackgroundColor>
    <Flexbox col>
    <StyledText>please login to use this app</StyledText>
    <ButtonStyled primary>Login</ButtonStyled>
    <StyledText>or</StyledText>
    <ButtonStyled attention>Sign Up</ButtonStyled>
    </Flexbox>
    </BackgroundColor>
    );
}

export default CoverContent;