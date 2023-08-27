import './App.css';
import GameTable from './GameTable';

function App() {
  return (
    <>
      <div className="App">
        <h1 className='main-heading'>TDD: Game Of Life</h1>
        <div className="header-links">
          <a href="https://github.com/ShivankKhullar/TDD-game-of-life/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> <span>GitHub Repo</span>
          </a>
          <a href="https://www.linkedin.com/in/shivank-khullar/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> <span>Creator's LinkedIn</span>
          </a>
          <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-info-circle"></i> <span>About Game of Life</span>
          </a>
          <a href="https://en.wikipedia.org/wiki/Test-driven_development" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-vial"></i> <span>About Test Driven Development</span>
          </a>
        </div>
        <GameTable/>
      </div>
    </>
  );
}

export default App;
