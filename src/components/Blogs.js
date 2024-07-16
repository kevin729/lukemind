import React from "react";
import './styles/form.css'
import './styles/blogs.css'
import { Blogdata } from "./blogdata";
import { ForkLeft } from "@mui/icons-material";

function Blogs() {
    return (
        <div className="blog-wrapper">
            {
                Blogdata.map((val, key) => {
                    return (
                        <div key={key}>
                            <h1  className="pageHeading">{val.title}</h1>
                            <h2 >{val.heading}</h2>
                            <p style={{textAlign:"justify"}}>{val.text}</p>
                            
                            {val.section && val.section.map((val, key) => {
                                return (
                                    <div key={key} style={{marginTop:"100px", textAlign:"left"}}>
                                        <h3 >{val.title}</h3>
                                        <h4 >{val.heading}</h4>
                                        <p style={{textAlign: "justify"}}>{val.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Blogs

