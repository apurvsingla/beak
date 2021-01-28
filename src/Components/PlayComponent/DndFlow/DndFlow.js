import React from 'react';
import ReactFlow, { ReactFlowProvider,addEdge, removeElements, Controls , Handle} from 'react-flow-renderer';
import ConnectionLine from './ConnectionLine';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
// import useSessionStorage from '../../SessionStorage/SessionStorage';
import './dnd.css';

let id = 0;
const getId = () => `dndnode_${id++}`;
const DnDFlow = ({image,setImage,ids,setId,
  reactFlowInstance,setReactFlowInstance,
  elements,setElements,rotate, press, setPress
}) => {
  const onConnect = (params) => {params.animated = true; setElements((els) => addEdge(params, els))};
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);
  // const [glow,setGlow] = React.useState(false);

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
          newArray.splice(index,ids)
      }
    setId(ids);
    });
    setImage(newArray);
    elements.splice(id);
    setElements(elements);
  } 

  // const glowEffect = () => {
  //   const newArray = [...elements];
  //   newArray.forEach((i,index) => {
        // const pos = newArray[index];
  //       if(i.alt === "Beeper"){
  //           if(press){
  //               newArray[index] = [...newArray, {glow: glow}]
  //               setGlow(true);
  //           } 
  //           return(<span 
  //               style={{width: '25px', height: '25px', 
  //               backgroundColor: 'red', opacity: '0.9', 
  //               borderRadius: '100px'}}
  //               />)
  //       }      
  //   })
  //   setElements(newArray);
  // }

  const onDrop = (event) => {
    // console.log(event)
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
        }}></div>
        {alt === "Power" ? !rotate ? 
        <>
          <Handle type="source" position="right" id={getId()} 
          style={{ top: 50, background: '#555', left: 115, }} />
          <Handle type="source" position="right" id={getId()} 
          style={{ top: 70, background: '#555', left: 115, }} />
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-117px', left: '97px',
          background: 'white', borderRadius: '100px'}} />
        </> :  
        <>
          <Handle type="source" position="right" id={getId()} 
          style={{ top: 95, background: '#555', left: 95, }} />
          <Handle type="source" position="right" id={getId()} 
          style={{ top: 95, background: '#555', left: 45, }} />
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-105px', left: '107px',
          background: 'white', borderRadius: '100px'}} />
        </> : null}
       
        {alt === "Splitter" ? 
        <> 
          <Handle type="source" position="right" id={getId()} 
          style={{ top: 3, background: '#555', left: 67, }} />
          <Handle type="source" position="right" id={getId()} 
          style={{ top: 120, background: '#555', left: 67 }} />
          <Handle type="source" position="right" id={getId()} 
          style={{ top: 62, background: '#555', left: 15, }} />
          <Handle type="source" position="right" id={getId()} 
          style={{ top: 62, background: '#555', left: 120 }} />
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-70px', left: '62px',
          background: 'white', borderRadius: '100px'}} />
        </>: null}
       
        {alt === "LEDGLOW" || alt === "Resistor" ||alt === "LDR" ||
        alt === "Diode" ||alt === "Capacitor" ||alt === "Tact" ? 
        rotate ?
        <>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 0, background: '#555', left: 40, }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 102, background: '#555', left: 40 }} />
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-147px', left: '82px',
          background: 'white', borderRadius: '100px'}} />
        </>: 
        <>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 62, background: '#555', left: -13, }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 62, background: '#555', left: 145 }} />
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-91px', left: '138px',
          background: 'white', borderRadius: '100px'}} />
        </>
        :null} 

        {alt === 'Tact' ? 
        <FiberManualRecordIcon
          style={{position: 'relative', top: '-95px', 
          left: '62px', borderRadius: '100px'}}
          onClick={() => setPress(!press)}/>
        :null}

        {alt === "Beeper" ? rotate ?
        <>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 0, background: '#555', left: 40, }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 102, background: '#555', left: 40 }} />
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-141px', left: '98px',
          background: 'white', borderRadius: '100px'}} />
        </>: 
        <>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 62, background: '#555', left: -13, }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 62, background: '#555', left: 145 }} />
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-107px', left: '134px',
          background: 'white', borderRadius: '100px'}} />
        </>
        :null} 

        {alt === 'Transistor' ? !rotate?
        <>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 65, background: '#555', left: -13, }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 55, background: '#555', left: 145 }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 80, background: '#555', left: 145 }} />
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-97px', left: '132px',
          background: 'white', borderRadius: '100px'}} 
          stroke="grey"/>
        </>
        :<>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: -15, background: '#555', left: 62, }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 135, background: '#555', left: 45 }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 135, background: '#555', left: 72 }} />
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-145px', left: '88px',
          
          background: 'white', borderRadius: '100px'}} />
        </>:null}    

        {alt === "DualSwitch"  ? !rotate ?
        <>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 67, background: '#555', left: -13, }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 50, background: '#555', left: 145 }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 82, background: '#555', left: 145 }} />
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-102px', left: '134px',
          background: 'white', borderRadius: '100px'}} />
        </>
        :<>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: -15, background: '#555', left: 62, }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 135, background: '#555', left: 45 }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 135, background: '#555', left: 75 }} />
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-145px', left: '92px',
          background: 'white', borderRadius: '100px'}} />
        </>:null} 

        {alt === 'POTENTIOMETER' ? !rotate ?
        <>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 62, background: '#555', left: -10, }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 40, background: '#555', left: 145 }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 84, background: '#555', left: 145 }} />
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-110px', left: '137px',
          background: 'white', borderRadius: '100px'}} />

        </>
        :<>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: -15, background: '#555', left: 64, }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 135, background: '#555', left: 45 }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 135, background: '#555', left: 85 }} />
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-147px', left: '97px',
          background: 'white', borderRadius: '100px'}} />
        </>:null} 

        {alt === 'Timer' ? !rotate ?
        <>
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 50, background: '#555', left: -13, }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 70, background: '#555', left: -13, }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 90, background: '#555', left: -13, }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 30, background: '#555', left: -13, }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 55, background: '#555', left: 145 }} />
          <Handle type="source" position="left" id={getId()} 
          style={{ top: 80, background: '#555', left: 145 }} />
          <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
          style={{position: 'relative', top: '-116px', left: '136px',
          background: 'white', borderRadius: '100px'}} />
        </>
        :<>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 50, background: '#555', left: 20, }} />
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 70, background: '#555', left: 20, }} />
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 90, background: '#555', left: 20, }} />
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 30, background: '#555', left: 20, }} />
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 55, background: '#555', left: 115 }} />
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 80, background: '#555', left: 115 }} />
        <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
        style={{position: 'relative', top: '-147px', left: '105px',
        background: 'white', borderRadius: '100px'}} />
        </>: null}

        {alt === "USB"? !rotate ? 
        <>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 40, background: '#555', left: 145 }} />
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 95, background: '#555', left: 145 }} />
        <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
        style={{position: 'relative', top: '-114px', left: '135px',
        background: 'white', borderRadius: '100px'}} />
        </>
        :<>
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 40, background: '#555', left: 110 }} />
        <Handle type="source" position="left" id={getId()} 
        style={{ top: 95, background: '#555', left: 110 }} />
        <CancelOutlinedIcon onClick={(e) => onClickEvent(e)} 
        style={{position: 'relative', top: '-145px', left: '104px',
        background: 'white', borderRadius: '100px'}} />
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