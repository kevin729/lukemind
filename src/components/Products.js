import React from "react";
import cnn from "./images/CNN.png"
import drawdroid from "./images/drawdroid.jpg"
import website from "./images/website.png"
import model from "./images/model.png"
import "./styles/products.css"
import ProductData from "./productdata"

const Products = () => {
    return (
        <div id="productsWrapper">
            <div><h1>Projects</h1></div>
            <div>
                {
                    ProductData.map((val, key) => {
                        return(
                            <div key={key} class="product">
                                <div className="productTitleWrapper">
                                    <h2>{val["title"]}</h2> 
                                </div>
                                <div className="productImgWrapper">
                                    <img className="productImg" src={val["image"]}/>
                                </div>
                                <div className="productCaptionWrapper">
                                    <p className="productCaption">{val["caption"]}</p>
                                </div>
                            </div>
                        )
                    })
                    
                }
            </div>
        </div>
    )
}

export default Products