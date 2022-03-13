import React from 'react'
import { HW1, HW2, HW3, HW4, HW6 } from "../../index";
import { MotionWrap } from "../../../wrapper/index.js";
import classes from '../H5Styles.module.scss'

function PreJunior() {
    return (
        <div className={classes.preJuniorPage}>
            <HW1/>
            <HW2/>
            <HW3/>
            <HW4/>
            <HW6/>
        </div>
    )
}

export default MotionWrap(PreJunior)
