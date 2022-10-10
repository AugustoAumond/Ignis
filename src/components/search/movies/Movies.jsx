import { useEffect, useState } from "react";
import styled from "styled-components";

function Movies(props){
    const [see, setSee] = useState(false);

    return (
        <DivMovies>
            <h1>Filmes</h1>
            <div id="flex"> 
                {props.list?.map((e, index)=>(
                    <div id={`movies${index}` } class="movies" key={index}>
                        <Img see={see} src={see === false ? `https://image.tmdb.org/t/p/original${e.poster_path}` : `https://image.tmdb.org/t/p/original${e.backdrop_path}`} alt="" />
                        <Container see={see} id="container">
                            <h2> {e.title}</h2>
                            <P see={see}> {e.overview}</P>
                            <button onClick={()=>setSee(!see)}>Ver Mais</button>
                        </Container>
                    </div>
                ))}
            </div>
        </DivMovies>
    )
}
export default Movies;

const DivMovies = styled.div`
height: 100%;

    #flex {
        display: flex;
        flex: 1 1 160px;
        flex-wrap: wrap;
        position: relative;
        left: -15px;
    
    }

    .movies {
        position: relative;
        margin-left: 25px;
        margin-bottom: 16px;
        border: 1px solid gray;
        border-radius: 8px;
    }

    h2 {
        position: relative;
        max-width: 150px;
        font-size: 14px;
        top: 10px;
        left: 10px;
        border-radius: 0px 0px 8px 8px;
    }

    button {
        width: 100%;
        background: #282828;
        color: white;
        font-size: 10px;
        font-weight: 700;
        border: none;
        position: relative;
        bottom: -15px;
        cursor: pointer;
    }
`

const P = styled.p`
overflow: hidden;
margin: 0 auto;
margin-top: 16px;
width: 90%;
height: 32px;
font-size: 10px;
max-width: ${props => props.see === false ? '150px' : 'unset'};
`

const Img = styled.img`
    position: relative;
    width: 100%;
    max-width: ${props => props.see === false ? '160px' : 'unset'};
    height: 210px;
    border-radius: 8px;
    z-index: 2;
`

const Container = styled.div`
    position: relative;
    top: -20px;
    width: 100%;
    max-width: max-width: ${props => props.see === false ? '160px' : 'unset'};
    height: 115px;
    background: #282828;
`