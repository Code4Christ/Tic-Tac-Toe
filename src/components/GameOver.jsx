export default function GameOver({winner, onRestart}) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {/* If winner is true then display winner */}
            {winner && <p>{winner} won!</p>}
            {/* If winner is not true then display draw */}
            {!winner && <p>It&apos;s a draw!</p>}
            <p>
                <button onClick={onRestart}> Rematch!</button>
            </p>

        </div>
    )
}