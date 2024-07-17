import React from "react";
import './styles/introduction.css';
import me from "./images/me.jpg"

const Introduction = () => {
    return (
        <div id="introduction_wrapper">
            <div id="about_me_wrapper">
                <h5 className="about_me">Frontend</h5>
                <h5 className="about_me">Android</h5>
                <h5 className="about_me">Rest APIs</h5>
            </div>
            <div id="me_wrapper">
                <img id="me" src={me}/>
            </div>
        </div>
    )
}

export default Introduction