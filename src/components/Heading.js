import React from "react";
import './styles/header.css'
import { HeadingLeftData } from "./headingleftdata";
import { HeadingRightData } from "./headingrightdata";
import Banner from "./images/banner.jpeg"

const Heading = () => {
    return (
        <div className="head-wrapper">
            <header className="head-navbar">
                <nav>
                    <div className="lefthead">
                        <ul className="menu-list">
                            {
                                HeadingLeftData.map((val, key) => {
                                    return (
                                        <a key={key} href={val.link} className="menu-link">
                                            <li className="menu-item">
                                                <div>
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
                            <div>
                                <img id="banner" width="250px" src={Banner}/>
                            </div>
                        </ul>
                    </div>

                    <div className="righthead">
                        <ul className="menu-list">
                            {
                                HeadingRightData.map((val, key) => {
                                    return (
                                        <a key={key} href={val.link} className="menu-link">
                                            <li className="menu-item">
                                                <div>
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