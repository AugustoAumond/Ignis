import styled from "styled-components";

import Popcorn from "./popcorn/popcorn";
import BasicEye from "./basiceye/BasicEye";

function Img(){
    return (
        <DivImg>
            <div id="circle">
                <div id="circle2">
                    <div id="circle3">
                        <Popcorn/>
                        <img id="img" src="/man.png" alt="" />
                        <div id="imgman">
                            <img id="img1" src="/man1.png" alt="" />
                            <BasicEye id="eye" />
                        </div>                       
                    </div>
                </div>
            </div>
        </DivImg>
    )
}
export default Img;

const DivImg = styled.div`

    #circle {
        width: 358px;
        height: 358px;
        border-radius: 358px;
        border: solid 1.78px #ffffff01;
        margin: 0 auto;
    }

    #circle2 {
        width: 316.29px;
        height: 316.29px;
        border-radius: 317px;
        border: solid 1.78px #ffffff09;
        margin: 0 auto;
        margin-top: 20px;
    }

        #circle3 {
                width: 286px;
                height: 286px;
                border-radius: 317px;
                border: solid 1.78px #ffffff;
                margin: 0 auto;
                opacity:1;
                margin-top: 13px;
                background: linear-gradient(210deg,#df0000,#0631cf);
                overflow: hidden;
            }  

        #img {
            width: 249px;
            height: 330px;
            position: relative;
            top: -15px;
            left: 15px;
        }

        #img1 {
            width: 249px;
            height: 330px;
            margin: 0 auto;
            position: relative;
            left: 16px;
            top: 7px;

        }

        #imgman {
            position: absolute;
            margin: 0 auto;
            width: 249px;
            height: 330px;
            top: 200px;
        }

        #eye {
            position: absolute;
            bottom: 50px;
            right: -50px;
        }
`