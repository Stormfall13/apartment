import { useState } from 'react';

import projectsData from './projectsData';
import close from '../assets/close.svg';

const SectionWeWork = () => {

    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImage, setCurrentImage] = useState("");

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImage(project.mainImage);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setCurrentImage("");
    };

    return (
        <section className='section__wework' id="section__wework">
            <h2 className='title__wework'>Наши проекты</h2>
            
            <div className="projects-grid">
                {projectsData.map((project) => (
                <div className="project__card" key={project.id}>
                    <div className="project__img">
                        <img
                        src={project.mainImage}
                        alt={project.title}
                        onClick={() => openModal(project)}
                        className="project-image"
                        />
                    </div>
                    <div className="project__descript">
                        <h3>{project.title}</h3>
                        <p onClick={() => openModal(project)}>{project.description}</p>
                        <a href={project.pdf} download className="download-button">
                        Скачать проект
                        </a>
                    </div>
                </div>
                ))}
            </div>

            {selectedProject && (
                <div className="modal__overlay" onClick={closeModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <h3>{selectedProject.title}</h3>
                    <div className="main__image">
                        <img src={currentImage} alt="Текущее фото" className="main-modal-image" />
                    </div>
                    <div className="thumbnail-row">
                    {selectedProject.gallery.map((img, index) => (
                        <div className="thumbnail__items" key={index}>
                            <img
                                src={img}
                                className={`thumbnail ${currentImage === img ? 'active' : ''}`}
                                onClick={() => setCurrentImage(img)}
                                alt="миниатюра"
                            /> 
                        </div>
                    ))}
                    </div>
                    <button onClick={closeModal} className="close-button">
                        <img src={close} alt="close" />
                    </button>
                </div>
                </div>
            )}
            
        </section>
    )
}

export default SectionWeWork
