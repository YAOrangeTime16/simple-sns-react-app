import React, { Component } from 'react';
import firebase from '../../firebase';
import { TrashIcon } from '../General/Icon';
import Confirmation from './Confirmation';

// Parent : TextArea.js

class DeleteIcon extends Component {
    state={ confirmation: false }
    
    onConfirm=()=>{
        this.setState({ confirmation: true })
    }
    
    onCancelDeletion=()=>{
        this.setState({ confirmation: false })
    }
    
    render(){
        const confirmModal = this.state.confirmation ? <Confirmation {...this.props} onCancel={this.onCancelDeletion}/> : null;
        
        return(
        <div>
            { confirmModal }
            <TrashIcon title="delete this post" onClick={this.onConfirm} {...this.props}>{ TrashIcon }</TrashIcon>
        </div>
        );
    }
}

const withUserChecker = (IconComponent) =>(props)=>{
    const currentUser = firebase.auth().currentUser.uid;
     return (props.userID === currentUser) ? <IconComponent {...props}/> : null;
}

const DeleteIconWithUserChecker = withUserChecker(DeleteIcon);

export default DeleteIconWithUserChecker;