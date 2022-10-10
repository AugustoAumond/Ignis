import styled from "styled-components";

function Text(){
    return (
    <DivText>
        <div id="centralize">
            <h2>Do sofá pro seu celular</h2>
            <p>A revolução do cinema na sua casa.</p>
        </div>
    </DivText>
    )
}
export default Text;

const DivText = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 375px;
margin-top: 62px;
color: white;

    #centralize {
        text-align: center;
        width: 265px;
    }

    p {
        color: #A8A8A8;
        font-size: 12px;
        margin-top: -14px;
        
    }
`