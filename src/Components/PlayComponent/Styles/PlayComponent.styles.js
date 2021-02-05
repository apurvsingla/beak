import styled, {css} from 'styled-components';
import {ReactComponent as Back} from '../button_back.svg';
import {ReactComponent as Retry} from '../button_retry.svg';
import {ReactComponent as Level} from '../button_levels.svg';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const Graph = styled.div`
    background-color: #ffffff;
    background-size: 100px 50px, 50px 50px, 10px 10px, 10px 10px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
    background-image: -webkit-linear-gradient(rgba(56, 56, 56, 0.5) 2px, transparent 2px), -webkit-linear-gradient(0, rgba(56, 56, 56, 0.5) 2px, transparent 2px), -webkit-linear-gradient(rgba(56, 56, 56, 0.5) 1px, transparent 1px), -webkit-linear-gradient(0, rgba(56, 56, 56, 0.5) 1px, transparent 1px);
    background-image: -moz-linear-gradient(rgba(56, 56, 56, 0.5) 1px, transparent 1px), -moz-linear-gradient(0, rgba(56, 56, 56, 0.5) 1px, transparent 1px), -moz-linear-gradient(rgba(56, 56, 56, 0.5) 1px, transparent 1px), -moz-linear-gradient(0, rgba(56, 56, 56, 0.5) 1px, transparent 1px);
    background-image: linear-gradient(rgba(56, 56, 56, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 56, 56, 0.5) 1px, transparent 1px), linear-gradient(rgba(56, 56, 56, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 56, 56, 0.5) 1px, transparent 1px);
    height: ${props => props.normalImg ? (props.normalImg) + '15' : '100'}vh;
    width: ${props => props.normalImg ? props.normalImg + '15': '100'}vw;
    position: absolute;
    opacity: 0.2;
`;

const CommonIconStyles = css`
    width: 120px;
    height: 120px;
    position: fixed;
    top: 0;
    z-index: 100;
    cursor: pointer;
`;

export const BackIcon = styled(Back)`
    ${CommonIconStyles}
    left: 0;
`;
export const RetryIcon = styled(Retry)`
    ${CommonIconStyles}
    right: 0;
    @media (max-width: 892px){
        left: 0;
        top: 20vh;
    }
`;
export const LevelIcon = styled(Level)`
    ${CommonIconStyles}
    right: 0;
    top: 75px;
    @media (max-width: 892px){
        display: none;
    }
`;

export const BottomDesk = styled.div`
@media (min-width: 893px){
    width: 78vw;
    background-color: white;
    border-top: 1px solid #fc846a;
    height: 20vh;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 22vw;
    z-index: 2;
}
@media (max-width: 892px){
    width: 20vw;
    background-color: white;
    height: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
    right: -10px;
}
`;

export const Icon = styled(AddCircleIcon)`
    position: relative;
    bottom: 78px;
    left: 14px;
    cursor: pointer;
`;

export const Img = styled.img`
    width: 75px;
    height: 75px;
    @media (min-width: 893px){
        width: 100px;
        height: 100px;
    }  
`;

export const DivImg = styled.span`
    background-image: url(${props => props.Image});
    height: 110px;
    width: 122px;
    margin-right: 50px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    z-index: 10000;
    @media (max-width: 892px){
        height: 60px;
        width: 100px;
        margin: 10px;
        display: flex;
        flex-direction: column;
    }
`;

export const BottomComponents = styled.div`
    display: inline-block;
    @media (max-width: 892px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const MiddleIconDesk = styled(AddCircleIcon)`
    position: relative;
    bottom: 78px;
    left: 30px;
    cursor: pointer;
    @media (max-width: 892px){
        bottom: 51px;
    }
`;

export const DescSpan = styled.span`
    @media (min-width: 893px){
        position: absolute;
        left: 2vw;
        top: 35vh;
        font-size: 1.5rem;
        font-weight: 600;
        color: grey;
    }

    @media (max-width: 892px){
        position: fixed;
        left: 2vw;
        bottom: 9vh;
        font-size: 1.2rem;
        font-weight: 600;
        color: grey;
    }
    
`;

export const PosButton = styled.button`
    position: absolute;
    left: 25%;
    top: 30vh;
    font-weight: 600;
    color:  ${props => props.color};
    border-radius: 25px;
    border: none;
    cursor: pointer;
    outline: none;
    background-color:  ${props => props.back};
`;

export const CoverDiv = styled.div`
    @media (min-width: 893px){
        width: 18vw;
        height: 60vh;
        background-color: white;
        position: absolute;
        top: 35vh;
        left: 2vw;
    }

    @media (max-width: 892px){
        width: 85vw;
        height: 15vh;
        background-color: white;
        position: fixed;
        bottom: 0;
        border-right: 1px solid lightgrey;
    }    
`;

export const FrontArrow = styled(ArrowBackIosIcon)`
    position: absolute;
    left: 0;
    top: 40%;
    cursor: pointer;
    z-index: 100;
    @media (max-width: 892px){
        display: none !important;
    }
`;

export const LastArrow = styled(ArrowForwardIosIcon)`
    position: absolute;
    right: 0;
    top: 40%;
    cursor: pointer;
    @media (max-width: 892px){
       display: none !important;
    } 
`;

const Image = css`
    position: absolute; 
    z-index: 100; 
    object-fit: contain; 
    width: 70px; 
    height: 50px;
`;


export const PopulatedImage = styled.span`
    ${Image}
    left:  ${props => props.left}px;
    top:  ${props => props.top}px;
`;