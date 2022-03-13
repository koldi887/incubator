import React from 'react'
import { MotionWrap } from "../../../wrapper/index.js";
import classes from '../H5Styles.module.scss'

function Error404() {
    return (
        <div className={classes.errorContainer}>
            <h1>404 Page not found!</h1>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default MotionWrap(Error404)
