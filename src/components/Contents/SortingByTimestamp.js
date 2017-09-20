import React from 'react';
import { ButtonLike } from './style';
import TextArea from './TextArea';
import Counter from './Counter';

function SortingByTimestamp(props){
    const SortingArray = props.postsArray;
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
    
    return <div>{PostList}</div>;
    

}

export default SortingByTimestamp;