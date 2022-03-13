import React from 'react';
import { HW10, HW11, HW12 } from "../../index";
import { MotionWrap } from "../../../wrapper/index.js";
import classes from '../H5Styles.module.scss'

const JuniorPlus = () => {
    return (
        <div className={classes.test}>
            <HW10/>
            <HW11/>
            <HW12/>
        </div>
    );
};

export default MotionWrap(JuniorPlus);