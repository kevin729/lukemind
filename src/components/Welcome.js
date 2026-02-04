import React, { Component } from "react";
import Introduction from "./Introduction";
import Products from "./Products";
import Sidebar from './Sidebar';
import "./styles/welcome.css"

class Welcome extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div id="WelcomeWrapper">
                <Introduction />
                <Sidebar />
                <Products/>
            </div>
        )
    }
}

export default Welcome;