import styled, {css} from 'styled-components';
import {ReactComponent as Back} from '../button_back.svg';
import {ReactComponent as Retry} from '../button_retry.svg';
import {ReactComponent as Level} from '../button_levels.svg';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export const Graph = styled.div`
    background-color: #ffffff;
    background-size: 100px 50px, 50px 50px, 10px 10px, 10px 10px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
    background-image: -webkit-linear-gradient(rgba(56, 56, 56, 0.5) 2px, transparent 2px), -webkit-linear-gradient(0, rgba(56, 56, 56, 0.5) 2px, transparent 2px), -webkit-linear-gradient(rgba(56, 56, 56, 0.5) 1px, transparent 1px), -webkit-linear-gradient(0, rgba(56, 56, 56, 0.5) 1px, transparent 1px);
    background-image: -moz-linear-gradient(rgba(56, 56, 56, 0.5) 1px, transparent 1px), -moz-linear-gradient(0, rgba(56, 56, 56, 0.5) 1px, transparent 1px), -moz-linear-gradient(rgba(56, 56, 56, 0.5) 1px, transparent 1px), -moz-linear-gradient(0, rgba(56, 56, 56, 0.5) 1px, transparent 1px);
    background-image: linear-gradient(rgba(56, 56, 56, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 56, 56, 0.5) 1px, transparent 1px), linear-gradient(rgba(56, 56, 56, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 56, 56, 0.5) 1px, transparent 1px);
    height: ${props => props.normalImg ? (props.normalImg) + '10' : '100'}%;
    width: ${props => props.normalImg ? props.normalImg + '10': '100'}%;
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
`;
export const LevelIcon = styled(Level)`
    ${CommonIconStyles}
    right: 0;
    top: 75px;
`;

export const BottomDesk = styled.div`
    width: 78vw;
    background-color: white;
    border-top: 1px solid #fc846a;
    height: 20vh;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 22vw;
    z-index: 2;
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

export const MiddleIconDesk = styled(AddCircleIcon)`
    position: relative;
    bottom: 78px;
    left: 30px;
    cursor: pointer;
    @media (max-width: 892px){
        bottom: 51px;
    }
`;