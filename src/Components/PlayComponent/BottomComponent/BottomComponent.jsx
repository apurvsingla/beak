import React from 'react';
import {BottomDesk, Icon, Img, MiddleIconDesk} from '../Styles/PlayComponent.styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ReactSwipe from 'react-swipe';
import {
graphSource,
conditionSource,
splitterSource,
tactSource,
beeperSource,
ledSource,
lightSource,
powerSource,
sequenceSource,
distanceSource,
magSource,
tempSource,
soundSource,
motorSource
} from '../../Source/Source';
const BottomComponent = ({
    onImage1Concat
}) => {
    let reactSwipeEl;
    return (
        <BottomDesk>
               <>
               <ArrowBackIosIcon 
               style={{
                   position: 'absolute',
                   left: '1%',
                   top: '40%',
                cursor: 'pointer',
                pointerEvents: 'all',
                zIndex: '100'
               }}
               onClick={() =>{
                    reactSwipeEl.prev()
                }}
               />
                <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: true }}
                ref={el => (reactSwipeEl = el)}
                >
                    <div className="bottom-component" onTouchEnd={() => {
                        }}>
                        <Icon onClick={() =>  onImage1Concat(powerSource, "Power")} className='icons'/>
                        <Img src={powerSource} 
                        alt="power" style={{marginRight: '20px'}}/>
    
                        <Icon onClick={() => onImage1Concat(sequenceSource, 'Counter')} className='icons'/>
                        <Img src={sequenceSource} 
                        alt="beeper" style={{marginRight: '20px'}}/>
    
                        <Icon onClick={(e) =>  onImage1Concat(beeperSource, 'Beeper')} className='icons'/>
                        <Img src={beeperSource} 
                        alt="beeper" />
    
                        <MiddleIconDesk onClick={() => onImage1Concat(conditionSource, 'Splitter')} className='icons'/>
                        <Img src={conditionSource} 
                        alt="beeper" 
                        style={{
                        marginLeft: '20px',
                        marginRight: '20px'
                        }}/>
    
                        <Icon onClick={() => onImage1Concat(distanceSource, 'Proximity')} className='icons'/>
                        <Img src={distanceSource} 
                        alt="beeper" />
                    </div>
    
                    <div className="second-slide" onTouchEnd={() => {
                    }}>
    
                        <Icon onClick={() => onImage1Concat(graphSource, "Graph")} className='icons'/>
                        <Img src={graphSource} 
                        alt="beeper" style={{marginRight: '20px'}}/>
    
                        <Icon onClick={() => onImage1Concat(distanceSource, "Proximity")} className='icons' />
                        <Img src={distanceSource} 
                        alt="beeper" style={{marginRight: "20px"}}/>
    
                        <Icon onClick={() => onImage1Concat(tactSource, "Tact")} className='icons' />
                        <Img src={tactSource} 
                        alt="magnetic" />
    
                        <MiddleIconDesk onClick={() => onImage1Concat(ledSource, "LED")} className='icons'/>
                        <Img src={ledSource} 
                        alt="beeper" 
                        style={{
                        marginLeft: '20px',
                        marginRight: '20px'
                        }}/>
                        
                        <Icon onClick={() => onImage1Concat(lightSource, "Light")} className='icons'/>
                        <Img src={lightSource} 
                        alt="beeper" />
                    </div>
    
                    <div className="third-Slide" onTouchEnd={() => {
                    }}>
                        <Icon onClick={() => onImage1Concat(magSource, "Magnetic")} className='icons'/>
                        <Img src={magSource} 
                        alt="mag" style={{marginRight: '20px'}}/>
    
                        <Icon onClick={() => onImage1Concat(tempSource, "Temperature")} className='icons'/>
                        <Img src={tempSource} 
                        alt="temp" />
                        
                        <MiddleIconDesk onClick={() => onImage1Concat(motorSource, "Motor")} className='icons'/>
                        <Img src={motorSource} 
                        alt="motor" 
                        style={{
                        marginLeft: '20px',
                        marginRight: '20px'
                        }}/>
                        
                        <Icon onClick={() => onImage1Concat(soundSource, "Sound")} className='icons'/>
                        <Img src={soundSource} 
                        alt="sound" />
                        <Icon onClick={() => onImage1Concat(splitterSource, "Condition")} className='icons'/>
                        <Img src={splitterSource} 
                        alt="sound" />
                    </div>
                    </ReactSwipe>
            </>
            {/* Swipeable Dots End */}
            <ArrowForwardIosIcon 
            style={{
                position: 'absolute',
                right: '0',
                top: '40%',
                cursor: 'pointer'
            }}
            onClick={(e) => {
                reactSwipeEl.next()
            }}
            />
           </BottomDesk>
    );
}

export default BottomComponent;
