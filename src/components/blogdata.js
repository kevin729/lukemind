import React from "react";

export const Blogdata = [
    {
        title: "Developers Log",
        heading: "A journal based on my work and projects",
        text: "I am a software developer with 4 years work experience. My knowledge in computing excelled during my placement year in 2018, where I worked on a ERP system for engineers who install and repair starlifts. Luckly, I had already experimented with JavaEE and tomcat, so I already had an understanding of serlvets and JSPs, but their system of using a single servlet per app to read the xml to call the scripts to run the business logic and the view to display by matching url path allowed me to understand how server logic can be implemented in different ways. I learned how to call soap endpoints, write groovy scripts for extracting entity data, creating and calling services from the server using both forms as well as ajax calls, and frontend and backend validation.",
        section: [
            {
                title: "Github API",
                heading: "16/07/2024",
                text: "I added some functions to fetch githubs api to get a list of my repositories then fetch language data using the urls in a list from the first calls response in a loop by mapping the urls and fetching the language data then after the loop retrieved the promised data of json as a list and summed up the languages into a single map. Then iterated through the map to create a list to set and assign to a chart.",
            },
            {
                title: "Fonts",
                heading: "01/04/2024",
                text: "On my eportfolio, I have added the fonts, Georgia, serif and 'Times New Roman', serif. Times new roman looks more professional, however can be hard to read in a small font, therefore it is better to use this font for either small sentances or pages with big text. Georgia seems to be better suited for both UI text and single paragraphs like an introduction text. I also later found that for contact details, a simple plain font works better, so I also used Arial, Helvetica, sans-serif on the profile page.",
            },
            {
                title: "Certificate Slider",
                heading: "04/03/2024",
                text: "In my welcome component, I want to add an image slider which will display and animate my online certificates. I started by adding adding a list of images",
            },
            {
                title: "React UI",
                heading: "03/03/2024",
                text: "In order to minimize a large amount of html cluttering the UI, such as a list of items in a sidebar. In react, you can create and/or export a list of JSON objects with text, and images to display, seperating the text and UI.",
            },
            {
                title: "First ReactJS project",
                heading: "02/03/2024",
                text: "My impression of this library has been position thus far, with features seen within angular e.g. routing, allowing for a one page application with a layout. Moreover, seperating the code and data into components allows a much more clear view of the UI by mapping or looping the JSON array. This can be used for UI on a sidebar, blogs, recipes etc. It is also convenient to start the application with Javascript insteading of linking the script, and focuses the JavaScript code with the html in the JavaScript file.",
            }
        ]
    }
]