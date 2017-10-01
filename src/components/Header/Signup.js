import React from 'react';
//---- Styles
import { ButtonStyled, CloseButton, InputStyled, Link, Message } from './style';
import { Flexbox } from '../General/style';
//---- Component Files


function Signup(props) {

        const errorMessage = props.error;
        
        return(
            <form id="loginForm" onSubmit={props.onSignup}>
                    <CloseButton onClick={props.onModalOff}>Close
                    </CloseButton>
                    <Flexbox col>
                    <InputStyled attention 
                        type="email" 
                        name="email" 
                        placeholder="email"
                        value={props.email}
                        onChange={props.onChange} />
                    <InputStyled attention 
                        type="email" 
                        name="email2" 
                        placeholder="comfirm email"
                        onChange={props.onChange} />
                    <InputStyled attention 
                        type="password" 
                        name="password" placeholder="password"
                        onChange={props.onChange} />
                    <ButtonStyled attention>Sign up</ButtonStyled>
                    <Message>{ errorMessage }</Message>
                   <ButtonStyled g onClick={props.onLoginWithGoogle}>with Google</ButtonStyled>
                   <Link attention bold>
                    <div onClick={props.userType}>Login?</div>
                    </Link>
                </Flexbox>
            </form>
        );
}

export default Signup;