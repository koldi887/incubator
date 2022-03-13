import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PreJunior, JuniorPlus, Junior, Error404 } from "./pages";
import Header from './Header'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    ERROR404: '/*'
}

function Pages() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Header/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={PATH.ERROR404} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
