import React, { useState } from 'react';

import './sectionWeWork.css';

import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';
import bg4 from '../assets/bg4.jpg';

import dollarSign from '../assets/dollar-sign.svg';
import grid from '../assets/grid.svg';
import calendar from '../assets/calendar.svg';
import home from '../assets/home.svg';
import mapPin from '../assets/map-pin.svg';
import fileText from '../assets/file-text.svg';

const SectionWeWork = () => {

    // const tabTitles = ['Капитальный', 'Косметический', 'Под ключ', 'Студии', 'Черновой'];
    const tabData = [
        {
            title: 'Капитальный',
            options: [
                {
                id: 1,
                    area: '55м²',
                    mainImage: bg1,
                    thumbnails: [
                        bg2,
                        bg3,
                        bg4,
                    ],
                    description: {
                        price: '1 200 000 ₽',
                        area: '55м²',
                        time: '60 дней',
                        rooms: '2 комнаты',
                        address: 'Примерная, 5',
                        workList: 'Демонтаж, выравнивание стен, плитка и т.д.'
                    }
                },
                {
                    id: 2,
                    area: '61м²',
                    mainImage: bg1,
                    thumbnails: [
                        bg2,
                        bg3,
                    ],
                    description: {
                        price: '1 800 000 ₽',
                        area: '72м²',
                        time: '80 дней',
                        rooms: '3 комнаты',
                        address: 'Образцовая, 2',
                        workList: 'Полный капитальный ремонт под ключ'
                    }
                }
            ]
        },
        {
            title: 'Косметический',
            options: [
                {
                id: 1,
                    area: '55м²',
                    mainImage: bg1,
                    thumbnails: [
                        bg2,
                        bg3,
                        bg4,
                    ],
                    description: {
                        price: '1 200 000 ₽',
                        area: '55м²',
                        time: '60 дней',
                        rooms: '2 комнаты',
                        address: 'Примерная, 5',
                        workList: 'Демонтаж, выравнивание стен, плитка и т.д.'
                    }
                },
                {
                    id: 2,
                    area: '61м²',
                    mainImage: bg1,
                    thumbnails: [
                        bg2,
                        bg3,
                    ],
                    description: {
                        price: '1 800 000 ₽',
                        area: '72м²',
                        time: '80 дней',
                        rooms: '3 комнаты',
                        address: 'Образцовая, 2',
                        workList: 'Полный капитальный ремонт под ключ'
                    }
                }
            ]
        },
        // остальные вкладки добавишь аналогично
    ];

    const [activeTab, setActiveTab] = useState(0);
    const [selectedAreaIndex, setSelectedAreaIndex] = useState(0);
    const [mainImage, setMainImage] = useState( tabData[0].options[0].mainImage );

    const handleAreaChange = (index) => {
        setSelectedAreaIndex(index);
        setMainImage(tabData[activeTab].options[index].mainImage);
    };

    const handleThumbnailClick = (img) => {
        setMainImage(img);
    };

    const currentTab = tabData[activeTab];
    const currentOption = currentTab.options[selectedAreaIndex];


    return (
        <section className='section__wework'>
        <h2 className='title__wework'>Примеры наших работ</h2>

        <div className="tabs">
        <div className="tab__titles">
            {tabData.map((tab, index) => (
            <button
                key={index}
                className={`tab__btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => {
                setActiveTab(index);
                setSelectedAreaIndex(0);
                setMainImage(tab.options[0].mainImage);
                }}
            >
                {tab.title}
            </button>
            ))}
        </div>

        <div className="area__selector">
            {currentTab.options.map((option, index) => (
            <label key={option.id}>
                <input
                type="radio"
                name="area"
                checked={selectedAreaIndex === index}
                onChange={() => handleAreaChange(index)}
                />
                {option.area}
            </label>
            ))}
        </div>

        <div className="tab__content">
            <div className="content__wrapp">
                <div className="thumbnails">
                    {currentOption.thumbnails.map((thumb, i) => (
                    <img
                        key={i}
                        src={thumb}
                        alt="thumbnail"
                        onClick={() => handleThumbnailClick(thumb)}
                        className={`thumb ${mainImage === thumb ? 'active' : ''}`}
                    />
                    ))}
                </div>

                <div className="wrapper__content">
                    <div className="main__image">
                        <img src={mainImage} alt="main" />
                    </div>

                    <div className="description">
                        <p><span><img src={dollarSign} alt="dollar-sign" /><strong>Сумма:</strong></span> {currentOption.description.price}</p>
                        <p><span><img src={grid} alt="grid" /><strong>Площадь:</strong></span> {currentOption.description.area}</p>
                        <p><span><img src={calendar} alt="calendar" /><strong>Срок:</strong></span> {currentOption.description.time}</p>
                        <p><span><img src={home} alt="home" /><strong>Комнат:</strong></span> {currentOption.description.rooms}</p>
                        <p><span><img src={mapPin} alt="main-pin" /><strong>Адрес:</strong></span> {currentOption.description.address}</p>
                        <p><span><img src={fileText} alt="file-text" /><strong>Перечень работ:</strong></span> {currentOption.description.workList}</p>
                    </div> 
                </div>
            </div>
        </div>
        </div>
    </section>
    )
}

export default SectionWeWork
