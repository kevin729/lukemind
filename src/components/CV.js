import React from "react";
import cv from './docs/cv.pdf'
import "./styles/cv.css"
import Learning from "./Learning";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Fetch from "./Fetch";

const CV = () => { 
    const URL = "https://www.googleapis.com/blogger/v3/blogs/2326199060955213897/posts/1069431430788802372?key=AIzaSyD_PqmobZ6RXv2W6LG_7FcpPUen9I0nM5Y"
    const cvWrapperRef = React.createRef()
    const {data, loading, error} = Fetch(URL, ()=>{cvWrapperRef.current.style.display = "block"})

    return (
        <div id="cvPage">
            { loading || error ?
                <div id="status" >
                    <div style={{textAlign: "center"}}>{error ? <p>{error}</p> : <p>Loading</p>}</div>
                </div>
                : ""
            }

            <div ref={cvWrapperRef} id="cvWrapper">
                <div id="downloadCV"><a target="_blank" href={cv}><PictureAsPdfIcon/></a></div>
                <div id="cv" dangerouslySetInnerHTML={{__html: data?.content}}></div>
                <Learning />
            </div>
        </div>

    )
}

export default CV;