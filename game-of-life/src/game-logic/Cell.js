import CellState from "./CellState.js";

export default class Cell {
    constructor(state) {
        if (Object.values(CellState).indexOf(state) === -1) {
            throw new Error('Invalid State');
        }
        this.state = state;
    }

    getNextState(numNeighbors){
        if (this.state === CellState.ALIVE) {
            if (numNeighbors === 2 || numNeighbors === 3) {
                return this.state; // Which will be alive
            }
        } 
        else {
            if (numNeighbors === 3) {
                return CellState.ALIVE;
            }
        }
        return CellState.DEAD; 
    }

    setCellState(newState) {
        if (Object.values(CellState).indexOf(newState) === -1) {
            throw new Error('Invalid State');
        }
        this.state = newState;
    }
}
