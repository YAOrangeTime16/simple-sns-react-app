import React, { Component } from 'react';
//---- Styles
import { ButtonStyled, CloseButton, InputStyled, Link } from './style';
import { Flexbox } from '../General/style';
//---- Component Files


// Parent : Modal.js
class Login extends Component {

    render(){
        const errorMessage = this.props.error;
        
        return(
            <form id="loginForm" onSubmit={this.props.onLogin}>
                <CloseButton onClick={this.props.onModalOff}>Close
                </CloseButton>
                    
                <Flexbox col>
                    <InputStyled 
                        type="email"
                        name="email"
                        placeholder="email"
                        value={this.props.email}
                        onChange={this.props.onChange}/>
                    <InputStyled
                        type="password"
                        name="password"
                        placeholder="password"
                        
                        onChange={this.props.onChange}/>
                    <ButtonStyled primary type="submit">Login</ButtonStyled>
                    <p>{ errorMessage }</p>
                    <ButtonStyled fb>Facebook</ButtonStyled>

                <Link attention bold>
                    <div onClick={this.props.userType}>Create a new account?</div>
                </Link>
                </Flexbox>
            </form>
        );
    }
}

export default Login;