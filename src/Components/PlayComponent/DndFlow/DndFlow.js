import React from 'react';
import ReactFlow, { ReactFlowProvider,addEdge, removeElements, Controls , Handle} from 'react-flow-renderer';
import ConnectionLine from './ConnectionLine';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { v4 } from 'uuid';
import './dnd.css';

let id = 0;
const getId = () => `dndnode_${id++}`;
const DnDFlow = ({image,setImage,ids,setId,
  reactFlowInstance,setReactFlowInstance,
  elements,setElements,rotate, press, setPress
}) => {
  const onConnect = (params) => {params.animated = true; setElements((els) => addEdge(params, els))};
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  let count = 1;
  const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };
  const onClickEvent=(e) => {
    console.log(elements)
    const newArray = [...image];
    newArray.forEach((i,index) => {
      const arr = newArray[index]
      if(arr.id === ids-1){
          newArray.splice(ids,1)
      }
    setId(ids);
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
          /> : null }
          {/* <span
          id="rotate"
          style={{
            position: "absolute",
            zIndex: '55',
            top: '35px',
            left: '65px', 
          }}
          onClick={() => {
            // setRotate(true);
          }}>Rotate</span> */}
          
        </div>
        {alt === "Power" ? !rotate ? 
        <>
          <Handle type="source" position="right" id={getId()} 
          style={{ top: 50, background: '#555', left: 115, }} 
          key={v4()}/>
          <Handle type="source" position="right" id={getId()} 
          style={{ top: 70, background: '#555', left: 115, }} 
          key={v4()}/>
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-117px', left: '97px',
          background: 'white', borderRadius: '100px'}} key={v4()}/>
        </> :  
        <>
          <Handle type="source" position="right" id={getId()} 
          style={{ top: 95, background: '#555', left: 95, }} key={v4()}/>
          <Handle type="source" position="right" id={getId()} 
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
       
        {alt === "LEDGLOW" || alt === "Resistor" ||alt === "LDR" ||
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

        {alt === 'Tact' ? 
        <FiberManualRecordIcon
          style={{position: 'relative', top: '-95px', 
          left: '62px', borderRadius: '100px'}}
          onClick={() => {
            setPress(!press);
            let spanId = document.querySelectorAll('#spanId');
            if(count === 1){
             return Object.values(spanId).map(i => {
                count = 0;
                return i.style.backgroundColor= "red";
              });
            }
           else{
             return Object.values(spanId).map(i => {
                count = 1;
                return i.style.backgroundColor= "transparent";
            });
        }
          
        }} key={v4()}/>
        :null}

        {alt === "Beeper" ? rotate ?
        <>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 0, background: '#555', left: 40, }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 102, background: '#555', left: 40 }} key={v4()}/>
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-141px', left: '98px',
          background: 'white', borderRadius: '100px'}} key={v4()}/>
        </>: 
        <>
          <Handle type="source" position="left" id={getId()} 
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
          <Handle type="source" position="left" id={getId()} 
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
          <Handle type="source" position="left" id={getId()} 
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
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 50, background: '#555', left: -13, }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 70, background: '#555', left: -13, }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 90, background: '#555', left: -13, }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 30, background: '#555', left: -13, }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 55, background: '#555', left: 145 }} key={v4()}/>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 80, background: '#555', left: 145 }} key={v4()}/>
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-116px', left: '136px',
          background: 'white', borderRadius: '100px'}} key={v4()}/>
        </>
        :<>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 50, background: '#555', left: 20, }} key={v4()}/>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 70, background: '#555', left: 20, }} key={v4()}/>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 90, background: '#555', left: 20, }} key={v4()}/>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 30, background: '#555', left: 20, }} key={v4()}/>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 55, background: '#555', left: 115 }} key={v4()}/>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 80, background: '#555', left: 115 }} key={v4()}/>
        <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
        style={{position: 'relative', top: '-147px', left: '105px',
        background: 'white', borderRadius: '100px'}} key={v4()}/>
        </>: null}

        {alt === "USB"? !rotate ? 
        <>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 40, background: '#555', left: 145 }} key={v4()}/>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 95, background: '#555', left: 145 }} key={v4()}/>
        <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
        style={{position: 'relative', top: '-114px', left: '135px',
        background: 'white', borderRadius: '100px'}} key={v4()}/>
        </>
        :<>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 40, background: '#555', left: 110 }} key={v4()}/>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 95, background: '#555', left: 110 }} key={v4()}/>
        <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
        style={{position: 'relative', top: '-145px', left: '104px',
        background: 'white', borderRadius: '100px'}} key={v4()}/>
        </>:null} 

        {/* {press===true && (alt === 'Beeper' || alt === 'LEDGLOW') ? <FiberManualRecordIcon 
        style={{
          position: 'relative',
          top: '-138px',
          left: '30px',
          fontSize: 100
        }}
        color="error"
        />: null} */}
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
      
      }}>
      <ReactFlowProvider>
        <div className="reactflow-wrapper">
          <ReactFlow
          defaultZoom={0.75}
          connectionMode={'loose'}
          connectionLineComponent={ConnectionLine}
          elements={elements}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          onLoad={onLoad}
          onDrop={onDrop}
          onDragOver={onDragOver}
          key="edges"
          >
            <Controls 
            style={{position: 'fixed', bottom: '10px', left: '25vw',}}
            />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;