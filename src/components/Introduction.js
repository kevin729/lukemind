import React from "react";
import './styles/introduction.css';
import Products from "./Products";

const Introduction = () => {
    return (
        <div id="introduction_wrapper">
            <div id="introduction">
               <div id="about_me_wrapper">
                    <div id="title_wrapper">
                        <h1>Portsmouth Programmer</h1>
                    </div> 
                    <div id="skill_list_wrapper">
                        <ul>
                            <li>Web Dev</li>
                            <li>Front End</li>
                            <li>Android Dev</li>
                        </ul>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Introduction