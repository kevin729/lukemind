import React from "react"
import { useState, useEffect } from "react";
import './styles/form.css'
import './styles/blogs.css'

function Blogs() {

    const URL = "https://www.googleapis.com/blogger/v3/blogs/2326199060955213897/posts/8676532119093612376?key=AIzaSyD_PqmobZ6RXv2W6LG_7FcpPUen9I0nM5Y"
    const blogWrapperRef = React.createRef()
    const [content, setContent] = useState()
    useEffect(() => {
        const fetchBlog = async (blogWrapper) => {
            const blog = await (await fetch(URL)).json()
            blogWrapper.style.display = "block"
            setContent(blog.content)
        }

        fetchBlog(blogWrapperRef.current)
    })

    return (
        <div className="blog-wrapper" ref={blogWrapperRef} dangerouslySetInnerHTML={{__html: content}}>
        </div>
    )
}

export default Blogs

