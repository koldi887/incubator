import React from 'react'
import Header from './Header'
import Pages from './Routes'
import { BrowserRouter as Router } from "react-router-dom";
import MotionWrap from "../../wrapper/MotionWrap";

function HW5() {
    return (
        <div>
            <Router>
                <Header/>
                <div style={{ width: '10px', height: '10px', color: "red" }}/>
                <Pages/>
            </Router>
        </div>
    )
}

export default MotionWrap(HW5)
