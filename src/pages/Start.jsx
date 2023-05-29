import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'

import "./Start.css"
export default function Game () {
    const navigate = useNavigate()



    return (
        <div className='startContainer'>
            <div className='stageZero'>
                <div className='startSpeech'>
                    <p className='firstParagraph'>
                        Hallo und willkommen zum RecruitingGame!
                    </p>
                    <p className='secondParagraph'>
                        Etienne ist ein ehrgeiziger junger Mann, der aus der Elfenbeinküste kommt. Er macht gerade eine Umschulung zum Webentwickler und hat viel Spaß daran.
                    </p>
                    <p className='thirdParagraph'>
                        Jetzt ist er fast am Ende seiner Umschulung und auf der Suche nach einer tollen Arbeitsstelle, wo er das Gelernte endlich anwenden und sich beruflich weiterentwickeln kann.
                    </p>
                    <p>
                        Vielleicht ist er die perfekte Ergänzung für dein Team!
                    </p>
                    <p>
                        Bist du bereit, mehr über ihn zu erfahren?
                    </p>

                </div>
                <button className='playBtn' onClick={() => navigate("/game")}>Los geht's!</button>

            </div>
        </div>
    )
}

