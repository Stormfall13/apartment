import React, { useState, useEffect, useRef } from 'react';

import weWork1 from '../assets/wework7.png';
import weWork2 from '../assets/wework2.png';
import weWork3 from '../assets/wework1.png';
import weWork4 from '../assets/wework8.png';
import bg1 from '../assets/bg1.png';

const SectionBulding = () => {

    const imgRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (imgRef.current && sectionRef.current) {
            const height = imgRef.current.clientHeight;
            sectionRef.current.style.minHeight = `${height}px`;
        }
    }, []);

    const [allPrice, setAllPrice] = useState(0);

    const [repairType, setRepairType] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [roomCount, setRoomCount] = useState('');

    return (
        <section className='section__building'>
            <div className="section__build-wrapp" ref={sectionRef}>
                <div className="build__overlay-img">
                    <img src={bg1} alt="background-main" ref={imgRef}/>
                </div>
                <div className="building__wrapp-right">
                    <h1 className='page__title'>РЕМОНТ КВАРТИР В МОСКВЕ И МО</h1>
                    <div className="build__price-wrapp">
                        от <div className="build__price">2450</div> руб/м²
                    </div>
                    <div className="build__wrapper-item">
                        <div className="build__item">
                            <div className="build__item-icon">
                                <img src={weWork1} alt="" />
                            </div>
                            <div className="build__item-text">Оплата по факту</div>
                        </div>
                        <div className="build__item">
                            <div className="build__item-icon">
                                <img src={weWork2} alt="" />
                            </div>
                            <div className="build__item-text">Замер и составление сметы БЕСПЛАТНО</div>
                        </div>
                        <div className="build__item">
                            <div className="build__item-icon">
                                <img src={weWork3} alt="" />
                            </div>
                            <div className="build__item-text">Выезд сметчика</div>
                        </div>
                        <div className="build__item">
                            <div className="build__item-icon">
                                <img src={weWork4} alt="" />
                            </div>
                            <div className="build__item-text">Гарантия 3 года</div>
                        </div>
                    </div>
                </div> 
                <form className='form__building'>
                <div className="build__form">
                    <div className="build__form-title">Рассчитайте стоимость ремонта</div>

                    {/* Вид ремонта */}
                    <div className="type__repair">
                    <div className="type__repair-title">Вид ремонта:</div>
                    <div className="build__select repair__checkbox">
                        {['Косметический', 'Капитальный', 'Под ключ', 'Дизайнерский'].map((type) => (
                        <div className="checkbox__build" key={type}>
                            <input
                            type="radio"
                            name="repair"
                            value={type}
                            checked={repairType === type}
                            onChange={() => setRepairType(type)}
                            id={`repair-${type}`}
                            />
                            <label
                            htmlFor={`repair-${type}`}
                            style={{
                                color: repairType === type ? '#c7a772' : '#fff',
                                padding: '4px 8px',
                                borderRadius: '6px',
                                cursor: 'pointer',
                            }}
                            >
                            {type}
                            </label>
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* Тип недвижимости */}
                    <div className="type__property">
                    <div className="type__property-title">Тип вашей недвижимости:</div>
                    <div className="build__select">
                        {['Новостройка', 'Вторичное жилье'].map((type) => (
                        <div className="checkbox__build" key={type}>
                            <input
                            type="radio"
                            name="property"
                            value={type}
                            checked={propertyType === type}
                            onChange={() => setPropertyType(type)}
                            id={`property-${type}`}
                            />
                            <label
                            htmlFor={`property-${type}`}
                            style={{
                                color: propertyType === type ? '#c7a772' : '#fff',
                                padding: '4px 8px',
                                borderRadius: '6px',
                                cursor: 'pointer',
                            }}
                            >
                            {type}
                            </label>
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* Кол-во комнат */}
                    <div className="number__room">
                    <div className="number__room-title">Количество комнат:</div>
                    <div className="build__select">
                        {['1', '2', '3', '4+'].map((count) => (
                        <div className="checkbox__build" key={count}>
                            <input
                            type="radio"
                            name="room"
                            value={count}
                            checked={roomCount === count}
                            onChange={() => setRoomCount(count)}
                            id={`room-${count}`}
                            />
                            <label
                            htmlFor={`room-${count}`}
                            style={{
                                color: roomCount === count ? '#c7a772' : '#fff',
                                padding: '4px 8px',
                                borderRadius: '6px',
                                cursor: 'pointer',
                            }}
                            >
                            {count}
                            </label>
                        </div>
                        ))}
                    </div>
                    </div>
                    <div className="square">
                    <div className="square-title">Площадь, м²:</div>
                    <input type="text" />
                    </div>
                    <div className="price">
                        <div className="price__wrapper">
                            Сумма: <div className="total__price">{allPrice} руб.</div> 
                        </div>
                    </div>
                    <div className="get__telephone">
                        <div className="tel__area">
                            <div className="tel__title">Введи номер телефона:</div>
                        </div>
                        <div className="tel__wrapp">
                            <input type="text" />
                            <button className='build__btn'>Заказать</button> 
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </section>
    )
}

export default SectionBulding;
