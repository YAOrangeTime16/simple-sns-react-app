import React from 'react';
//---- Styles
import { ButtonStyled, CloseButton, InputStyled, Link, Message } from './style';
import { Flexbox } from '../General/style';
//---- Component Files


// Parent : Modal.js
function Login(props){

        const errorMessage = props.error;
        
        return(
            <form id="loginForm" onSubmit={props.onLogin}>
                <CloseButton onClick={props.onModalOff}>Close
                </CloseButton>
                    
                <Flexbox col>
                    <InputStyled 
                        type="email"
                        name="email"
                        placeholder="email"
                        value={props.email}
                        onChange={props.onChange}/>
                    <InputStyled
                        type="password"
                        name="password"
                        placeholder="password"
                        
                        onChange={props.onChange}/>
                    <ButtonStyled primary type="submit">Login</ButtonStyled>
                    <Message>{ errorMessage }</Message>
                    <ButtonStyled g onClick={props.onLoginWithGoogle}>with Google</ButtonStyled>

                <Link attention bold>
                    <div onClick={props.userType}>Create a new account?</div>
                </Link>
                </Flexbox>
            </form>
        );
}

export default Login;