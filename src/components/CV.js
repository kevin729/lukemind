import React from "react";
import cv from './docs/cv.pdf'

const CV = () => { return (
        <div>
            <object data={cv} className="cv-pdf">
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vQ1rpLjCph9RsZnpgKiM4yUhfbD1JOjwaK2JrAZhJ5WXteT87LAlRQyjBhBeFJWHSa_BEGFXgVofG57/pub?embedded=true" className="cv"></iframe>
            </object>
        </div>
    )
}

export default CV;