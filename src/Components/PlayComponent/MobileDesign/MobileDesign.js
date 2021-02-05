import React from 'react';
import { DropTarget } from 'react-drag-drop-container';
// import BottomMobileComponent from './BottomMobileComponent/BottomMobileComponent';

const MobileDesign = () => {
    return (
        <DropTarget 
        targetKey="foo" 
        onHit={() => console.log('y')}>
            {/* <BottomMobileComponent /> */}
        </DropTarget>
    );
}

export default MobileDesign;
