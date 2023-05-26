/* eslint-disable */

import React, { useState, useRef, useEffect} from 'react';
import './GameTable.css';
import CellState from './game-logic/CellState';
import Cell from './game-logic/Cell';
import Game from './game-logic/Game';

const { ALIVE, DEAD } = CellState;
const glider = [
  [DEAD, DEAD, DEAD, DEAD, DEAD, ...Array(25).fill(DEAD)],
  [DEAD, DEAD, ALIVE, DEAD, DEAD, ...Array(25).fill(DEAD)],
  [DEAD, DEAD, DEAD, ALIVE, DEAD, ...Array(25).fill(DEAD)],
  [DEAD, ALIVE, ALIVE, ALIVE, DEAD, ...Array(25).fill(DEAD)],
  [DEAD, DEAD, DEAD, DEAD, DEAD, ...Array(25).fill(DEAD)],
  [DEAD, DEAD, DEAD, DEAD, DEAD, ...Array(25).fill(DEAD)],
  [DEAD, DEAD, ALIVE, DEAD, DEAD, ...Array(25).fill(DEAD)],
  [DEAD, DEAD, DEAD, ALIVE, DEAD, ...Array(25).fill(DEAD)],
  [DEAD, ALIVE, ALIVE, ALIVE, DEAD, ...Array(25).fill(DEAD)],
  [DEAD, DEAD, DEAD, DEAD, DEAD, ...Array(25).fill(DEAD)],
  ...Array(7).fill([...Array(30).fill(DEAD)]),
];

const bigBoard = [
  ...Array(36).fill([...Array(36).fill(DEAD)]),
];

const smallBoard = [
  ...Array(15).fill([...Array(15).fill(DEAD)]),
];


function GameTable() {
  const game = useRef(new Game(glider)).current;
  const [isPlaying, setIsPlaying] = useState(false);
  const gameInterval = useRef(null);
  const [gameState, setGameState] = useState({cells: game.state});

  useEffect(() => {
    if (isPlaying) {
      gameInterval.current = setInterval(updateGameState, 300);
    } else {
      clearInterval(gameInterval.current);
    }
    
    return () => clearInterval(gameInterval.current);
  }, [isPlaying]);

  const handlePlayClick = () => setIsPlaying(!isPlaying);

  const updateGameState = () => {
    game.nextState();
    const nextState = game.getState();
    game.state = nextState;
    setGameState({
      cells: nextState
    });
  };

  const toggleState = (row, column) => {
    game.toggleCell(row,column);
    const nextState = game.getState();
    game.state = nextState;
    setGameState({
      cells: nextState
    });
    

    // setGameState((prevState) => {
    //   let updated = false;
    //   const updatedCells = prevState.cells.map((cellRow, rowNum) =>
    //     cellRow.map((cell, colNum) => {
    //       if (rowNum === row && colNum === column && cell.state === ALIVE) {
    //         updated = true;
    //         return new Cell(DEAD);
    //       } else if (rowNum === row && colNum === column && cell.state === DEAD) {
    //         updated = true;
    //         return new Cell(ALIVE);
    //       }
    //       return cell;
    //     })
    //   );
    //   if (updated) {
    //     game.state = updatedCells;
    //   }
    //   return updated ? { cells: updatedCells } : prevState;
    // });
  };

  const clearGameState = () => {
    game.clearState();
    setGameState({ cells: game.state, isPlaying: false });
  };

  return (
    <div className='main-container'>
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
    </div>
    <div className='button-containers'>
      <button onClick={handlePlayClick}>
          {isPlaying ? <span>&#9632;</span> : <span>&#9658;</span>}
        </button>
      <button onClick={updateGameState}><span>&#8631;</span></button>
      <button onClick={clearGameState}><span>&#215;</span></button>
      <button onClick={() => {
        game.setState(glider);
        setGameState({ cells: game.getState() }); }}>
        <span>&#128640;</span>
        </button>
      <button onClick={() => {
        game.setState(bigBoard);
        setGameState({ cells: game.getState() }); }}>
        <span>&#43;</span>
        </button>
    </div>
    </div>
  );
}

export default GameTable;
