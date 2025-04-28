import React, { useState, useRef } from 'react';

import check from '../assets/check.svg';
import arrowDown from '../assets/arrow-down.png';

import dataServices from './dataServices';

const SectionPriceBuild = () => {
    const [openIndexes, setOpenIndexes] = useState({});
    const contentRefs = useRef([]);

    const toggleSpoiler = (index) => {
        setOpenIndexes((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const getHeight = (index) => {
        const ref = contentRefs.current[index];
        if (!ref) return '170px';
        return openIndexes[index] ? `${ref.scrollHeight}px` : '170px';
    };
    
    return (
        <section className='price__build'>
            <h2 className='title__build'>Цены на ремонт</h2>
            <div className="main__price-wrapp">
                {dataServices.map((serviceBlock, index) => {
                    return (
                        <div className="price__services-wrapp" key={index}>
                            <div className="services__wrapper-header">
                                <p className="services__name">{serviceBlock.type}</p>
                                <p className="services__deadlines">{serviceBlock.deadlines}</p>
                            </div>

                            <div className="services__wrapper-content">
                                {serviceBlock.description}
                            </div>

                            <div
                                className="services__wrapper-bottom"
                                ref={(el) => (contentRefs.current[index] = el)}
                                style={{
                                    height: getHeight(index),
                                    overflow: 'hidden',
                                    transition: 'height 0.6s ease'
                                }}
                            >
                                {serviceBlock.categories.map((category, catIndex) => (
                                    <div key={catIndex}>
                                        <h2 className="category__name">{category.category}</h2>
                                        {category.services.map((service, srvIndex) => (
                                            <ul className="services__list" key={srvIndex}>
                                                {service.items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        <img src={check} alt="check" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            <div className="services__wrapper-footer">
                                <div className="spoiler" onClick={() => toggleSpoiler(index)}>
                                    Список работ
                                    <img 
                                        src={arrowDown}
                                        alt="arrow__down" 
                                        className={`arrow-icon ${openIndexes[index] ? 'rotated' : ''}`}
                                    />
                                </div>
                                <div className="service__price">
                                    <p className="price__old">от <span>{serviceBlock.oldPrice}</span> руб/м2</p>
                                    <p className="price__new">от {serviceBlock.newPrice} руб/м2</p>
                                </div>
                            </div>

                            <button className="smeta__btn">Получить смету</button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default SectionPriceBuild;
