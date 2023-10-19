import React from 'react';
import classes from './InputApp.module.css';
const InputApp = (props) => {
    return (
        <input className={classes.input_style} {...props}/>
    );
};
export default InputApp;