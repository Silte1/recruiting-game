import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import resume from "../../../images/lebenslauf_etienne_silue.pdf"
import "./Reward.css"
export default function Reward () {
    const navigate = useNavigate()

    return (
        <article className='rewardContainer'>
            <section className='theBodyReward'>
                <h1>Reward</h1>
                <section className='reward'>
                    <div className='rewardBox'>
                        <p className='rewardBoxHeader' >1</p>
                        <p>Du hast es dir verdient! Jetzt darfst du meinen Lebenslauf herunterladen.</p>
                        <button><a className='cv' href={resume} download="lebenslauf-etienne-silue">Lebenslauf</a></button>
                    </div>
                    <div className='rewardBox'>
                        <p className='rewardBoxHeader' >2</p>
                        <p>Super! Du hast freien Zugang zu meinen Projekten gewonnen.</p>
                        <button onClick={() => navigate("/project")}>Projekte</button>
                    </div>

                    <div className='rewardBox'>
                        <p className='rewardBoxHeader' >3</p>
                        <p>Es wäre unfair, dieses Spiel zu beenden, ohne dir die Möglichkeit zu geben mich zu kontaktieren.</p>
                        <button onClick={() => navigate("/contact")}>Kontakt</button>
                    </div>


                </section>
            </section>
            <section className='btnContainerReward' >
                <button onClick={() => navigate("/game/education&jobs/skills/hobbyAndInterest")} >Zurück</button>

            </section>
        </article>
    )
}
