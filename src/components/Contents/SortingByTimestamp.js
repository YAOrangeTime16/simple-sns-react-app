import React, { Component } from 'react';
import LikeButton from './LikeButton';
import LikedButton from './LikedButton';
import TextArea from './TextArea';

class SortingByTimestamp extends Component {
    state={}

    render(){
        const SortingArray = this.props.postsArray;
        //Sort posts by posted time
        SortingArray.sort((a, b) => {

            if(a.post.timeStamp > b.post.timeStamp){
                return -1
            } else if(a.post.timeStamp < b.post.timeStamp){
                return 1
            } else {
                return 0;
            }
        });
        
        const PostList = SortingArray.map((obj) => {
            
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
                       {...this.props.user}
                        text={obj.post.text} 
                        dateForDisplay={obj.post.dateForDisplay}
                        userID={ obj.post.uid }
                        imgSrc={obj.post.photoURL}>
                        { buttonComponent }
                    </TextArea>
                </div>) 
        });

        return <div>{PostList}</div>;
    }

}


export default SortingByTimestamp;