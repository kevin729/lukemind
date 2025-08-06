import { useState, useEffect } from "react";
import { Chart } from 'react-google-charts';
import "./styles/githubchart.css"




const GithubInfo = () => {
    const URL = 'https://api.github.com/search/repositories?q=user:kevin729'
    const [languages, setLanguages] = useState()

    useEffect(() => {
        const fetchLanguages = async (languageList) => {
            const promisedListMap = languageList.map(async url => {
                return await fetch(url)
                    .then((response) => response.json())
                    .then((data) => data)
            })
            
            Promise.all(promisedListMap).then((languages => {
                let languageMap = {}
                languages.map(repoLanguageMap => {
                    Object.keys(repoLanguageMap).map(key => {
                        if (languageMap.hasOwnProperty(key)) {
                            languageMap[key] += repoLanguageMap[key]
                        } else {
                            languageMap[key] = repoLanguageMap[key]
                        }
                    })
                })

                const languageData = [['language', 'score']]
                
                Object.keys(languageMap).map(key => {
                    languageData.push([key, languageMap[key]])
                })

                setLanguages(languageData)
            }))
        }
        
        const fetchRepos = async () => {
            const languageList = fetch(URL)
                .then((response) => response.json())
                .then((data) => {
                    if(!data.items) 
                        return

                    const languageList = data.items.map(repo => {
                        return repo.languages_url
                    })

                    return languageList
                })

            
            return languageList
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