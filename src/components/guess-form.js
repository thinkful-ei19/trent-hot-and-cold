import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form onSubmit={event => {
            event.preventDefault();
            if (!props.gameOver) {
                const guess = Number(event.target.userGuess.value);
                if (guess > 100 || guess < 0) {
                    alert('Guess must be between 0 and 100!!!');
                }
                else if (isNaN(guess)) {
                    alert('Please Type a Number');
                } 
                else if (props.previousGuesses.includes(guess)) {
                    alert('This number has already been guessed')
                }
                else {
                    props.currentGuess(guess);
                    event.target.userGuess.value = '';
                }
            }
            
            
        }}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required/>
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

