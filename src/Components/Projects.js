import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';//

const projectsData = [
    {
        "id": 1,
        "name": "Student Dashboard",
        "image": "https://static.vecteezy.com/system/resources/previews/011/999/627/non_2x/monitoring-icon-logo-illustration-dashboard-admin-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg",
        "button": "Visit here",
        "link":"https://naveen027.github.io/dashboard/",
    },
    {
        "id": 2,
        "name": "Weather-app",
        "image": "https://gitlab.com/uploads/-/system/project/avatar/51654218/googweds.png",
        
        "button": "Visit here",
        "link":"https://naveen027.github.io/my-weather-app/",
    },
    {
        "id": 3,
        "name": "Boat Home-page",
        "image": "https://img.etimg.com/thumb/width-1200,height-900,imgsize-2384,resizemode-75,msid-93587014/industry/cons-products/electronics/locally-manufactured-1-mln-units-of-various-products-in-q1fy23-boat.jpg",
        
        "button": "Visit here",
        "link":"https://naveen027.github.io/boatstylee/",
    },
    {
        "id": 4,
        "name": "For more projects",
        "image": "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png",
        
        "button": "Visit here",
        "link":"https://github.com/Naveen027",
    }
];



function Projects() {
    return (
        <div className="container-fluid">
            <div class="col-lg-12" id='heading'>
                <div class="proj">
                    <h4>Projects</h4>
                </div>

            </div>
            <div className='projectsBox'>
            <div className='projects'>
                {projectsData.map((project) => (

                    <div key={project.id} className="box">
                        <div className="image">
                            <img src={project.image} alt={`Project ${project.id}`} />
                        </div>
                        <div>
                        <a href={project.link}>
                            <button>{project.button}</button>
                            </a>
                        </div>
                       
                    </div>
                )
                )
                }
            </div>
            </div>
        </div>
    )
}

export default Projects;
