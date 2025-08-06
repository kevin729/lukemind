import React from "react";
import './styles/form.css'
import './styles/blogs.css'
import { Blogdata } from "./blogdata";
import BlogRetriever from "./BlogRetriever"
import { ForkLeft } from "@mui/icons-material"

function Blogs() {

    return (
        <div className="blog-wrapper" dangerouslySetInnerHTML={{__html: BlogRetriever()}}>
        </div>
    )
}

export default Blogs

