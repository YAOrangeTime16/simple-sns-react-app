import React from 'react';
import { ModalOverlay, ModalContent, ButtonStyled, ContentFlexbox  } from './style';

// Parent : DeleteIcon.js

function Confirmation(props){
    return (
        <ModalOverlay>
            <ModalContent>
                <p>Are you sure you want to delete this post?</p>
                <ContentFlexbox>
                <ButtonStyled primary onClick={()=>{props.onDeletePost(props.postID, props.userID)}}>YES</ButtonStyled>
                <ButtonStyled onClick={props.onCancel}> Cancel</ButtonStyled>
                </ContentFlexbox>
            </ModalContent>
        </ModalOverlay>
    );
}

export default Confirmation;