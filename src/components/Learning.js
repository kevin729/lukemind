import React, { useEffect, useState, useRef } from "react";
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
var timer
var animating = false;
var callback

const Learning = () => {
    var certs = useRef([]).current
    var options = useRef([]).current

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

    const [timer, setTimer] = useState(0)

    useEffect(() => {
        var timer = setInterval(() => {
            next()
        }, 10000)
        setTimer(timer)
        return () => {clearInterval(timer)}
    }, [])
    
    function next() {
        if (animating) {
            callback = next;
            return
        }

        prevIndex = index;
        if (index < slideImages.length - 1) {
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
            index = slideImages.length - 1
        }

        update(true)
    }

    function select(i) {
        if (animating) {
            callback = () => {select(i)}
            return
        }

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
        if (!animating) {


            options[prevIndex].className = "circle circle-small"
            options[index].className = "circle circle-big"
            clearSlide(certs[prevIndex], certs[index], prevDirection)
        }
    }


    return (
        <div id="learningWrapper" className="margin-bottom-big inline-block learningWrapper">
            <div>
                {
                    slideImages.map((val, key) => {
                        return <img key={key}
                            ref={el => { certs[key] = el }}
                            className={key == 0 ? "cert" : "cert cert-none"}
                            src={val.image} />
                    })
                }
            </div>

            <div id="controlWrapper">
                <div className="inline-block" style={{ width: "50px" }} onClick={prev}>
                    <ArrowLeft />
                </div>

                {slideImages.map((val, key) => (
                    <div
                        key={key}
                        ref={el => { options[key] = el }}
                        className={key == 0 ? "circle circle-big" : "circle"}
                        onClick={() => select(key)}
                    >
                        <Circle style={{ width: "100%" }} />
                    </div>
                ))}

                <div className="inline-block" style={{ width: "50px" }} onClick={next} >
                    <ArrowRight />
                </div>
            </div>
        </div>

    )
}

export default Learning;