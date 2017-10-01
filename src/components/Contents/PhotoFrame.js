import React from 'react';
import Image from 'react-image-resizer';
import { ContentFlexbox, Frame } from './style';

function PhotoFrame(props){
    return (
        <ContentFlexbox>
            <Frame>
                <Image 
                src={props.imgSrc}
                width={250}
                height={200}/>
            </Frame>
        </ContentFlexbox>
    );
}

export default PhotoFrame;