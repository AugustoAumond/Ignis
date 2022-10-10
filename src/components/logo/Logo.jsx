import styled from "styled-components";

function Logo(){
    return(
        <DivLogo id="logo">
       
                <svg class="film" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="film" d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z" stroke="white"  stroke-width="2" stroke-linejoin="round"/>
                    <path class="film" d="M12 9C12.8285 9 13.5 8.32845 13.5 7.5C13.5 6.67155 12.8285 6 12 6C11.1715 6 10.5 6.67155 10.5 7.5C10.5 8.32845 11.1715 9 12 9Z" stroke="white"  stroke-width="2" stroke-linejoin="round"/>
                    <path class="film" d="M12 18C12.8285 18 13.5 17.3285 13.5 16.5C13.5 15.6715 12.8285 15 12 15C11.1715 15 10.5 15.6715 10.5 16.5C10.5 17.3285 11.1715 18 12 18Z" stroke="white"  stroke-width="2" stroke-linejoin="round"/>
                    <path d="M7.5 13.5C8.32845 13.5 9 12.8285 9 12C9 11.1715 8.32845 10.5 7.5 10.5C6.67155 10.5 6 11.1715 6 12C6 12.8285 6.67155 13.5 7.5 13.5Z" stroke="white"  stroke-width="2" stroke-linejoin="round"/>
                    <path d="M16.5 13.5C17.3285 13.5 18 12.8285 18 12C18 11.1715 17.3285 10.5 16.5 10.5C15.6715 10.5 15 11.1715 15 12C15 12.8285 15.6715 13.5 16.5 13.5Z" stroke="white"   stroke-width="2" stroke-linejoin="round"/>
                    <path d="M12 22H22"  stroke-width="2" stroke-linecap="round"/>
                </svg>     
                    IgnisFlix  
        </DivLogo>
    )
}
export default Logo;

const DivLogo = styled.div`
width: 125px;
margin: 0 auto;
margin-top: 20px;
background-image: linear-gradient(215.46deg, #F52D2D 17.76%, #3A2FAF 85.58%);
background-size: cover;
-webkit-background-clip: text;
color: transparent;
font-size: 24px;
font-weight: 700;
font-family: 'Helvetica Neue';

    .film {
        margin-right: 5px;
    }

    path {
        
    }
`