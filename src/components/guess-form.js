import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form onSubmit={event => {
            event.preventDefault();
            const guess = event.target.userGuess.value;
            if (guess > 100 || guess < 1) {
                alert('Guess must be between 1 and 100!!!')
            } else {
                props.currentGuess(event.target.userGuess.value);
                event.target.userGuess.value = '';
            }
            
        }}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

