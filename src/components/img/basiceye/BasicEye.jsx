import styled from "styled-components";

function BasicEye(){
    return (
        <DivBasicEye>
            <svg id="bg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.58334 2.26908C4.58334 1.93638 4.85305 1.66667 5.18576 1.66667H14.8143C15.147 1.66667 15.4167 1.93638 15.4167 2.26908V12.9167C15.4167 15.9082 12.9916 18.3333 10 18.3333C7.00847 18.3333 4.58334 15.9082 4.58334 12.9167V2.26908Z" stroke="#CC2828" stroke-width="2"/>
            <path d="M7.08334 6.66667H8.33334" stroke="#CC2828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.6667 6.66667H12.9167" stroke="#CC2828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.08333 4.99999C7.54357 4.99999 7.91667 4.6269 7.91667 4.16666C7.91667 3.70642 7.54357 3.33333 7.08333 3.33333C6.6231 3.33333 6.25 3.70642 6.25 4.16666C6.25 4.6269 6.6231 4.99999 7.08333 4.99999Z" fill="#CC2828"/>
            <path d="M10 15.8333C11.6108 15.8333 12.9167 14.5275 12.9167 12.9167C12.9167 11.3058 11.6108 10 10 10C8.38918 10 7.08334 11.3058 7.08334 12.9167C7.08334 14.5275 8.38918 15.8333 10 15.8333Z" stroke="#CC2828" stroke-width="2"/>
            </svg>  
        </DivBasicEye>
    )
}
export default BasicEye;

const DivBasicEye = styled.div`
background: #E0E7FF;
position: absolute;
display: flex;
align-items: center;
justify-content: center;
width: 32px;
height: 32px;
opacity: 0.8;
border-radius: 3px;
filter: blur(0.46767px);
right: -41px;
top: 265px;

    #bg {
        width: 35px;
    }
`