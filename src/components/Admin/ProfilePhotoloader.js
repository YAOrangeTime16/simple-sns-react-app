import React from 'react';
import { ProgressBar } from './style';

function ProfilePhotoloader(props){
    return(
        <ProgressBar value={props.uploaded} max="100" >0%</ProgressBar>
    );
}

const withToggleChecker = (BasicComponent) =>(props)=>{
    return props.profileloader ? <BasicComponent {...props} /> : null;
}

const ProfilePhotoloaderWithToggleChecker = withToggleChecker(ProfilePhotoloader);

export default ProfilePhotoloaderWithToggleChecker;