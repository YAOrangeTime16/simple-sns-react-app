import React from 'react';
import { ButtonStyled, StyledText } from './style';
import { Flexbox } from '../General/style';

function EmptyPost(props){
    return(
        <Flexbox col onClick={props.onOpenPost}>
            <StyledText>Post Something!!</StyledText>
            <ButtonStyled primary>Add Post</ButtonStyled>
        </Flexbox>
    );
}

export default EmptyPost;