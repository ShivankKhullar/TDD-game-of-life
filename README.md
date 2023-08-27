# Test Driven Development - Game of Life

Experience this project in action! Check out the live demo [here](https://tdd-game-of-life.vercel.app/). 

This project showcases the implementation of Conway's Game of Life using Test Driven Development (TDD). The game logic was built out using TDD principles, with Mocha as the testing framework and Chai.js for assertions. Additionally, React was utilized for the visualization of the game, providing an interactive and dynamic user experience.

## Table of Contents

- [Why This Project?](#why-this-project)
- [Test Driven Development (TDD)](#test-driven-development-tdd)
- [Importance of Writing Tests](#importance-of-writing-tests)
- [Technologies Used](#technologies-used)
- [About Conway's Game of Life](#about-conways-game-of-life)
- [Resources](#resources)
- [Getting Started](#getting-started)

## Why This Project?

I embarked on this personal project to delve deeper into the world of Test Driven Development (TDD). TDD is a software development process where you write tests for your code before writing the actual code. This project served as a practical exercise to understand the nuances and benefits of TDD.

## Test Driven Development (TDD)

Test Driven Development (TDD) is a software development approach in which tests are written before the actual code. The process involves three main steps:

1. **Red**: Write a failing test. This ensures that the test is valid and checks for the desired functionality.
2. **Green**: Write the minimum amount of code to make the test pass. This ensures that the code works as expected.
3. **Refactor**: Clean up the code while ensuring that the tests still pass. This step improves the code quality without affecting its behaviour.

The cycle of writing a test, making it pass, and then refactoring is repeated for every new feature or functionality. This approach ensures that the codebase is robust, with tests covering all the functionalities. It also promotes cleaner and more modular code, as developers are focused on one functionality at a time.

TDD offers several benefits:

- **Early Bug Detection**: Bugs are identified early in the development process, making them easier and cheaper to fix.
- **Improved Code Quality**: With a focus on writing tests first, the code is often more modular and maintainable.
- **Documentation**: Tests serve as a form of documentation, showing how the code is intended to be used.
- **Confidence**: Having a suite of tests provides confidence when making changes or adding new features, ensuring that existing functionalities are not broken.

Learn More About Test Driven Development [here](https://en.wikipedia.org/wiki/Test-driven_development).

## Importance of Writing Tests

Writing tests is crucial for several reasons:

1. **Confidence**: Tests give confidence that the code behaves as expected.
2. **Refactoring**: With a good suite of tests, you can refactor confidently, knowing that regressions will be caught.
3. **Documentation**: Tests serve as documentation by example, showing how the code is intended to be used.
4. **Design**: Writing tests first can help in designing cleaner and more modular code.

## Technologies Used

- **Mocha**: A feature-rich JavaScript test framework running on Node.js.
- **Chai.js**: A BDD/TDD assertion library for Node.js and the browser that can be paired with any testing framework.
- **React**: A JavaScript library for building user interfaces.

## About Conway's Game of Life

Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It's a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. The game consists of a collection of cells that, based on a few mathematical rules, can live, die, or multiply. These rules reflect different aspects of life:

1. **Underpopulation**: Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. **Repopulation/Continuation**: Any live cell with two or three live neighbours lives on to the next generation.
3. **Overpopulation**: Any live cell with more than three live neighbours dies, as if by overpopulation.
4. **Reproduction**: Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

[Learn more](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

## Resources

- [Mocha Official Documentation](https://mochajs.org/)
- [Chai.js Official Documentation](https://www.chaijs.com/)
- [React Official Documentation](https://reactjs.org/)
- [Conway's Game of Life - Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
- [Test Driven Development (TDD) - Introduction](https://www.agilealliance.org/glossary/tdd/)

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run tests using `npm test`.
4. Start the React app using `npm start`.

Thanks to [Coding Garden](https://github.com/CodingGarden) for the initial guidance on this project.
