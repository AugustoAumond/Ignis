import styled from "styled-components";
import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';

import {BsEye, BsEyeSlash} from 'react-icons/bs'

function Inputs(){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [see, setSee] = useState('password');
    const [autentication, setAutentication] = useState(false);

    function Autentication(username, password){
        axios.post('https://virtserver.swaggerhub.com/Ignis-Digital/ignis-teste/1.0.0/login', {email: username, password: password})
        .then(response=>{
            //localSotrage.getItem('token', response.data[0].accessToken.token); 
          
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <DivInputs>
            <Div>
                <p>E-mail / Username</p>
                <Input props={username} id="input"  onChange={((e)=>{setUserName(e.currentTarget.value)})} type="text" />
            </Div>

            <Div>
                <p>Senha</p>

                <section>
                    <Input props={password} id="input" onChange={((e)=> setPassword(e.currentTarget.value))} type={see}/>
                    {see === 'password' ? <BsEyeSlash onClick={(()=>setSee('text'))} className="icon"/> : <BsEye onClick={(()=>setSee('password'))} className="icon"/>}
                </section> 
                
            </Div>

            <DivButton>
                
                    <button onClick={(()=>Autentication(username, password))}>
                    <Link to={'/user'}>
                        Entrar
                        </Link>   
                    </button> 
                
            </DivButton>           
        </DivInputs>
    )}
export default Inputs;

const DivInputs = styled.div`
color: white;
margin-top: 35px;
width: 100%;
height: 25px;
`

const Div = styled.div`
margin-left: 15px;

    section{
        display: flex;
    }

    .icon {
        position: relative;
        right: 35px;
        top: 9px;
    }
`

const Input = styled.input`
    width: 85%;
    max-width: 335px;
    height: 32px;
    background: #282828;
    border: ${props => props.props ? 'solid 3px #3A2FAF ':  'solid 1px #282828'};
    margin-top: -10px;
    border-radius: 8px;
    padding: 12px;
    color: #A8A8A8;

    #input:focus{
        border: solid 3px #3A2FAF;
        color: #A8A8A8;
    }

    
`

const DivButton = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 69px;
text-style: none;
font-weight: 700;


    button {
        max-width: 336px;
        margin: 0 auto;
        width: 90%;
        height: 48px;
        border-radius: 5px;
        background: #F52D2D;
        color: white;
        border: none;
        cursor: pointer;
        margin-top: 213px;
        transition: .5s;
    }

    button: hover {
        opacity: 0.6;
        
    }
`


