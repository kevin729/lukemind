import { useEffect, useState } from "react";

function Fetch(url, callback) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] =  useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url)
                if(!res.ok) return new Error(`HTTP error! Status: ${res.status}`)
                setData(await res.json())
                setError(null)
                callback()
            } catch (e) {
                console.log("test")
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return {data, loading, error}
}

export default Fetch