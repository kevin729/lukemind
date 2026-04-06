import './styles/introduction.css';
import Logo3D from "./Logo3D"
import me from"./images/mbw.jpg"

const Introduction = () => {
    return (
        <div id="introduction_wrapper">
            <div id="introduction">
               
                <div id="logo3DWrapper">
                    <Logo3D />
                </div>

                <div id="left_section">
                   <img id="profileImg" src={me} />
                </div>

                <div id="right_section">
                    <div id="about_me">
                       <div id="title_wrapper">
                           <h1>Kev Martin</h1>
                        </div>
                        <div id="skill_list_wrapper">
                            <ul>
                                <li><p>Software Engineer</p></li>
                                <li><p>3+ years experience</p></li>     
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Introduction