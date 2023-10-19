import React from 'react';
import classes from './SelectApp.module.css';
const SelectApp = ({value, onChange,  defaultValue, options}) => {
    return (
        <div className={classes.select_wr}>
            <br/>
            <select className={classes.select_cont}
                value={value}
                onChange={e => onChange(e.target.value)}>
                <option disabled value="">{defaultValue}</option>
                {options.map(option =>
                <option className={classes.opt}
                    key={option.id}
                    value={option.value}>
                    {option.name}
                </option>)}
            </select>
        </div>
    );
};

export default SelectApp;