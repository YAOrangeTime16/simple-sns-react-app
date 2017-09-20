import React from 'react';

import FilteringByUser from './FilteringByUser';
import SortingByTimestamp from './SortingByTimestamp';
import { Flexbox } from '../General/style';

//Parent : App.js

function Contents(props) {

    return(
        <Flexbox col>
        { props.children }
        </Flexbox>
    );
}

const withFilterCheck = (BasicComponent) =>(props)=>{
    return props.filteringChecked 
        ? <BasicComponent><FilteringByUser {...props} /></BasicComponent> 
        : <BasicComponent><SortingByTimestamp {...props} /></BasicComponent>;
}

const ContentsWithFilterCheck = withFilterCheck(Contents);

export default ContentsWithFilterCheck;