// GameBoard.jsx 
// Importing necessary dependencies and components

// GameBoard component responsible for rendering the game board and handling square selection
export default function GameBoard({ onSelectSquare, board }) {
    // Rendering the game board UI
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                {/* Button for each square on the game board */}
                                <button 
                                    onClick={() => onSelectSquare(rowIndex, colIndex)} // Handling square selection
                                    disabled={playerSymbol !== null} // Disabling already selected squares
                                >
                                    {playerSymbol} {/* Displaying player symbol or null */}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
