import React from "react";
import { useState, useEffect } from "react";
import cv from './docs/cv.pdf'
import "./styles/cv.css"

const CV = () => { 
    const URL = "https://www.googleapis.com/blogger/v3/blogs/2326199060955213897/posts/1069431430788802372?key=AIzaSyD_PqmobZ6RXv2W6LG_7FcpPUen9I0nM5Y"
    const cvWrapperRef = React.createRef()
    const [content, setContent] = useState()
    
     
    useEffect(() => {
        const fetchCV = async (cvWrapper) => {
            await fetch(URL)
                .then(response => response.json())
                .then(data => {
                    console.log(cvWrapper)
                    cvWrapperRef.current.style.display = 'block'
                    setContent(data.content)
                })
        }
    
        fetchCV(cvWrapperRef.current)
    })

    return (
        <div id="cvWrapper" ref={cvWrapperRef} dangerouslySetInnerHTML={{__html: content}}></div>
    )
}

export default CV;