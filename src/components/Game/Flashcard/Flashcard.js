import React, { Component } from 'react';
import { ReactFitty } from "react-fitty";
import PointsButton from './PointsButton/PointsButton'
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
                
                {/* Points Button/Checkmark button to add a point to the total for current word */}
                <PointsButton addPoint={this.props.addPoint}/>

            </div>
        );
    }
}

export default Flashcard;