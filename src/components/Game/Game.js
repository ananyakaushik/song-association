import React, { Component } from 'react';
import Flashcard from './Flashcard/Flashcard';
import PlayButton from './PlayButton/PlayButton';
import Timer from './Timer/Timer';
import Points from './Points/Points'
import classes from './Game.module.css';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // placeholder word info
            words: ['one', 'two', 'three', 'four', 'five',
                    'six', 'seven', 'eight', 'nine', 'ten',
                    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'],
            currentWord: "",
            playing: false,
            count: 10,
            currentWordPoint: true,
            points: 0
        }
    }

    // Toggle playing of game - start and restart
    togglePlay = () => {
        //  Change state of play
        const newPlayState = !this.state.playing;
        this.setState({ playing: newPlayState});

        if (newPlayState) {
            // Start game and call wordTimer to time 15 words
            setTimeout(() => {
                this.wordTimer(0);
            }, 1000);

        } else {
            // Restart game by changing current word to empty string and reset countdown
            this.setState({ currentWord: "", count: 10, currentWordPoint: true });
        }
    }

    // Wait 10 seconds before calling next word in Game
    wordTimer = index => {
        // Only iterate through 15 words
        if (index < 15 && this.state.playing) {
            // Change current word and wait 10s for next word
            this.setState({ currentWord: this.state.words[index], currentWordPoint: false })
            setTimeout(() => this.wordTimer(index + 1), 11000);

            // Restart countdown for new word
            this.setState({ count: 10, currentWordPoint: false });
            this.startTimer(this.state.count);
        }

        // Stop game after last word
        if (index === 15) {
            this.setState({ playing: false });
        }

    }

    // Timer - Countdown 10 seconds
    startTimer = currCount => {
        // Count down till 0 only when game is in play mode
        if (currCount > 0 && this.state.playing) {

            setTimeout(() => {
                // Count down by 1s each time
                this.state.playing && this.setState({ count: currCount - 1 });
                this.startTimer(currCount - 1);

            }, 1000);
        }
    }

    // Add a point to the total when the Points Button/ Check mark is clicked
    addPoint = () => {
        // Only one point per word, only when game is on
        if (this.state.playing && !this.state.currentWordPoint) {
            this.setState({ points: this.state.points + 1, currentWordPoint: true });
        }
    }

    render() {
        return(
            // Card Component for flashcard
            <div className={classes.Game}>

                {/* Countdown for each word */}
                <div className={classes.Tracking}>
                    <Timer count={this.state.count}/>
                    <Points points={this.state.points}/>
                </div>

                <br />

                {/* <Flashcard word={this.state.words.length ? this.state.words[0].toUpperCase() : "CLICK START"}/> */}
                <Flashcard addPoint={this.addPoint} word={this.state.currentWord ? this.state.currentWord.toUpperCase() : "CLICK START"}/>
                
                <br />

                {/* Start or Restart game with button */}
                <PlayButton togglePlay={this.togglePlay} playing={this.state.playing} />

                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                {/* <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
            
            </div>
        );
    }
}

export default Game;