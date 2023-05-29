import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import "./Sidebar.css"
export default function Sidebar () {

    return (
        <div className='theSideBarContainer'>
            <div>
                <Link className='title' to="/">RGame</Link>
            </div>
            <nav>
                <ul className='navListContainer'>
                    <NavLink className={"navigationLink"} to="/">Home</NavLink>
                    <NavLink className={"navigationLink"} to="/game">Game</NavLink>


                    {/* <NavLink className={"navigationLink gameNavLinks"} to="/game/start">Start</NavLink> */}
                    {/* <NavLink className={"navigationLink gameNavLinks"} to="/game">Spiel</NavLink> */}
                    {/* <NavLink className={"navigationLink gameNavLinks"} to="/game/education&jobs">Bildungsweg</NavLink>
                    <NavLink className={"navigationLink gameNavLinks"} to="/game/education&jobs/skills">Skills</NavLink>
                    <NavLink className={"navigationLink gameNavLinks"} to="/game/education&jobs/skills/hobbyAndInterest">Hobby</NavLink>
                    <NavLink className={"navigationLink gameNavLinks"} to="/game/education&jobs/skills/hobbyAndInterest/reward">rewards</NavLink> */}

                    <NavLink className={"navigationLink"} to="/aboutMe">Über mich</NavLink>
                    <NavLink className={"navigationLink"} to="/contact">Kontakt</NavLink>
                </ul>
            </nav>
            <footer>
                {/* <span>Kontakt</span> */}
                <a href="mailto:etiennesilue3@gmail.com" target="_blank" rel="noopener noreferrer">E-Mail</a>
                <a href="https://github.com/Silte1" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://www.linkedin.com/in/etienne-silu%C3%A9-7a5524176/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </footer>
        </div>
    )
}
