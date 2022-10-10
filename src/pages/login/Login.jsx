import styled from "styled-components";

import Menu from "../../components/menu/Menu";
import Arrow from "../../components/login/arrow/Arrow";
import Logo from "../../components/logo/Logo";
import Inputs from "../../components/login/inputs/Inputs";

function Login(){
    return (
        <DivLogin>
            <Menu/>

            <Arrow/>

            <Logo/>

            <Inputs/>

        </DivLogin>
    )
}
export default Login;

const DivLogin = styled.div`
font-family: 'Helvetica Neue';
width: 375px;
margin: 0 auto;
border: solid 1px white;
height: 812px;
background-image: url('/bg_cinema.jpg');
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
`