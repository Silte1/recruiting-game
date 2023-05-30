import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import emailjs from "@emailjs/browser"



import "./Contact.css"



export default function Kontakt () {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [name, setName] = useState("")
    const [showForm, setShowForm] = useState(true)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)


    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                if (result.text === "OK") {
                    setShowForm(false)
                    setShowSuccessMessage(true)
                    setEmail("")
                    setName("")
                    setMessage("")
                }
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    // const postData = async (e) => {

    //     e.preventDefault();

    //     try {
    //         const response = await fetch(`https://recruiting-game-api.onrender.com/`, {

    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ sender: email, content: content, name: name }),
    //             mode: "no-cors",
    //             credentials: "include"

    //         });
    //         if (response.ok) {
    //             if (response.status === 200) {
    //                 setShowForm(false)
    //                 setShowSuccessMessage(true)
    //             }
    //         }
    //         console.log(response)

    //     } catch (error) {
    //         console.log(error);
    //     }

    // };

    const handleSucceed = () => {
        setShowSuccessMessage(false)
        setShowForm(true)
    }


    return (
        <article className='contactContainer'>
            <section className='containerBody'>
                {showForm && <form ref={form} className='contactForm' action="" method="post" onSubmit={sendEmail}>

                    <div>
                        <label className='contactFormLabel' htmlFor="">Name</label>
                        <input type="text" name="user_name" className='contactFormInput'
                            placeholder='Gib hier deinen Namen ein'
                            value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div>
                        <label className='contactFormLabel' htmlFor="">E-Mail</label>
                        <input type="email" name="user_email" className='contactFormInput'
                            required placeholder='Gib hier deine E-Mail-Adresse ein'
                            value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>

                    <div>
                        <label className='contactFormLabel' htmlFor="">Deine Nachricht</label>
                        <textarea name="message" id="" rows="10" className='contactFormMessage' required placeholder='Hallo Etienne, ...'
                            value={message}
                            onChange={(e) => { setMessage(e.target.value) }}>

                        </textarea>
                    </div>

                    <button>Absenden</button>
                </form>}
                {showSuccessMessage && <div className='sentSucceed'>
                    <h2>Deine Nachricht wurde gesendet! ✅️</h2>
                    <h2>Your message has been sent! ✅️</h2>
                    <h2>Ton message a été envoyé! ✅️</h2>
                    <button onClick={handleSucceed}>OK</button>



                </div>}
            </section>
            <section className='containerFooter'>
                <button onClick={() => navigate("/game/education&jobs/skills/hobbyAndInterest/reward")}>Zurück</button>
            </section>
        </article>
    )
}
