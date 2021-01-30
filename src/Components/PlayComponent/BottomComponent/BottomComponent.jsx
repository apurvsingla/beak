import React from 'react';
import {BottomDesk,DivImg,BottomComponents,FrontArrow,LastArrow} from '../Styles/PlayComponent.styles';
import ReactSwipe from 'react-swipe';
import {
// piaono,
conditionSource,
resistorSource,
tactSource,
beeperSource,
// ledSource,
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
        <>
        <BottomDesk>
               <>
               <FrontArrow 
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
                        onDragStart={(event) => {
                            onDragStart(event, 'input');
                            onImage1Concat(powerSource, 'Power Led')
                        }} 
                        Image={powerSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(timerSource, 'Timer')
                        }} 
                        Image={timerSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(beeperSource, 'Beeper')
                        }}
                        Image={beeperSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
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
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(dualSwitch, 'DualSwitch')
                        }} 
                        Image={dualSwitch}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(tactSource, 'Tact')
                        }}
                        Image={tactSource}
                        draggable>
                        </DivImg>
                    </BottomComponents>

                    <BottomComponents className="bottom-component"
                     onTouchEnd={() => {
                        }}>
                        <DivImg className="dndnode input" 
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(usbSource, 'USB')
                        }} 
                        Image={usbSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(resistorSource, 'Resistor')
                        }} 
                        Image={resistorSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(ledGlowSource, 'LED')
                        }} 
                        Image={ledGlowSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
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
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(ldrSource, 'LDR')
                        }} 
                        Image={ldrSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(diodeSource, 'Diode')
                        }} 
                        Image={diodeSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(capacitorSource, 'Capacitor')
                        }}
                        Image={capacitorSource}
                        draggable>
                        </DivImg>
                        <DivImg className="dndnode input" 
                        onDragStart={(event) => {
                            onDragStart(event,'input');
                            onImage1Concat(potSource, 'POTENTIOMETER')
                        }} 
                        Image={potSource}
                        draggable>
                        </DivImg>
                    </BottomComponents>
                    </ReactSwipe>
            </>
            {/* Swipeable Dots End */}
            <LastArrow 
            onClick={(e) => {
                reactSwipeEl.next()
            }}
            />
           </BottomDesk>
           </>
    );
}

export default BottomComponent;
