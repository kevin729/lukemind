import React, { Component } from "react";
import Introduction from "./Introduction";


import "./styles/welcome.css"

class Welcome extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div id="WelcomeWrapper">
                <Introduction />
            </div>
        )
    }
}

export default Welcome;