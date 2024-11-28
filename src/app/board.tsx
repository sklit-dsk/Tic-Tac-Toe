import React from "react";
import { useState } from "react";
import  Square  from "./squares";
import CalculateWinner from "./calculateWinner";


export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        if (squares[i] || CalculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        // nextSquares[i] = "X";
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }
    
    return (
        <>
            <div className="status">{CalculateWinner(squares)? "Winner: " + (xIsNext? "O" : "X") : "Next player: " + (xIsNext? "X " : "O")}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]}  onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]}  onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]}  onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]}  onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]}  onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]}  onSquareClick={() => handleClick(8)}/>
            </div>
        </> 
    );
}


// export default Square;