import './styles/introduction.css';
import Logo3D from "./Logo3D"

const Introduction = () => {
    return (
        <div id="introduction_wrapper">
            <div id="introduction">
               <div id="about_me_wrapper">
                   <div id="about_me">
                       <div id="title_wrapper">
                           <h1>Portsmouth Programmer</h1>
                        </div> 
                        <div id="skill_list_wrapper">
                            <ul>
                                <li>Full Stack Web Developer</li>
                                <li>Image Manipulation</li>
                                <li>Mobile Responsive</li>
                                <li>REST API User</li>
                                <li>More Below</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="logo3DWrapper">
                    <Logo3D />
                </div>
            </div>
        </div>
    )
}

export default Introduction