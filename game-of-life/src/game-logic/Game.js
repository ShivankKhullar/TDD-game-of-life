import CellState from "./CellState"
import Cell from "./Cell";

const {DEAD} = CellState;

export default class Game{
    
    constructor(state){
        this.numRows = state.length;
        this.numCols = state[0].length;
        this.state = state.map(row => row.map(cellState => new Cell(cellState)));
    }

    getState(){
      return this.state
    }

    setState(newState){
      this.state = newState.map(row => row.map(cellState => new Cell(cellState)));
    }

    getCell(row,col){
        return this.state[row][col];
    }

    clearState() {
      // Set all cells in this.state to DEAD
      this.state = this.state.map(row => row.map(cell => new Cell(DEAD)));
    }

    toggleCell(row, col){
      const currentCell = this.getCell(row, col);
      const newState = currentCell.state === CellState.ALIVE ? CellState.DEAD : CellState.ALIVE;
      currentCell.setCellState(newState);

      // Update game state
      this.state = [...this.state]; // Just a good practice, have a look at spread operator if you forget why you did this.
  } 

    getNumOfAliveNeighbors(row, col){
        const stateValues = {
            [CellState.ALIVE]: 1,
            [CellState.DEAD]: 0,
          };
      
          let numNeighbors = 0;
          const startRow = row - 1 < 0 ? 0 : row - 1; // the row before the cell row or the first row
          const endRow = row + 1 >= this.numRows ? this.numRows - 1 : row + 1; // the row after the cell row or the last row
          const startCol = col - 1 < 0 ? 0 : col - 1; // the col before the cell col or the first col
          const endCol = col + 1 >= this.numCols ? this.numCols - 1 : col + 1; // the col after the cell col or the last col
      
          for (let i = startRow; i <= endRow; i++) { // loop through the cell neigbors including the current cell position
            for (let j = startCol; j <= endCol; j++) {
              if (!(i === row && j === col)) { // ignore the current cell
                numNeighbors += stateValues[this.state[i][j].state]; // increment the numNeighbors variable ie total number of adjacent neighbors
              } 
            }
          }
          return numNeighbors;
    }

    nextState() {
      const newState = this.state.map((row, rowNum) => {
          return row.map((cell, colNum) => {
              return cell.getNextState(this.getNumOfAliveNeighbors(rowNum, colNum));
          });
      });
  
      for(let i = 0; i < this.state.length; i++) {
          for(let j = 0; j < this.state[i].length; j++) {
              this.state[i][j].setCellState(newState[i][j]);
          }
      }
  
      // This line ensures that any React components using this state will re-render.
      this.state = [...this.state];
  }
}