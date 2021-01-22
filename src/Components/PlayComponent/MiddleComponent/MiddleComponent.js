import React from 'react';
import NormalImg from './InnerComponents/NormalImg/NormalImg';
import ParallelImage1 from './InnerComponents/ParallelImage/ParallelImage1';
import ParallelImage2 from './InnerComponents/ParallelImage/ParallelImage2';
import ParallelTWtop from './InnerComponents/ParallelImage/ParallelTWtop';

const MiddleComponent = (props) => {
    const {image,setImage,newImage,
    activeTop,setActiveTop,setCurrentActiveTop,
    currentActiveTop,activeTopBoolean,
    setActiveTopBoolean,activeBottom,
    setActiveBottom,setCurrentActiveBottom,
    currentActiveBottom,activeBottomBoolean,
    setActiveBottomBoolean, 
    setActiveTWTop,setActiveTWBottom,
    activeTWTop,activeTWBottom,setBooleanTwBottom,
    booleanTwBottom,setBooleanTwTop,booleanTwTop,setId,
    id
    } = props;

    const deleteImage = (arrID) => {
        const newArray = [...image];
        newArray.forEach((i,index) => {
            const arr = newArray[index]
            if(arr.id === arrID){
                newArray.splice(index,id)
            }
        });
        setImage(newArray);
        setId(arrID);
    }
    const activeTopFunc= (index) => {
        activeTop[index] = index;
        setActiveTop(activeTop);
        setCurrentActiveTop(index);
        setActiveTopBoolean(!activeTopBoolean)
    }

    const activeBottomFunc = (index) => {
        activeBottom[index] = index;
        setActiveBottom(activeBottom);
        setCurrentActiveBottom(index);
        setActiveBottomBoolean(!activeBottomBoolean)
    }

    const twoWayTopRight = (index) => {
        activeTWTop[index] = index;
        setActiveTWTop(activeTWTop);
        setCurrentActiveTop(index);
        setBooleanTwTop(!booleanTwTop)
    }

    const twoWayBottomRight = (index) => {
        activeTWBottom[index] = index;
        setActiveTWBottom(activeTWBottom);
        setCurrentActiveBottom(index);
        setBooleanTwBottom(!booleanTwBottom)
    }

    return (
        <div>
             {/* {newImage[0][newImage[0].length-1] === 'splitter' ? <ParallelImage1 />: null} */}
           {image.length>=1 ? (image.map((i,index,arr) => {
                        return(
                                <>
                               
                                {i.pos === 'normal' ? 
                                <NormalImg index={index} i={i} arr={arr}
                                deleteImage={deleteImage} newImage={newImage}
                                activeTopFunc={activeTopFunc} activeBottomFunc={activeBottomFunc}
                                twoWayTopRight={twoWayTopRight} twoWayBottomRight={twoWayBottomRight}
                                // marks={marks} valueLabelFormat={valueLabelFormat}
                                // activeSecondLink={activeSecondLink} 
                                // img1={img1} appearDot={appearDot} 
                                // setAppearDot={setAppearDot}
                                // setImg1={setImg1}
                                // activeNormal={activeNormal}
                                /> : null}

                                {i.pos === 'top-right' ? <ParallelImage1 
                                i={i} index={index} 
                                currentActiveTop={currentActiveTop}
                                
                                />: null}

                                {i.pos === 'bottom-right' ? 
                                <ParallelImage2
                                i={i} index={index} 
                                currentActiveBottom={currentActiveBottom}
                                />: null}

                                {i.pos === 'two-way-top-right'? <ParallelTWtop 
                                currentActiveTop={currentActiveTop}
                                i={i} index={index}  
                                />: null}
                                {i.pos === 'two-way-bottom-right'? <ParallelTWtop />: null}
                            </>
                         )
                })) : null} 
        </div>
    );
}

export default MiddleComponent;
