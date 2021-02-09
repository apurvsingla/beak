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
import axios from "axios";
import DnDFlow from './DndFlow/DndFlow';
import BottomMobileComponent from './MobileDesign/BottomMobileComponent/BottomMobileComponent';

const PlayComponent = () => {
    const history = useHistory();
    const [image] = React.useState(JSON.parse(sessionStorage.getItem("image-data")));
    const newImage = [image];

    const [normalImg, setNormalImg] = useSessionStorage('normal-img', []);
    const [num, setNum] = useSessionStorage('glow-id', 0);
    const [id, setId] = useSessionStorage('id', 0);

    const [open, setOpen] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [value, setValue] = useState(null);
    const closeModal = () => setOpen(false);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [elements, setElements] = useState([]);
    const [rotate, setRotate] = useState(false);

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

    // dimensions
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
    React.useEffect(() => {
        elements.forEach((i,index) => {
          if(press){
            i.animated = true;
          }
        })
        setElements(elements);
      }, [press, elements, setElements])

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
                {dimensions.width>892 ? 
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
                </Popup> : null}
            {dimensions.width > 892 ? 
                <ScrollLock>
                    <img src={leftImageSource} 
                    style={{height: '100vh', width: '22vw',}}
                    alt="left"/>
                </ScrollLock> : null}

            {newImage[0].map((j,index) => {
                if(!normalImg[index] || normalImg[index].alt !== j.alt){
                    if(normalImg[incr] !== newImage[incr - 100]){
                        return(<li
                            className="wrong-ele"
                        >Wrong Selected</li>)
                    }
                    if(incr === index){
                        return(
                            <>
                            <li className="correct-ele">Select {j.alt}</li>
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

            {dimensions.width > 892? count === 0 ? 
            <PosButton color={'grey'} back={'white'}
            onClick={() => {
                setRotate(!rotate);
                setCount(1);
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
            </PosButton> : null}

            <BackIcon onClick={() => back()} />

            {/* Graph */}
            {dimensions.width > 892 ? <>
            <Scrollbars style={{ width: '78vw', height: '80vh', 
            left: '22vw', position: 'absolute', top: '0',}}>
                <Graph normalImg={normalImg.length} 
                style={{zIndex: '-1'}}/>
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
        </>:<>
            {/* <Scrollbars style={{ width: '85vw', height: '85vh', 
            left: '0', position: 'absolute', top: '0',}}> */}
                <Graph normalImg={normalImg.length} 
                style={{zIndex: '-1'}}/>
                <RetryIcon onClick={() => reset()} />
                <LevelIcon />
                
                {/* {glowEffect()} */}
                {/* <MobileDesign /> */}
            {/* </Scrollbars> */}
            <BottomMobileComponent onImage1Concat={onImage1Concat} />
        </>}
        </div>
    );
}

export default PlayComponent;
