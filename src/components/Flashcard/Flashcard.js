import React, { Component } from 'react';
import { ReactFitty } from "react-fitty";
import classes from './Flashcard.module.css';

class Flashcard extends Component {
    render() {
        return(
            // Card Component for flashcard
            <div class={`card ${classes.CardComp}`}>
                <div class={`card-body ${classes.CardBody}`}>
                    {/* Title */}
                    <h5 class={`card-title ${classes.CardTitle}`}>WORD:</h5>
                    {/* Word displayed for Song Association Game */}
                    <div class={`card-text ${classes.CardText}`}>
                        <ReactFitty  maxSize="150">
                            DREAM
                        </ReactFitty>
                    </div>
                </div>
            </div>
        );
    }
}

export default Flashcard;