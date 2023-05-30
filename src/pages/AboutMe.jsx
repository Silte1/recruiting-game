import React from 'react'
import { Link } from 'react-router-dom'
import resume from "../images/lebenslauf_etienne_silue.pdf"

import "./AboutMe.css"

export default function AboutMe () {
    return (
        <article className='aboutMeContainer'>
            <section className='textAboutMe'>
                <p>
                    My name is Etienne Silué and I was born in Korhogo in 1995. Korhogo is a city in the northern Côte d'Ivoire, which lies in West Africa. I went to school in that city and did a Bachelor's degree after that.

                    In 2021 I moved to Germany to be married. I wanted to use the opportunity of this new beginning to start my career in the field of activity of my dreams - web and software development.

                    I used the past months to improve my German and was happy to be able to start the professional training with DCI to become a web and software developer.
                </p>
                <p>
                    Das kann ich bereits:
                    Frontend (UI/UX) design mit html, css, scss, bootstrap, Javascript, React js;
                    Backend mit Node.js, express js, mongodb(compass, Atlas) / MySql;
                    Versionsverwaltung mit Github.
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
