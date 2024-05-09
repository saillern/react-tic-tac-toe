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
const Body = styled.body`
  padding: 0;
  margin: 0;
  background: #fefefe;
`

const Title = styled.h1`
  font-size: 1.2rem;
  text-align: center;
`;

const Container = styled.div`
  display :flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const DisplayTurn = styled.div`
  display: flex;
  padding: 8px 16px;
`
const Table = styled.div`
  border: 1px solid black;
`
const  TableRow = styled.div`
  display:flex;
  border-bottom: 1px solid black;
  &:last-child{
  border-bottom: 0px
  };

`
const Cell = styled.div`
  height: 3rem;
  width: 3rem;
  font-size: 2rem;
  text-align: center;
  border-right: 1px solid black;
  cursor: pointer;
  &:last-child{
  border-right: 0px
  };
`
function Board(){
  return(
    <Table>
      <TableRow>
        <Cell>1</Cell>
        <Cell>2</Cell>
        <Cell>3</Cell>
      </TableRow>
      <TableRow>
        <Cell>4</Cell>
        <Cell>5</Cell>
        <Cell>6</Cell>
      </TableRow>
      <TableRow>
        <Cell>7</Cell>
        <Cell>8</Cell>
        <Cell>9</Cell>
      </TableRow>
    </Table>
  )
};

export default function RunGame(){
  return(
    <Body>
      <main>
        <Container>
          <Title>Tic Tac Toe</Title>
          <DisplayTurn>
          </DisplayTurn>
          <Board></Board>
        </Container>
      </main>
    </Body>
  )
}
