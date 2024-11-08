// Project.jsx
import React from 'react';
import './project.css';
import chatImage1 from '../../assets/chat.png'
import miniProject from '../../assets/miniProject.png'
import weather from '../../assets/weather.png'
import jobbler from '../../assets/jobbler.png'
import canvas from '../../assets/handCanvas.jpg'
import paint from '../../assets/paint.png'
const projects = [
    {
        topic: 'Chat App',
        link: 'https://chat-app-fqme.onrender.com/',
        description: 'Chat application using MERN stack which hekos to communicate with eachother on an online application.',
        image: chatImage1,
    },
    {
        topic: 'Jobbler',
        link: 'https://jobbler-1.onrender.com/',
        description: 'A  job portal application that is having user and admin portal separate helps to upload job by recruiters and apply job by users.',
        image: jobbler,
    },
    {
        topic: 'Weather Application',
        link: 'https://vidhi-ajmera16355.github.io/WeatherApp/',
        description: 'A description of project three.',
        image: weather,
    },
    {
        topic: 'E-commerce Website',
        link: 'https://frontend-store-paints.vercel.app/',
        description: 'E-commerce website of a paints store.',
        image: paint,
    },
    {
        topic: 'Hand Canvas',
        description: 'A project related to Computer Vision Air Canvas.',
        image: canvas,
    },
    {
        topic: 'Early Seizure Detection',
        link: '',
        description: 'It helps to detect early disease detection using MERN stack and Machine Learning, currently working on this project.',
        image: miniProject,
    },
];

function Project() {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.topic} className="project-image" />
                        <ul>
                            <li><strong>Topic:</strong> {project.topic}</li>
                            <li><strong>Link:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></li>
                            <li><strong>Description:</strong> {project.description}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
