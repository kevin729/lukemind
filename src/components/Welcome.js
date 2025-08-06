import React, { Component } from "react";
import Introduction from "./Introduction";
import Learning from "./Learning";
import Products from "./Products";
import Sidebar from './Sidebar';
import CV from "./CV";
import cv from './docs/cv.pdf'
import "./styles/welcome.css"

class Welcome extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div id="WelcomeWrapper">
                <Sidebar />
                <Introduction />
                <Learning />
            </div>
        )
    }
}

export default Welcome;