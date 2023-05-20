/* eslint-disable */

import React, { useState, useRef } from 'react';
import './GameTable.css';
import CellState from './game-logic/CellState';
import Cell from './game-logic/Cell';
import Game from './game-logic/Game';

const { ALIVE, DEAD } = CellState;
const initialGameState = [
  [DEAD, DEAD, DEAD, DEAD, DEAD, ...Array(15).fill(DEAD)],
  [DEAD, DEAD, ALIVE, DEAD, DEAD, ...Array(15).fill(DEAD)],
  [DEAD, DEAD, DEAD, ALIVE, DEAD, ...Array(15).fill(DEAD)],
  [DEAD, ALIVE, ALIVE, ALIVE, DEAD, ...Array(15).fill(DEAD)],
  [DEAD, DEAD, DEAD, DEAD, DEAD, ...Array(15).fill(DEAD)],
  ...Array(15).fill([...Array(20).fill(DEAD)]),
];

function GameTable() {
  const game = useRef(new Game(initialGameState)).current;

  const [gameState, setGameState] = useState({
    cells: game.state
  });

  const updateGameState = () => {
    const nextState = game.nextState();
    game.state = nextState;
    setGameState({
      cells: nextState
    });
  };

  const toggleState = (row, column) => {
    setGameState((prevState) => {
      let updated = false;
      const updatedCells = prevState.cells.map((cellRow, rowNum) =>
        cellRow.map((cell, colNum) => {
          if (rowNum === row && colNum === column && cell.state === ALIVE) {
            updated = true;
            return new Cell(DEAD);
          } else if (rowNum === row && colNum === column && cell.state === DEAD) {
            updated = true;
            return new Cell(ALIVE);
          }
          return cell;
        })
      );
      if (updated) {
        game.state = updatedCells;
      }
      return updated ? { cells: updatedCells } : prevState;
    });
  };

  return (
    <div className='table-container'>
      <table>
        <tbody>
          {gameState.cells.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cellState, columnIndex) => (
                <td
                  key={columnIndex}
                  className={cellState.state === CellState.ALIVE ? 'alive' : 'dead'}
                  onClick={() => toggleState(rowIndex, columnIndex)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={updateGameState}>Next State</button>
    </div>
  );
}

export default GameTable;
