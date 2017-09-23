import React from 'react';
import { StyledCounter } from './style';

// Parent : index.js (Contents)

function Counter(props){
    
    
    return(
        <StyledCounter>
            {props.likes} likes
        </StyledCounter>
    );
}

export default Counter;