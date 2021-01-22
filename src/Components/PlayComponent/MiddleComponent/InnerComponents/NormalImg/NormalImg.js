import React from 'react';
import { bottomCurvedArrow, conditionSource, 
powerSource, rightCurvedArrow,
leftBottomCurvedArrow,
rightBottomCurvedArrow, 
lightSource} from '../../../../Source/Source';
import {
Image,
ConncectionLineNormal,
CancelNormal,
BottomConnectionLine,
ElectronConnectionSideLines,
ConditionLines,
Arrow 
} from '../../Styles/styles';
import {
CommonElectron
} from './Electrons/Electrons';
const NormalImg = ({i,index,arr,deleteImage, 
    newImage,activeBottomFunc,activeTopFunc,twoWayTopRight,
    twoWayBottomRight}) => {
    const line = () => {
        return(<>
            <ConncectionLineNormal
            className={'row-line'}
            margin={140*i.id}
            left={40*i.id + 162}
            key={index+'--icon-arrow'} />
            </>
        )
    }
    return (
        <>
            {i.src!== conditionSource ? 
            <Image src={i.src} alt={i.alt} key={index}
            left={140*i.id+ 50} margin={40*i.id}
            width={120} height={120} top={195}
            />
                :
            <Image src={i.src} alt={i.alt} key={index}
            left={140*i.id+ 50} margin={40*i.id} 
            width={113} height={110} top={200}/>}
            
            {/* connection lines */}
            {(arr.length-1) === index ? null : line() }

            {/* electrons flow */}
            {i.src === powerSource ? <CommonElectron 
            key={'electrons-' + index}
            index={index}
            /> : null}

            {/* delete sign */}
            <CancelNormal 
            stroke={'orange'}
            left={140*i.id+145}
            margin={40*i.id}
            key={"connection-lines-"+ index}
            onClick={(e) => deleteImage(i.id)} />

            {i.src === conditionSource ? <>
            <ConditionLines
            left={40*i.id + 162} margin={140*i.id}
            key={index+'-right-connection'} top='255'
            width='75' height='5' borderLeft="none"
            borderRight='none'
            />
            {/* <ConditionLines 
            key={index+'-bottom-connection'}
            width='5' height='75' top='295'
            left={40*index + 107} margin={140*index}
            borderBottom='none'
            /> */}
            {/* <ConditionLines 
            key={index+'-top-connection'}
            width='5' height='75' top='123'
            left={40*index + 107} margin={140*index}
            borderBottom='none' borderTop='none'
            /> */}
             <Arrow 
                key={index+'-arrow'}
                id={index+'-arrow'}
                margin={40*i.id + 50} left={140*i.id +170}
                top='251' rotate='rotate(315deg)'
                />
                {i.even % 2 !==0 ?
                <>
                <img src={rightCurvedArrow} alt="right-curve" 
            style={{
            position: 'absolute',
            width: '138px',
            height: '80px',
            top: '123px',
            left: `${140*i.id}px`,
            marginLeft: `${40*i.id + 100}px`,
            cursor: 'pointer'
            }}
            onClick={() => activeTopFunc(i.id)}
            />
            
            <img 
            alt="left-bottom-curve" 
            style={{
                position: 'absolute',
                width: '138px',
                height: '80px',
                top: '295px',
                left: `${140*i.id}px`,
                marginLeft: `${40*i.id + 100}px`,
                cursor: 'pointer'
                }}
                src={leftBottomCurvedArrow}
                onClick={() => activeBottomFunc(i.id)}/>
                </>: 
                <>
                <img src={bottomCurvedArrow} 
            alt="bottom-curve" 
            style={{
            position: 'absolute',
            width: '198px',
            height: '100px',
            top: '123px',
            left: `${140*i.id -45}px`,
            marginLeft: `${40*i.id -10}px`,
            cursor: 'pointer'
            }}
            />
            <img src={rightBottomCurvedArrow} 
            alt="right-bottom-curve" 
            style={{
            position: 'absolute',
            width: '198px',
            height: '100px',
            top: '295px',
            left: `${140*i.id -45}px`,
            marginLeft: `${40*i.id -10}px`,
            cursor: 'pointer'
            }}
            />
            </>}
            </>:null}

            {/* bottom electron Connection */}
            {newImage.length !==1 ? null : newImage[0].length -1 === index ? <> 
            <BottomConnectionLine
            key="bottom-connection-line"
            width={140*i.id + 130} 
            />
             <ElectronConnectionSideLines 
            key="left-connection-line"
             left="80"
            />
            <ElectronConnectionSideLines 
            key="right-connection-line"
            left={140*i.id + 202}
            />
            </>: null}

            {i.src === lightSource ? 
            <>
            <img 
            src={rightCurvedArrow} alt={'twtop'}
            style={{
                position: 'absolute',
                width: '138px',
                height: '100px',
                top: '123px',
                left: `${140*i.id +90}px`,
                marginLeft: `${40*i.id+10}px`,
                cursor: 'pointer'
                }}
                onClick={() => twoWayTopRight(i.id)}
            />
            <img src={leftBottomCurvedArrow} 
            alt="right-bottom-curve" 
            style={{
                position: 'absolute',
                width: '138px',
                height: '100px',
                top: '295px',
                left: `${140*i.id +90}px`,
                marginLeft: `${40*i.id +10}px`,
                cursor: 'pointer'
            }}
            />
            </>: null}
        </>
    );
}

export default NormalImg;
