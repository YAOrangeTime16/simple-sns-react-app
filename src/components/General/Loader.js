import React from 'react';
import { Flexbox, Spinner, SpinnerText } from './style';

function Loader(props){
    return (
        <Flexbox col>
            <Spinner>
                <div className="animation">
                    <div className="ball"></div>
                    <div className="shadow"></div>
                </div>
            </Spinner>
            <SpinnerText>LOADING PAGE...</SpinnerText>
        </Flexbox>
    ); 
}

export default Loader;