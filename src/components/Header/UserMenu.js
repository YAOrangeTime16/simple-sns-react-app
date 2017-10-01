import React from 'react';
import { Flexbox } from '../General/style';
import { CloseButton, ModalContent, ModalOverlay, LinkBordered } from './style';

//Parent : (Header) index.js

function UserMenu (props) {

    return(
            <div >
              <ModalOverlay flex >
               <ModalContent >
               <CloseButton onClick={props.onModalMenuOff}>Close</CloseButton>
               <Flexbox col>
                <LinkBordered bold 
                onClick={props.onOpenPost}>Post</LinkBordered>
                <LinkBordered bold
                onClick={props.onOpenProfile}>User Settings</LinkBordered>
                <LinkBordered bold 
                onClick={props.onSignout}>Logout</LinkBordered>
                </Flexbox>
                </ModalContent>
              </ModalOverlay>
            </div>
    );
}

const withShowChecker = (BasicComponent) =>(props)=> (props.modalMenu && props.user.email) ? <BasicComponent {...props} /> : null;

const UserMenuWithShowChecker = withShowChecker(UserMenu);

export default UserMenuWithShowChecker;