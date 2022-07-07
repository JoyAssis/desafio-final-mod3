import React from 'react'
import nome from './img/nome.png'
import styled from 'styled-components';

const Container = styled.div`
border: solid purple;
`
const Name = styled.div`
width: 50vw;
height: 50vh;
 img{
    border: solid;
    width: 50vw;
    height: 50vh;
 }
`



export default function Main(){
    return(
    <Container>
       <div>
         <button>aparece caramba</button>
         <button>botão 2</button>
         <button>botão 3</button>
       </div>
       <div>
         <img src="" alt="github" />
         <img src="" alt="linkedin" />
         <img src="" alt="instagram" />
       </div>
       <Name>
         <img src={nome} alt="nome" />
       </Name>
    </Container>
    )
}