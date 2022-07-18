import React from 'react'
import { Link } from 'react-router-dom'

import useStyles from './styles';
import logo from "../../assets/logo_white.png"

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Link to="/">
                <img className={classes.logo} src={logo} alt="" />
            </Link>
            <div className={classes.innerContainer}>
                <p>&copy; 2022 The Wordbanker</p>
                <div className={classes.divider} />
                <p>Created by Joshua Umahi</p>
            </div>
        </div >
    )
}

export default Footer