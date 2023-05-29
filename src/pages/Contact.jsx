import React, { useState } from 'react'
import { useNavigate } from 'react-router'
// import axios from "axios"


import "./Contact.css"


export default function Kontakt () {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [content, setContent] = useState("")
    const [name, setName] = useState("")
    const [showForm, setShowForm] = useState(true)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)


    const postData = async (e) => {

        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:9000/api/receive-email`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ sender: email, content: content, name: name }),
                credentials: "include"

            });
            if (response.ok) {
                if (response.status === 200) {
                    setShowForm(false)
                    setShowSuccessMessage(true)
                }
            }
            console.log(response)

        } catch (error) {
            console.log(error);
        }

    };

    const handleSucceed = () => {
        setShowSuccessMessage(false)
        setShowForm(true)
    }


    return (
        <article className='contactContainer'>
            <section className='containerBody'>
                {showForm && <form className='contactForm' action="" method="post" onSubmit={postData}>

                    <div>
                        <label className='contactFormLabel' htmlFor="">Name</label>
                        <input type="text" name="name" className='contactFormInput'
                            placeholder='Gib hier deinen Namen ein'
                            value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div>
                        <label className='contactFormLabel' htmlFor="">E-Mail</label>
                        <input type="email" name="sender" className='contactFormInput'
                            required placeholder='Gib hier deine E-Mail-Adresse ein'
                            value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>

                    <div>
                        <label className='contactFormLabel' htmlFor="">Deine Nachricht</label>
                        <textarea name="content" id="" rows="10" className='contactFormMessage' required placeholder='Hallo Etienne, ...'
                            value={content}
                            onChange={(e) => { setContent(e.target.value) }}>

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
