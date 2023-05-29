import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import treasure from "../../../images/treasure-svgrepo-com.svg"
import "./HobbyAndInterest.css"



export default function HobbyAndInterest () {
    const navigate = useNavigate()
    // show the sections
    const [showHobbiesInstruction, setShowHobbiesInstruction] = useState(true)
    const [showHobbiesDescription, setShowHobbiesDescription] = useState(true)
    const [showConclusion, setShowConclusion] = useState(false)
    const [showHobbiesOption, setShowHobbiesOption] = useState(true)
    const [saveState, setSaveState] = useState([])




    // change the border colors
    const [greenBorderA, setGreenBorderA] = useState("")
    const [greenBorderB, setGreenBorderB] = useState("")
    const [redBorderA, setRedBorderA] = useState("")
    const [redBorderB, setRedBorderB] = useState("")
    const [redBorderC, setRedBorderC] = useState("")
    // show the descriptions

    const [showSport, setShowSport] = useState(false)
    const [showMusic, setShowMusic] = useState(false)
    const [showDance, setShowDance] = useState(false)
    const [showPhoto, setShowPhoto] = useState(false)
    const [showClimb, setShowClimb] = useState(false)


    // counter for show the next btn
    const [count, setCount] = useState(0)
    // show submit btn 
    const [showSubmitBtn, setShowSubmitBtn] = useState(false)

    const handleChangeInstructionToDescription = () => {
        // show the description section and hide the instruction section
        setShowHobbiesDescription(true)
        setShowHobbiesInstruction(false)
        setCount(prevCount => prevCount + 1)
        if (count >= 4) {
            setShowSubmitBtn(true)
        }
    }
    const handleSportDescription = () => {
        // set the green border
        setGreenBorderA("green")
        //show sport description and hide all the other
        setShowSport(true);
        setShowMusic(false);
        setShowDance(false);
        setShowPhoto(false);
        setShowClimb(false)
        handleChangeInstructionToDescription()
        if (saveState.indexOf("sport") === -1) {
            setSaveState(prevSaveState => [...prevSaveState, "sport"])
        } else if (saveState.indexOf("sport") !== -1) {
            return ""
        } else {

        }
    }

    const handleDanceDescription = () => {
        // set the green border
        setRedBorderA("red")
        //show sport description and hide all the other
        setShowDance(true);
        setShowSport(false);
        setShowMusic(false);
        setShowPhoto(false);
        setShowClimb(false)
        handleChangeInstructionToDescription()
        if (saveState.indexOf("dance") === -1) {
            setSaveState(prevSaveState => [...prevSaveState, "dance"])
        }

    }

    const handleMusicDescription = () => {
        // set the green border
        setGreenBorderB("green")
        //show sport description and hide all the other
        setShowMusic(true);
        setShowSport(false);
        setShowDance(false);
        setShowPhoto(false);
        setShowClimb(false)
        handleChangeInstructionToDescription()
        if (saveState.indexOf(" music") === -1) {
            setSaveState(prevSaveState => [...prevSaveState, "music"])
        }

    }

    const handlePhotoDescription = () => {
        // set the green border
        setRedBorderB("red")
        //show sport description and hide all the other
        setShowPhoto(true);
        setShowDance(false);
        setShowSport(false);
        setShowMusic(false);
        setShowClimb(false)
        handleChangeInstructionToDescription()
        if (saveState.indexOf("photo") === -1) {
            setSaveState(prevSaveState => [...prevSaveState, "photo"])
        }
    }

    const handleClimbDescription = () => {
        // set the green border
        setRedBorderC("red")
        //show sport description and hide all the other
        setShowClimb(true)
        setShowPhoto(false);
        setShowDance(false);
        setShowSport(false);
        setShowMusic(false);
        handleChangeInstructionToDescription()
        if (saveState.indexOf("climb") === -1) {
            setSaveState(prevSaveState => [...prevSaveState, "climb"])
        }



    }

    const handleConclusion = () => {
        setShowConclusion(true)
        setShowSubmitBtn(false)
        setShowHobbiesOption(false)
        setShowHobbiesDescription(false)
        setShowClimb(false)
        setShowPhoto(false);
        setShowDance(false);
        setShowSport(false);
        setShowMusic(false);


    }



    //////////////////////////////////////////// Preview btn////////////////////////////////////


    const previewBtnHobbies = () => {

        navigate("/game/education&jobs/skills")
        if (showConclusion === true) {
            setShowConclusion(false)
            setShowHobbiesOption(true)
        }

    }

    return (
        <article className='hobbyAndInterestContainer'>
            <section className='theBodyHobbyAndInterest'>

                <section className="hobbiesInstructionAndQuestionSection">
                    {showHobbiesInstruction && <section className='hobbiesInstructions'>
                        <p>
                            Nun bist du nur noch einen Schritt von deiner Belohnung entfernt.
                        </p>
                        <p>
                            Klick auf die Aktivitäten und entdecke, welche davon Etiennes Hobbys sind!
                        </p>
                    </section>}

                    {showHobbiesDescription && <section className="hobbiesDescription">
                        {showSport && <div className='descriptionBox'>
                            <p>Gruppensportarten macht Etienne tatsächlich gern.</p>
                            <p>Um genau zu sein, spielt er am liebsten Volleyball und Fußball. 🏐️🙂️⚽️</p></div>}
                        {showPhoto && <p className='descriptionBox'>Etienne kann schon fotografieren, aber dass dir die Bilder gefallen, kann er leider nicht verprechen. 😁️ </p>}
                        {showDance && <p className='descriptionBox'>Es wäre sehr schön tanzen zu können... 😏️</p>}
                        {showMusic && <p className='descriptionBox'>Musik zu hören, singen oder Trompete spielen machen ihm sehr viel Freude. 🎧️🎤️🎶️🎺️  </p>}
                        {showClimb && <p className='descriptionBox'>Das hat er leider noch nie probiert. Aber das wäre vielleicht eine Idee. 🤔️</p>}
                    </section>}
                    {showConclusion && <section className='hobbiesAndInterestConclusion'>

                        <p className='space'>Hurra, du hast es geschafft! </p>
                        <p>Jetzt wartet deine Belohnung auf dich.</p>
                        <p>Nun darfst du auf die Schatztruhe klicken und dich überraschen lassen.</p>

                    </section>}
                </section>
                <section className="hobbiesResponseAndOptionsContainer">
                    {showHobbiesOption && <section className="hobbiesResponseOptionsBox">
                        <p className='hobbies' style={{ borderColor: `${greenBorderA}` }} onClick={() => { handleSportDescription() }}>Gruppensportarten</p>
                        <p className='hobbies' style={{ borderColor: `${redBorderA}` }} onClick={() => { handleDanceDescription() }}>Tanzen</p>
                        <p className='hobbies' style={{ borderColor: `${greenBorderB}` }} onClick={() => { handleMusicDescription() }}>Musizieren</p>
                        <p className='hobbies' style={{ borderColor: `${redBorderB}` }} onClick={() => { handlePhotoDescription() }}>Fotografieren</p>
                        <p className='hobbies' style={{ borderColor: `${redBorderC}` }} onClick={() => { handleClimbDescription() }}>Klettern</p>
                    </section>}
                    {showConclusion &&
                        <section className='treasureContainer'>
                            <figure >
                                <img src={treasure} alt="" className='treasure' onClick={() => navigate("/game/education&jobs/skills/hobbyAndInterest/reward")} />
                            </figure>
                        </section>}
                </section>
                <section className='hobbiesCheckButtonContainer'>

                </section>
            </section>
            <section className='btnContainerHobbyAndInterest' >
                <button onClick={() => previewBtnHobbies()}>Zurück</button>
                {showSubmitBtn && <button onClick={() => handleConclusion()}>zur Belohnung</button>}
            </section>
        </article>
    )
}
