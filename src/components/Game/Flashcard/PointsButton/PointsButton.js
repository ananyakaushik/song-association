import React, { Component } from 'react';
import classes from './PointsButton.module.css';
import checkMark from '../../../../images/check.png';

class PointsButton extends Component {
    render () {
        return(
            // Compontent for Points Button/Checkmark button 
            // to add a point to the total for current word
            <button className={classes.Button} onClick={this.props.addPoint} >
                {/* Checkmark image */}
                <img src={checkMark} alt='Check mark to add point' width='75px' />
            </button>
        )
    }
}

export default PointsButton;