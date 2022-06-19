import React from 'react'

import "./styles.css"
import theImage from "../../assets/122.jpeg"

const _theWotd_date = "19th Jun, 2022"
const _theWotd_name = "abate"
const _pronPluspos = "(uh-beyt) verb"
const _theWotd_meaning = "become less intense or widespread"
const _theWotdArtistNAME = "M U T I"

const WordOfTheDay = () => {
    return (
        <section className="wotdContainer">
            <h2>{"Word Of The Day: " + _theWotd_date}</h2>

            <div className="largeDevicesContainer">
                <div className="largeDevicesInnerContainer">
                    <div className="largeDevicesInnerContainer2">
                        <div className="largeDevicesInnerContainer3">
                            <div className="largeDevicesDescription">
                                <h1>{_theWotd_name}</h1>
                                <h2>{_pronPluspos}</h2>
                                <h3>{_theWotd_meaning}</h3>
                            </div>
                            <div className="largeDevicesOtherInfo">
                                <h4>art by:&nbsp;&nbsp;&nbsp;&nbsp;<span>{_theWotdArtistNAME}</span></h4>
                            </div>
                        </div>
                    </div>

                    <img className="largeDevicesImage" src={theImage} alt="" />
                </div>
            </div>

            <div className="smallDevicesContainer">
                <h2 className="smallDevicesHeading">WORD OF THE DAY<br /><span>{_theWotd_date}</span></h2>
                <img className="smallDevicesImage" src={theImage} alt="" />

                <div className="smallDevicesInnerContainer">
                    <div className="smallDevicesDescription">
                        <h1>{_theWotd_name}</h1>
                        <h2>{_pronPluspos}</h2>
                        <div className="thinLine" />
                        <h3>{_theWotd_meaning}</h3>
                    </div>
                    <div className="smallDevicesOtherInfo">
                        <h4>art by:&nbsp;&nbsp;&nbsp;&nbsp;<span>{_theWotdArtistNAME}</span></h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WordOfTheDay