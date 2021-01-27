import React, { useState } from 'react';
import ReactFlow, { ReactFlowProvider,addEdge, removeElements, Controls , Handle} from 'react-flow-renderer';
import ConnectionLine from './ConnectionLine';
// import useSessionStorage from '../../SessionStorage/SessionStorage'
import './dnd.css';

let id = 0;
const getId = () => `dndnode_${id++}`;
const DnDFlow = ({image,setImage,ids,setId}) => {
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState([]);
  const onConnect = (params) => {params.animated = true; setElements((els) => addEdge(params, els))};
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onClickEvent=(e) => {
    console.log(e.nativeEvent.view.sessionStorage["normal-img"]);
    console.log(ids)
    // e.preventDefault();
    // const ids = JSON.parse(e.view.sessionStorage['normal-img']);
    // const ids =  JSON.parse(sessionStorage.getItem('normal-img'));
    // ids.splice(0,1);
    // console.table(ids)
    // sessionStorage.setItem('normal-img',ids);
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

  const [rotate, setRotate] = useState(false);
 

  const onDrop = (event) => {
    event.preventDefault();

    const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({ x: event.clientX-20, y: event.clientY - 40 });
    const text = ()=>{
      const data = (JSON.parse(sessionStorage.getItem("normal-img")));
      const d = (data[data.length-1].src);
      const alt = data[data.length-1].alt;
      return (
        <>
        <div style={{
          backgroundImage: `url(${d})`, 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          height: '120px',
          width: '177px',
          position: 'relative',
          zIndex: '-4',
          right: '14px',
          transform: `${rotate? 'rotate(90deg)': 'rotate(0deg)'}`
        }}></div>
        <p onClick={(e) => onClickEvent(e)} style={{position: 'relative', top: '-50px', left: '20px'}}>X</p>
        {alt === "Power" ? <>
        <Handle type="source" position="right" id={getId()} 
        style={{ top: 50, background: '#555', left: 115, }} />
          <Handle type="source" position="right" id={getId()} 
        style={{ top: 70, background: '#555', left: 115, }} />
        </> : null}
       
        {alt === "Splitter" ? (<> 
        <Handle type="source" position="right" id={getId()} style={{ top: 3, background: '#555', left: 67, }} />
        <Handle type="source" position="right" id={getId()} style={{ top: 120, background: '#555', left: 67 }} />
        <Handle type="source" position="right" id={getId()} style={{ top: 62, background: '#555', left: 15, }} />
        <Handle type="source" position="right" id={getId()} style={{ top: 62, background: '#555', left: 120 }} />
        </>): null}
       
        {alt === "LEDGLOW" || alt === "Resistor" ||alt === "LDR" ||alt === "Diode" ||alt === "Capacitor" ||
        alt === "Tact"||alt === "Beeper"  ? rotate ?
        <>
        <Handle type="source" position="left" id={getId()} style={{ top: 0, background: '#555', left: 40, }} />
        <Handle type="source" position="left" id={getId()} style={{ top: 102, background: '#555', left: 40 }} />
        <p onClick={() => setRotate(!rotate)}
        style={{fontWeight: '600', position: 'relative', 
        top: '-22px', left: '55px', zIndex: '100'}}>Rotate</p>
        </>: <>
        <Handle type="source" position="left" id={getId()} style={{ top: 62, background: '#555', left: -13, }} />
        <Handle type="source" position="left" id={getId()} style={{ top: 62, background: '#555', left: 145 }} />
        <p onClick={() => setRotate(!rotate)}
        style={{fontWeight: '600', position: 'relative', 
        top: '-22px', left: '55px', zIndex: '100'}}>Rotate</p>
        </>
        :null} 

        {alt === 'Transistor' ? 
        <>
        <Handle type="source" position="left" id={getId()} style={{ top: 65, background: '#555', left: -13, }} />
        <Handle type="source" position="left" id={getId()} style={{ top: 55, background: '#555', left: 145 }} />
        <Handle type="source" position="left" id={getId()} style={{ top: 80, background: '#555', left: 145 }} />
        </>
        :null}    

        {alt === 'POTENTIOMETER' ||alt === "DualSwitch"  ? 
        <>
        <Handle type="source" position="left" id={getId()} style={{ top: 65, background: '#555', left: -13, }} />
        <Handle type="source" position="left" id={getId()} style={{ top: 45, background: '#555', left: 145 }} />
        <Handle type="source" position="left" id={getId()} style={{ top: 80, background: '#555', left: 145 }} />
        </>
        :null} 

        {alt === 'Timer' ? 
        <>
         <Handle type="source" position="left" id={getId()} style={{ top: 50, background: '#555', left: -13, }} />
        <Handle type="source" position="left" id={getId()} style={{ top: 70, background: '#555', left: -13, }} />
        <Handle type="source" position="left" id={getId()} style={{ top: 90, background: '#555', left: -13, }} />
        <Handle type="source" position="left" id={getId()} style={{ top: 30, background: '#555', left: -13, }} />
        <Handle type="source" position="left" id={getId()} style={{ top: 55, background: '#555', left: 145 }} />
        <Handle type="source" position="left" id={getId()} style={{ top: 80, background: '#555', left: 145 }} />
        </>
        :null}

        {alt === "USB"? 
        <>
        <Handle type="source" position="left" id={getId()} style={{ top: 40, background: '#555', left: 145 }} />
        <Handle type="source" position="left" id={getId()} style={{ top: 95, background: '#555', left: 145 }} />
        </>
        :null} 
        </>
      )

    }
    const newNode = {
      id: getId(),
      type,
      position,
      data: { label: text()},
      rotate: rotate
    };
    setElements((es) => es.concat(newNode));
  };

  // if(rotate){
  //   let newArray = [...elements];
  //   newArray.forEach((i) => {
  //     newArray[newArray.length-1].data.label.props.children[0].props.style.transform = 'rotate(90deg)';
  //   })
  // }
  

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
            // nodeTypes={nodeTypes}
            elements={elements}
            // edgeTypes={edgeTypes}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            key="edges"
            // onClick={(e)=>onClickEvent(e)}
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