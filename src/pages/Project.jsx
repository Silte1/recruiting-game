import React from 'react'
import { Link } from 'react-router-dom'

import "./Project.css"
import stopWatch from "../images/stopWatch.jpg"
import firstPortfolio from "../images/firstPortfolio.jpg"
import recruiting from "../images/recruiting.jpg"




export default function Projekt () {
    return (
        <article className='projectContainer'>



            {/* <div className='project'>
                <Link className='links' to="https://portfolio-etienne-silue-wy31-silte1.vercel.app/home.html">
                    <img className='projectImage' src={firstPortfolio} alt="screenshot von meinem ersten Portfolio" />

                </Link>
                <span className='seeProject' >Ansehen !</span>
            </div> */}


            <Link className='links' to="https://portfolio-etienne-silue-wy31-silte1.vercel.app/home.html">
                <img className='projectImage' src={firstPortfolio} alt="screenshot von meinem ersten Portfolio" />

            </Link>


            <Link to="https://stopwatch-etienne.vercel.app/">
                <img className='projectImage' src={stopWatch} alt="screenshot von meinem Projekt stopUhr" />
            </Link>
            <Link to="https://recruitinggameetiennesilue.vercel.app/">
                <img className='projectImage' src={recruiting} alt="screenshot von meinem Projekt RecruitingGame" />
            </Link>





        </article>
    )
}
