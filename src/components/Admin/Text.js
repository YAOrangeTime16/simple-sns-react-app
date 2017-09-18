import React from 'react';
import { TextArea } from './style';

// Parent : ContentAdmin.js

function Text(props){
    return(
      <TextArea onChange={props.onChange}/>  
    );
}

export default Text;