import React from 'react';
import { TextDiv } from './style';

// Parent : Contents

function TextArea (props) {
    const nameDisplay = props.userName 
                        ? props.userName 
                        : 'Anonymous';
    return(
        <div>
            <TextDiv>
                <div className="date">{ props.dateForDisplay }</div>
                <div className="name">{ nameDisplay }</div>
                {props.text}
            </TextDiv>
        </div>
    );
}


export default TextArea;