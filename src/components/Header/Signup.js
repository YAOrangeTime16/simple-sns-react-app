import React, { Component } from 'react';
//---- Styles
import { ButtonStyled, CloseButton, InputStyled } from './style';
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
                    <p>{ errorMessage }</p>
                   <ButtonStyled fb>Facebook</ButtonStyled>
                </Flexbox>
            </form>
                    
                            

        );
    }
}

export default Signup;