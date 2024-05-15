import styled  from "styled-components"
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

const DisplayTurn = styled.div`
  border-bottom: 3px solid black;
`

function TurnSymbol({turn}){
  if(turn%2){
    return(
      <Turn>
        <Symbol> <DisplayTurn>○ </DisplayTurn></Symbol>
        <Symbol>✕</Symbol>
      </Turn>
    );
  }
  else{
    return(
      <Turn>
        <Symbol>○</Symbol>
        <Symbol DisplayTurn>✕</Symbol>
      </Turn>
    );
  }
}

function GameStatus(){
  /* To do */
  const STATE_MESSAGE = {
      play : "processing",
      win : "win!!",
      draw : "draw",
  }
  return(
    <Message>processing</Message>
  );
}
export default function Game(){
  return (
    <Container>
      <Main>
        <Header>
          <Title>Tic Tac Toe</Title>
          <TurnSymbol turn = {4} />
        </Header>
        <Board />
        <Footer>
          <GameStatus />
        </Footer>
      </Main>
    </Container>
  )
}