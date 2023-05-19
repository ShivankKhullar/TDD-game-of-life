/* eslint-disable */

import React from 'react';
import CellState from './game-logic/CellState';
import Cell from './game-logic/Cell';
import Game from './game-logic/Game'

const {ALIVE,DEAD} = CellState;
const game = new Game([
  [DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, ALIVE, DEAD, DEAD],
  [DEAD, DEAD, ALIVE, DEAD, DEAD],
  [DEAD, DEAD, ALIVE, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD],
]);

function GameTable() {

  // Get the game state or create a sample state for testing
  state = {
    cells: game.this.state
  }

  return (
    <table>
      <tbody>
        {this.state.cells.map((row) => (
          <tr >
            {row.map((cellState) => (
              <td className={cellState === CellState.ALIVE ? 'alive' : 'dead'}>
                {/* Render appropriate content based on cellState */}
                {cellState === CellState.ALIVE ? 'X' : '-'}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default GameTable;
