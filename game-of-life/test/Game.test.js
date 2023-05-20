import { expect } from "chai";
import Cell from '../src/game-logic/Cell'
import CellState  from '../src/game-logic/CellState'
import Game from "../src/game-logic/Game";

const { DEAD, ALIVE } = CellState;

const deadState = [
    [DEAD, DEAD, DEAD],
    [DEAD, DEAD, DEAD],
    [DEAD, DEAD, DEAD],
  ];

describe('Game Of Life', () => {

    it('Should be initialized with a given state', () => {
        const game = new Game(deadState);
    
        const cellState = [
          [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
          [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
          [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
        ];
    
        expect(game.state).to.deep.equal(cellState);
    });

    it('Should retrieve a cell at a given row and column', () => {
        const game = new Game(deadState);
        const cell = game.getCell(0,0);

        expect(cell).to.be.an.instanceOf(Cell);
        expect(cell.state).to.equal(deadState[0][0]);

        const gameState = [
            [ALIVE, DEAD],
            [DEAD, ALIVE],
          ];

        const newGame = new Game(gameState);
        const aliveCell = newGame.getCell(0, 1);
        expect(aliveCell).to.be.an.instanceof(Cell);
        expect(aliveCell.state).to.equal(gameState[0][1]);
    
        const deadCell = newGame.getCell(1, 1);
        expect(deadCell).to.be.an.instanceof(Cell);
        expect(deadCell.state).to.equal(gameState[1][1]);
    })

    it('Should get the number of alive neighbors above given cell', () => {
        const gameState = [
          [ALIVE, ALIVE, ALIVE],
          [DEAD, ALIVE, DEAD],
          [DEAD, DEAD, DEAD],
        ];
        const game = new Game(gameState);
        const numAliveNeighbors = game.getNumOfAliveNeighbors(1, 1);
        expect(numAliveNeighbors).to.equal(3);
      });
    
      it('Should get the number of alive neighbors below given cell', () => {
        const gameState = [
          [DEAD, DEAD, DEAD],
          [DEAD, ALIVE, DEAD],
          [ALIVE, ALIVE, ALIVE],
        ];
        const game = new Game(gameState);
        const numAliveNeighbors = game.getNumOfAliveNeighbors(1, 1);
        expect(numAliveNeighbors).to.equal(3);
      });
    
      it('Should get the number of alive neighbors next to a given cell', () => {
        const gameState = [
          [DEAD, DEAD, DEAD],
          [ALIVE, ALIVE, ALIVE],
          [DEAD, DEAD, DEAD],
        ];
        const game = new Game(gameState);
        const numAliveNeighbors = game.getNumOfAliveNeighbors(1, 1);
        expect(numAliveNeighbors).to.equal(2);
      });
    
      it('Should get the number of alive neighbors for a given cell', () => {
        const gameState = [
          [ALIVE, ALIVE, ALIVE],
          [ALIVE, ALIVE, ALIVE],
          [ALIVE, ALIVE, ALIVE],
        ];
        const game = new Game(gameState);
        const numAliveNeighbors = game.getNumOfAliveNeighbors(1, 1);
        expect(numAliveNeighbors).to.equal(8);
      });
    
      it('Should get the number of alive neighbors for cell in the top row', () => {
        const gameState = [
          [ALIVE, ALIVE, ALIVE],
          [DEAD, DEAD, DEAD],
          [DEAD, DEAD, DEAD],
        ];
        const game = new Game(gameState);
        const numAliveNeighbors = game.getNumOfAliveNeighbors(0, 1);
        expect(numAliveNeighbors).to.equal(2);
      });
    
      it('Should get the number of alive neighbors for cell in the first column', () => {
        const gameState = [
          [ALIVE, ALIVE, DEAD],
          [DEAD, DEAD, DEAD],
          [DEAD, DEAD, DEAD],
        ];
        const game = new Game(gameState);
        const numAliveNeighbors = game.getNumOfAliveNeighbors(0, 0);
        expect(numAliveNeighbors).to.equal(1);
      });
    
      it('Should get the number of alive neighbors for cell in the first column', () => {
        const gameState = [
          [DEAD, DEAD, DEAD],
          [ALIVE, DEAD, DEAD],
          [DEAD, DEAD, DEAD],
        ];
        const game = new Game(gameState);
        const numAliveNeighbors = game.getNumOfAliveNeighbors(1, 0);
        expect(numAliveNeighbors).to.equal(0);
      });
    
      it('Should get the number of alive neighbors for cell in the bottom row', () => {
        const gameState = [
          [DEAD, DEAD, DEAD],
          [DEAD, DEAD, DEAD],
          [ALIVE, ALIVE, ALIVE],
        ];
        const game = new Game(gameState);
        const numAliveNeighbors = game.getNumOfAliveNeighbors(2, 1);
        expect(numAliveNeighbors).to.equal(2);
      });
    
      it('Should get the number of alive neighbors for cell in the last col', () => {
        const gameState = [
          [DEAD, DEAD, DEAD],
          [DEAD, DEAD, ALIVE],
          [DEAD, DEAD, DEAD],
        ];
        const game = new Game(gameState);
        const numAliveNeighbors = game.getNumOfAliveNeighbors(1, 2);
        expect(numAliveNeighbors).to.equal(0);
      });

      it('Should get the number of alive neighbors for cell in a big grid', () => {
        const gameState = [
          [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
          [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
          [DEAD, DEAD, DEAD, DEAD, ALIVE, ALIVE, ALIVE, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
          [DEAD, DEAD, DEAD, DEAD, ALIVE, DEAD, ALIVE, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
          [DEAD, DEAD, DEAD, DEAD, ALIVE, ALIVE, ALIVE, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
          [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
          [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
          [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
          [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
        ];
        const game = new Game(gameState);
        const numAliveNeighbors = game.getNumOfAliveNeighbors(3, 5);
        expect(numAliveNeighbors).to.equal(8);
      });

      it('Should create the next state of the game', () => {
        const gameState = [
          [DEAD, DEAD, DEAD, DEAD, DEAD],
          [DEAD, DEAD, ALIVE, DEAD, DEAD],
          [DEAD, DEAD, ALIVE, DEAD, DEAD],
          [DEAD, DEAD, ALIVE, DEAD, DEAD],
          [DEAD, DEAD, DEAD, DEAD, DEAD],
        ];
        const game = new Game(gameState);
    
        game.nextState();
        const nextState = game.getState();
    
        const expectedState = [
          [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
          [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
          [new Cell(DEAD), new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE), new Cell(DEAD)],
          [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
          [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
        ];
    
        expect(nextState).to.deep.equal(expectedState);
      });

      // Additional Requirements for the front end

      it('Should flip state of given cell, when toggelCell function is used', () => {
        const gameState = [
          [DEAD, DEAD, DEAD, DEAD, DEAD],
          [DEAD, DEAD, DEAD, DEAD, DEAD],
          [DEAD, ALIVE, ALIVE, ALIVE, DEAD],
          [DEAD, DEAD, DEAD, DEAD, DEAD],
          [DEAD, DEAD, DEAD, DEAD, DEAD],
        ];
        const game = new Game(gameState);
        game.toggleCell(2,2);
        const nextState = game.getState();
    
        const expectedState = [
          [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
          [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
          [new Cell(DEAD), new Cell(ALIVE), new Cell(DEAD), new Cell(ALIVE), new Cell(DEAD)],
          [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
          [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
        ];
    
        expect(nextState).to.deep.equal(expectedState);
      });




});