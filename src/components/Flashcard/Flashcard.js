import React, { Component } from 'react';
import classes from './Flashcard.module.css';

class Flashcard extends Component {
    render() {
        return(
            <div class={`card ${classes.CardComp}`}>
                <div class="card-body">
                    <h5 class="card-title">Word:</h5>
                    <p class="card-text">Hello</p>
                </div>
            </div>
        );
    }
}

export default Flashcard;