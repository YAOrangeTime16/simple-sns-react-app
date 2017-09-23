import React, { Component } from 'react';
import firebase from '../../firebase';
import LikeButton from './LikeButton';
import LikedButton from './LikedButton';
import TextArea from './TextArea';

class FilteringByUser extends Component {
    state={}

    render(){
        const thisUser = firebase.auth().currentUser;
        const userID = thisUser.uid;

        //get all posts
        let AllPosts = this.props.postsArray;
        
        //get only this user's posts (PostIDs)
        const filteredPosts = AllPosts.filter( post => {
            return post.post.uid === userID;
        });
        
        const usersPosts = filteredPosts.map( obj => {
            //check if user has alread liked to this post
            const thisUser = this.props.user.uid;
            //get all postIds & likedInfo(likedBy) as objects
            const postLikedBy = obj.post.likedBy;
            //if this-user and liked-userID matches 
            //and if liked is true  ---- return "liked" button
            let button = false;
            for(let key in postLikedBy){
                if(postLikedBy[key].userID === thisUser){
                    button = true;
                }
            };//---- endof forIn
            
            const buttonComponent = button 
            ? <LikedButton {...this.props}
                    likes={obj.post.likes}
                    postID={obj.key} /> 
            : thisUser
            ? <LikeButton {...this.props}
                    likes={obj.post.likes}
                    postID={obj.key} />
            : <div>please login</div>;
            
                return (<div key={obj.key}>
                        <TextArea
                            text={obj.post.text} 
                            dateForDisplay={obj.post.dateForDisplay} 
                            userID={ obj.post.uid }>
                            { buttonComponent }
                        </TextArea>    
                    </div>
                    )
            })
        return <div>{usersPosts}</div>
    }
}

export default FilteringByUser;