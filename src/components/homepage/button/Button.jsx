import styled from "styled-components";

import { Link } from "react-router-dom";
import Login from "../../../pages/login/Login";

function Button(){
    
    return(
        <Link to={'/login'}>
            <DivButton>
                <button onClick={(()=>Login())}>
                    Começar a ver filmes
                </button>    
            </DivButton>
        </Link>
    )
}
export default Button;

const DivButton = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 50px;
text-style: none;

    button {
        max-width: 338px;
        width: 90%;
        height: 48px;
        border-radius: 5px;
        background: #F52D2D;
        color: white;
        border: none;
        cursor: pointer;
    }

`