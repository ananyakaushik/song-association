import React, { Component } from 'react';
import classes from './PlayButton.module.css';

class PlayButton extends Component {

    render() {
        return(
            // Card Component for flashcard
            <button className={classes.Button}>
                START
            </button>
        );
    }
}

export default PlayButton;