import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Game.css"
export default function Start () {
    const [playerName, setPlayerName] = useState("")
    const navigate = useNavigate()
    const [errorMessageGame, setErrorMessageGame] = useState(false)

    const win = window.sessionStorage;

    useEffect(() => {
        if (win.getItem('playerName'))
            setPlayerName(win.getItem('playerName'))
    }, [])

    useEffect(() => {

        win.setItem('playerName', playerName)
    }, [playerName])

    const nextBtnGame = () => {
        if (playerName === "") {
            setErrorMessageGame(true)
        } else {
            setPlayerName("")
            navigate("/game/education&jobs")

        }

    }

    return (
        <div className='gameContainer'>
            <input type="text" className="playerName" placeholder='Gib hier deinen Namen ein!'
                onChange={(e) => { setPlayerName(e.target.value) }} value={playerName} />
            {errorMessageGame && <p className='errorMessageGame'>Gib bitte erst einen Namen ein.</p>}
            <div className='gameBtns'>
                <button className='previewBtn0' onClick={() => navigate("/game/start")}>Zurück</button>
                <button className='continueBtn' onClick={() => nextBtnGame()}>Weiter</button>
            </div>

        </div>
    )
}