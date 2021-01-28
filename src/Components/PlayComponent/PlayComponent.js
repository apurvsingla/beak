/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import {Graph, 
LevelIcon, BackIcon, RetryIcon,DescSpan,
PosButton,CoverDiv
} from './Styles/PlayComponent.styles';
import ScrollLock  from 'react-scrolllock';
import {
leftImageSource
} from '../Source/Source';
import './Styles/play.styles.scss';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {useSessionStorage} from '../SessionStorage/SessionStorage';

import { Scrollbars } from 'react-custom-scrollbars';
import {useHistory} from 'react-router-dom';
import BottomComponent from './BottomComponent/BottomComponent';
// import MiddleComponent from './MiddleComponent/MiddleComponent';
import axios from "axios";
import DnDFlow from './DndFlow/DndFlow';

const PlayComponent = () => {
    const history = useHistory();
    const [image] = React.useState(JSON.parse(sessionStorage.getItem("image-data")));
    const newImage = [image];

    const [normalImg, setNormalImg] = useSessionStorage('normal-img', []);
    const [num, setNum] = useSessionStorage('glow-id', 0);
    const [id, setId] = useSessionStorage('id', 0);
    // const [idTop, setIdTop] = useSessionStorage('id-top', 0);
    // const [idBottom, setIdBottom] = useSessionStorage('id-Bottom', 0);
    // const [idTwoWayTopRight, setIdTwoWayTopRight] = useSessionStorage('id-two-way-switch-top-right', 0);
    // const [idTwoWayBottomRight, setIdTwoWayBottomRight] = useSessionStorage('id-two-way-bottom-right',0);
    
    // const [activeTWTop, setActiveTWTop] = useSessionStorage('active-two-way-top-right', {});
    // const [activeTWBottom,setActiveTWBottom] = useSessionStorage('active-Tw-Bottom', {});
    

    // const [activeTop, setActiveTop] = useSessionStorage('active-top-condition', {});
    // const [currentActiveTop, setCurrentActiveTop] = React.useState(null);
    // const [activeTopBoolean,setActiveTopBoolean] = React.useState(false);

    // const [activeBottom, setActiveBottom] = useSessionStorage('active-bottom-condition', {});
    // const [currentActiveBottom, setCurrentActiveBottom] = React.useState(null);
    // const [activeBottomBoolean,setActiveBottomBoolean] = React.useState(false);
    // const [booleanTwTop,setBooleanTwTop] = React.useState(false);
    // const [booleanTwBottom,setBooleanTwBottom] = React.useState(false);


    // const [bottomArrow, setBottomArrow] = React.useState(true);
    // const [even, setEven] = React.useState(1);
    // Modal
    const [open, setOpen] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [value, setValue] = useState(null);
    const closeModal = () => setOpen(false);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [elements, setElements] = useState([]);
    const [rotate, setRotate] = useState(false);
    const [glow,setGlow] = useState(false);
    const data = {
        normalImg: [...normalImg, value],
    }

    const save = () => axios.post('https://beak-server.herokuapp.com/fan', data).then((res) => {
        console.log(res.data);
    }).catch((error) => {
        console.log(error);
    });

    const reset = () => {
        setNormalImg([]);
        setId(0);
        setNum(0);
        // setIdTop(0);
        // setIdBottom(0);
        // setIdTwoWayTopRight(0);
        // setIdTwoWayBottomRight(0);
        setReactFlowInstance(null);
        setElements([]);
        window.location.reload();
    }

    const back = () => {
        history.goBack();
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        save();
    }

    const onImage1Concat = (src,alt) => {      
        setNormalImg(i => i.concat({id: id, 
            src: src, pos: 'normal',
            clicked: false, alt: alt, 
            glowId: num}));
        setId(id+1);
        setNum(num+1);             
    }

    const [count, setCount] = useState(0);
    const [press, setPress] = useState(false);

    // const glowEffect = () => {
    //     const newArray = [...elements];
    //     newArray.forEach((i,index) => {
    //         if(i.alt === "Beeper"){
    //             const newObj = {...i.data.label.props.children[0].props.children.props.style, backgroundColor: 'red'}
    //             // i.data.label.props.children[0].props.children.props.style.backgroundColor = 'red';
    //             // Object.assign({},i.data.label.props.children[0].props.children.props.style, 
    //             //     {backgroundColor: 'red'})
    //             console.log(newObj) 
    //         }      
    //     })
    //     setElements(newArray);
    // }





    let incr = 0;
    return (
        <div style={{position: "absolute"}}>
            {clicked ? <span className="popup-form">
                    <span>Saved Sucessfully</span> 
                    <button onClick={() => setClicked(false)} 
                    style={{marginTop: '5px', border: 'none', 
                    outline: 'none', backgroundColor: 'green', 
                    color: 'white', padding: '5px', 
                    borderRadius: '25px', cursor: 'pointer'}}>Continue</button>
                </span>: null}
                <Popup trigger={<img src={process.env.PUBLIC_URL + '/images/components/saveicon.png'} alt="i" style={{
                    position: 'fixed', top: '165px', right: '0', zIndex: '10000', cursor: 'pointer', pointerEvents: 'all'
                    }} 
                    onClick={() => setClicked(true)}
                    />} position="left center" style={{zIndex: '150'}}
                    onClose={closeModal}
                    open={open}>
                        {close => (
                        <form style={{marginTop: '10px', fontWeight: 'bold',}} 
                        onSubmit={(e) => {
                            handleSubmit(e); 
                            close();
                            setClicked(true);
                            setValue("");
                            }}>
                            <label style={{display: 'flex', flexDirection: 'column', 
                            justifyContent: 'center', alignItems: 'center'}}>
                                Project-Name 
                                <input type="text" required value={value} onChange={handleChange}/>
                            </label>
                            <span style={{display: 'flex', justifyContent: 'space-around'}}>
                            <input type="submit" value="Submit" className="popup-input"/>
                                <input onClick={() => {
                                close();
                                }} className="popup-input" value="Cancel" type="button"/>
                            </span>
                        </form>
                    )}
                </Popup>
            <ScrollLock>
                <img src={leftImageSource} 
                style={{height: '100vh', width: '22vw',}}
                alt="left"/>
            </ScrollLock>
            {newImage[0].map((j,index) => {
                if(!normalImg[index] || normalImg[index].alt !== j.alt){
                    if(normalImg[incr] !== newImage[incr - 100]){
                        return(<li
                            style={{ position: 'absolute',
                            left: '5vw', color: 'red',  fontWeight: '400', 
                            fontSize: '1.2rem',top: '45vh', zIndex: '10'}}
                        >Wrong Selected</li>)
                    }
                    if(incr === index){
                        return(
                            <>
                            <li style={{position: 'absolute', top: '45vh', 
                            left: '4vw', zIndex: '10'}}>Select {j.alt}</li>
                            </>
                        )
                    }
                }
                incr = incr+1;
                return(<></>)
                
            })}
            <CoverDiv />
            <DescSpan>
                Description:
            </DescSpan>

            {count === 0 ? 
            <PosButton id="soumityaCLICK" color={'grey'} back={'white'}
            onClick={() => {
                setRotate(!rotate);
                setCount(1);
                let spanId = document.getElementById('spanId');
                spanId.style.backgroundColor= "red"
            }}
            >Rotate Next Elements
            </PosButton> 
            :
            <PosButton color={'green'} back={'white'}
            onClick={() => {
                setRotate(!rotate);
                setCount(0);
            }}
            >Rotate Next Elements
            </PosButton>}

            <BackIcon onClick={() => back()} />

            {/* Graph */}
            <Scrollbars style={{ width: '78vw', height: '80vh', left: '22vw', position: 'absolute', top: '0',}}>
                <Graph normalImg={normalImg.length} style={{zIndex: '-1'}}/>
                <RetryIcon onClick={() => reset()} />
                <LevelIcon />
                <DnDFlow 
                image={normalImg} ids={id}
                setId={setId}
                setImage={setNormalImg}
                setReactFlowInstance={setReactFlowInstance}
                elements={elements}
                reactFlowInstance={reactFlowInstance}
                setElements={setElements}
                rotate={rotate} press={press}
                setPress={setPress}
                />
                {/* {glowEffect()} */}
                
            </Scrollbars>
            <BottomComponent onImage1Concat={onImage1Concat} />
        </div>
    );
}

export default PlayComponent;
