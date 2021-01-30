/* eslint-disable no-unused-vars */
import React from 'react';
import ReactFlow, { ReactFlowProvider,addEdge, removeElements, Controls , Handle, updateEdge} from 'react-flow-renderer';
import ConnectionLine from './ConnectionLine';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { v4 } from 'uuid';
import useSound from 'use-sound';
import boopSfx from '../../sound/beep.mp3';
import Slider from '@material-ui/core/Slider';
import './dnd.css';

let id = 0;
const marks = [
        {
          value: 0,
        },
        {
          value: 10,
        },
        {
        value: 20,
        },
        {
        value: 30,
        },
        {
        value: 40,
        },
        {
        value: 50,
        },
        {
          value: 60,
        },
        {
          value: 70,
        },
        {
          value: 80,
        },
        {
          value: 90,
        },
      ];

function valueLabelFormat(value) {
return marks.findIndex((mark) => mark.value === value) ;
}
const getId = () => `dndnode_${id++}`;
const DnDFlow = ({image,setImage,ids,setId,
  reactFlowInstance,setReactFlowInstance,
  elements,setElements,rotate, press, setPress,
}) => {
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

  const [play] = useSound(boopSfx);
  const onConnect = (params) => {
    console.log(elements);
    params.animated = true; 
    setElements((els) => addEdge(params, els));
  };

  const onUpdateEdge = (params) => {
    params.animated = false;
    setElements((els) => updateEdge(params,els))
  }

  const onElementsRemove = (elementsToRemove) => setElements((els) => {console.log(els); removeElements(elementsToRemove, els)});
  const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };
  const onClickEvent=(e) => {
    const newArray = [...image];
    newArray.forEach((i,index) => {
      const arr = newArray[index]
      if(arr.id === ids-1){
          newArray.splice(ids-1,1)
      }
    });
    setImage(newArray);
    elements.splice(id);
    setElements(elements);
  } 
  

  const onDrop = (event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({ x: event.clientX-300, y: event.clientY -40});
    const text = ()=>{
      const data = (JSON.parse(sessionStorage.getItem("normal-img")));
      const d = (data[data.length-1].src);
      const alt = data[data.length-1].alt;
      return (
        <>
        <div 
        className="Image-render"
        style={{
          backgroundImage: `url(${d})`, 
          transform: `${rotate? 'rotate(90deg)': 'rotate(0deg)'}`
        }}
        id="image-render"
        key={v4()}>
          {alt === 'Beeper' ? <span className="span"
          id="spanId"
          key={v4()}
          style={{backgroundColor: 'none'}}
          // onChange={() => play()}
          /> : null }
          
        </div>
        {alt === "Power Led" ? !rotate ? 
        <>
          <Handle type="source" position="right" id={getId()} 
          style={{ top: 50, background: '#555', left: 115, }} 
          key={v4()}/>
          <Handle type="target" position="right" id={getId()} 
          style={{ top: 70, background: '#555', left: 115, }} 
          key={v4()}/>
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-117px', left: '97px',
          background: 'white', borderRadius: '100px'}} key={v4()}/>
        </> :  
        <>
          <Handle type="source" position="right" id={getId()} 
          style={{ top: 95, background: '#555', left: 95, }} key={v4()}/>
          <Handle type="target" position="right" id={getId()} 
          style={{ top: 95, background: '#555', left: 45, }} key={v4()}/>
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-105px', left: '107px',
          background: 'white', borderRadius: '100px'}} key={v4()}/>
        </> : null}
       
        {alt === "Splitter" ? 
        <> 
          <Handle type="source" position="right" id={getId()} 
          style={{ top: 3, background: '#555', left: 67, }} key={v4()}/>
          <Handle type="source" position="right" id={getId()} 
          style={{ top: 120, background: '#555', left: 67 }} key={v4()}/>
          <Handle type="source" position="right" id={getId()} 
          style={{ top: 62, background: '#555', left: 15, }} key={v4()}/>
          <Handle type="source" position="right" id={getId()} 
          style={{ top: 62, background: '#555', left: 120 }} key={v4()}/>
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-70px', left: '62px',
          background: 'white', borderRadius: '100px'}} key={v4()}/>
        </>: null}
       
        {alt === "LED" || alt === "Resistor" ||alt === "LDR" ||
        alt === "Diode" ||alt === "Capacitor" ||alt === "Tact" ? 
        rotate ?
        <>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 0, background: '#555', left: 40, }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 102, background: '#555', left: 40 }} key={v4()}/>
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-147px', left: '82px',
          background: 'white', borderRadius: '100px'}} key={v4()}/>
        </>: 
        <>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 62, background: '#555', left: -13, }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 62, background: '#555', left: 145 }} key={v4()}/>
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-91px', left: '138px',
          background: 'white', borderRadius: '100px'}} key={v4()}/>
        </>
        :null} 

        {alt === "LDR" ? 
        <span style={{posiiton: 'relative', top: '-100px'}}>
        <Slider 
        key={v4()}
        className="slider-mark"
        defaultValue={0}
        marks={marks}
        valueLabelFormat={valueLabelFormat}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        onChange={(e) => {
          const num = Number(e.target.innerText);
          setPress(!press);
          let spanId = document.querySelectorAll('#spanId');
           return Object.values(spanId).map(i => {
              if(num === 1){
                i.style.width = '10px';
                i.style.height = '10px';
              }
              if(num === 2){
                i.style.width = '20px';
                i.style.height = '20px';
              }
              if(num === 3){
                i.style.width = '30px';
                i.style.height = '30px';
              }
              if(num === 4){
                i.style.width = '40px';
                i.style.height = '40px';
              }
              if(num === 5){
                i.style.width = '50px';
                i.style.height = '50px';
              }
              if(num === 6){
                i.style.width = '60px';
                i.style.height = '60px';
              }
              return i.style.backgroundColor= "red";
            });
        }}
        /> </span>: null}

        {alt === 'Tact' ? 
        <FiberManualRecordIcon
          style={{position: 'relative', top: '-95px', 
          left: '62px', borderRadius: '100px'}}
          onMouseDown={() => {
          setPress(!press);
          play();
          let spanId = document.querySelectorAll('#spanId');
           return Object.values(spanId).map(i => {
              return i.style.backgroundColor= "red";
            });
        }}
        onMouseUp={() => {
        setPress(!press);
        let spanId = document.querySelectorAll('#spanId');
         return Object.values(spanId).map(i => {
            return i.style.backgroundColor= "transparent";
        });
    }}
      key={v4()}/>
        :null}

        {alt === "Beeper" ? rotate ?
        <>
          <Handle type="target" position="left" id={getId()} 
          style={{ top: 0, background: '#555', left: 40, }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 102, background: '#555', left: 40 }} key={v4()}/>
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-141px', left: '98px',
          background: 'white', borderRadius: '100px'}} key={v4()}/>
        </>: 
        <>
          <Handle type="target" position="left" id={getId()} 
          style={{ top: 62, background: '#555', left: -13, }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 62, background: '#555', left: 145 }} key={v4()}/>
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-107px', left: '134px',
          background: 'white', borderRadius: '100px'}} key={v4()}/>
        </>
        :null} 

        {alt === 'Transistor' ? !rotate?
        <>
          <Handle type="target" position="left" id={getId()} 
          style={{ top: 65, background: '#555', left: -13, }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 55, background: '#555', left: 145 }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 80, background: '#555', left: 145 }} key={v4()}/>
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-97px', left: '132px',
          background: 'white', borderRadius: '100px'}} 
          stroke="grey" key={v4()}/>
        </>
        :<>
          <Handle type="target" position="left" id={getId()} 
          style={{ top: -15, background: '#555', left: 62, }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 135, background: '#555', left: 45 }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 135, background: '#555', left: 72 }} key={v4()}/>
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-145px', left: '88px',
          background: 'white', borderRadius: '100px'}} key={v4()}/>
        </>:null}    

        {alt === "DualSwitch"  ? !rotate ?
        <>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 67, background: '#555', left: -13, }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 50, background: '#555', left: 145 }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 82, background: '#555', left: 145 }} key={v4()}/>
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-102px', left: '134px',
          background: 'white', borderRadius: '100px'}} key={v4()}/>
        </>
        :<>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: -15, background: '#555', left: 62, }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 135, background: '#555', left: 45 }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 135, background: '#555', left: 75 }} key={v4()}/>
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-145px', left: '92px',
          background: 'white', borderRadius: '100px'}} key={v4()}/>
        </>:null} 

        {alt === 'POTENTIOMETER' ? !rotate ?
        <>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 62, background: '#555', left: -10, }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 40, background: '#555', left: 145 }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 84, background: '#555', left: 145 }} key={v4()}/>
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-110px', left: '137px',
          background: 'white', borderRadius: '100px'}} key={v4()}/>

        </>
        :<>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: -15, background: '#555', left: 64, }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 135, background: '#555', left: 45 }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 135, background: '#555', left: 85 }} key={v4()}/>
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-147px', left: '97px',
          background: 'white', borderRadius: '100px'}} key={v4()}/>
        </>:null} 

        {alt === 'Timer' ? !rotate ?
        <>
          <Handle type="target" position="left" id={getId()} 
          style={{ top: 50, background: '#555', left: -13, }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 70, background: '#555', left: -13, }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 90, background: '#555', left: -13, }} key={v4()}/>
          <Handle type="target" position="left" id={getId()} 
          style={{ top: 30, background: '#555', left: -13, }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 37, background: '#555', left: 145 }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 52, background: '#555', left: 145 }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 80, background: '#555', left: 145 }} key={v4()}/>
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-116px', left: '136px',
          background: 'white', borderRadius: '100px'}} key={v4()}/>
        </>
        :<>
        <Handle type="target" position="left" id={getId()} 
        style={{ top: 20, background: '#555', left: 30, }} key={v4()}/>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 20, background: '#555', left: 50, }} key={v4()}/>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 20, background: '#555', left: 70, }} key={v4()}/>
        <Handle type="target" position="left" id={getId()} 
        style={{ top: 20, background: '#555', left: 90, }} key={v4()}/>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 100, background: '#555', left: 50 }} key={v4()}/>
        <Handle type="source" position="left" id={getId()} 
          style={{ top: 100, background: '#555', left: 70 }} key={v4()}/>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 100, background: '#555', left: 90 }} key={v4()}/>
        <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
        style={{position: 'relative', top: '-147px', left: '105px',
        background: 'white', borderRadius: '100px'}} key={v4()}/>
        </>: null}

        {alt === "USB"? !rotate ? 
        <>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 40, background: '#555', left: 145 }} key={v4()}/>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 59, background: '#555', left: 145 }} key={v4()}/>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 79, background: '#555', left: 145 }} key={v4()}/>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 98, background: '#555', left: 145 }} key={v4()}/>
        <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
        style={{position: 'relative', top: '-114px', left: '135px',
        background: 'white', borderRadius: '100px'}} key={v4()}/>
        </>
        :<>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 120, background: '#555', left: 28 }} key={v4()}/>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 120, background: '#555', left: 48 }} key={v4()}/>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 120, background: '#555', left: 68 }} key={v4()}/>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 120, background: '#555', left: 88 }} key={v4()}/>
        <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
        style={{position: 'relative', top: '-145px', left: '104px',
        background: 'white', borderRadius: '100px'}} key={v4()}/>
        </>:null} 
        </>
      )

    }
    const data = JSON.parse(sessionStorage.getItem("normal-img"));
    const newNode = {
      id: getId(),
      type,
      position,
      data: { label: text()},
      rotate: rotate,
      alt: data[data.length-1].alt
    };
    setElements((es) => es.concat(newNode));
  };

  return (
    <div className="dndflow" style={{
      height: `${(JSON.parse(sessionStorage.getItem("normal-img"))).length*15 + 100}vh`,
      width:`${(JSON.parse(sessionStorage.getItem("normal-img"))).length*15 + 100}vw`
      }} >
      <ReactFlowProvider>
        <div className="reactflow-wrapper">
          <ReactFlow
          defaultZoom={0.8}
          // connectionMode={'loose'}
          connectionLineComponent={ConnectionLine}
          elements={elements}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          onLoad={onLoad}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onEdgeUpdate={onUpdateEdge}
          multiSelectionKeyCode="Control"
          // onClick={onElementsRemove}
          key="edges"
          >
            {dimensions.width > 892 ?<Controls 
            style={{position: 'fixed', bottom: '10px', left: '25vw',}}
            /> : null}
            
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;