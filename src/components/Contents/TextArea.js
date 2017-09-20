import React from 'react';
import firebase from '.:/../firebase';
import { TextDiv } from './style';

// Parent : Contents

function TextArea (props) {
    let userName;
    firebase.database().ref(`users/${props.userID}`).once('value', snapshot => {
        userName = snapshot.val().username;
    })
    const nameDisplay = userName ? userName : 'No Username';
    return(
        <div>
            <TextDiv>
                <div className="name">{ nameDisplay }</div>
                <div>{props.text}</div>
                <div className="date">{ props.dateForDisplay }</div>
                {props.children}
            </TextDiv>
        </div>
    );
}


export default TextArea;