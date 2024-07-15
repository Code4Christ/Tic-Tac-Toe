// Log.jsx
// Log component responsible for rendering the game log
export default function Log({ turns }) {
    return (
        // Rendered list containing each turn of the game
        <ol id='log"'>
            {/* Mapping over each turn and rendering a list item */}
            {turns.map((turn) => (
                <li key={`${turn.square.row}${turn.square.col}`}>
                    {/* Displaying the player's symbol and the selected square's coordinates */}
                    {turn.player} selected {turn.square.row}, {turn.square.col} 
                </li>
            ))}
        </ol>
    );
}