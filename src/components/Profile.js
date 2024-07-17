import React from "react";
import ProfilePicture from "./images/profile.jpg"
import './styles/profile.css'
import Github from "./GithubInfo";

function Profile() {
    return (
        <div id="profile_wrapper">
            <h1 className="pageHeading">Kevin Luke Martin</h1>
            <div id="contact_details_wrapper">
                <div className="margin-bottom">
                    <div className="contact-header inline-block">
                        <h3>Email:</h3>
                    </div>
                    <div className="contact-detail inline-block">
                        <h3>thescience15@googlemail.com</h3>
                    </div>
                </div>

                <div className="margin-bottom-big">
                    <div className="contact-header inline-block">
                        <h3>Mobile:</h3>
                    </div>

                    <div className="contact-detail inline-block">
                        <h3>07955482627</h3>
                    </div>
                </div>

                <div className="margin-bottom">
                    <Github />
                </div>
            </div>

            <div className="inline-block">
                <div>
                    <img src={ProfilePicture} id="profile-picture" />
                </div>
            </div>
            
        </div>
    )
}

export default Profile;