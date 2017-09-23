import React from 'react';
import { NoPostsMessage } from './style';

function EmptyPost(props){
    return(
    <NoPostsMessage onClick={props.onOpenPost}><p>Add Your Posts!</p></NoPostsMessage>
    );
}

export default EmptyPost;