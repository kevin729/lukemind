import React from "react"
import { useState, useEffect } from "react";
import './styles/form.css'
import './styles/blogs.css'
import Fetch from './Fetch'
import { Height } from "@mui/icons-material";

function Blogs() {

    const URL = "https://www.googleapis.com/blogger/v3/blogs/2326199060955213897/posts/8676532119093612376?key=AIzaSyD_PqmobZ6RXv2W6LG_7FcpPUen9I0nM5Y"
    const blogRef = React.createRef()
    const {data, loading, error} = Fetch(URL, ()=>{blogRef.current.style.display = "block"})

    return (
        <div id="blogPage">
            { loading || error ?
                <div id="status" >
                    <div style={{textAlign: "center"}}>{error ? <p>{error}</p> : <p>Loading</p>}</div>
                </div>
                : ""
            }
            
            <div className="blog-wrapper">
                <div id="blog" ref={blogRef} dangerouslySetInnerHTML={{__html: data?.content}}>
                </div>
            </div>

        </div>

    )
}

export default Blogs

