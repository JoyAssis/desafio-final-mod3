import React from 'react'
import { Component } from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components"
import Fundo from './components/img/fundo.png'
import FundoMedia from './components/img/fundomedia.jpeg'
import Header from './components/Header'
import Main from './components/Main'


const GlobalStyle = createGlobalStyle`
*{
 margin:0;
 padding:0;
 box-sizing: border-box;
 font-family: 'Roboto Mono', monospace;
}
`
const Container = styled.div`
 background-image: url(${Fundo});
 width: 100vw;
 height: 100vh;
 background-size:1370px 700px;
 @media(min-width: 319px) and (max-width: 801px){
  background-image: url(${FundoMedia});
  background-size:cover;
  background-repeate:no-repeat;

 }
`

class App extends Component{
  render(){
    return(
      <Container>
       <GlobalStyle/>
       <Header/>
       <Main/>
      </Container>
    )
  }
}

export default App;