import { useState, useEffect } from "react";
import { Chart } from 'react-google-charts';
import "./styles/githubchart.css"

const language = {
    Java: 20,
    Javascript:30,
    "C#":5
}
const data = 
{
    name: "Kev",
    age: 29,
    licence: true
}



const GithubInfo = () => {
    const URL = 'https://api.github.com/search/repositories?q=user:kevin729'
    const [languages, setLanguages] = useState()

    useEffect(() => {
       const fetchLanguages = async (languageURLList) => {
            const languageMaps = await Promise.all(
                languageURLList.map(async url => {
                    return await (await fetch(url)).json()
                })
            )

            const languageMap = {}

            languageMaps.forEach(langMap => {
                for (const [lang, value] of Object.entries(langMap)) {
                    languageMap[lang] = (languageMap[lang] || 0 + value)
                }
            })

            setLanguages([['language', 'score'], ...Object.entries(languageMap)])
        }
        
        const fetchRepos = async () => {
            const repos = await (await fetch(URL)).json()
            return repos.items?.map(repo => repo.languages_url) || []
        }

        fetchRepos().then(languageList => {
            fetchLanguages(languageList)
        })
    }, [])

    return (    
        <div id="githubChartWrapper">
            <Chart
                className="githubChart"
                chartType="PieChart"
                data={languages}
                width={300}
            />
        </div>

    )

}

export default GithubInfo