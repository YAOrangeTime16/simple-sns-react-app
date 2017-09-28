import React from 'react';

import { Flexbox, Message, CloseButton, Cursor } from './style';
import Button from './Button';
import Icon from '../General/Icon';
import ProgressBarWithToggleChecker from './ProgressBar';
import Text from './Text';

// Parent : App.js

function Post(props) {
        return(
           <div>
            <Cursor onClick={props.onClosePost}>
            <CloseButton >Back to Main Page</CloseButton>
            <Message>{props.error}</Message>
            </Cursor>
               
            <form onSubmit={props.addPost}>
                <Flexbox col>
                    <Text onChange={props.onChange}/>
                    <label htmlFor="photoIcon">
                        <Icon p title="Add A Profile Photo"/>
                        <input type="file" id="photoIcon" onChange={props.getPhoto} style={{display: 'none'}} />
                    </label>
                    <ProgressBarWithToggleChecker {...props} />
                    {props.photofile}
                    { props.text ? <Button type="submit" {...props}/> : '' }   
                </Flexbox>
            </form>
            </div>
        );
}

export default Post;