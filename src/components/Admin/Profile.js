import React from 'react';
import Image from 'react-image-resizer';
import { Flexbox, CloseButton, InputStyled } from './style';
import Button from './Button';
import ProfilePhotoloaderWithToggleChecker from './ProfilePhotoloader'

import Icon from '../General/Icon';

// Parent : App.js , Folder : src/components/Admin

function Profile (props){
    
    return(
        <div>
            <CloseButton  onClick={props.onCloseProfile}>Close This Page</CloseButton>
            <form onSubmit={props.changeProfile}>
               <Flexbox col>
                   <Image 
                        src={ props.user.photoURL }
                        alt="profile"
                        noImageAlt="no image"
                        width={100}
                        height={100}
                   />
                    <InputStyled 
                        type="text"
                        name="username"
                        placeholder="New Username"
                        onChange={props.onChange}/>
                    <label htmlFor="photoButton">
                    <Icon p title="Add A Profile Photo"/><p>{props.photoObj.name}</p>
                    <input type="file" id="photoButton" onChange={props.getPhoto} style={{display: 'none'}} />

                    </label>
                    <ProfilePhotoloaderWithToggleChecker {...props} />
                    <Button />
                </Flexbox>
            </form>
        </div>
        
    );
}

export default Profile;