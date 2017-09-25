import React from 'react';
import { Bar } from './style';

function ProgressBar(props){
    return(
        <Bar value={props.uploaded} max="100" >0%</Bar>
    );
}

const withToggleChecker = (BasicComponent) =>(props)=>{
    return props.photoloader ? <BasicComponent {...props} /> : null;
}

const ProgressBarWithToggleChecker = withToggleChecker(ProgressBar);

export default ProgressBarWithToggleChecker;