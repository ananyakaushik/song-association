import React, { Component } from 'react';
import classes from './PointsButton.module.css';
import checkMark from '../../../../images/check.png';

class PointsButton extends Component {
    render () {
        return(
            <button className={classes.Button}>
                <img src={checkMark} alt='Check mark to add point' width='75px' />
            </button>
        )
    }
}

export default PointsButton;