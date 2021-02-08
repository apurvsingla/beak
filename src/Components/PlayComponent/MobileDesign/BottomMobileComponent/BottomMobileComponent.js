/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
// import { TouchBackend } from 'react-dnd-touch-backend'
// import { DndProvider } from 'react-dnd';
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
// import LineTo from 'react-lineto';

const BottomMobileComponent = () => {
    let num = [1,2,3,4,5,6,7,8,9,10];
    
    // const connection = () => {
    //     let id = document.getElementById(`${'className' + 1}`);
    //     let secondId = document.getElementById('className9');
    //     if(id && secondId){
    //         return(<LineTo from={'className1'} to={'className9'} style={{position: 'absolute', zIndex: '100000000000'}}/>)0.....
    //     }
    //     console.log(id)
    // }
    return (
        <>
        {/* {connection()} */}
        {/* left panel */}
        {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}} key={i + 'container-col1'}>
                <DropTarget
                targetKey="foo"
                onHit={(e) => {
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    <span
                    class="className"
                    id=${'className' + i}
                    onclick="can()"
                    ontouchstart="can()"
                    />`;
                }}
                >
                    <Draggable>
                        <PopulatedImage left={50} top={10 + i*20} 
                        id="ele">
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
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    <span
                    class="className"
                    onclick="can()"
                    id=${'className1' + i}
                    ontouchstart="can()"
                    />
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={150} top={10 + i*20}
                    id="ele">
                        <span id="liness"/>
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
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    <span
                    class="className"
                    onclick="can()"
                    id=${'className2' + i}
                    ontouchstart="can()"
                    />
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={200} top={10 + i*20}
                    id="ele">
                        <span id="liness"/>
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
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    <span 
                    class="className"
                    id=${'className3' + i}
                    onclick="can()"
                    ontouchstart="can()"
                    />
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={250} top={10 + i*20} 
                    id="ele">
                        <span id="liness"/>
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
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    <span 
                    class="className"
                    id=${'className4' + i}
                    onclick="can()"
                    ontouchstart="can()"
                    />
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={300} top={10 + i*20} 
                    id="ele">
                        <span id="liness"/>
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
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    <span 
                    class="className"
                    id=${'className5' + i}
                    ontouchstart="script.js"
                    ontouchstart="can()"
                    />
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={400} top={10 + i*20} 
                    id="ele">
                        <span id="liness"/>
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
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    <span 
                    class="className"
                    ontouchstart="script.js"
                    ontouchstart="can()"
                    id=${'className6' + i}
                    />
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={480} top={10 + i*20} 
                    id="ele">
                        <span id="liness"/>
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
