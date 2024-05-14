import styled  from "styled-components"
import { useState } from "react";


const Square = styled.div`
    width: 3rem;
    height: 3rem;
    font-size: 2rem;
    text-align: center;
    border-right: 1px solid black;
    &:hover{
        cursor: pointer;
    }
`;

const TableRow = styled.div`
    display: flex;
    border-bottom: 1px solid black;
`

const Table = styled.div`
    border: 1px solid black;
`
function Cell({value,cellClickAction}){
    return(
        <Square className="square" onClick={cellClickAction}>{value}</Square>
    );
}

export default function Board(){
    const [cells, setCells] = useState(Array(9).fill(null));
    function cellClick(){
        console.log("clicked")
    }
    return(
        <Table>
            <TableRow>
                <Cell value={cells[0]} cellClickAction={cellClick} />
                <Cell value={cells[1]} cellClickAction={cellClick} />
                <Cell value={cells[2]} cellClickAction={cellClick} />
            </TableRow>
            <TableRow>
                <Cell value={cells[3]} cellClickAction={cellClick} />
                <Cell value={cells[4]} cellClickAction={cellClick} />
                <Cell value={cells[5]} cellClickAction={cellClick} />
            </TableRow>
            <TableRow>
                <Cell value={cells[6]} cellClickAction={cellClick} />
                <Cell value={cells[7]} cellClickAction={cellClick} />
                <Cell value={cells[8]} cellClickAction={cellClick} />
            </TableRow>
        </Table>
    );
}