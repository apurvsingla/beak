import styled, {css} from 'styled-components';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const size = css`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    @media (max-width: 893px){
        width: 80px;
        height: 80px;
    }
`;

export const CancelNormal = styled(CancelOutlinedIcon)`
    left: ${props => props.left}px;
    top: 205px;
    margin-left: ${props => props.margin}px;
    position: absolute;
    z-index: 15;
    cursor: pointer;
`;

export const Image = styled.img`
    ${size}
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    margin-left: ${props => props.margin}px;
    z-index: 1;
`;

export const ConncectionLineNormal = styled.span`
    margin-left: ${props => props.margin}px;
    position: absolute;
    top: 255px;
    border: 2px solid black;
    color: black;
    width: 75px;
    height: 5px;
    left: ${props => props.left}px;
    border-left: none;
    border-right: none;
`;


export const BottomConnectionLine = styled.span`
    width: ${props => props.width}px;
    height: 8px;
    border: 1px solid black;
    position: absolute;
    left: 80px;
    top: 340px;
    clip-path: ellipse(95% 50%);
`;

const sideLines = css`
    width: 8px;
    height: 31px;
    border: 1px solid black;
    position: absolute;
    left: ${props => props.left}px;
    top: 310px;
    border-top: none;
    border-bottom: none;
`;

export const ElectronConnectionSideLines = styled.span`
    ${sideLines};
`;

const condition = css`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border: 2px solid black;
    left: ${props => props.left}px;
    margin-left: ${props => props.margin}px;
    top: ${props => props.top}px;
    position: absolute;
    border-bottom: ${props => props.borderBottom};
    border-top: ${props => props.borderTop};
    border-left: ${props => props.borderLeft};
    border-right: ${props => props.borderRight};
`;

export const ConditionLines = styled.span`
    ${condition}
`;

const arrow = css`
    position: absolute;
    margin-left: ${props => props.margin}px;
    zIndex: 555;
    left: ${props => props.left}px;
    color: grey;
    top:  ${props => props.top}px;
    transform:  ${props => props.rotate};
    width: 13px;
    height: 13px;
    border-right: 4px solid black;
    border-bottom: 4px solid black;
`;

export const Arrow = styled.span`
    ${arrow}
`;
