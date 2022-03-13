import React from 'react'
import classes from './H5Styles.module.css'
import { NavLink } from "react-router-dom";
import { PATH } from "./Routes";
import { motion } from "framer-motion";
import { useToggle } from "../hooks/useToggle";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" }
}

const Header = () => {
    const [ toggle, setToggle ] = useToggle(false)

    const links = [
        { path: PATH.PRE_JUNIOR, title: 'Pre-Junior' },
        { path: PATH.JUNIOR, title: 'Junior' },
        { path: PATH.JUNIOR_PLUS, title: 'Junior Plus' }
    ]

    return (
        <>
            <motion.nav
                className={classes.navContainer}
                animate={toggle ? 'open' : 'closed'}
                variants={variants}
                transition={{ duration: 0.85, }}
            >
                <motion.ul className={classes.navList}>
                    {links.map((link, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ backgroundColor: 'rgb(63,136,181)' }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => isActive ? 'active' : ''}
                                onClick={setToggle}
                            >
                                {link.title}
                            </NavLink>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.nav>

            <motion.button
                className={classes.navButton}
                onClick={setToggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {toggle ? <CloseIcon/> : <MenuIcon/>}
            </motion.button>
        </>
    )
}

export default Header
