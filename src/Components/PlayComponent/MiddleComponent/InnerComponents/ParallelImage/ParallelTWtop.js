import React from 'react';
import { Image } from '../../Styles/styles';

const ParallelTWtop = ({i,index,currentActiveTop}) => {
    return (
        <>
            <Image 
            src={i.src} alt={i.alt} key={'twTop-'+index}
            left={140*currentActiveTop + 274} margin={180*i.id -5}
            top={70} width='120' height='120'
            />
        </>
    );
}

export default ParallelTWtop;
