import React from 'react';
// import { TouchBackend } from 'react-dnd-touch-backend'
// import { DndProvider } from 'react-dnd'
import {
// beeperSource,
capacitorSource,
diodeSource,
ledGlowSource,
conditionSource,
ledSource
} from '../../../Source/Source';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import Scrollbars from 'react-custom-scrollbars';
import Draggable from 'react-draggable';
import './bottom.scss';
import {PopulatedImage} from '../../Styles/PlayComponent.styles';
import { useGesture } from 'react-use-gesture';

const BottomMobileComponent = () => {
    let num = [1,2,3,4,5,6,7,8,9,10];
    // const [line,setLine] = React.useState(null);
    const bind = useGesture({
        onDrag: line => console.log('y')
    })
    return (
        <>
        {/* left panel */}
        {/* {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}} key={i + 'container-row'}> 
                <DropTarget 
                targetKey="foo" 
                onHit={(e) => {
                    console.log(e.target)
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    <span 
                    class="className"
                    />
                    `;
                }}
                >
                    <Draggable>
                        <Scrollbars>
                    <PopulatedImage left={50 + i*30} top={0} onDrag={() => bind()}> 
                       
                    </PopulatedImage>
                    </Scrollbars>
                    </Draggable>
                </DropTarget>
            </DragDropContainer>)
        })} */}
        {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}} key={i + 'container-col1'}> 
                <DropTarget 
                targetKey="foo" 
                onHit={(e) => {
                    console.log(e.target)
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    <span 
                    class="className"
                    onclick="can()"
                    ontouchstart="can()"
                    />
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={50} top={10 + i*20} 
                    id="ele"
                    onDrag={(e) => bind.onDrag(e)}>
                        <span id="liness"/>
                    </PopulatedImage>
                    </Draggable>
                </DropTarget>
            </DragDropContainer>)
        })}
        {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}}  key={i + 'container-col-2'}> 
                <DropTarget 
                targetKey="foo" 
                onHit={(e) => {
                    console.log(e.target)
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    <span 
                    class="className"
                    onclick="can()"
                    ontouchstart="can()"
                    />
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={150} top={10 + i*20} 
                    id="ele"
                    onDrag={(e) => bind.onDrag(e)}>
                    </PopulatedImage>
                    </Draggable>
                </DropTarget>
            </DragDropContainer>)
        })}
        {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}}  key={i + 'container-row-3'}> 
                <DropTarget 
                targetKey="foo" 
                onHit={(e) => {
                    console.log(e.target)
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    <span 
                    class="className"
                    onclick="can()"
                    ontouchstart="can()"
                    />
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={200} top={10 + i*20} 
                    id="ele"
                    onDrag={(e) => bind.onDrag(e)}>
                    </PopulatedImage>
                    </Draggable>
                </DropTarget>
            </DragDropContainer>)
        })}
        {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}}  key={i + 'container-row-4'}> 
                <DropTarget 
                targetKey="foo" 
                onHit={(e) => {
                    console.log(e.target)
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    <span 
                    class="className"
                    onclick="can()"
                    ontouchstart="can()"
                    />
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={250} top={10 + i*20} 
                    id="ele"
                    onDrag={(e) => bind.onDrag(e)}>
                    </PopulatedImage>
                    </Draggable>
                </DropTarget>
            </DragDropContainer>)
        })}
       
        {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}}  key={i + 'container-row-5'}> 
                <DropTarget 
                targetKey="foo" 
                onHit={(e) => {
                    console.log(e.target)
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    <span 
                    class="className"
                    onclick="can()"
                    ontouchstart="can()"
                    />
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={300} top={10 + i*20} 
                    id="ele"
                    onDrag={(e) => bind.onDrag(e)}>
                    </PopulatedImage>
                    </Draggable>
                </DropTarget>
            </DragDropContainer>)
        })}
       
        {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}}  key={i + 'container-row-6'}> 
                <DropTarget 
                targetKey="foo" 
                onHit={(e) => {
                    console.log(e.target)
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    <span 
                    class="className"
                    ontouchstart="script.js"
                    ontouchstart="can()"
                    />
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={400} top={10 + i*20} 
                    id="ele"
                    onDrag={(e) => bind.onDrag(e)}>
                    </PopulatedImage>
                    </Draggable>
                </DropTarget>
            </DragDropContainer>)
        })}
        

        {/* right panel */}
        <div style={{display: 'flex', flexDirection: 'column', 
        justifyContent: 'space-evenly', position: 'fixed', right: '2px', 
        background: 'white', top: '0'}}>
            <Scrollbars style={{width: '15vw', height: '100vh'}}>
                <DragDropContainer targetKey="foo" dragClone="true" 
                dragData={capacitorSource}>
                    <img src={capacitorSource} alt="beeper" height="50" 
                    width="90" style={{objectFit: 'contain'}}/>
                </DragDropContainer>
                <DragDropContainer targetKey="foo" dragClone="true" 
                dragData={diodeSource}>
                    <img src={diodeSource} alt="beeper" height="50" 
                    width="90" style={{objectFit: 'contain'}}/>
                </DragDropContainer>
                <DragDropContainer targetKey="foo" dragClone="true" 
                dragData={conditionSource}>
                    <img src={conditionSource} alt="beeper" height="70" 
                    width="90" style={{objectFit: 'contain'}}/>
                </DragDropContainer>
                <DragDropContainer targetKey="foo" dragClone="true" 
                dragData={ledGlowSource}>
                    <img src={ledGlowSource} alt="beeper" height="60" 
                    width="90" style={{objectFit: 'contain'}}/>
                </DragDropContainer>
                <DragDropContainer targetKey="foo" dragClone="true" 
                dragData={ledSource}>
                    <img src={ledSource} alt="beeper" height="70" 
                    width="90" style={{objectFit: 'contain'}}/>
                </DragDropContainer>
            </Scrollbars>
        </div>
        </>
    );
}

export default BottomMobileComponent;
