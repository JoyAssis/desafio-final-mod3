import React from 'react'
import nome from './img/nome2.png'
import styled from 'styled-components';
import ig from './img/025-instagram.png'
import linkedin from './img/045-linkedin.png'
import git from './img/038-github.png'

const Container = styled.div`
width: 100%;
height: 92%;
justify-content: center;
display:flex;
`
const Name = styled.div`
width: 50vw;
height: 50vh;
margin-top: 5%;
margin-left: 8%;
 img{
    width: 50vw;
    height: 70vh;
 }
`
const Btn = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-left: 20%;
`
const Button = styled.button`
width: 20vw;
height: 6vh;
display: flex;
align-items: center;
justify-content: center;
background-color: var(--red);
border-radius: 2px;
border: solid #d7bcfd;
margin-bottom: 20px;
color: #d7bcfd;
 :hover{
  cursor:pointer;
  background-color: #d7bcfd;
  transition-timing-function: ease-in;
  transition: 1s;
  transform: translateY(5%);
  color: black;
}
`
const Icon =styled.img`
width:25px;
margin-bottom: 5px;
 :hover{
  cursor:pointer;
  background-color: white;
  transition:2s;
  border-radius: 5px;
}
`


export default function Main(){
    return(
    <Container>
       <Btn>
         <Button>PEDAGOGIA</Button>
         <Button>DESENVOLVIMENTO WEB</Button>
         <Button>CIÊNCIAS DA COMPUTAÇÃO</Button>      
       
         <a href="https://github.com/JoyAssis" target="_blank" rel="noreferrer"><Icon src={git} alt="github" /></a>
         <a href="https://www.linkedin.com/in/joy-assis-31a100179/" target="_blank" rel="noreferrer"><Icon src={linkedin} alt="linkedin" /></a>
         <a href="https://www.instagram.com/imjoyassis/" target="_blank" rel="noreferrer"><Icon src={ig} alt="instagram" /></a>
       </Btn>
       <Name>
         <img src={nome} alt="nome" />
       </Name>
    </Container>
    )
}