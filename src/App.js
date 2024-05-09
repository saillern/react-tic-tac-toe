import styled from "styled-components";

const stateParams = {
  circleTurn : true,
  cells : new Array(9).fill(""),
  turnCount : 0,
  done : false
}

const STATE_MESSAGE = {
    play : "processing",
    win : "win",
    draw : "drow",
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

const Title = styled.h1`
  font-size: 1.2rem;
  text-align: center;
`;

const Container = styled.div`
  align-items: center;
  justify-content: center;
  height: 100vh;
  display :flex;
`
const DisplayTurn = styled.div`
  display: flex;
  padding: 8px 16px;
`

export default function RunGame(){
  return(
    <Container>
      <Title>Tic Tac Toe</Title>
      <DisplayTurn>

      </DisplayTurn>
    </Container>
  )
}
