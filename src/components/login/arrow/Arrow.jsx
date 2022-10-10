import styled from "styled-components";

import {MdOutlineKeyboardArrowLeft} from 'react-icons/md';

import { Link } from "react-router-dom";

function Arrow(){
    return(
        <DivArrow>
            <Link to={'/'}>
                <MdOutlineKeyboardArrowLeft id="arrow"/>
            </Link>
        </DivArrow>
        
    )
}
export default Arrow;

const DivArrow = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100px;
height: 50px;
color: white;
font-size: 26px;

    #arrow{
        color: white;
    }
`