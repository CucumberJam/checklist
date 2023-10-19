import React from 'react';
import classes from './ButtonApp.module.css';
const ButtonApp = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btn}>
            {children}
        </button>
    );
};

export default ButtonApp;