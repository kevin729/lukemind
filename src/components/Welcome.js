import React, { Component } from "react";
import Introduction from "./Introduction";
import Learning from "./Learning";
import Products from "./Products";
import CV from "./CV";
import cv from './docs/cv.pdf'

class Welcome extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <Introduction />
                <Learning />
                
                <div>
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vQ1rpLjCph9RsZnpgKiM4yUhfbD1JOjwaK2JrAZhJ5WXteT87LAlRQyjBhBeFJWHSa_BEGFXgVofG57/pub?embedded=true" className="cv-home"></iframe>
                </div>
            </div>
        )
    }
}

export default Welcome;