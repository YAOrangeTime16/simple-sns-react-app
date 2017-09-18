import React, { Component } from 'react';
import firebase from '../../firebase';

import Counter from './Counter';
import TextArea from './TextArea';
import { Flexbox } from '../General/style';
import { ButtonLike } from './style';

//Parent : App.js

class Contents extends Component {
    
    state={}

    
    render(){
        const {postsArray} = this.props;
        //Sort posts by posted time
        postsArray.sort((a, b) => {
            
            if(a.post.date > b.post.date){
                return -1
            } else if(a.post.date < b.post.date){
                return 1
            } else {
                return 0;
            }
        })
        
        const postList = postsArray.map((obj) => {
           
            return ( 
                <div key={obj.key}>
                    <TextArea
                        text={obj.post.text} 
                        dateForDisplay={obj.post.dateForDisplay} 
                        user={this.props.user}/>
                    <Counter count={obj.post.like} />
                    <ButtonLike 
                        value={obj.post.likes}>
                    Like
                    </ButtonLike>
                </div>
                )
        })
    
        return(
            <Flexbox col>
            { postList }
            </Flexbox>
        );
    }
}


export default Contents;