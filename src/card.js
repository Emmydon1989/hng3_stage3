import React from "react"
import "./index.css"

export default function Card(){
    return(
        <div className="contatiner">
            <div className="profile">
                <img src="IMG_01.jpg" id="profile__img" alt=""/>
                <h4 id="twitter">@HillaryEmeka5</h4>
                <p id="slack">Emyhils</p>
            </div>
            <div className="links">
            <a href="https://twitter.com/HillaryEmeka5"><button className="btn">Twiter Link</button></a>
                <a href="https://training.zuri.team/"><button id="btn__zuri" className="btn">Zuri Team</button></a>
                <a href="http://books.zuri.team"><button id="books" className="btn">Zuri Books</button></a>
                <a href="https://books.zuri.team/"><button id="book__python" className="btn">Python Books</button></a>
                <a href=" https://background.zuri.team"><button id="pitch" className="btn">Background Check for Coders</button></a>
                <a href="https://books.zuri.team/design-rules"><button id="book__design" className="btn">Design Books</button></a>
                <a href="/contact"><button id="contact" className="btn">Contact Me</button></a>
            </div>
            <div id="logo">
                <img src="slack.png" id="slack_logo" alt=""/>
                <img src="GitHub.png" id="git_logo" alt=""/>
            </div>
            <footer>
                <img src="ZuriIntership_logo.PNG" id="zuri_logo" alt=""/>
                <div id="footerWords">HNG Internship 9 Frontend Task</div>
                <img src="Ingresive_logo.PNG" id="ingresive_logo" alt=""/>
            </footer>
        </div>
    )
}