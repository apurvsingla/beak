import React from 'react';

const style = {
    height: '8px',
    width: '8px',
    backgroundColor: 'green',
    borderRadius: '50px',
    position: 'absolute',
    top: '255px'
}

export const ElectronOne = ({index}) => {
    return (
        <>
        <span 
        style={{
            ...style,
            left: `${140*index + 163}px`,
        }}
        />
        </>
    );
}

export const ElectronTwo = ({index}) => {
    return (
        <>
        <ElectronOne index={index}/>
        <span 
        style={{
            ...style,
            left: `${140*index + 175}px`,
        }}
        />
        </>
    );
}

export const ElectronThree = ({index}) => {
    return (
        <>
        <ElectronTwo index={index}/>
        <span 
        style={{
            ...style,
            left: `${140*index + 187}px`,
        }}
        />
        </>
    );
}
export const ElectronFour = ({index}) => {
    return (
        <>
        <ElectronTwo index={index}/>
        <span 
        style={{
            ...style,
            left: `${140*index + 199}px`,
        }}
        />
        </>
    );
}

export const CommonElectron = ({index}) => {
    return(
        <>
        <ElectronThree index={index}/>
        <ElectronTwo index={index}/>
        <ElectronTwo index={index}/>
        <ElectronFour index={index} />
        </>
    )
}

