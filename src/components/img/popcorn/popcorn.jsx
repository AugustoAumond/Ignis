import styled from "styled-components";

function Popcorn(){
    return (
        <DivPopcorn>
            <svg id="bg" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7802 17.0944L16.9902 7.14951H3.65687L5.86683 17.0944C6.00587 17.7201 6.07541 18.0329 6.30391 18.2162C6.53241 18.3995 6.85287 18.3995 7.49383 18.3995H13.1532C13.7942 18.3995 14.1147 18.3995 14.3432 18.2162C14.5717 18.0329 14.6412 17.7201 14.7802 17.0944Z" stroke="#2F395E" stroke-width="1.34804" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.9902 18.3995L12.4069 7.14951" stroke="#2F395E" stroke-width="1.34804" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.65687 18.3995L8.2402 7.14951" stroke="#2F395E" stroke-width="1.34804" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.6569 18.3995H6.9902" stroke="#2F395E" stroke-width="1.34804" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.6569 7.14951H6.9902" stroke="#2F395E" stroke-width="1.34804" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.32371 7.14947C5.32371 7.14947 4.90704 5.89947 5.53204 5.27447C6.15704 4.64947 7.40704 4.8578 7.40704 4.8578C7.40704 4.8578 7.40704 3.6078 8.24037 3.19114C9.07371 2.77447 10.3237 3.39946 10.3237 3.39946C10.3237 3.39946 11.157 2.00064 12.407 2.35781C13.657 2.71498 13.657 4.23282 13.657 4.23282C13.657 4.23282 14.6987 4.23284 15.3237 5.06614C15.9487 5.89947 15.3237 7.14947 15.3237 7.14947" stroke="#2F395E" stroke-width="1.34804" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </DivPopcorn>
    )
}
export default Popcorn;

const DivPopcorn = styled.div`
background: #E0E7FF;
position: absolute;
top: 343px;
display: flex;
align-items: center;
justify-content: center;
width: 32px;
height: 32px;
opacity: 0.8;
border-radius: 3px;
filter: blur(0.46767px);

    #bg {
        color: #2F395E;
    }
`