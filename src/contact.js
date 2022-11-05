
import React from "react"
import ReactDOM  from "react";
import "./index.css"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    return (
        <div className="container">
            <div className="main">
                <div className="heading">
                    <h1>Contact Me</h1>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </div>
                <form>                
                    <div id="user__name">
                        <div id="name">
                            <label id="labels" htmlFor="firsttName">First Name</label>
                            <input
                                type="text"
                                placeholder="First Name"
                                onChange={handleChange}
                                name="firstName"
                                id="first_name"
                                value={formData.firstName}
                            />
                        </div>
                        <div id="name">
                            <label id="labels" htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                onChange={handleChange}
                                name="lastName"
                                id="last_name"
                                value={formData.lastName}
                            />
                        </div>
                    </div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        id="email"
                        value={formData.email}
                    />
                    <label id="labels" htmlFor="comments">Message</label>
                    <textarea 
                        value={formData.comments}
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                        onChange={handleChange}
                        name="comments"
                        id="message"
                    />
                    <input 
                        type="checkbox" 
                        id="isFriendly" 
                        checked={formData.isFriendly}
                        onChange={handleChange}
                        name="isFriendly"
                    />
                    <label id="labels" htmlFor="isFriendly">You agree to providing your data to Emyhils who may contact you.</label>
                    <br />
                    <button id="btn__submit">Send Message</button>
                </form>
            </div>
            <footer id="contactFooter">
                <img src="ZuriIntership_logo.PNG" id="zuri_logo"/>
                <div id="footerWords">HNG Internship 9 Frontend Task</div>
                <img src="Ingresive_logo.PNG" id="ingresive_logo"/>
            </footer>
        </div>
    )
}
