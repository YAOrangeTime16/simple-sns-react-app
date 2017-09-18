import React, { Component } from 'react';
//---- Styles
import { Flexbox } from '../General/style';
import { ModalContent, ModalOverlay } from './style';
//---- Component Files
import Login from './Login';
import Signup from './Signup';

// Parent : App.js
class Modal extends Component {
    
    render(){
        const login = 
              <Login {...this.props} />;
        
        const signup = 
              <Signup {...this.props} />;
        
        const formType = this.props.loginType ? login : signup;
        
        return(
            <ModalOverlay flex>
                <ModalContent>

                       { formType }

                </ModalContent>
            </ModalOverlay>
        );
    }
    
}

const withTriggerCheck = (BasicComponent) => (props) => props.triggerModal ? <BasicComponent {...props} /> : null;

const ModalwithTriggerCheck = withTriggerCheck(Modal);

export default ModalwithTriggerCheck;