import React, { Component } from 'react';
import firebase from '../../firebase';
import { TextDiv, TextBorder, ContentFlexbox } from './style';

// Parent : SortingByTimestamp / FilteringByUser

class TextArea extends Component {
    state={
        usernameOnPost: ''
    }
    
    getUserName=()=>{
        const postRef = firebase.database().ref(`users/${this.props.userID}`);
            
        postRef.child('username').once('value', snapshot=>{
                const name = snapshot.val();
                if(name){
                    this.setState({ usernameOnPost: snapshot.val()});
                }else {
                    this.setState({ usernameOnPost: 'No Name'});
                }  
            }).catch(err=>console.log(err));
    }
    
    componentDidMount(){
        this.getUserName();
    }
    
    render(){
        return(
            <div>
                <TextDiv>
                    <ContentFlexbox between>
                        <div className="name">{this.state.usernameOnPost}</div>
                        <div className="date">{ this.props.dateForDisplay }</div>
                    </ContentFlexbox>
                    <TextBorder>{this.props.text}</TextBorder>
                    {this.props.children}
                </TextDiv>
            </div>
        );
        
    }
    
    
}


export default TextArea;