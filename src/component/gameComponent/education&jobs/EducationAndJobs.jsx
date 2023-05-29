import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./EducationAndJobs.css"
export default function EducationAndJobs () {

    const win = window.sessionStorage
    const navigate = useNavigate()
    const playerName = win.getItem('playerName')

    const [trueAnswerBorderColor, setTrueAnswersBorderColor] = useState("white")
    const [wrongAnswersBorderColor, setWrongAnswersBorderColor] = useState("white")
    const [showFirstQuestion, setShowFirstQuestion] = useState(true)
    const [showSecondQuestion, setShowSecondQuestion] = useState(false)
    const [showFirstQuestionOptions, setShowFirstQuestionOptions] = useState(true)
    const [showSecondQuestionOptions, setShowSecondQuestionOptions] = useState(false)
    const [showGreeting, setShowGreeting] = useState(true)
    const [showCallToAction, setShowCallToAction] = useState(true)
    const [count, setCount] = useState(0)
    const [resumeOfTheEducationsAndJobs, setResumeOfTheEducationsAndJobs] = useState(false)
    const [right, setRight] = useState(false)
    const [wrong, setWrong] = useState(false)
    const [saveAnswer, setSaveAnswer] = useState({})
    const [errorMessage, setErrorMessage] = useState(false)

    // set color function

    const setColor = () => {
        setTrueAnswersBorderColor("green")
        setWrongAnswersBorderColor("red")
    }


    // The handleAnswer is the function that shows the true answers and change 
    // the instruction section

    const handleAnswer = () => {
        if (count === 0 && showFirstQuestionOptions === true) {

            setShowFirstQuestion(false)
            setShowGreeting(false)
            setShowCallToAction(false)
            setCount(prevCount => prevCount + 1)
        }
        if (count === 1) {
            if (count === 1 && showFirstQuestionOptions === true && showSecondQuestionOptions === false) {
                setCount(1)
            }
            if (count === 1 && showSecondQuestionOptions === true && showSecondQuestion === true && showFirstQuestionOptions === false) {
                setCount(prevCount => prevCount + 1)
            }
        }
        if (count === 2 && showSecondQuestionOptions === true) {
            setCount(2)
        }
        setColor()

        setShowSecondQuestion(false)
        setShowCallToAction(false)
        setShowGreeting(false)
    }


    // specify the right or wrong question
    const rightAnswer = () => {
        console.log(saveAnswer)
        setErrorMessage(false)
        handleAnswer()
        if (wrong === false && count === 0) {
            setRight(true)
            saveAnswer.firstRound = true
        }
        if (wrong === true && count === 1) {
            return ""
        }
        if (wrong === false && count === 1) {
            setRight(true)
            saveAnswer.secondRound = true

        }
        if (wrong === true && count === 2) {
            return ""
        }

    }

    const wrongAnswer = () => {
        console.log(saveAnswer)
        setErrorMessage(false)
        handleAnswer()

        if (right === false && count === 0) {
            setWrong(true)
            saveAnswer.firstRound = false
        }
        if (right === true && count === 1) {
            return ""
        }
        if (right === false && count === 1) {
            setWrong(true)
            saveAnswer.secondRound = false

        }
        if (right === true && count === 2) {
            return ""
        }

    }

    // handle the next btn
    const handleNext = () => {
        setRight(false)
        setWrong(false)
        if (count === 0 && right === false && wrong === false) {
            setErrorMessage(true)
        }
        if (count === 1 && showFirstQuestionOptions === true) {
            setTrueAnswersBorderColor("white")
            setWrongAnswersBorderColor("white")
            setShowFirstQuestionOptions(false)
            setShowSecondQuestion(true)
            setShowSecondQuestionOptions(true)
            setShowCallToAction(true)
        }
        if (count === 1 && right === false && wrong === false) {
            setErrorMessage(true)
        }
        if (count === 2 && showSecondQuestionOptions === true) {
            setShowSecondQuestionOptions(false)
            setResumeOfTheEducationsAndJobs(true)
        }
        if ((saveAnswer.secondRound === true || saveAnswer.secondRound === false) && count === 2 && showFirstQuestionOptions === true) {
            setShowFirstQuestionOptions(false)
            setShowSecondQuestionOptions(true)
            if (saveAnswer.secondRound === true) {
                setRight(true)
            }
            if (saveAnswer.secondRound === false) {
                setWrong(true)
            }
            setColor()

        }
        if (count === 2 && resumeOfTheEducationsAndJobs === true) {
            navigate("/game/education&jobs/skills")
        }
        if (count > 2) {
            setCount(2)

        }



    }


    // Handle the preview btn

    const handlePreview = () => {
        if (showGreeting === true && showFirstQuestion === true && showCallToAction === true && showFirstQuestionOptions === true) {
            navigate("/game")
        }
        if ((showFirstQuestionOptions === true && count === 1) || (showFirstQuestionOptions === true && count === 2)) {
            navigate("/game")
        }
        if (showSecondQuestionOptions === true && right === false && wrong === false && count === 1) {
            if (errorMessage === true) {
                setErrorMessage(false)
            }
            setShowFirstQuestionOptions(true)
            setShowSecondQuestionOptions(false)
            setShowSecondQuestion(false)
            setShowCallToAction(false)
            if (saveAnswer.firstRound === true) {
                setRight(true)
            }
            if (saveAnswer.firstRound === false) {
                setWrong(true)
            }
            setColor()
        }
        if ((showSecondQuestionOptions === true && count === 2)) {

            setShowFirstQuestionOptions(true)
            setShowSecondQuestionOptions(false)
            setShowSecondQuestion(false)
            setShowCallToAction(false)
            if (saveAnswer.firstRound === true) {
                setRight(true)
                setWrong(false)

            }
            if (saveAnswer.firstRound === false) {
                setWrong(true)
                setRight(false)
            }
            setColor()
        }
        // if (showFirstQuestionOptions === true && count === 2) {
        //     setCount(1)
        // }
        if (resumeOfTheEducationsAndJobs === true) {
            setResumeOfTheEducationsAndJobs(false)
            setShowSecondQuestionOptions(true)
            setColor()
            if (saveAnswer.secondRound === true) {
                setRight(true)
            }
            if (saveAnswer.secondRound === false) {
                setWrong(true)
            }
        }
    }




    return (
        <article className='educationContainer'>
            <section className='theBodyEducation'>
                <h1></h1>
                <section className='greetingAndInstructionEducation'>
                    {showGreeting && <p className='space'>Hey {playerName}!</p>}
                    {showFirstQuestion && <>
                        <p>Du weißt bereits, dass Etienne gerade eine Umschulung zum Webentwickler macht.
                        </p>
                        <p className='space'>    Aber weißt du auch, was er davor studiert hat?</p></>}
                    {showSecondQuestion && <p>Und was denkst du, was seine letzte Arbeit war?</p>}
                    {showCallToAction && <p>Klick auf die richtige Antwort!</p>}
                    {right && <p className='right'>Super! 🎉️ Richtige Antwort. 🙂️ </p>}
                    {wrong &&
                        <div className='wrong'>
                            <p>Das stimmt leider nicht. 🙁️</p>
                            <p>Aber unten siehst du die richtige Antwort. Lass uns weiter spielen! 😉️</p>
                        </div>
                    }
                </section>
                <section className='responseAndOptionsContainerEducation'>
                    {showFirstQuestionOptions && <section className='responseOptionsBoxEducation'>
                        <p style={{ borderColor: `${trueAnswerBorderColor}` }} onClick={(e) => { rightAnswer() }}>Agrarwissenschaft</p>
                        <p style={{ borderColor: `${wrongAnswersBorderColor}` }} onClick={(e) => { wrongAnswer() }}>Soziologie</p>
                        <p style={{ borderColor: `${wrongAnswersBorderColor}` }} onClick={(e) => { wrongAnswer() }}>Informatik</p>
                        <p style={{ borderColor: `${wrongAnswersBorderColor}` }} onClick={(e) => { wrongAnswer() }}>Musikwissenschaft</p>
                    </section>}
                    {showSecondQuestionOptions && <section className='responseOptionsBoxEducation'>
                        <p style={{ borderColor: `${wrongAnswersBorderColor}` }} onClick={(e) => { wrongAnswer() }}>Tierzüchter</p>
                        <p style={{ borderColor: `${trueAnswerBorderColor}` }} onClick={(e) => { rightAnswer() }}>Verkäufer</p>
                        <p style={{ borderColor: `${wrongAnswersBorderColor}` }} onClick={(e) => { wrongAnswer() }}>Lehrer</p>
                        <p style={{ borderColor: `${wrongAnswersBorderColor}` }} onClick={(e) => { wrongAnswer() }}>IT Techniker</p>
                    </section>}
                    {resumeOfTheEducationsAndJobs && <section className='conclusionEducation'>
                        <div className='space'>
                            <p className='space'>
                                Diese Lösung war vielleicht etwas überraschend, aber es stimmt tatsächlich:

                            </p>
                            <p>
                                Etienne hat nach dem Abschluss seines Bachelors in Agrarwissenschaft
                                im Verkauf und Vertrieb von Schulbüchern gearbeitet - und damit in einem völlig anderen Bereich. 🌱️📚️
                            </p>
                            <p>
                                So hatte er die Möglichkeit, vielfältige Erfahrungen zu sammeln.

                            </p>
                        </div>
                        <div>
                            <p>
                                Durch die aktuelle Umschulung kann Etienne seinen Wissenshorizont erneut erweitern.

                            </p>
                            <p>
                                Lass uns gemeinsam entdecken, welche Fähigkeiten er dort bisher sammeln konnte.
                            </p>
                        </div>

                    </section>}
                </section>
                <section className='errorEducation'>
                    {errorMessage && <p className='errorMessageEducation'>Bitte beantworte erst die Frage!</p>}
                </section>




            </section>
            <section className='btnContainerEducation'>
                <button className='previewBtn' onClick={() => { handlePreview() }}>Zurück</button>
                <button className='nextBtn' onClick={() => { handleNext() }}>Weiter</button>
            </section>
        </article>
    )
}
