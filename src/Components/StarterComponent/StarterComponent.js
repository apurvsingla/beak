import React from 'react';
import { fanSource, pianoSource, tableSource } from '../Source/Source';
import {useHistory} from 'react-router-dom';

const StarterComponent = () => {
    const history = useHistory();
    const lamp = () => {
        if(history.location.pathname === '/'){
            history.push('/lamp');
        }
    }
    const fan = () => {
        if(history.location.pathname === '/'){
            history.push('/fan');
        }
    }
    const piano = () => {
        if(history.location.pathname === '/'){
            history.push('/piano');
        }
    }
    
    return (
        <>
        <img src={fanSource} alt="fan" 
        className="cursor"
        onClick={() => fan()}
        />
        <img src={tableSource} alt="table" 
        className="cursor"
        onClick={() => lamp()}
        />
        <img src={pianoSource} alt="piano" 
        className="cursor"
        onClick={() => piano()}
        />
        </>
    );
}

export default StarterComponent;