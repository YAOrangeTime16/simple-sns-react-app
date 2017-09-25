import React, { Component } from 'react';
//---- Styles
import { ButtonStyled, CloseButton, InputStyled, Link, Message } from './style';
import { Flexbox } from '../General/style';
//---- Component Files


class Signup extends Component {
    
    render(){
        const errorMessage = this.props.error;
        
        return(
            <form id="loginForm" onSubmit={this.props.onSignup}>
                    <CloseButton onClick={this.props.onModalOff}>Close
                    </CloseButton>
                    <Flexbox col>
                    <InputStyled attention 
                        type="email" 
                        name="email" 
                        placeholder="email"
                        value={this.props.email}
                        onChange={this.props.onChange} />
                    <InputStyled attention 
                        type="email" 
                        name="email2" 
                        placeholder="comfirm email"
                        onChange={this.props.onChange} />
                    <InputStyled attention 
                        type="password" 
                        name="password" placeholder="password"
                        onChange={this.props.onChange} />
                    <ButtonStyled attention>Sign up</ButtonStyled>
                    <Message>{ errorMessage }</Message>
                   <ButtonStyled g onClick={this.props.onLoginWithGoogle}>with Google</ButtonStyled>
                   <Link attention bold>
                    <div onClick={this.props.userType}>Login?</div>
                    </Link>
                </Flexbox>
            </form>
                    
                            

        );
    }
}

export default Signup;