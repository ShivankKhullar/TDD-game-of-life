import { expect } from 'chai';

import CellState from '../game-logic/CellState.js';
import Cell from '../game-logic/Cell.js';

describe('Cell', ()=>{
    it('Should be initailized with a cellState' ,() => {
      const aliveCell = new Cell(CellState.ALIVE);
      expect(aliveCell.state).to.equal(CellState.ALIVE);
  
      const deadCell = new Cell(CellState.DEAD);
      expect(deadCell.state).to.equal(CellState.DEAD);
    });

    it('Should throw an error if not initialized with a CellState', () => {
      expect(() => {
        const cell = new Cell(undefined);
      }).to.throw();
    });

    it('Should die if it has fewer than 2 live nieghbors', () => {
      const cell = new Cell(CellState.ALIVE);

      const nextStateWith0Neighbors = cell.getNextState(0);
      expect(nextStateWith0Neighbors).to.equal(CellState.DEAD);
  
      const nextStateWith1Neighbor = cell.getNextState(1);
      expect(nextStateWith1Neighbor).to.equal(CellState.DEAD);
    });

    it('Should stay dead if it has fewer than 2 live nieghbors', () => {
      const cell = new Cell(CellState.DEAD);
      const nextStateWith0Neighbors = cell.getNextState(0);
      expect(nextStateWith0Neighbors).to.equal(CellState.DEAD);
  
      const nextStateWith1Neighbor = cell.getNextState(1);
      expect(nextStateWith1Neighbor).to.equal(CellState.DEAD);
    });

    it('Should live with 2 or 3 live neighbors', () => {
      const cell = new Cell(CellState.ALIVE);

      const nextStateWith2Neighbors = cell.getNextState(2);
      expect(nextStateWith2Neighbors).to.equal(CellState.ALIVE);
  
      const nextStateWith3Neighbors = cell.getNextState(3);
      expect(nextStateWith3Neighbors).to.equal(CellState.ALIVE)
    });

    it('Should die with more than 3 neighbors', () => {
    const cell = new Cell(CellState.ALIVE);
    const nextStateWith4Neighbors = cell.getNextState(4);
    expect(nextStateWith4Neighbors).to.equal(CellState.DEAD);

    const nextStateWith5Neighbors = cell.getNextState(5);
    expect(nextStateWith5Neighbors).to.equal(CellState.DEAD);
  });

  it('Should stay dead with more than 3 neighbors', () => {
    const cell = new Cell(CellState.DEAD);
    const nextStateWith4Neighbors = cell.getNextState(4);
    expect(nextStateWith4Neighbors).to.equal(CellState.DEAD);

    const nextStateWith5Neighbors = cell.getNextState(5);
    expect(nextStateWith5Neighbors).to.equal(CellState.DEAD);
  });

  it('Should come alive with exactly 3 neighbors', () => {
    const cell = new Cell(CellState.DEAD);
    const nextStateWith3Neighbors = cell.getNextState(3);
    expect(nextStateWith3Neighbors).to.equal(CellState.ALIVE);
  });

});