# Tic-Tac-Toe Game

This project is a simple implementation of the classic Tic-Tac-Toe game using React. It includes features such as real-time updates, player name editing, and game logs. This game deomonstrates and practices core react concepts such as managing state, components, Props, lifting state, and deriving state for multiple components

## Table of Contents
- [Installation](#installation)
- [Demonstration](#demonstration)
- [Usage](#usage)
- [Components](#components)
- [License](#license)
- [Credits](#credits)

## Demonstration

Here's a quick demonstration of how to play the Tic-Tac-Toe game:

![Tic-Tac-Toe](https://github.com/johnny-hacker/Tic-Tac-Toe/assets/107173906/00ccf49d-d9bb-4ddd-83bf-bbd00d079c2a)



## Installation

To install and run the Tic-Tac-Toe game, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/JUNE8UG/tic-tac-toe.git
    ```

2. Navigate to the project directory:

    ```sh
    cd tic-tac-toe
    ```

3. Install Node.js dependencies using npm:

    ```sh
    npm install
    ```

4. Run the application using npm:

    ```sh
    npm run dev
    ```

This will start the development server, and you can access the game by navigating to http://localhost:3000 in your browser.

## Usage

After starting the application, open your browser and navigate to http://localhost:3000. You can play the game by clicking on the squares to place your symbol (X or O). The game will automatically determine the winner or if the game is a draw.

## Components

The Tic-Tac-Toe game consists of several components:

- **App.jsx**: This is the main component that sets up the game state and renders the game interface. It includes state variables for players and game turns.

- **GameBoard.jsx**: Responsible for rendering the game board and handling square selection. The `onSelectSquare` function is passed as a prop to handle square clicks.

- **Player.jsx**: Handles the rendering and updating of player names. It includes functionality to edit player names in real-time.

- **GameOver.jsx**: Displays the game over screen with the winner or a draw message and provides a button to restart the game.

- **Log.jsx**: Displays the game log, showing the sequence of moves made by the players.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

