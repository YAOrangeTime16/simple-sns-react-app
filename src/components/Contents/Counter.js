import React from 'react';

// Parent : index.js (Contents)

function Counter(props){
    
    const likes = props.count ? '1' : '0';
    
    return(
        <div>
            { likes }
        </div>
    );
}

export default Counter;