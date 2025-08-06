import { useState, useEffect } from "react";



const BlogRetriever = () => {
    const URL = "https://www.googleapis.com/blogger/v3/blogs/2326199060955213897/posts/8676532119093612376?key=AIzaSyD_PqmobZ6RXv2W6LG_7FcpPUen9I0nM5Y"
    const [content, setContent] = useState()
    useEffect(() => {
        const fetchBlog = async () => {
            await fetch(URL)
                .then(response => response.json())
                .then(data => setContent(data.content))
        }

        fetchBlog()
    })

    return (
        content
    )
}

export default BlogRetriever