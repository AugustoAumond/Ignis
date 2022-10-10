import styled from "styled-components";

import Menu from "../../components/menu/Menu";
import Arrow from "../../components/login/arrow/Arrow";
import Logo from "../../components/logo/Logo";
import Welcome from "../../components/welcome/Welcome";
import Search from "../../components/search/Search";

function User(){


    return(
        <DivUser>
            <Menu/>

            <div id="side">
                <Arrow/>

                <Logo/>
            </div>
   
            <Welcome/>

            <Search/>
            
        </DivUser>
    )
}
export default User;

const DivUser = styled.div`
font-family: 'Helvetica Neue';
width: 375px;
margin: 0 auto;
border: solid 1px white;
height: 100%;
min-height: 100vh;
background-image: url('/bg_cinema.jpg');
background-repeat: no-repeat;
background-size: cover;
background-position: center center;

    #side {
        margin-top: 20px;
        display: flex;
        align-items: center;
    }

    #logo {
        position: relative;
        left: 50%;
        transform: translate(-50%, 0);
        width: 100%;
        margin-top: unset;
        text-align: flex-start;
    }
`