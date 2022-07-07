import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
border: solid;
display: flex;
 nav{
    width:100%;
    display: flex;
    border: solid yellow;
 }
 nav ul{
    display: flex;
    width:50vw;
    justify-content: space-evenly;
    border:solid;
 }
 nav li{
    list-style:none;
    text-transform: uppercase;
    font-weight: bold;
    :hover{
        cursor:pointer;
        color: white;
    }
 }
 
`

export default function Header(){
    return(
        <Container>
        <nav>
            <ul>
                <li>Início</li>
                <li>Portifólio</li>
                <li>Contato</li>
            </ul>
        </nav>
        </Container>
    )
}