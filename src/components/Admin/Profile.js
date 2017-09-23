import React from 'react';
import Image from 'react-image-resizer';
import { Flexbox, CloseButton, InputStyled, Cursor } from './style';
import Button from './Button';
import ProfilePhotoloaderWithToggleChecker from './ProfilePhotoloader'

import Icon from '../General/Icon';

// Parent : App.js , Folder : src/components/Admin

function Profile (props){
    
    const photoFrame = props.user.photoURL ? <Image 
                        src={ props.user.photoURL }
                        alt="Your Photo"
                        noImageAlt="no image"
                        width={100}
                        height={100}
                   />
          : <div>No profile photo</div>;
    
    return(
        <div>
            <Cursor><CloseButton  onClick={props.onCloseProfile}>Close This Page</CloseButton></Cursor>
            <form onSubmit={props.changeProfile}>
               <Flexbox col>
                   { photoFrame }
                    <InputStyled 
                        type="text"
                        name="username"
                        placeholder="New Username"
                        onChange={props.onChange}/>
                    <label htmlFor="photoButton">
                    <Icon p title="Add A Profile Photo"/><p>{props.photofile}</p>
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