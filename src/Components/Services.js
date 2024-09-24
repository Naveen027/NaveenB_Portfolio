import './Services.css';
import React from 'react';

function Services() {
    // Data stored directly in the component as a JavaScript object
    const data = {
        experience: {
            image: "https://scontent.fblr20-2.fna.fbcdn.net/v/t39.30808-1/362679575_1238264153522545_2561486085488254709_n.jpg?stp=c142.0.675.675a_dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=BFDn0K5vwx8Q7kNvgEJEcNk&_nc_ht=scontent.fblr20-2.fna&_nc_gid=AMrwU83VellfMYNWqPBKAdh&oh=00_AYAoXVefE5O7iPT1FB3YHecc71l1lnyAiksDyzxooDug7w&oe=66F71CAD",
            jobTitle: "Worked as System Engineer on ICICI project",
            company: "Infosys Limited",
            duration: "2022-2024 (2 yrs)",
            roles: [
                "Converted the UI layout to complete HTML webpage.",
                "Ensured web pages are compatible with laptops, tablets, and mobile devices.",
                "Integrated APIs into front-end modules.",
                "Integrated third-party libraries like Chart.js.",
                "Built reusable code for future use."
            ]
        },
        education: [
            {
                image: "https://scontent.fblr20-2.fna.fbcdn.net/v/t39.30808-1/362679575_1238264153522545_2561486085488254709_n.jpg?stp=c142.0.675.675a_dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=BFDn0K5vwx8Q7kNvgEJEcNk&_nc_ht=scontent.fblr20-2.fna&_nc_gid=AMrwU83VellfMYNWqPBKAdh&oh=00_AYAoXVefE5O7iPT1FB3YHecc71l1lnyAiksDyzxooDug7w&oe=66F71CAD",
                institute: "Appa Institute of Engineering and Technology",
                duration: "2017-2021",
                percentage: "75%"
            },
            {
                image: "https://scontent.fblr20-2.fna.fbcdn.net/v/t39.30808-1/362679575_1238264153522545_2561486085488254709_n.jpg?stp=c142.0.675.675a_dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=BFDn0K5vwx8Q7kNvgEJEcNk&_nc_ht=scontent.fblr20-2.fna&_nc_gid=AMrwU83VellfMYNWqPBKAdh&oh=00_AYAoXVefE5O7iPT1FB3YHecc71l1lnyAiksDyzxooDug7w&oe=66F71CAD",
                institute: "Chandrakant Patil Memorial College",
                duration: "2015-2017",
                percentage: "79%"
            },
            {
                image: "https://scontent.fblr20-2.fna.fbcdn.net/v/t39.30808-1/362679575_1238264153522545_2561486085488254709_n.jpg?stp=c142.0.675.675a_dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=BFDn0K5vwx8Q7kNvgEJEcNk&_nc_ht=scontent.fblr20-2.fna&_nc_gid=AMrwU83VellfMYNWqPBKAdh&oh=00_AYAoXVefE5O7iPT1FB3YHecc71l1lnyAiksDyzxooDug7w&oe=66F71CAD",
                institute: "Tiny Pearls School",
                duration: "2014-2015",
                percentage: "79%"
            }
        ]
    };

    const { experience, education } = data;

    return (
        <div>
            <div className="container">
                <div className="row">

                    {/* Experience Section */}
                    <div className="col-lg-6">
                        <div className="title">
                            <h4>Experience</h4>
                        </div>
                        <div className="edu">
                            <ul>
                                <li>
                                    <img src={experience.image} alt="Experience Image" />
                                </li>
                                <li>
                                    <h6>{experience.jobTitle}</h6>
                                    <h6>{experience.company}</h6>
                                    <h6>{experience.duration}</h6>
                                </li>
                            </ul>
                        </div>

                        <div className='roles'>
                            <h6>Roles and Responsibility:</h6>
                            <ul>
                                {experience.roles.map((role, index) => (
                                    <li key={index}>
                                        <h6>{role}</h6>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="col-lg-6">
                        <div className="title">
                            <h4>Education</h4>
                        </div>
                        <div className='edu'>
                            {education.map((eduItem, index) => (
                                <ul key={index}>
                                    <li>
                                        <img src={eduItem.image} alt="Education Image" />
                                    </li>
                                    <li>
                                        <h6>{eduItem.institute}</h6>
                                        <h6>{eduItem.duration}</h6>
                                        <h4>{eduItem.percentage}</h4>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Services;
