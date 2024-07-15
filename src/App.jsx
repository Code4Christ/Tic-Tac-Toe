// App.jsx
// Importing necessary dependencies and components
import { useState } from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import GameOver from './components/GameOver.jsx';

// Initial Player setup
const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

// Initial game board setup
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

// Function to derive the active player based on the game turns
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  // Determine the current player based on the previous turns
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  // Deriving the game board state from the game turns
  // creating a deep copy of the initialGameBoard array so that we are not overwritting 
  // initialGameBoard in memory
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];
    
  // Deriving game board state from the turns
  // now rendering gameboard within the App Function
  for (const turn of gameTurns) {
    // square is a nested array with row and col as properties
    const { square, player } = turn;
    const { row, col } = square;
  
    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  /*
  In the for loop the code iterates through predefined winning combinations 
  on the game board. For each combination, it extracts symbols from the corresponding 
  squares and checks if they match. If three symbols in a combination are equal and not null, 
  indicating a winning condition, the code designates the player with that symbol as the winner. 
  This process repeats for each combination until a winner is found or all combinations are exhausted.
  */
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    // first indication of a winning player
    if (
      firstSquareSymbol && 
      firstSquareSymbol == secondSquareSymbol && 
      firstSquareSymbol == thirdSquareSymbol
    ) {
      // set winner to player name using the players state and replace
      // the winning symbol with the winning name
      winner = players[firstSquareSymbol];
    } 
    
  }

  return winner;
}

// Main component of the application
function App() {
  const [players, setPlayers]= useState(PLAYERS);
  // State variables to manage game turns and active player
  const [gameTurns, setGameTurns] = useState([]); // State for storing game turns

  // Derive the active player without managing extra state
  const activePlayer = deriveActivePlayer(gameTurns);

  // create game board
  const gameBoard = deriveGameBoard(gameTurns);

  // create winner
  const winner = deriveWinner(gameBoard, players);

  // draw variable that checks if gameTurns has reach a length of 9, for the 9 game squares
  // and theirs no winner, or winner variable is not true
  const hasDraw = gameTurns.length === 9 && !winner;

  // Function to handle selecting a square on the game board
  function handleSelectSquare(rowIndex, colIndex) {
    // Update game turns with the latest player's move
    setGameTurns(prevTurns => {
      // Derive the current player based on previous turns
      const currentPlayer = deriveActivePlayer(prevTurns);
      
      // Add the latest turn to the beginning of the turns array
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer }, 
        ...prevTurns
      ];

      return updatedTurns;
    });
  }

  // triggers restatr of the game, clearing the gameboard 
  function handleRestart() {
    setGameTurns([]);
  }

  // uses the players state to update the player name with player symbol
  function handlePlayerNameChange(symbol, newName){
    // does this by setting saving a deep copy of the player name 
    // setPlayers: Uses the setPlayers state function to update the players state.
    // prevPlayers: The previous state of the players object.
    setPlayers(prevPlayers => {
      return {
        // Spread Operator: Creates a new object with the contents of prevPlayers.
        ...prevPlayers, 
        // Update Symbol: Sets the name for the specified symbol to newName.
        [symbol]: newName
      };
    });
  }
  // Rendering the main application UI
  return (
    <main>
      <div id="game-container">
        {/* Render player components with their names, symbols, and active status */}
        <ol id="players" className="highlight-player">
          {/* Player 1 component with symbol 'X', marked active if activePlayer is 'X' */}
          <Player
            initialName={PLAYERS.X} 
            symbol="X" 
            isActive={activePlayer === 'X'} 
            onChangeName={handlePlayerNameChange}
          />
          {/* Player 2 component with symbol 'O', marked active if activePlayer is 'O' */}
          <Player 
            initialName={PLAYERS.O}
            symbol="O" 
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {/* if there is a winner or a draw, Pass winner to GameOver component
            Game Over component will check if winner is true or not and display accordingly
        */}
        {( winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        {/* Render the game board component with event handling for square selection */}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>

      {/* Render the log component */}
      <Log turns={gameTurns} />
    </main>
  );
}

// Exporting the App component as the default export
export default App;
