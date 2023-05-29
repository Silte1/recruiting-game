import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import "./Home.css"
export default function Home () {

    return (
        <div className='homeContainer'>
            <div className='welcomeBoard'>
                <p className='welcome'>Welcome to</p>
                <p className='gameName'><strong><em>RecruitingGame</em></strong></p>
            </div>
            <div className='presentation'>
                <p>Mein Name ist Etienne Silué und auf dieser Seite stelle ich mich vor.</p>
                <p>Das Ganze ist als Spiel aufgebaut. </p>
                <p>Wenn du eher kein Spieler bist, ist das auch okay.
                    <br />
                    Klick einfach <a className='redirect' href="/aboutMe" target="_blank" rel="noopener noreferrer"><em>HIER</em></a>,
                    um unter anderem weitere Projekte zu sehen.
                </p>

                {/* <div> <p className='chooseLanguage'><strong>Choose a language.</strong></p></div> */}
                {/* <div>
                    <button className='chooseLanguageBtn' onClick={(e) => { chooseLanguage(e) }}>Francais</button>
                    <button className='chooseLanguageBtn' onClick={(e) => { chooseLanguage(e) }}>Deutsch</button>
                    <button className='chooseLanguageBtn' onClick={(e) => { chooseLanguage(e) }}>English</button>
                </div> */}

            </div>
            <Link to="/game/start" style={{ textDecoration: "none" }}><button className='startBtn'>Zum Spiel</button></Link>



        </div>
    )
}
