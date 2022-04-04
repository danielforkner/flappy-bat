import React, { useState, useEffect } from 'react';

const Board = () => {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(20);
  const [board, setBoard] = useState([]);

  function createBoard(rows, cols) {
    let board = [];
    for (let i = 0; i < rows; i++) {
      board.push([]);
      for (let j = 0; j < cols; j++) {
        board[i].push(j);
      }
    }
    setBoard(board);
  }

  useEffect(() => {
    createBoard(rows, cols);
  }, []);

  return (
    <table className="gameBoard">
      {board.map((row, i) => {
        let cols = row.map((col, j) => {
          return <td className="cell"></td>;
        });
        return <tr className="row">{cols}</tr>;
      })}
    </table>
  );
};

export default Board;
