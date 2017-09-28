import React, { Component } from 'react';
import firebase from '../../firebase';
import LikeButton from './LikeButton';
import LikedButton from './LikedButton';
import TextArea from './TextArea';

class FilteringContents extends Component {
    state={}
    
    sortingByTimestamp=(SortingArray, latestFirst)=>{
        //Sort posts by posted time
        if(latestFirst==="1"){
            SortingArray.sort((a, b) => {
                if(a.post.timeStamp > b.post.timeStamp){
                    return -1
                } else if(a.post.timeStamp < b.post.timeStamp){
                    return 1
                } else {
                    return 0;
                }
            })
        } else {
            SortingArray.sort((a, b) => {
                if(a.post.timeStamp < b.post.timeStamp){
                    return -1
                } else if(a.post.timeStamp > b.post.timeStamp){
                    return 1
                } else {
                    return 0;
                }
            })
        }
        return SortingArray;
    };

    mostLikes=(ArrayToSort)=>{
        const MaxLikes = ArrayToSort.map( postItem => postItem.post.likes);
        const MaxValue = Math.max.apply(null, MaxLikes);
        return ArrayToSort.filter(postItem => (postItem.post.likes === MaxValue));
    }
    
    showContent=(type)=>{
        const AllPosts = this.props.postsArray;
        const thisUser = firebase.auth().currentUser;
        const userID = thisUser.uid;

        //ARRAY OF THIS USERS POSTS
        const usersPosts = AllPosts.filter(post =>(post.post.uid === userID) );
        
        //ARRAY OF POSTS WITH MOST LIKES
        const PostsWithMostLikes = this.mostLikes(AllPosts);
        
        //ARRAY OF THIS USERS POSTS WITH MOST LIKES
        const bothFilters = this.mostLikes(usersPosts);
        
        //BUILD DOM DEPENDING ON POST ARRAY TYPE
        const filterFunc=(filterArray)=>{
            const thisUser = firebase.auth().currentUser;
            const userID = thisUser.uid;
        
            const result = filterArray.map( obj => {
            //CHECK if this-user has alread liked to this post
            const thisUser = this.props.user.uid;
            //get all postIds & likedInfo(likedBy) as objects
            const postLikedBy = obj.post.likedBy;
            //if this-user and liked-userID matches 
            //and if "liked" is true  ---- return "Liked" button
            let button = false;
            for(let key in postLikedBy){
                if(postLikedBy[key].userID === userID){
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
                           {...this.props}
                           {...this.props.user}
                            text={obj.post.text} 
                            dateForDisplay={obj.post.dateForDisplay} 
                            userID={ obj.post.uid }
                            postID={obj.key}
                            imgSrc={obj.post.photoURL}>
                            { buttonComponent }
                        </TextArea>    
                    </div>
                    )
            })//endof map
            return  result;
    }//endof filterFunc
        
        //CALL FUNCTIONS DEPENDING ON USERS INPUT
        const TimeOrder = this.props.latestFirst;
        if(type===1){
            const userPosts = this.sortingByTimestamp(usersPosts, TimeOrder)
            return filterFunc(userPosts);
        } else if(type===2){
            const popularPosts = this.sortingByTimestamp(PostsWithMostLikes, TimeOrder)
            return filterFunc(popularPosts);//2
        } else if(type===3){
            const usersPopularPosts = this.sortingByTimestamp(bothFilters, TimeOrder)
            return filterFunc(usersPopularPosts); //3
        } else {
            const allPosts = this.sortingByTimestamp(AllPosts, TimeOrder)
            return filterFunc(allPosts);
        }
    }
    
    render(){
        const filterType = (this.props.userFilter && this.props.likesFilter) ? 3 
        :(this.props.userFilter) ? 1 
        :(this.props.likesFilter) ? 2
        : 0;
        const showContent = this.showContent(filterType);
        
        return(
        <div>{showContent}</div>)
    }
}

export default FilteringContents;