// Player.jsx

import { useState } from "react";
// using prop destructuring to pass function arguments
//  for player name and symbol.
export default function Player({initialName, symbol, isActive, onChangeName}) {
    // seperate piece of state that manages actually changing the player name in UI
    const [playerName, setPlayerName] = useState(initialName);
    // manages the editing and saving function for updatig player name
    const [isEditing, setIsEditing] = useState(false);
    
    // handles the state of the editing
    // This function handles toggling the edit state and saving the player name when editing is complete.
    function handleEditClick() {
        // correct way to handle this using arrow function
        // gaurentees you'll have the latest available state value
        /*  setIsEditing((editing) => !editing): Toggles the isEditing state between true and false.
            Arrow Function: Ensures that the latest state value is used.
        */
        setIsEditing((editing) => !editing);
        /* if (isEditing): If isEditing is true, it means the user is currently editing and is about to save. */
        if (isEditing) {
            /*  onChangeName(symbol, playerName): Calls the onChangeName function with the current 
                symbol and playerName to update the player name in the parent component's state.
            */
            onChangeName(symbol, playerName);
        }

    }

    function handleChange(event) {
        // updates the player name using event.target.value
        // event.target is the html element that triggerd the event
        setPlayerName(event.target.value);

    }
    let editablePlayerName = <span className="player-name"> {playerName}</span>;
   

    if (isEditing) {
        // new updated playerName is now reflected into the input field
        // also called two way binding because the code is getting a value out of input (onChange),
        // and feeding new value into the input (value)
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
       
    }

    // handling the rendering of the player names
    // displays updated player name to UI
    // also highlights which player is active based on the isActive prop passed to the component
    return( 
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName} 
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}