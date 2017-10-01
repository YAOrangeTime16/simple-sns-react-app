import React from 'react';
import { ButtonLike, ContentFlexbox } from './style';
import Counter from './Counter';

function LikeButton (props) {
    
    return (
        <ContentFlexbox>
            <Counter  {...props}/>
            <ButtonLike
                onClick={props.onAddLike}
                name={props.postID}
                value={props.likes} >LIKE
            </ButtonLike>
        </ContentFlexbox>
    );
}

export default LikeButton;