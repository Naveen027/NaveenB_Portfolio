import './About.css';
import React from 'react';


const skills = [
  { name: 'HTML', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' },
  { name: 'CSS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5ryTY9VShCV5uJWhoBXkcxxlFB8O5bbxGA&s' },
  { name: 'JavaScript', image: 'https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png' },
  { name: 'React', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s' },
  { name: 'Python', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' },
  { name: 'SQL', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPXZSuNVhTZPxF4lpB0oNAZTOX2eISii_oZg&s' },
];

function About() {
  return (
    <div className="container mt-5" id='about'>
      <div class="skills">
        <h4>Skills</h4>
      </div>
      <div className="row">
        {skills.map((skill, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="skill-box p-3 shadow-sm text-center">
              <img src={skill.image} alt={skill.name} className="img-fluid skill-image" />
              <h5>{skill.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
