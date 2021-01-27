import React from 'react';
import {BottomDesk,DivImg,BottomComponents} from '../Styles/PlayComponent.styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ReactSwipe from 'react-swipe';
import {
piaono,
conditionSource,
resistorSource,
tactSource,
beeperSource,
ledSource,
powerSource,
timerSource,
dualSwitch,
ldrSource,
diodeSource,
capacitorSource,
potSource,
usbSource,
transistorSource,
ledGlowSource
} from '../../Source/Source';
const BottomComponent = ({
    onImage1Concat
}) => {
    let reactSwipeEl;
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
      };
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
                    <BottomComponents className="bottom-component" onTouchEnd={() => {
                        }}>
                        <DivImg className="dndnode input" 
                        style={{width: '72px', display: 'inline-block', height: '90px', marginRight: '50px'}}
                        onDragStart={(event) => {
                            onDragStart(event, 'input');
                            onImage1Concat(powerSource, 'Power')
                        }} 
                        Image={powerSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        style={{width: '130px', display: 'inline-block',marginRight: '50px'}}
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(timerSource, 'Timer')
                        }} 
                        Image={timerSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        style={{width: '150px', display: 'inline-block',marginRight: '50px'}}
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(beeperSource, 'Beeper')
                        }}
                        Image={beeperSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        style={{width: '80px', display: 'inline-block',marginRight: '50px'}}
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(conditionSource, 'Splitter')
                        }} 
                        Image={conditionSource}
                        draggable>
                        </DivImg>
                        
                    </BottomComponents>
                    <BottomComponents className="bottom-component"
                     onTouchEnd={() => {
                        }}>
                        <DivImg className="dndnode input" 
                        style={{width: '15%', display: 'inline-block', height: '105px', marginRight: '50px',}}
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(piaono, 'Piano')
                        }} 
                        Image={piaono}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        style={{width: '15%', display: 'inline-block',marginRight: '50px',height: '105px'}}
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(dualSwitch, 'DualSwitch')
                        }} 
                        Image={dualSwitch}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        style={{width: '15%', display: 'inline-block',marginRight: '50px',height: '105px'}}
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(tactSource, 'Tact')
                        }}
                        Image={tactSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        style={{width: '15%', display: 'inline-block',marginRight: '50px',height: '105px'}}
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(ledSource, 'LED')
                        }} 
                        Image={ledSource}
                        draggable>
                        </DivImg>
                    </BottomComponents>

                    <BottomComponents className="bottom-component"
                     onTouchEnd={() => {
                        }}>
                        <DivImg className="dndnode input" 
                        style={{width: '15%', display: 'inline-block',marginRight: '50px'}}
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(usbSource, 'USB')
                        }} 
                        Image={usbSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        style={{width: '15%', display: 'inline-block',marginRight: '50px'}}
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(resistorSource, 'Resistor')
                        }} 
                        Image={resistorSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        style={{width: '15%', display: 'inline-block',marginRight: '50px'}}
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(ledGlowSource, 'LEDGLOW')
                        }} 
                        Image={ledGlowSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        style={{width: '15%', display: 'inline-block',marginRight: '50px'}}
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(transistorSource, 'Transistor')
                        }} 
                        Image={transistorSource}
                        draggable>
                        </DivImg>
                    </BottomComponents>

                    <BottomComponents className="bottom-component"
                     onTouchEnd={() => {
                        }}>
                        <DivImg className="dndnode input" 
                        style={{width: '15%', display: 'inline-block', height: '105px', marginRight: '50px',}}
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(ldrSource, 'LDR')
                        }} 
                        Image={ldrSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        style={{width: '15%', display: 'inline-block',marginRight: '50px',height: '105px'}}
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(diodeSource, 'Diode')
                        }} 
                        Image={diodeSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        style={{width: '15%', display: 'inline-block',marginRight: '50px',height: '105px'}}
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(capacitorSource, 'Capacitor')
                        }}
                        Image={capacitorSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        style={{width: '15%', display: 'inline-block',marginRight: '50px',height: '105px'}}
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(potSource, 'POT')
                        }} 
                        Image={potSource}
                        draggable>
                        </DivImg>
                    </BottomComponents>
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
