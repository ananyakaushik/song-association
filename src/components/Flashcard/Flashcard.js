import React, { Component } from 'react';
import { ReactFitty } from "react-fitty";
import classes from './Flashcard.module.css';

class Flashcard extends Component {
    render() {
        return(
            // Card Component for flashcard
            <div className={`card ${classes.CardComp}`}>
                <div className={`card-body ${classes.CardBody}`}>
                    {/* Title */}
                    <h5 className={`card-title ${classes.CardTitle}`}>WORD:</h5>
                    {/* Word displayed for Song Association Game */}
                    <div className={`card-text ${classes.CardText}`}>
                        <ReactFitty  maxSize="150">
                            {this.props.word}
                        </ReactFitty>
                    </div>
                </div>
            </div>
        );
    }
}

export default Flashcard;