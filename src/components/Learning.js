import React, { useEffect } from "react";
import "./styles/learning.css"
import learning1 from "./images/learning1.png"
import learning2 from "./images/learning2.png"
import learning3 from "./images/learning3.png"
import learning4 from "./images/learning4.png"
import { ArrowLeft } from "@mui/icons-material";
import { ArrowRight } from "@mui/icons-material";
import { Circle } from "@mui/icons-material";

var index = 0;
var prevIndex = 0;

const certs = document.getElementsByClassName("cert")
const options = document.getElementsByClassName("circle")
const slideImages = [
    {
        image: learning1
    },
    {
        image: learning2
    },
    {
        image: learning3
    },
    {
        image: learning4
    },
]

var timer = setInterval(next, 10000)
var callback
var animating = false;

function next() {
    if (animating) {
        callback = next;
        return
    }

    prevIndex = index;
    if (index < slideImages.length-1) {
        index++
    } else {
        index = 0
    }

    update(false)
}

function prev() {
    if (animating) {
        callback = prev;
        return
    }

    prevIndex = index;
    if (index > 0) {
        index--
    } else {
        index = slideImages.length-1
    }

    update(true)
}

function select(i) {
    prevIndex = index
    index = i

    update(index - prevIndex < 0)
}

function showSlide(cert, prevDirection) {
    cert.className = prevDirection ? 'cert cert-show-prev' : 'cert cert-show'
    cert.addEventListener('animationend', function eventHandlier(e) { 
        animating = false;
        callback?.()
        callback = null;

        cert.removeEventListener('animationend', eventHandlier)
    })
}

function clearSlide(currentCert, nextCert, prevDirection) {
    animating = true;
    currentCert.className = prevDirection ? 'cert cert-invisible-prev' : 'cert cert-invisible'
    currentCert.addEventListener('animationend', function eventHandlier(e) { 
        currentCert.className = 'cert cert-none' 
        showSlide(nextCert, prevDirection)
        currentCert.removeEventListener('animationend', eventHandlier)
    })
}

function update(prevDirection) {
    clearInterval(timer)
    timer = setInterval(next, 10000)

    options[prevIndex].className = "circle circle-small"
    options[index].className = "circle circle-big"
    clearSlide(certs[prevIndex], certs[index], prevDirection)
}

const Learning = () => {
    return (        
        <div id="learningWrapper" className="margin-bottom-big inline-block learningWrapper">
            <div>
                {
                    slideImages.map((val, key) => {
                        if (key == 0) {
                            return <img key={key} className="cert" src={val.image} />
                        } else {
                            return <img key={key} className="cert cert-none" src={val.image} />
                        }
                    })
                }
            </div>
            
            <div id="controlWrapper">
                <div className="inline-block" style={{width:"50px"}} onClick={prev}>
                    <ArrowLeft/>
                </div>

                <div className="circle circle-big" onClick={() => select(0)}>
                    <Circle style={{width:"100%"}} />
                </div>

                <div className="circle" onClick={() => select(1)}>
                    <Circle style={{width:"100%"}}/>
                </div>

                <div className="circle" onClick={() => select(2)}>
                    <Circle style={{width:"100%"}} />
                </div>

                <div className="circle" onClick={() => select(3)}>
                    <Circle style={{width:"100%"}}/>
                </div>

                <div className="inline-block" style={{width:"50px"}} onClick={next} >
                    <ArrowRight />
                </div>
            </div>
        </div>
        
    )    
}

export default Learning;