
import React from "react";
import './styles/sidebar.css'
import { Sidebardata } from "./sidebardata";

const Sidebar = () => { 
    return (
        <div id="sidebar">
            <ul>
                {
                    Sidebardata.map((val, key) => {
                        return (
                            <a href={val.link} target="_blank">
                                <li key={key} className={val["class"]}>
                                    <div>
                                        <div>
                                            { val['icon'] }
                                        </div>
                                        <div>
                                            { val['title'] }
                                        </div>
                                    </div>
                                </li>
                            </a>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Sidebar;