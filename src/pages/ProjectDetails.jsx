import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';

import projectsData from '../projectsData.json'

const ProjectDetails = () => {

  const { id } = useParams();
  const project = projectsData.find(project => project.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>

      <header className='header'>
        <div className='container'>
          <img src={logoImage} />


          <a href="tel:+38765640432" className='mobile'>
            <span>Call me:</span> +387 (65) 640 432
          </a>
        </div>
      </header>


      {project ? (
        <div className='project-details'>
          <div className='container'>
            <div className='project-text'>

              <h1>{project.title}</h1>
              {project['long-description'].split('\n\n').map((paragraph, index) => (
                <React.Fragment key={index}>
                  <p>{paragraph}</p>
                  <br />
                </React.Fragment>
              ))}
              <div className='button-group'>
                <a href={project.link} target="_blank">Live</a>
                <Link to='/'>Go back</Link>
              </div>
            </div>
            <div className='project-image'>
              <img src={`${import.meta.env.BASE_URL}${project.image}`} />

            </div>

          </div>
        </div>
      ) : (
        <p>Project not found</p>
      )}

      <div className='project-info'>
        <div className='container'>

          <div className='info'>
            <div className='info-image'>
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512"><path d="M19.5,1H4.5C2.02,1,0,3.02,0,5.5v13c0,2.48,2.02,4.5,4.5,4.5h15c2.48,0,4.5-2.02,4.5-4.5V5.5c0-2.48-2.02-4.5-4.5-4.5ZM4.5,2h15c1.93,0,3.5,1.57,3.5,3.5v2.5H1v-2.5c0-1.93,1.57-3.5,3.5-3.5Zm15,20H4.5c-1.93,0-3.5-1.57-3.5-3.5V9H23v9.5c0,1.93-1.57,3.5-3.5,3.5Zm-.5-17c0-.55,.45-1,1-1s1,.45,1,1-.45,1-1,1-1-.45-1-1Zm-3,0c0-.55,.45-1,1-1s1,.45,1,1-.45,1-1,1-1-.45-1-1Zm-3,0c0-.55,.45-1,1-1s1,.45,1,1-.45,1-1,1-1-.45-1-1Z" /></svg>
            </div>
            <div className='info-text'>
              <h6>Live preview</h6>
              <a href={project.link} target="_blank">{project.link} </a>
            </div>
          </div>
          <div className='info'>
            <div className='info-image'>
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                <path d="m19,18c1.654,0,3-1.346,3-3s-1.346-3-3-3-3,1.346-3,3,1.346,3,3,3Zm0-5c1.103,0,2,.897,2,2s-.897,2-2,2-2-.897-2-2,.897-2,2-2Zm4.997,10.443c.031.274-.166.522-.44.554-.02.002-.038.003-.058.003-.251,0-.467-.188-.496-.443-.229-2.027-1.951-3.557-4.003-3.557s-3.773,1.529-4.003,3.557c-.031.274-.284.465-.554.44-.274-.031-.472-.279-.44-.554.288-2.533,2.436-4.443,4.997-4.443s4.709,1.91,4.997,4.443ZM15,4.5c0-1.93-1.57-3.5-3.5-3.5h-7c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h7c.276,0,.5.224.5.5s-.224.5-.5.5h-7c-2.481,0-4.5-2.019-4.5-4.5V4.5C0,2.019,2.019,0,4.5,0h7c2.481,0,4.5,2.019,4.5,4.5v6c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-6ZM7,13.5c0,.276-.224.5-.5.5h-2c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h2c.276,0,.5.224.5.5Zm5,0c0,.276-.224.5-.5.5h-2c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h2c.276,0,.5.224.5.5Zm-5,4c0,.276-.224.5-.5.5h-2c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h2c.276,0,.5.224.5.5Zm5,0c0,.276-.224.5-.5.5h-2c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h2c.276,0,.5.224.5.5ZM7,5.5c0,.276-.224.5-.5.5h-2c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h2c.276,0,.5.224.5.5Zm5,0c0,.276-.224.5-.5.5h-2c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h2c.276,0,.5.224.5.5Zm-5,4c0,.276-.224.5-.5.5h-2c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h2c.276,0,.5.224.5.5Zm5,0c0,.276-.224.5-.5.5h-2c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h2c.276,0,.5.224.5.5Z" />
              </svg>

            </div>
            <div className='info-text'>
              <h6>Company</h6>
              <p>{project.company}</p>
            </div>
          </div>
          <div className='info'>
            <div className='info-image'>
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                <path d="m10.5,0H2.5C1.121,0,0,1.121,0,2.5v6.5h6v3h-2.5v1h6v-1h-2.5v-3h6V2.5c0-1.379-1.121-2.5-2.5-2.5Zm1.5,8H1V2.5c0-.827.673-1.5,1.5-1.5h8c.827,0,1.5.673,1.5,1.5v5.5Zm9.5,3h-5c-1.379,0-2.5,1.121-2.5,2.5v10.5h10v-10.5c0-1.379-1.121-2.5-2.5-2.5Zm1.5,12h-8v-9.5c0-.827.673-1.5,1.5-1.5h5c.827,0,1.5.673,1.5,1.5v9.5Zm-5.5-18h-2.5v-1h2.5c1.379,0,2.5,1.121,2.5,2.5v2.5h-1v-2.5c0-.827-.673-1.5-1.5-1.5Zm-9,15h3.5v1h-3.5c-1.379,0-2.5-1.121-2.5-2.5v-3.5h1v3.5c0,.827.673,1.5,1.5,1.5Zm11.5,1c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z" />
              </svg>

            </div>
            <div className='info-text'>
              <h6>Technologies</h6>
              <p>{project['tech-stack']}</p>
            </div>
          </div>
        </div>
      </div>

      <section id="contact" className='contact'>
        <div className='contact-content'>
          <h2>Let's work together.</h2>
          <p>Let's work together to build something great.</p>
          <div className='contact-info'>
            <a href="mailto:d.rakicbusiness@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/david-rakic" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetails