import React from 'react';
import { TextArea } from './style';

// Parent : SortingByTimestamp & FilteredByUser

function Text(props){
    return(
      <TextArea name="text" onChange={props.onChange}/>  
    );
}

export default Text;