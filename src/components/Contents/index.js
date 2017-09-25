import React, { Component } from 'react';
import firebase from '../../firebase';
import { BackgroundColor} from './style';
import { Flexbox } from '../General/style';

import CoverContent from './CoverContent';
import EmptyPost from './EmptyPost';
import FilteringByUser from './FilteringByUser';
import SortingByTimestamp from './SortingByTimestamp';

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
                console.log('your like added');
            } else {
                AddLike();
                UpdateLikes();
                console.log('your like added');
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
                    
                    //UpdateLikes!!
                    //get the current likes
                    postRef.child(`likes`).once('value', snapshot=>{
                    const currentLikes = snapshot.val();
                    //remove 1 from the value
                    const newLikesNumber= currentLikes - 1;
                    //sendNewValue to DB
                    postRef.child(`likes`).set(newLikesNumber)
                    .catch(error => {console.log(`failed to add like: ${error}`)});
                    })
                } //--- end of if
            }//--- endof forIn
        })
    }
        
    render(){
        const FilterContents = this.props.filteringChecked 
        ? <FilteringByUser {...this.props}{...this.state} onAddLike={this.onAddLike} onDeleteLike={this.onDeleteLike} />
        : <SortingByTimestamp {...this.props}{...this.state} onAddLike={this.onAddLike} onDeleteLike={this.onDeleteLike} />;            

        return(
            <BackgroundColor>
                <Flexbox col>
                    {this.props.postsArray.length === 0 ? <EmptyPost {...this.props}/> : null}
                    { FilterContents }
                </Flexbox>
            </BackgroundColor>
        );
    }    
}

const withLoginCheck = (UserContent)=>(props)=>{
    return props.loginStatus ? <UserContent {...props}/> : <CoverContent />;
};

const ContentsWithLoginCheck = withLoginCheck(Contents);
export default ContentsWithLoginCheck;