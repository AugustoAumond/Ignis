import styled from "styled-components";
import { useState } from "react";

import axios from "axios";

import {FaSearch} from 'react-icons/fa'
import { useEffect } from "react";

import Movies from "./movies/Movies";

function Search(){
    const [list, setList] = useState();

    useEffect(()=>{
        async function GetMovies (){
        await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=fdec3cf017f52d95fdcd581919da1255')
        .then((response)=>{
            setList(response.data.results);
        })
        .catch(err=>{
            console.log(err)
        })}
        GetMovies();
    }, [list]);

    return (
        <DivSearch>
            <div>
              <input id="input" type="text" placeholder="Buscar Filme" />
                <FaSearch id="icon"/>  
            </div>
            
            <Movies list={list}/>
        </DivSearch>
    )
}
export default Search;

const DivSearch = styled.div`
margin-top: 28px;
margin-left: 20px;
color: white;

#div {
    display: flex;
}

    #input {
        height: 38px;
        padding: 10px;
        border-radius: 39px;
        background: #A8A8A8;
        opacity: .2;
        max-width: 336px;
        width: 90%;
        color: white;
    }

    #icon {
        color: #FFFFFF;
        position: relative;
        top: 23px;
        right: 35px;
        opacity: .2;
    }

`