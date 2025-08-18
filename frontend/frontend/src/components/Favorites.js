/* August 14, 2025 */
import React, { useState } from 'react';
import '../styles/Favorites.css';


function Favorites() {

    //Use state variable favorites to store the user's list of their favorite trials
    //Function setFavorites will be used to update the state
    const [favorites, setfavorites] = useState([]);

    //Function addFavorite to add the user's new trail to the favorite list
    const addFavorite = (trial) => {
        //Update the favorites array
        setfavorites([...favorites, trial]);
    };

    //Function removeFavorite is used to remove a trial from the user's favorites list
    const removeFavorite = (index) => {
        //Update the favorite list to not include the removed trial
        const updatedFavorites = favorites.filter((_, i) => i !== index);
        //Update the function setfavorites with the updated favorites array
        //Updates the state with the trail removed
        setfavorites(updatedFavorites);
    };

    return (
        <div className='favorite-container'>
            <h2>Your Favorite Trials</h2>
            <ul>
                {favorites.map((trial, index)=> (
                    <li key={index} className="favorite-item">
                        <span>{trial}</span>
                        <button className="remove-button" onClick={() => removeFavorite(index)}
                            >Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => addFavorite('TRIAL NAME')}>
                Add (INSERT TRIAL NAME HERE) Trial to Favorites
            </button>
        </div>
    )
}

export default Favorites;