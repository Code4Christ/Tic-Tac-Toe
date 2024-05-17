Tic-Tac-Toe Game
This project is a simple implementation of the classic Tic-Tac-Toe game using React. It includes features such as real-time updates, player name editing, and game logs.

Table of Contents
Installation
Usage
Components
License
Credits
Installation
To install and run the Tic-Tac-Toe game, follow these steps:

Clone the repository:

sh
Copy code
git clone https://github.com/your-username/tic-tac-toe.git
Navigate to the project directory:

sh
Copy code
cd tic-tac-toe
Install Node.js dependencies using npm:

sh
Copy code
npm install
Run the application using npm:

sh
Copy code
npm run dev
This will start the development server, and you can access the game by navigating to http://localhost:3000 in your browser.

Usage
After starting the application, open your browser and navigate to http://localhost:3000. You can play the game by clicking on the squares to place your symbol (X or O). The game will automatically determine the winner or if the game is a draw.

Components
The Tic-Tac-Toe game consists of several components:

App.jsx: This is the main component that sets up the game state and renders the game interface. It includes state variables for players and game turns.

GameBoard.jsx: Responsible for rendering the game board and handling square selection. The onSelectSquare function is passed as a prop to handle square clicks.

Player.jsx: Handles the rendering and updating of player names. It includes functionality to edit player names in real-time.

GameOver.jsx: Displays the game over screen with the winner or a draw message and provides a button to restart the game.

Log.jsx: Displays the game log, showing the sequence of moves made by the players.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Credits
This project is based on the Tic-Tac-Toe game project created by Maximilian Schwarzmüller, as part of the course "React - The Complete Guide 2024 (incl. Next.js, Redux)" on Udemy.
