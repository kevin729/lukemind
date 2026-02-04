import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import CV from "./CV";
import './styles/body.css';
import Products from "./Products";
import Profile from "./Profile";
import Blogs from "./Blogs";
import Game from "./Game"

const Body = () => {
    return (
        <div className="main-body">
            <HashRouter>
                <Routes>
                    <Route exact path="/" Component={Welcome} />
                    <Route exact path="/cv" Component={CV} />
                    <Route path="/products" Component={Products} />
                    <Route path="/profile" Component={Profile} />
                    <Route path="/blogs" Component={Blogs} />
                </Routes>
            </HashRouter>
        </div>
    )
}


export default Body;