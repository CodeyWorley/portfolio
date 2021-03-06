import React from 'react';
import {projects} from '../utils/data';
import helpful from '../media/helpfull-mock700x400.png';
import spanishx from '../media/spanishx-mock700x400.png';
import blank from '../media/blank-mock700x400.png';

const Projects = () => {
    return (
        <section id='projects' className='projects section-spacing'>
            <h2 className='section-title'>Projects</h2>
            <div className='section-container projects-container'>
                {projects.map( project => {
                    // needs refactor
                    let image;
                    if(project.image === 'blank') {
                        image = blank;
                    }
                    if(project.image === 'helpful') {
                        image = helpful;
                    }
                    if(project.image === 'spanishx') {
                        image = spanishx;
                    }
                    if(project.image === 'itech') {
                        // image = itech;
                    }
                    if(project.image === 'swws') {
                        // image = swws;
                    }
                    return (
                        <div className='project'>
                            <a href={project.website} target='_blank' rel='noopener noreferrer'>
                                <img className='project-img' src={image} alt={project.name}/>
                            </a>
                            <div className='project-info'>
                                <div className='project-header'>
                                    <h2 className='project-title'>
                                        <a href={project.website} target='_blank' rel='noopener noreferrer'>{project.name}</a>
                                    </h2>
                                    <div className='project-repos'>
                                        <a href={project.repos.client} target='_blank' rel='noopener noreferrer'>Client</a>/
                                        <a href={project.repos.server} target='_blank' rel='noopener noreferrer'>Server</a>
                                    </div>
                                </div>
                                <div className='project-stack'>
                                    {project.stack.map( tech => {
                                        return (
                                            <div className='tech'>
                                                <img className='icon' src={tech.icon} alt={tech.name} />
                                                <div>{tech.name}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='project-description'>{project.description}</div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}
export default Projects;