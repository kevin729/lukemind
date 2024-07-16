import React from "react";
import cnn from "./images/CNN.png"
import drawdroid from "./images/drawdroid.jpg"
import tasks from "./images/tasks.png"
import website from "./images/website.png"
import model from "./images/model.png"

const Products = () => {
    return (
        <div className="margin-bottom-big">
            <div class="inline-block">
                <div>
                    <iframe className="video" src="https://www.youtube.com/embed/wiDJ3obCLxI" title="WetWheels - Portsmouth - Fully accessible boat trips" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div className="inline-block margin-left projects">
                <div className="inline-block">
                    <div>
                        <img className="CNNImg" src={cnn}/>
                    </div>

                    <div>
                        <img className="CNNImg" src={model}/>
                    </div>
                </div>
                <div className="inline-block">
                    <img className="drawdroidImg" src={tasks}/>
                </div>
            </div>
        </div>
    )
}

export default Products