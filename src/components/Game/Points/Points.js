import React, { Component } from 'react';
import classes from './Points.module.css';

class Points extends Component {
    render () {
        return(
            <div className={classes.Points}>
                {this.props.points}/15
            </div>
        )
    }
}

export default Points;