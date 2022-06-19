import React from 'react'
import useStyles from './styles';

import theImage from "../../assets/122.jpeg"

const _theWotd_date = "19th Jun, 2022"
const _theWotd_name = "abate"
const _pronPluspos = "(uh-beyt) verb"
const _theWotd_meaning = "become less intense or widespread"
const _theWotdArtistNAME = "M U T I"

const WordOfTheDay = () => {
    const classes = useStyles();

    return (
        <section className={classes.wotdContainer}>
            <h2>{"Word Of The Day: " + _theWotd_date}</h2>

            <div className={classes.largeDevicesContainer}>
                <div className={classes.largeDevicesInnerContainer}>
                    <div className={classes.largeDevicesInnerContainer2}>
                        <div className={classes.largeDevicesInnerContainer3}>
                            <div className={classes.largeDevicesDescription}>
                                <h1>{_theWotd_name}</h1>
                                <h2>{_pronPluspos}</h2>
                                <h3>{_theWotd_meaning}</h3>
                            </div>
                            <div className={classes.largeDevicesOtherInfo}>
                                <h4>art by:&nbsp;&nbsp;&nbsp;&nbsp;<span>{_theWotdArtistNAME}</span></h4>
                            </div>
                        </div>
                    </div>

                    <img className={classes.largeDevicesImage} src={theImage} alt="" />
                </div>
            </div>

            <div className={classes.smallDevicesContainer}>
                <h2 className={classes.smallDevicesHeading}>WORD OF THE DAY<br /><span>{_theWotd_date}</span></h2>
                <img className={classes.smallDevicesImage} src={theImage} alt="" />

                <div className={classes.smallDevicesInnerContainer}>
                    <div className={classes.smallDevicesDescription}>
                        <h1>{_theWotd_name}</h1>
                        <h2>{_pronPluspos}</h2>
                        <div className={classes.thinLine} />
                        <h3>{_theWotd_meaning}</h3>
                    </div>
                    <div className={classes.smallDevicesOtherInfo}>
                        <h4>art by:&nbsp;&nbsp;&nbsp;&nbsp;<span>{_theWotdArtistNAME}</span></h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WordOfTheDay