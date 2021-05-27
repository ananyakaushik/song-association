import React, { Component } from 'react';
import classes from './PlayButton.module.css';

class PlayButton extends Component {

    render() {
        return(
            // Card Component for flashcard
            <button className={classes.Button} onClick={this.props.togglePlay} >
                {this.props.playing? "PAUSE" : "START"}
            </button>
        );
    }
}

export default PlayButton;