import React, { Component } from 'react';
import classes from './Timer.module.css';

class Timer extends Component {
    render () {
        return(
            <div className={classes.Timer}>
                TIMER: 00:{this.props.count < 10 ? `0${this.props.count}` : this.props.count}
            </div>
        )
    }
}

export default Timer;