import React, { Component } from 'react';
import firebase from '../../firebase';

import { Flexbox, Message, CloseButton, Cursor } from './style';
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

    addPost = (e)=>{
        e.preventDefault();
        const d = new Date();
        const timestamp = d.getTime();
        
        const date = [
            d.getFullYear(),
            d.getMonth() + 1,
            d.getDate()
            ].join( '-' );
        //get userID, displayName
        const currentUser = firebase.auth().currentUser;
        const userID = currentUser.uid;
        
        //create a post object to send
        const postObj = {
            uid: userID,
            text: this.state.text,
            img: null,
            likes: 0,
            likedBy: '',
            timeStamp: timestamp,
            dateForDisplay: date
        }
        
        if(this.state.text){
           //add postObj to posts DB
           const postsRef = firebase.database().ref(`/posts`);

           postsRef.push(postObj)
           //then add postID to the users database
            .then((post) => {
                const usersPostsRef = firebase.database().ref(`users/${postObj.uid}/posts`);

                usersPostsRef.push(post.key)
                .catch(error => console.log(`failed to add postID: ${error}`));
               //AND set State to show a message
               this.setState({message: 'posted!'})
           })
            .catch(error => this.setState({ message: error.message}));
        }
    }
    
    onChangeText = (e)=>{
        this.setState({text: e.target.value})
    }
    
    
    render(){
        const postButton = this.state.text ? <Button type="submit" {...this.props}/> : '';
        
        return(
           <div>
            <Cursor onClick={this.props.onClosePost}>
            <CloseButton >Back to Main Page</CloseButton>
            <Message>{this.state.message}</Message>
            </Cursor>
               
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