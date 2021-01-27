import React from 'react';
// import { bottomCurvedArrow } from '../../../../Source/Source';
import {Image} from '../../Styles/styles';
// import {} from '../../../../Source/Source';

const ParallelImage1 = ({i,index,currentActiveTop}) => {
    return (
        <>
        <Image src={i.src} alt={i.alt} key={'spliiter-'+ index}
            left={105*i.right+ 335} margin={140*i.id}
            top={70} width='120' height='120'
        />
        {/* <img src={i.src} alt='imageas' /> */}
        
        </>
    );
}

export default ParallelImage1;

