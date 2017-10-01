import React from 'react';
import { ButtonLike, ContentFlexbox } from './style';
import Counter from './Counter';

// Parent : SortingByTimestamp / FilteredByUser, Folder : src/components/Contents

function LikedButton (props) {
    
    return (
        <ContentFlexbox>
            <Counter {...props} />
            <ButtonLike liked
                onClick={props.onDeleteLike}
                name={props.postID}
                value={props.likes} >LIKED
            </ButtonLike>
        </ContentFlexbox>
    );
}

export default LikedButton;