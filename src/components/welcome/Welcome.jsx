import styled from "styled-components";

function Welcome(props){
    return (
        <DivWelcome>

            Bem vindo, {props.name}

        </DivWelcome>
    )
}
export default Welcome;

const DivWelcome = styled.div`
color: white;
margin-top: 31px;
margin-left: 20px;
font-size: 24px;

`