import styled, { createGlobalStyle }  from "styled-components"
import Board  from "./Board";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  html{
    font-family: 'Lato', 'Lucida Grande', "Lucida Sans Unicode", Tahoma, Sans-Serif;
    line-height: 1.5;
    font-size: 15px;
  };
  *,*:before,*:after {
    box-sizing: border-box;
  }
`
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
  ${props => props.$circleTurn ? 'border-bottom: 0px': 'border-bottom: 3px solid  black'};
`

const Footer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
`

const Message = styled.div`
  text-align: center;
  padding: 8px;
`

const ResetBtn = styled.a`
  display: inline-block;
  text-align: center;
  border: 3px solid black;
  border-radius: 6px;
  font-weight: bold;
  padding: 4px 16px;
  &:hover{
      cursor: pointer;
      color: white;
      background: black;
  }
`
const STATE_MESSAGE = {
    play : "processing",
    circleWin : "○ win",
    crossWin : "× win",
    draw : "draw",
}


const PATTERN = {
    circle: "○",
    cross: "×"
}

const WIN_PATTERN = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]


function TurnSymbol({turn}){
  const circleTurn = turn%2
  return(
    <Turn>
      <Symbol $circleTurn = {!circleTurn}>○ </Symbol>
      <Symbol $circleTurn = {circleTurn}>✕</Symbol>
    </Turn>
  );
}

function GameStatus({footerText}){
  return(
    <Message>{STATE_MESSAGE[footerText]}</Message>
  );
}

export default function Game(){
  const [turn, setTurn] = useState(1);
  const [cells, setCells] = useState(Array(9).fill(null));
  const [win, setWin] = useState(false);
  const [status,setStatus] = useState("play");


  function GameReset(){
    setTurn(1);
    setCells(cells.fill(null));
    setWin(false);
    setStatus("play");
  }
  const nextCells = cells.slice();
  function cellClick(i){
    if(!cells[i] && !win){
        if( turn%2){
            nextCells[i] = PATTERN.circle;
        }
        else{
            nextCells[i] = PATTERN.cross;
        }
        setCells(nextCells);
        setTurn(turn + 1);
    }
    const winner = WinCheck(nextCells)
    if(winner && !win ){
      setWin(winner)
      setStatus(turn%2? "circleWin": "crossWin")
    }
    if(!win && (turn > 8)){
      setStatus("draw")
    }
  }

  return (
    <Container>
    <GlobalStyle />
      <Main>
        <Header>
          <Title>Tic Tac Toe</Title>
          <TurnSymbol turn ={turn} />
        </Header>
        <Board  turn = {turn} cells = {cells}  cellClick = {cellClick}/>
        <Footer>
          <GameStatus footerText={status} />
          <ResetBtn onClick={GameReset}>Restart</ResetBtn>
        </Footer>
      </Main>
    </Container>
  )
}

function WinCheck(cells){
  for(let i = 0; i < WIN_PATTERN.length; i++){
    const [a,b,c] = WIN_PATTERN[i];
    if( cells[a] && cells[a] === cells[b] && cells[a] === cells[c]){
      return true;
    }
  }
  return false;
}
