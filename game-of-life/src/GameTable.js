/* eslint-disable */

import React, { useState, useRef, useEffect} from 'react';
import './GameTable.css';
import CellState from './game-logic/CellState';
import Game from './game-logic/Game';

// Defining initial states for the Game of Life patterns
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
  ...Array(10).fill([...Array(30).fill(DEAD)]),
];

const bigBoard = [
  [DEAD, DEAD, DEAD, DEAD, DEAD, ...Array(31).fill(DEAD)],
  [DEAD, DEAD, ALIVE, DEAD, DEAD, ...Array(31).fill(DEAD)],
  [DEAD, DEAD, DEAD, ALIVE, DEAD, ...Array(31).fill(DEAD)],
  [DEAD, ALIVE, ALIVE, ALIVE, DEAD, ...Array(31).fill(DEAD)],
  [DEAD, DEAD, DEAD, DEAD, DEAD, ...Array(31).fill(DEAD)],
  [DEAD, DEAD, DEAD, DEAD, DEAD, ...Array(31).fill(DEAD)],
  [DEAD, DEAD, ALIVE, DEAD, DEAD, ...Array(31).fill(DEAD)],
  [DEAD, DEAD, DEAD, ALIVE, DEAD, ...Array(31).fill(DEAD)],
  [DEAD, ALIVE, ALIVE, ALIVE, DEAD, ...Array(31).fill(DEAD)],
  [DEAD, DEAD, DEAD, DEAD, DEAD, ...Array(31).fill(DEAD)],
  ...Array(20).fill([...Array(36).fill(DEAD)]),
];

const smallBoard = [
  [DEAD, DEAD, DEAD, DEAD, DEAD, ...Array(12).fill(DEAD)],
  [DEAD, DEAD, ALIVE, DEAD, DEAD, ...Array(12).fill(DEAD)],
  [DEAD, DEAD, DEAD, ALIVE, DEAD, ...Array(12).fill(DEAD)],
  [DEAD, ALIVE, ALIVE, ALIVE, DEAD, ...Array(12).fill(DEAD)],
  [DEAD, DEAD, DEAD, DEAD, DEAD, ...Array(12).fill(DEAD)],
  [DEAD, DEAD, DEAD, DEAD, DEAD, ...Array(12).fill(DEAD)],
  [DEAD, DEAD, ALIVE, DEAD, DEAD, ...Array(12).fill(DEAD)],
  [DEAD, DEAD, DEAD, ALIVE, DEAD, ...Array(12).fill(DEAD)],
  [DEAD, ALIVE, ALIVE, ALIVE, DEAD, ...Array(12).fill(DEAD)],
  [DEAD, DEAD, DEAD, DEAD, DEAD, ...Array(12).fill(DEAD)],
  ...Array(10).fill([...Array(17).fill(DEAD)]),
];

// Main component to render the Game of Life table and controls
function GameTable() {
  const [boardSize, setBoardSize] = useState(window.innerWidth <= 768 ? 'small' : 'big');
  
  // Effect to handle window resizing events
  useEffect(() => {
    const handleResize = () => {
      setBoardSize(prevSize => {
        const newSize = window.innerWidth <= 768 ? 'small' : 'big';
        return newSize;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const game = useRef(new Game(boardSize === 'small' ? smallBoard : glider)).current;

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
                    onTouchEnd={(e) => {
                      e.preventDefault(); // Prevent any default behavior
                      toggleState(rowIndex, columnIndex);
                    }}
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
          <span>&#128640;</span> {/* Rocket Button  */}
          </button>
        <button onClick={() => {
          game.setState(bigBoard);
          setGameState({ cells: game.getState() }); }}>
          <span>&#43;</span> {/* Plus button  */}
        </button>
        <button onClick={() => {
          game.setState(smallBoard);
          setGameState({ cells: game.getState() }); }}>
          <span>&#8722;</span> {/* Minus button  */}
        </button>
      </div>
    </div>
  );
}

export default GameTable;
