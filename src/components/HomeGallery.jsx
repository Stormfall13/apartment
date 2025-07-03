import React, { useState } from 'react';

import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';
import bg4 from '../assets/bg4.jpg';

import close from '../assets/close.svg';

const dataGallery = [
{
    id: 1,
    title: 'Проект №1',
    description: 'Краткое описание проекта №1',
    mainImage: bg1,
    thumbnails: [
    bg2,
    bg3,
    bg4,
    bg2,
    bg3,
    bg4,
    bg2,
    bg3,
    bg4,
    bg2,
    bg3,
    bg4,
    bg2,
    bg3,
    bg4,
    bg2,
    bg3,
    bg4,
    ],
},
{
    id: 2,
    title: 'Проект №2',
    description: 'Краткое описание проекта №2',
    mainImage: bg1,
    thumbnails: [
    bg2,
    bg3,
    ],
},
// Добавляй больше
];

const HomeGallery = () => {


    const [activeGallery, setActiveGallery] = useState(null);
    const [activeImage, setActiveImage] = useState('');

    const openGallery = (gallery) => {
        setActiveGallery(gallery);
        setActiveImage(gallery.mainImage);
    };

    const closeGallery = () => {
        setActiveGallery(null);
        setActiveImage('');
    };

    return (
    <section className='home__gallery' id='home__gallery'>
        <h2 className='gallery__title'>Галерея выполненных работ</h2>

        <div className='gallery__grid'>
            {dataGallery.map((item) => {
                
                return (
                <div key={item.id} className='gallery__item'>
                    <div className="gallery__image" >
                        <img
                        src={item.mainImage}
                        alt={item.title}
                        onClick={() => openGallery(item)}
                        
                        />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            )})}
        </div>

        {activeGallery && (
            <div className='gallery__overlay'>
            <div className='gallery__popup'>
                <button className='gallery__close' onClick={closeGallery}>
                    <img src={close} alt="close" />
                </button>
                <div className="look__wrapp">
                    <img src={activeImage} alt='Просмотр' className='gallery__large' />
                </div>
                <div className='gallery__thumbs'>
                {activeGallery.thumbnails.map((thumb, i) => (
                    <img
                    key={i}
                    src={thumb}
                    alt='thumb'
                    onClick={() => setActiveImage(thumb)}
                    className={`gallery__thumb ${thumb === activeImage ? 'active' : ''}`}
                    />
                ))}
                </div>
            </div>
            </div>
        )}
    </section>
    )
}

export default HomeGallery
