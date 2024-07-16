import { useState, useEffect } from "react";
import { Chart } from 'react-google-charts';
import "./styles/githubchart.css"

const URL = 'https://api.github.com/search/repositories?q=user:kevin729'

const GithubInfo = () => {
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
                languages.map(language => {
                    Object.keys(language).map(key => {
                        if (languageMap.hasOwnProperty(key)) {
                            languageMap[key] += language[key]
                        } else {
                            languageMap[key] = language[key]
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
        
        const fetchData = async () => {
            const languageList = fetch(URL)
                .then((response) => response.json())
                .then((data) => {
                    const languageList = []
                    data.items.map(repo => {
                        languageList.push(repo.languages_url)
                    })

                    return languageList
                })

            
            return languageList

        }

        fetchData().then(languageList => {
            fetchLanguages(languageList)
        })    
    }, [])

    return (    
        <div>
            <Chart
                chartType="PieChart"
                data={languages}
                width={400}
            />
        </div>

    )

}

export default GithubInfo