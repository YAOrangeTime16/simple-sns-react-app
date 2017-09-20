import React from 'react';
import firebase from '../../firebase';
import { ButtonLike } from './style';
import TextArea from './TextArea';
import Counter from './Counter';

function FilteringByUser(props){
    
    const postRef = firebase.database().ref(`posts`);
    const thisUser = firebase.auth().currentUser;
    const postsOfThisUserRef = firebase.database().ref(`users/${thisUser.uid}/posts`);
    
    //get all posts
    let AllPosts;
    postRef.once('value', snapshot=>{
        AllPosts = snapshot.val();
    })
    
    //get only this user's posts (postID)
    let PostIDsOfThisUser = [];
        postsOfThisUserRef.once('value', snapshot=>{ 
            const postList = snapshot.val();
            for(let key in postList){
                PostIDsOfThisUser.push(postList[key]);
            };
        })
    console.log(PostIDsOfThisUser);
    
    const FilteredPosts = PostIDsOfThisUser.map( post => {
        for(let postID in AllPosts){
            if(post === postID.toString()){
                return {
                    key: postID,
                    post: AllPosts[postID]
                };
            }
        };
    });
    
    const showOnlyMyPosts = FilteredPosts.map( obj => {
        const buttonText = obj.post.alreadyLiked ? "Liked" : "Like";
        return (
            <div key={obj.key}>
                <TextArea
                    text={obj.post.text} 
                    dateForDisplay={obj.post.dateForDisplay} 
                    userID={ obj.post.uid }>
                <Counter count={obj.post.alreadyLiked} />
                <ButtonLike value={obj.post.likes}>{ buttonText }</ButtonLike>
                </TextArea>    
            </div>
        )
    });
    
    return(
        <div>{ showOnlyMyPosts }</div>
    )
}

export default FilteringByUser;