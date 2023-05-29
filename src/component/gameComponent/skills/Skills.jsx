import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bootstrap from "../../../images/bootstrap-4.svg"
import css from "../../../images/css-3.svg"
import express from "../../../images/express.svg"
import github from "../../../images/github-2.svg"
import html from "../../../images/html-5.svg"
import javascript from "../../../images/javascript.svg"
import mongodb from "../../../images/mongodb-1.svg"
import mysql from "../../../images/mysql-3.svg"
import nodejs from "../../../images/nodejs-1.svg"
import react from "../../../images/react-2.svg"
import smile from "../../../images/smile-2.svg"
import ci from "../../../images/ci.svg"
import german from "../../../images/de.svg"
import french from "../../../images/fr.svg"
import greatBritain from "../../../images/gb.svg"
import spanish from "../../../images/es.svg"
import Cookies from "js-cookie"





import "./Skills.css"
export default function Skills () {
    const navigate = useNavigate()
    const [showTechnicalSkills, setShowTechnicalSkills] = useState(true)
    const [showLanguages, setShowLanguages] = useState(false)
    const [showSoftSkills, setShowSoftSkills] = useState(false)
    const [showConclusion, setShowConclusion] = useState(false)
    const [showBagAndStock, setShowBagAndStock] = useState(true)

    // handle my skill bag and stock

    const [jsOnStock, setJsOnStock] = useState(true)
    const [bootstrapOnStock, setBootstrapOnStock] = useState(true)
    const [expressOnStock, setExpressOnStock] = useState(true)
    const [githubOnStock, setGithubOnStock] = useState(true)
    const [sqlOnStock, setSqlOnStock] = useState(true)
    const [reactOnStock, setReactOnStock] = useState(true)
    const [nodejsOnStock, setnodejsOnStock] = useState(true)
    const [mongoDbOnStock, setMongoDbOnStock] = useState(true)


    // handle my languages bag and stock


    const [germanOnStock, setGermanOnStock] = useState(true)
    const [englishOnStock, setEnglishOnStock] = useState(true)
    const [spanishOnStock, setSpanishOnStock] = useState(true)


    // Error message state

    const [errorMessage, setErrorMessage] = useState(false)

    // selected soft skill
    const [isASelected, setIsASelected] = useState(false)
    const [isBSelected, setIsBSelected] = useState(false)
    const [isDSelected, setIsDSelected] = useState(false)
    const [isESelected, setIsESelected] = useState(false)
    const [isGSelected, setIsGSelected] = useState(false)
    const [allClicked, setAllClicked] = useState(true)
    const [countDirection, setCountDirection] = useState("increment")
    const [countSoftSkill, setCountSoftSkill] = useState(1)
    const [increment, setIncrement] = useState([])
    const [decrement, setDecrement] = useState([])


    const sendProof = (par) => {
        if (increment.length === 0 && decrement.length === 0) {
            setIncrement(prevIncrement => [...prevIncrement, par])
        }
        if (increment.indexOf(par !== -1)) {
            increment.splice(increment.indexOf(par), 1)
            console.log(increment.indexOf(par))
            console.log("increment", increment)
            console.log("increment", increment.includes(par))
            console.log("increment.length", increment.length)
            setDecrement(prevDecrement => [...prevDecrement, par])
        }
        // if (decrement.indexOf(par !== -1)) {
        //     decrement.splice(decrement.indexOf(par), 1)
        //     // console.log(decrement.indexOf("par"))
        //     setIncrement(prevIncrement => [...prevIncrement, par])
        // }
        // console.log("increment", increment)
        // console.log("decrement", decrement)

    }
    // Thanks for soft skills

    const [thanksForSoftSkills, setThanksForSoftSkills] = useState(false)
    const [instructionForSoftSkills, setInstructionForSoftSkills] = useState(false)





    const handleSelectedClick = (par, parTwo) => {
        sendProof(parTwo)
        if (thanksForSoftSkills === false) {
            par(prevSelected => !prevSelected);

            if (countDirection === "increment") {

                if (countSoftSkill < 5) {
                    setCountSoftSkill(prevCount => prevCount + 1)
                    setAllClicked(false)
                    console.log(countSoftSkill)
                    console.log(countDirection)
                }
                if (countSoftSkill === 5) {
                    console.log(countSoftSkill)
                    console.log(countDirection)

                    setCountDirection("decrement")
                    setAllClicked(true)

                    setCountSoftSkill(prevCount => prevCount - 1)
                }
            }
            if (countDirection === "decrement" && countSoftSkill > 0) {
                setCountSoftSkill(prevCount => prevCount - 1)
                setAllClicked(false)
                console.log(countSoftSkill)
                console.log(countDirection)

                if (countSoftSkill === 0) {

                    console.log(countSoftSkill)
                    console.log(countDirection)

                }
                if (countSoftSkill === 1) {
                    setCountDirection("increment")
                }

            }
        }
    }


    // preview btn

    const handlePreviewSkillsSection = () => {
        if (showTechnicalSkills === true && showBagAndStock === true) {
            navigate("/game/education&jobs")
        }

        if (showLanguages === true && showTechnicalSkills === false && showBagAndStock === true) {
            setShowLanguages(false)
            setShowTechnicalSkills(true)
        }
        if (showSoftSkills === true && instructionForSoftSkills === true &&
            showLanguages === false && showTechnicalSkills === false && showBagAndStock === false) {
            setShowLanguages(true)
            setShowBagAndStock(true)
            setShowSoftSkills(false)
            setInstructionForSoftSkills(false)
        }
        if (showSoftSkills === true && instructionForSoftSkills === false && thanksForSoftSkills === true) {
            setThanksForSoftSkills(false)
            setInstructionForSoftSkills(true)
        }
        if (showConclusion === true) {
            setShowConclusion(false)
            setShowSoftSkills(true)
            setThanksForSoftSkills(true)
        }
    }
    const handleNextSkillsSection = () => {
        if (showTechnicalSkills === true && showBagAndStock === true) {
            setShowTechnicalSkills(false)
            setShowLanguages(true)
        }

        if (showLanguages === true && showTechnicalSkills === false && showBagAndStock === true) {
            setShowLanguages(false)
            setShowBagAndStock(false)
            setShowSoftSkills(true)
            setInstructionForSoftSkills(true)
        }
        if (showSoftSkills === true && instructionForSoftSkills === true &&
            showLanguages === false && showTechnicalSkills === false && showBagAndStock === false) {
            setThanksForSoftSkills(true)
            setInstructionForSoftSkills(false)
        }
        if (showSoftSkills === true && instructionForSoftSkills === false && thanksForSoftSkills === true) {
            setThanksForSoftSkills(false)
            setInstructionForSoftSkills(false)
            setShowSoftSkills(false)
            setShowConclusion(true)
        }
        if (showConclusion === true) {
            setShowConclusion(false)
            navigate("/game/education&jobs/skills/hobbyAndInterest")
        }

    }

    // session storage
    // const win = window.sessionStorage

    useEffect(() => {
        if (Cookies.get('showConclusion')) {
            setShowConclusion(JSON.parse(Cookies.get('showConclusion')))
        }
        if (Cookies.get('showTechnicalSkills')) {
            setShowTechnicalSkills(JSON.parse(Cookies.get('showTechnicalSkills')))
        }
        if (Cookies.get('showLanguages')) {
            setShowLanguages(JSON.parse(Cookies.get('showLanguages')))
        }
        if (Cookies.get('showSoftSkills')) {
            setShowSoftSkills(JSON.parse(Cookies.get('showSoftSkills')))
        }
        if (Cookies.get('showBagAndStock')) {
            setShowBagAndStock(JSON.parse(Cookies.get('showBagAndStock')))
        }
        if (Cookies.get('thanksForSoftSkills')) {
            setThanksForSoftSkills(JSON.parse(Cookies.get('thanksForSoftSkills')))
        }
        if (Cookies.get('instructionForSoftSkills')) {
            setInstructionForSoftSkills(JSON.parse(Cookies.get('instructionForSoftSkills')))
        }
    }, [])




    useEffect(() => {
        Cookies.set('showConclusion', showConclusion.toString())
        Cookies.set('showTechnicalSkills', showTechnicalSkills.toString())
        Cookies.set('showLanguages', showLanguages.toString())
        Cookies.set('showSoftSkills', showSoftSkills.toString())
        Cookies.set('showBagAndStock', showBagAndStock.toString())
        Cookies.set('thanksForSoftSkills', thanksForSoftSkills.toString())
        Cookies.set('instructionForSoftSkills', instructionForSoftSkills.toString())
    }, [showConclusion, showTechnicalSkills, showLanguages,
        showSoftSkills, showBagAndStock, thanksForSoftSkills,
        instructionForSoftSkills])

    // DELETE COOKIES

    useEffect(() => {
        const handleBeforeUnload = () => {
            // Delete cookies here
            Cookies.remove('showConclusion')
            Cookies.remove('showTechnicalSkills')
            Cookies.remove('showLanguages')
            Cookies.remove('showSoftSkills')
            Cookies.remove('showBagAndStock')
            Cookies.remove('thanksForSoftSkills')
            Cookies.remove('instructionForSoftSkills')
            // Alternatively, you can delete all cookies using:
            // Object.keys(Cookies.get()).forEach(cookie => Cookies.remove(cookie));
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <article className='skillContainer'>

            <section className='theBodySkills'>

                <section className='instructionAndQuestionSection'>
                    {showTechnicalSkills && <section className='technicalSkillsInstructions'>
                        <div className='space'>
                            <p>
                                Unser Freund Etienne freut sich sehr über seine Umschulung, weil dadurch sein Traum, als Webentwickler zu arbeiten, in Erfüllung geht.
                                Er hat bereits viele technische Fähigkeiten sammeln können.
                            </p>
                        </div>
                        <div className='space'>
                            <p>Nun hat sich Etienne für eine Arbeitsstelle beworben und schon eine Einladung zum Vorstellungsgespräch bekommen.</p>
                            <p>Allerdings weiß er noch nicht, welche Fähigkeitboxen er mitnehmen soll. Dafür braucht er deine Hilfe.</p>
                            <p >
                                Html und css sind für ihn Grundfähigkeiten. Was denkst du, was er noch mitnehmen sollte?
                            </p>
                        </div>
                        <p>
                            Klick auf die Fähigkeitboxen, die er im Vorrat hat, um sie in seine Tasche zu packen!
                        </p>
                    </section>}

                    {showLanguages && <section className='languagesInstructions'>
                        <div className='space'>
                            <p>Mit den Programmiersprachen in der Tasche ist Etienne gut ausgerüstet. </p>
                            <p>Aber halt! Es fehlt noch etwas!</p>
                            <p>Um mit dem Recruiter kommunizieren zu können, braucht er noch mindestens eine weitere Sprache.</p>
                        </div>
                        <>
                            <p>Im Vorrat siehst du die Sprachen, die Etienne spricht.</p>
                            <p>
                                Welche davon soll er einpacken? Klick darauf.
                            </p>
                        </>
                    </section>}

                    {showSoftSkills && <section className='softSkillsInstructions'>
                        {instructionForSoftSkills && <>
                            <div className='space'>
                                <p>
                                    "Anpassungsfähigkeit" und "Lernfreude" sind Fähigkeiten, die Etienne gut beschreiben.
                                </p>
                                <p>
                                    Stell dir vor, du bist der Recruiter, bei dem er sich beworben hat.
                                </p>

                            </div>
                            <p>Welche Fähigkeiten würdest du dir bei deinem Bewerber zusätzlich wünschen?</p>
                            <p>
                                Klick auf die Softskills, um sie zu auszuwählen.
                            </p>
                        </>}

                        {thanksForSoftSkills &&
                            <>
                                <p className='space'>
                                    Danke für deine Einschätzung!
                                </p>
                                <p>
                                    Genau diese Softskills bringt Etienne mit. 🙂️
                                </p>
                                {!allClicked && <p>
                                    ... und auch die der untenstehenden, die du nicht ausgewählt hast.
                                </p>}
                            </>
                        }
                    </section>}
                    {showConclusion && <section className='conclusion'>
                        <p className='space'>
                            Super! Danke für deine Hilfe. Etienne freut sich sehr darüber und ist jetzt fit für das Vorstellungsgespräch. 😊️
                        </p>
                        <p >
                            Auch du hast es fast geschafft und die Belohnung ist nicht mehr weit.
                        </p>

                        <p className='space'>
                            Eine letzte Herausforderung liegt noch vor dir. 💪🏽️
                        </p>

                        <p>
                            Klick unten auf "Weiter", um die letzte Runde des Spiels zu starten!
                        </p>
                    </section>}

                </section>
                <section className='responseAndOptionsContainer'>
                    {showBagAndStock && <section className='responseOptionsBoxLogos'>
                        <section className="stock">
                            <h3>Vorrat</h3>
                            <div className='stockBody'>
                                {showTechnicalSkills && <>
                                    {jsOnStock &&
                                        <figure className='technicalSkillBox' onClick={() => setJsOnStock(false)}>
                                            <img src={javascript} alt="" className='skillsImg' />
                                            <figcaption>Javascript</figcaption>
                                        </figure>}
                                    {bootstrapOnStock &&
                                        <figure className='technicalSkillBox' onClick={() => setBootstrapOnStock(false)}>
                                            <img src={bootstrap} alt="" className='skillsImg' />
                                            <figcaption>Bootstrap</figcaption>

                                        </figure>}
                                    {expressOnStock &&
                                        <figure className='technicalSkillBox' onClick={() => setExpressOnStock(false)}>
                                            <img src={express} alt="" className='skillsImg' />
                                            <figcaption>express js</figcaption>

                                        </figure>}

                                    {githubOnStock &&
                                        <figure className='technicalSkillBox' onClick={() => setGithubOnStock(false)}>
                                            <img src={github} alt="" className='skillsImg' />
                                            <figcaption>Github</figcaption>

                                        </figure>}

                                    {sqlOnStock &&
                                        <figure className='technicalSkillBox' onClick={() => setSqlOnStock(false)}>
                                            <img src={mysql} alt="" className='skillsImg' />
                                            <figcaption>SQL</figcaption>

                                        </figure>}

                                    {reactOnStock &&
                                        <figure className='technicalSkillBox' onClick={() => setReactOnStock(false)}>
                                            <img src={react} alt="" className='skillsImg' />
                                            <figcaption>React</figcaption>

                                        </figure>}

                                    {nodejsOnStock &&
                                        <figure className='technicalSkillBox' onClick={() => setnodejsOnStock(false)}>
                                            <img src={nodejs} alt="" className='skillsImg' />
                                            <figcaption>Node.js</figcaption>

                                        </figure>}

                                    {mongoDbOnStock &&
                                        <figure className='technicalSkillBox' onClick={() => setMongoDbOnStock(false)}>
                                            <img src={mongodb} alt="" className='skillsImg' />
                                            <figcaption>MongoDB</figcaption>

                                        </figure>}
                                </>}

                                {showLanguages &&
                                    <>
                                        {germanOnStock &&
                                            <figure className='languageSkillBox' onClick={() => setGermanOnStock(false)}>
                                                <img src={german} alt="" className='languagesImg' />
                                                <figcaption>Deutsch (B2)</figcaption>

                                            </figure>}
                                        {englishOnStock &&
                                            <figure className='languageSkillBox' onClick={() => setEnglishOnStock(false)}>
                                                <img src={greatBritain} alt="" className='languagesImg' />
                                                <figcaption>Englisch (B1)</figcaption>

                                            </figure>}

                                        {spanishOnStock &&
                                            <figure className='languageSkillBox' onClick={() => setSpanishOnStock(false)}>
                                                <img src={spanish} alt="" className='languagesImg' />
                                                <figcaption>Spanisch (A1)</figcaption>

                                            </figure>}




                                    </>}

                            </div>
                        </section>
                        <section className="bag">

                            <h3>Tasche</h3>
                            <div className='bagBody'>
                                <div className='technicalBagBody'>
                                    {showTechnicalSkills && <>
                                        <figure className='technicalSkillBox'>
                                            <img src={html} alt="" className='skillsImg' />
                                            <figcaption>Html</figcaption>
                                        </figure>
                                        <figure className='technicalSkillBox'>
                                            <img src={css} alt="" className='skillsImg' />
                                            <figcaption>Css</figcaption>
                                        </figure>

                                        {!jsOnStock &&
                                            <figure className='technicalSkillBox' onClick={() => setJsOnStock(true)}>
                                                <img src={javascript} alt="" className='skillsImg' />
                                                <figcaption>Javascript</figcaption>
                                            </figure>}
                                        {!bootstrapOnStock &&
                                            <figure className='technicalSkillBox' onClick={() => setBootstrapOnStock(true)}>
                                                <img src={bootstrap} alt="" className='skillsImg' />
                                                <figcaption>Bootstrap</figcaption>

                                            </figure>}
                                        {!expressOnStock &&
                                            <figure className='technicalSkillBox' onClick={() => setExpressOnStock(true)}>
                                                <img src={express} alt="" className='skillsImg' />
                                                <figcaption>express js</figcaption>

                                            </figure>}

                                        {!githubOnStock &&
                                            <figure className='technicalSkillBox' onClick={() => setGithubOnStock(true)}>
                                                <img src={github} alt="" className='skillsImg' />
                                                <figcaption>Github</figcaption>

                                            </figure>}

                                        {!sqlOnStock &&
                                            <figure className='technicalSkillBox' onClick={() => setSqlOnStock(true)}>
                                                <img src={mysql} alt="" className='skillsImg' />
                                                <figcaption>SQL</figcaption>

                                            </figure>}

                                        {!reactOnStock &&
                                            <figure className='technicalSkillBox' onClick={() => setReactOnStock(true)}>
                                                <img src={react} alt="" className='skillsImg' />
                                                <figcaption>React</figcaption>

                                            </figure>}

                                        {!nodejsOnStock &&
                                            <figure className='technicalSkillBox' onClick={() => setnodejsOnStock(true)}>
                                                <img src={nodejs} alt="" className='skillsImg' />
                                                <figcaption>Node.js</figcaption>

                                            </figure>}

                                        {!mongoDbOnStock &&
                                            <figure className='technicalSkillBox' onClick={() => setMongoDbOnStock(true)}>
                                                <img src={mongodb} alt="" className='skillsImg' />
                                                <figcaption>MongoDB</figcaption>

                                            </figure>}
                                    </>}

                                    {showLanguages &&
                                        <>
                                            <figure className='languageSkillBox'>
                                                <img src={french} alt="" className='languagesImg' />
                                                <figcaption>Französisch</figcaption>
                                                <figcaption>(Muttersprache)</figcaption>


                                            </figure>
                                            <figure className='languageSkillBox'>
                                                <img src={ci} alt="" className='languagesImg' />
                                                <figcaption>Senoufo</figcaption>
                                                <figcaption>(Muttersprache)</figcaption>


                                            </figure>

                                            {!germanOnStock &&
                                                <figure className='languageSkillBox' onClick={() => setGermanOnStock(true)}>
                                                    <img src={german} alt="" className='languagesImg' />
                                                    <figcaption>Deutsch (B2)</figcaption>

                                                </figure>}
                                            {!englishOnStock &&
                                                <figure className='languageSkillBox' onClick={() => setEnglishOnStock(true)}>
                                                    <img src={greatBritain} alt="" className='languagesImg' />
                                                    <figcaption>Englisch (B1)</figcaption>

                                                </figure>}

                                            {!spanishOnStock &&
                                                <figure className='languageSkillBox' onClick={() => setSpanishOnStock(true)}>
                                                    <img src={spanish} alt="" className='languagesImg' />
                                                    <figcaption>Spanisch (A1)</figcaption>

                                                </figure>}





                                        </>}
                                </div>

                            </div>

                        </section>

                    </section>}

                    {showSoftSkills && <section className='responseOptionsBox'>
                        <>
                            <p className={isASelected ? 'selected' : ''} onClick={() => handleSelectedClick(setIsASelected, "A")} >Stressresistenz</p>
                            <p className={isBSelected ? 'selected' : ''} onClick={() => handleSelectedClick(setIsBSelected, "B")}>Geduld</p>
                            <p className={isDSelected ? 'selected' : ''} onClick={() => handleSelectedClick(setIsDSelected, "C")}>Zuverlässigkeit</p>
                            <p className={isESelected ? 'selected' : ''} onClick={() => handleSelectedClick(setIsESelected, "D")}>Teamfähigkeit</p>
                            <p className={isGSelected ? 'selected' : ''} onClick={() => handleSelectedClick(setIsGSelected, "E")}>Selbstständigkeit</p>
                        </>
                    </section>}

                    {showConclusion && <div className="conclusionAnimation">
                        <img src={smile} alt="" className='conclusionImg' />
                    </div>}

                </section>

                <section className='errorSkillsContainer'>
                    {errorMessage && <p className='errorMessageSkills'>Bitte beantworte erst die Frage!</p>}
                </section>

            </section>
            <section className='btnContainerSkills' >
                <button onClick={() => handlePreviewSkillsSection()}>Zurück</button>
                <button onClick={() => handleNextSkillsSection()} >Weiter</button>
            </section>
        </article>
    )
}
