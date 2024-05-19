import styled  from "styled-components"

const Square = styled.div`
    width: 3rem;
    height: 3rem;
    font-size: 2rem;
    text-align: center;
    border-right: 1px solid black;
    &:last-child{
        border-right: 0px;
    }
    &:hover{
        cursor: pointer;
    }
`;


const TableRow = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    &:last-child{
        border-bottom: 0px;
    }

`

const Table = styled.div`
    border: 1px solid black;
`
function Cell({value,cellClickAction}){
    return(
        <Square className="square" onClick={cellClickAction}>{value}</Square>
    );
}

export default function Board({turn,cells,cellClick}){
    return(
        <Table>
            <TableRow>
                <Cell value={cells[0]} cellClickAction={() => cellClick(0)} />
                <Cell value={cells[1]} cellClickAction={() => cellClick(1)} />
                <Cell value={cells[2]} cellClickAction={() => cellClick(2)} />
            </TableRow>
            <TableRow>
                <Cell value={cells[3]} cellClickAction={() => cellClick(3)} />
                <Cell value={cells[4]} cellClickAction={() => cellClick(4)} />
                <Cell value={cells[5]} cellClickAction={() => cellClick(5)} />
            </TableRow>
            <TableRow>
                <Cell value={cells[6]} cellClickAction={() => cellClick(6)} />
                <Cell value={cells[7]} cellClickAction={() => cellClick(7)} />
                <Cell value={cells[8]} cellClickAction={() => cellClick(8)} />
            </TableRow>
        </Table>
    );
}