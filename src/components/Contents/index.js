import React, { Component } from 'react';
import firebase from '../../firebase';
import { BackgroundColor} from './style';
import { Flexbox } from '../General/style';

import CoverContent from './CoverContent';
import EmptyPost from './EmptyPost';
import FilteringContents from './FilteringContents';

//Parent : App.js

class Contents extends Component {
    state={}

    onAddLike =(e)=>{
        //get current "userID"
        const currentUser = firebase.auth().currentUser;
        const userID = currentUser.uid;
        
        //get postID & ref
        const postID = e.target.name;
        const postRef = firebase.database().ref(`posts/${postID}`);
        //check if this user have liked to this post
        postRef.child(`likedBy`).once('value', snapshot=>{
            const likedByObjArray = snapshot.val();
            
            //send userID to the "postID"/likedBy
            const AddLike =()=>{ 
                const likedInfo = {
                    userID: userID
                };
                postRef.child(`likedBy`).push(likedInfo)
                .catch(error=>console.log(`Failed to add likes to posts DB: ${error}`))};

            // get the current likes
            const UpdateLikes =()=>{ postRef.child(`likes`).once('value', snapshot=>{
                const currentLikes = snapshot.val();
                //add 1 to the value
                const newLikesNumber= currentLikes + 1;
                //sendNewValue to DB
                postRef.child(`likes`).set(newLikesNumber)
                .catch(error => {console.log(`failed to add like: ${error.message}`)});
            })};
            
            if(likedByObjArray){
                for(let key in likedByObjArray){
                    if(likedByObjArray[key].userID===userID){
                        console.log('you have already liked');
                        return false;   
                    }
                } //---end of forIn
                AddLike();
                UpdateLikes();
            } else {
                AddLike();
                UpdateLikes();
            }
        });
    }
    
    onDeleteLike =(e)=>{
        //get current "userID"
        const currentUser = firebase.auth().currentUser;
        const userID = currentUser.uid;
        
        //get postID & ref
        const postID = e.target.name;
        const postRef = firebase.database().ref(`posts/${postID}`);
        
        postRef.child(`likedBy`).once('value', snapshot=>{
            const likedByObjArray = snapshot.val();
            for(let key in likedByObjArray){
                //check if this user have liked to this post
                if(likedByObjArray[key].userID === userID){
                    const likedRef = postRef.child(`likedBy/${key}`);
                    
                    likedRef.remove()
                    .catch(error => {console.log(`failed to remove "liked" ${error}`)});
                    
                    //UPDATE LIKES
                    postRef.child(`likes`).once('value', snapshot=>{
                    const currentLikes = snapshot.val();
                    const newLikesNumber= currentLikes - 1;
                    //send NewValue to DB
                    postRef.child(`likes`).set(newLikesNumber)
                    .catch(error => {console.log(`failed to add like: ${error}`)});
                    })
                } //--- end of if
            }//--- endof forIn
        })
    }
    
    onDeletePost=(postId, userId)=>{
        const postID = postId;
        const userID = userId;
        const postRef = firebase.database().ref(`posts/${postID}`);
        const userPostRef = firebase.database().ref(`users/${userID}/posts`)
        userPostRef.once('value', snapshot => {
            const usersPosts = snapshot.val();
            for(let key in usersPosts){
                if(usersPosts[key] === postID){
                    userPostRef.child(key).remove();
                }
            }
        })
        postRef.remove();
    }
        
    render(){
        return(
            <div>
            <BackgroundColor>
                <Flexbox col>
                    {this.props.postsArray.length === 0 ? <EmptyPost {...this.props}/> : null}
                    <FilteringContents 
                        onDeletePost={this.onDeletePost}
                        onDeleteLike={this.onDeleteLike}
                        onAddLike={this.onAddLike}
                        {...this.props} />
                </Flexbox>
            </BackgroundColor>
            </div>
        );
    }    
}

const withLoginCheck = (UserContent)=>(props)=>{
    return props.loginStatus ? <UserContent {...props}/> : <CoverContent {...props}/>;
};

const ContentsWithLoginCheck = withLoginCheck(Contents);
export default ContentsWithLoginCheck;