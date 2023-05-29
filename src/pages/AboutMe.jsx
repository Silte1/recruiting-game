import React from 'react'
import { Link } from 'react-router-dom'
import resume from "../images/lebenslauf_etienne_silue.pdf"

import "./AboutMe.css"

export default function AboutMe () {
    return (
        <article className='aboutMeContainer'>
            <section className='textAboutMe'>Ich bin am Ende einer spannenden Umschulung zum fullstack Webentwickler bei DCI.
                Gerade bin ich actif auf der Suche nach Arbeits-Praktikumsstelle ab Ende Juni.
                Das biete ich an:
                Frontend (UI/UX) design mit html, css, scss, bootstrap, Javascript, React js;
                Backend mit Node.js, express js, mongodb(compass, Atlas) / MySql;
                Versionsverwaltung mit Github.</section>
            <div className='btnContainer'>

                <button><a className='cv' href={resume} download="lebenslauf-etienne-silue">Lebenslauf</a></button>


                <Link to="/project" className='links'>
                    <button>Projekte</button>

                </Link>
            </div>
        </article>
    )
}
