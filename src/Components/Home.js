import './Home.css';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Home() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6" id="avatarbg">
                        <div className="mine">
                            <img src='https://archive.org/download/github.com-CleverProgrammers-cp-disney-plus-clone_-_2021-04-21_15-08-48/cover.jpg' alt='avatar'/>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="info">
                            <div className="text">
                                <h4 style={{marginLeft:'16%'}}>Hii, I Am <strong>Naveen Bellad</strong></h4>
                                <h5 className="frontend">I'm Front End Web Developer.</h5>
                                <h5 className="imagination">"Where imagination meets creativity"</h5>
                                <p>
                                    As a passionate front-end developer, I specialize in creating dynamic and responsive web applications using React and JavaScript. My portfolio showcases a range of projects that highlight my skills in developing single-page applications and integrating APIs. I am continuously learning and exploring new technologies to stay ahead in the rapidly evolving web development landscape. Let's connect and collaborate to bring innovative ideas to life!
                                </p>
                                {/* Add the Button below the paragraph */}
                                <Link to="/projects" className="projects-button" id='btn'>View My Projects</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
