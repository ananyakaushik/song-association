import React, { Component } from 'react';
import Flashcard from '../Flashcard/Flashcard';
import PlayButton from '../PlayButton/PlayButton';
import classes from './Game.module.css';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // placeholder word info
            words: ['one', 'two', 'three', 'four', 'five',
                    'six', 'seven', 'eight', 'nine', 'ten',
                    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen']
        }
    }

    render() {
        return(
            // Card Component for flashcard
            <div className={classes.Game}>
                <Flashcard word={this.state.words.length ? this.state.words[0].toUpperCase() : "CLICK START"}/>
                <br />
                <PlayButton />
            </div>
        );
    }
}

export default Game;