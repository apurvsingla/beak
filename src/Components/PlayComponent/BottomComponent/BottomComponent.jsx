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
import './Bottom.style.scss'
import Scrollbars from 'react-custom-scrollbars';
const BottomComponent = ({
    onImage1Concat
}) => {
    let reactSwipeEl;
    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
    React.useEffect(() => {
    function handleResize() {
            setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
            })
            return _ => {
            window.removeEventListener('resize', handleResize)
            
            }
    }
    window.addEventListener('resize', handleResize);
    })
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
      }; 
    return (
        <>
        {dimensions.width>892 ?
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
                    {/* <Scrollbars style={{height: '100vh', width: '20vw'}}> */}
                    <BottomComponents className="bottom-component" onTouchEnd={() => {
                        }}>
                        <DivImg className="dndnode input" 
                        onDragStart={(event) => {
                            onDragStart(event, 'input');
                            onImage1Concat(powerSource, 'Power Led')
                        }} 
                        onTouchStart={(event) => {
                            onDragStart(event, 'input');
                            onImage1Concat(powerSource, 'Power Led')
                        }} 
                        onTouchMove={(event) => {
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
                    {/* </Scrollbars> */}
                    </ReactSwipe>
            </>
            {/* Swipeable Dots End */}
            <LastArrow 
            onClick={(e) => {
                reactSwipeEl.next()
            }}
            />
           </BottomDesk>
           : <BottomDesk>
           <>
           <FrontArrow  />
                <Scrollbars style={{height: '100vh', width: '20vw'}}>
                <BottomComponents className="bottom-component">
                    <DivImg className="dndnode input" 
                    onDragStart={(event) => {
                        onDragStart(event,'input');
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
                <BottomComponents className="bottom-component">
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
-+

                <BottomComponents className="bottom-component">
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

                <BottomComponents className="bottom-component">
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
                </Scrollbars>
        </>
        {/* Swipeable Dots End */}
        <LastArrow 
        onClick={(e) => {
            reactSwipeEl.next()
        }}
        />
       </BottomDesk>}
           </>
    );
}

export default BottomComponent;
