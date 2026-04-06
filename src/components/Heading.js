import React from "react";
import './styles/header.css'
import { HeadingData } from "./headingdata";


const Heading = () => {
    return (
        <div className="head-wrapper">
            <header className="head-navbar">
                <nav>
                    <div className="menu-list-Wrapper">
                        <ul className="menu-list">
                            {
                                HeadingData.map((val, key) => {
                                    return (
                                        <a key={key} href={val.link} className="menu-link">
                                            <li className="menu-item">
                                                <div id={val.class}>
                                                    <div>
                                                        {val.icon}
                                                    </div>
                                                    <div>
                                                        {val.title}
                                                    </div>
                                                </div>
                                            </li>
                                        </a>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Heading