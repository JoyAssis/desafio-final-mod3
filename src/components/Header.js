import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
 nav{
    width:100%;
    display: flex;
    margin-top:2%;
    @media(min-width: 319px) and (max-width: 801px){
        width:100%;
        margin-top:4%;
    }
 }
 nav ul{
    display: flex;
    width:50vw;
    margin-left: 50%;
    justify-content: space-evenly;    
    @media(min-width: 319px) and (max-width: 801px){
     width:100vw;
     margin-left: 20%;
    }
    a:visited {
        color: inherit;
    }
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
 
}
`

export default function Header(){
    return(
        <Container>
        <nav>
            <ul>
                <li>Início</li>
                <li>Portifólio</li>
                <a href="https://contatojoy.carrd.co/" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}><li>Contato</li></a>
            </ul>
        </nav>
        </Container>
    )
}