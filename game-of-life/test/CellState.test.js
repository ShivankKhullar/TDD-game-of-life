import { expect } from 'chai';
import CellState from '../game-logic/CellState.js';

describe('CellState', () => {
    it('Should have an ALIVE state', () => {
        expect(CellState.ALIVE).to.equal(1);
    });
    it('Should have a DEAD state', () => {
        expect(CellState.DEAD).to.equal(0);
      });
});