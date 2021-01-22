import React from 'react';
// import { Image } from '../../Styles/styles';

const ParallelImage2 = ({currentActiveBottom,index,i}) => {
    return (
        <>
            <img src={i.src} alt={i.alt+'-bottom'} 
            key={'splitter-bottom-'+ index}
            style={{position: 'absolute', top: '320px',
             left: `${105*i.right +335}px`,
            marginLeft: `${140*i.id}px`
        }}
         width='120' height='120'
        />
        </>
    );
}

export default ParallelImage2;
