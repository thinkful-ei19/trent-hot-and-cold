import React, { Component } from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends Component {
    constructor() {
        super();

        this.state = {
            currentTarget: Math.floor(Math.random() * 100),
            guessCount: 0,
            previousGuesses: [],
            possibleFeedback: ['Make your guess!', 'cold','warm', 'hot', 'SCORCHING', 'YOU WON!! Click New Game to start Over!'],
            currentFeedback: 'Make your guess!',
            isInfoModal: false,
            gameOver: false
        }
    }

    incrementGuessCount() {
        this.setState({
            guessCount : this.state.guessCount + 1
        });
    }

    guessResponse(currentGuess, feedBackIndex) {
        this.setState({
            currentFeedback : this.state.possibleFeedback[feedBackIndex],
            previousGuesses: [...this.state.previousGuesses, currentGuess]
        });
    }
    
    currentGuess(currentGuess) {
        const goal = this.state.currentTarget;
        this.incrementGuessCount();
        if (currentGuess === goal){
            this.setState({
                currentFeedback : this.state.possibleFeedback[5],
                gameOver : true 
            });
        } 
        else if (currentGuess > goal - 5 && currentGuess < goal + 5) {
            this.guessResponse(currentGuess, 4);
        }
        else if (currentGuess > goal - 10 && currentGuess < goal + 10) {
            this.guessResponse(currentGuess, 3);
        }
        else if (currentGuess > goal - 20 && currentGuess < goal + 20) {
            this.guessResponse(currentGuess, 2);
        } else {
            this.guessResponse(currentGuess, 1);
        }
    }

    toggleInfoModal() {
        this.setState({
            isInfoModal: !this.state.isInfoModal
        })
    }

    newGame() {
        this.setState({
            currentTarget: Math.floor(Math.random() * 100),
            guessCount: 0,
            previousGuesses: [],
            currentFeedback: 'Make your guess!',
            gameOver: false
        })
    }

    render () {
        return (
            <div>
                <Header 
                    toggleInfoModal={() => this.toggleInfoModal()} 
                    isInfoModal={this.state.isInfoModal}
                    newGame={() => this.newGame()}
                />
                <GuessSection 
                    currentGuess={guess => this.currentGuess(guess)} 
                    previousGuesses={this.state.previousGuesses}
                    feedback={this.state.currentFeedback} 
                    gameOver={this.state.gameOver}
                />
                <GuessCount 
                    count={this.state.guessCount} 
                />
                <GuessList 
                    guesses={this.state.previousGuesses} 
                />
            </div>
        );
    }
}

