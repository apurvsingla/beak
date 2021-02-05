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

const BottomMobileComponent = () => {
    let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    return (
        <>
        {/* left panel */}
        {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}}> 
                <DropTarget 
                targetKey="foo" 
                onHit={(e) => {
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    `;
                }}
                >
                    <Draggable>
                        <Scrollbars>
                    <PopulatedImage left={50 + i*20} />
                    </Scrollbars>
                    </Draggable>
                </DropTarget>
            </DragDropContainer>)
        })}
        {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}}> 
                <DropTarget 
                targetKey="foo" 
                onHit={(e) => {
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={50} top={10 + i*20}/>
                    </Draggable>
                </DropTarget>
            </DragDropContainer>)
        })}
        {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}}> 
                <DropTarget 
                targetKey="foo" 
                onHit={(e) => {
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={100} top={10 + i*20}/>
                    </Draggable>
                </DropTarget>
            </DragDropContainer>)
        })}
        {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}}> 
                <DropTarget 
                targetKey="foo" 
                onHit={(e) => {
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={140} top={10 + i*20}/>
                    </Draggable>
                </DropTarget>
            </DragDropContainer>)
        })}
        {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}}> 
                <DropTarget 
                targetKey="foo" 
                onHit={(e) => {
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={180} top={10 + i*20}/>
                    </Draggable>
                </DropTarget>
            </DragDropContainer>)
        })}
        {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}}> 
                <DropTarget 
                targetKey="foo" 
                onHit={(e) => {
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={220} top={10 + i*20}/>
                    </Draggable>
                </DropTarget>
            </DragDropContainer>)
        })}
        {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}}> 
                <DropTarget 
                targetKey="foo" 
                onHit={(e) => {
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={260} top={10 + i*20}/>
                    </Draggable>
                </DropTarget>
            </DragDropContainer>)
        })}
        {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}}> 
                <DropTarget 
                targetKey="foo" 
                onHit={(e) => {
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={300} top={10 + i*20}/>
                    </Draggable>
                </DropTarget>
            </DragDropContainer>)
        })}
        {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}}> 
                <DropTarget 
                targetKey="foo" 
                onHit={(e) => {
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={340} top={10 + i*20}/>
                    </Draggable>
                </DropTarget>
            </DragDropContainer>)
        })}
        {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}}> 
                <DropTarget 
                targetKey="foo" 
                onHit={(e) => {
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={380} top={10 + i*20}/>
                    </Draggable>
                </DropTarget>
            </DragDropContainer>)
        })}
        {num.map(i => {
            return(
            <DragDropContainer style={{position: 'absolute', left: '0'}}> 
                <DropTarget 
                targetKey="foo" 
                onHit={(e) => {
                    e.target.innerHTML = `
                    <img src=${e.dragData} id="outer" alt="props"/>
                    `;
                }}
                >
                    <Draggable>
                    <PopulatedImage left={420} top={10 + i*20}/>
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
