import React from "react";
import './styles/introduction.css';
import Products from "./Products";

const Introduction = () => {
    return (
        <div id="introduction_wrapper">
            <div id="introduction">
                <div id="about_me_wrapper">
                    <h5 className="about_me">React JS</h5>
                    <h5 className="about_me">Angular JS</h5>
                    <h5 className="about_me">Android</h5>
                </div>
                <div id="me_wrapper">
                    <Products />
                </div>
            </div>
            <div id="title">
                <h1>Junior Software Developer</h1>
            </div>
        </div>
    )
}

export default Introduction