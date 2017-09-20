import React, { Component } from 'react';
import firebase from '../../firebase';

import { Flexbox, Message, CloseButton } from './style';
import Button from './Button';
//import Message from './Message';
import Photoloader from './Photoloader';
import Text from './Text';

// Parent : App.js

class Post extends Component {
    
    state = {
        text: '',
        message: ''
    }

    ComponentDidMount(){

    }

    addPost = (e)=>{
        e.preventDefault();
        const d = new Date();
        const timestamp = d.getTime();
        
        const date = [
            d.getFullYear(),
            d.getMonth() + 1,
            d.getDate()
            ].join( '-' );
        
        const postObj = {
            uid: this.props.user.uid,
            userName: this.props.user.username || '',
            text: this.state.text,
            img: null,
            likes: 0,
            alreadyLiked: false,
            timeStamp: timestamp,
            dateForDisplay: date
        }
        
   if(this.state.text){
       firebase.database().ref(`/posts`).push(postObj)
           .then((post) => { 
           firebase.database().ref(`users/${postObj.uid}/posts`).push(post.key);
           this.setState({message: 'posted'})
       }
           ).catch(error => this.setState({ message: error}));
       } else {
       this.setState({message: 'Please fill in'})
   }
    }
    
    onChangeText = (e)=>{
        this.setState({text: e.target.value})
    }
    
    
    render(){
        const postButton = this.state.text ? <Button type="submit" {...this.props}/> : '';
        
        return(
           <div>
            <CloseButton onClick={this.props.onClosePost}>Back to Main Page</CloseButton>
            <Message>{this.state.message}</Message>
               
            <form onSubmit={this.addPost}>
                <Flexbox col>
                    <Text name="text" onChange={this.onChangeText}/>
                    <Photoloader />
                    { postButton }
                </Flexbox>
            </form>
            </div>
        );
    }
}

export default Post;