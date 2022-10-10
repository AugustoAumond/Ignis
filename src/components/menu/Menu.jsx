import styled from "styled-components";

import {MdSignalCellularAlt, MdSignalWifiStatusbar4Bar} from 'react-icons/md';
import {BsBatteryFull} from 'react-icons/bs';

function Menu (){
    return (
        <DivMenu>
            <div id="hours">
                9:41
            </div>

            <div id="icons">
                <MdSignalCellularAlt/>

                <MdSignalWifiStatusbar4Bar/>

                <BsBatteryFull/>

            </div>
        </DivMenu>
    )
}
export default Menu;

const DivMenu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 44px;
color: #F9F9F9;


    #hours{
        margin-left: 15px;
    }

    #icons {
        display: flex;
        justify-content: space-between;
        margin-right: 15px;
        width: 66px;

    }
`