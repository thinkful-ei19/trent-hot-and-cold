import React, { Component } from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends Component {
    constructor() {
        super();

        this.state = {
            currentTarget: 55,
            currentGuess: false,
            previousGuesses: [],
            possibleFeedback: ['Make your guess!', 'cold','less than warm','warm', 'warmer', 'hot', 'SCORCHING', 'YOU WON'],
            currentFeedback: ['Make your guess!']
        }
    }
    
    setCurrentGuess(currentGuess) {
        this.setState({currentGuess});
    }


    render () {
        return (
            <div>
                <Header />
                <GuessSection currentGuess={guess => this.setCurrentGuess(guess)} feedback="Make your guess!" />
                <GuessCount count={3} />
                <GuessList guesses={[10, 15, 25]} />
            </div>
        );
    }
}

