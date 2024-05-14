import styled  from "styled-components"
import { useState } from "react";
import Board  from "./Board";


const Container = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -weblit-box-pack: center;
  justify-content: center;
  height: 100vh;
`
const Main = styled.div`
  box-sizing: border-box;
`

const Header = styled.div`
  padding: 16px;
`
const Title = styled.h1`
  text-align: center;
  font-size: 1.2rem;
`

const Turn = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`
const Symbol = styled.div`
  padding: 8px 16px;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 0px;
`

export default function Game(){
  return (
    <Container>
      <Main>
        <Header>
          <Title>Tic Tac Toe</Title>
          <Turn>
            <Symbol>○</Symbol>
            <Symbol>✕</Symbol>
          </Turn>
        </Header>
        <Board />
      </Main>
    </Container>
  )
}