import React from 'react'
import { Link } from 'react-router-dom'
import resume from "../images/lebenslauf_etienne_silue.pdf"

import "./AboutMe.css"

export default function AboutMe () {
    return (
        <article className='aboutMeContainer'>
            <section className='textAboutMe'>
                <p>
                    Ich heiße Etienne Silué und bin 1995 in Korhogo, einer Stadt im Norden der Elfenbeinküste (Côte d'Ivoire, Westafrika), geboren. Dort ging ich zur Schule und besuchte anschließend die Universität, an der ich mein Bachelor-Studium absolvierte.
                    2021 heiratete ich und zog deshalb nach Deutschland. Ich wollte die Gelegenheit dieses Neubeginns nutzen, um die berufliche Karriere im Bereich meiner Träume zu starten: Web- und Softwareentwicklung.
                    Die ersten Monate in Deutschland nutzte ich, um meine Deutsch-Kenntnise zu verbessern und freute mich, im Sommer 2022 eine Umschulung mit DCI (Digital Career Institute) beginnen zu können, um ein Web- und Softwareentwickler zu werden.
                    Nun bin ich auf der Suche nach einer Arbeitsstelle und freue mich auf diese neue Herausforderung.
                </p>
                <p>
                    Diese Fähigkeiten bringe ich bereits mit:
                    Frontend (UI/UX) design mit html, css, scss, bootstrap, Javascript, React js; Backend mit Node.js, express js, mongodb(compass, Atlas) / MySql; Versionsverwaltung mit Github.
                </p>
            </section>
            <div className='btnContainer'>

                <button><a className='cv' href={resume} download="lebenslauf-etienne-silue">Lebenslauf</a></button>


                <Link to="/project" className='links'>
                    <button>Projekte</button>

                </Link>
            </div>
        </article>
    )
}
