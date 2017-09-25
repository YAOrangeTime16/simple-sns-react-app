import React, { Component } from 'react';

import { Flexbox, Message, CloseButton, Cursor } from './style';
import Button from './Button';
import Icon from '../General/Icon';
import ProgressBarWithToggleChecker from './ProgressBar';
import Text from './Text';

// Parent : App.js

class Post extends Component {
    
    
    render(){
        const postButton = this.props.text ? <Button type="submit" {...this.props}/> : '';
        
        return(
           <div>
            <Cursor onClick={this.props.onClosePost}>
            <CloseButton >Back to Main Page</CloseButton>
            <Message>{this.props.error}</Message>
            </Cursor>
               
            <form onSubmit={this.props.addPost}>
                <Flexbox col>
                    <Text onChange={this.props.onChange}/>
                    <label htmlFor="photoIcon">
                        <Icon p title="Add A Profile Photo"/>
                        <input type="file" id="photoIcon" onChange={this.props.getPhoto} style={{display: 'none'}} />
                    </label>
                    <ProgressBarWithToggleChecker {...this.props} />
                    {this.props.photofile}
                    { postButton }
                    
                </Flexbox>
            </form>
            </div>
        );
    }
}

export default Post;