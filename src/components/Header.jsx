import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { openOverlay } from "../store/slices/callOverlaySlice";


import tel from '../assets/tel.png';

import Navbar from './Navbar';
import CallOverlay from './CallOverlay';



const Header = () => {
    const dispatch = useDispatch();
    const headerRef = useRef(null);
    const categoryRef = useRef(null);
    const [isFixed, setIsFixed] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if (window.innerWidth > 992 && headerRef.current) {
                const height = headerRef.current.offsetHeight;
                setHeaderHeight(height);

                if (scrollTop > height) {
                    setIsFixed(true);
                } else {
                    setIsFixed(false);
                }
            } else {
                setIsFixed(false); // отключаем фиксацию на мобилках
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        handleScroll(); // вызвать при первом рендере

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);


    const globalHorMenu = [
        {
            id: 1,
            linkName: 'Цены',
            link: '#price__build',
        },
        {
            id: 2,
            linkName: 'Примеры работ',
            link: '#section__wework',
        },
        {
            id: 3,
            linkName: 'Преимущества',
            link: '#advantage',
        },
        {
            id: 4,
            linkName: 'Блог',
            link: '',
        },
        {
            id: 5,
            linkName: 'Контакты',
            link: '',
        },
    ]

    return (
        <div className="header">
            <div 
                className={`header__wrapp ${isFixed ? 'fixed' : ''}`}
                style={{
                    position: `${isFixed ? 'fixed' : ''}`,
                    padding: `${isFixed ? '25px 10px' : ''}`,
                    maxWidth: `${isFixed ? '1550px' : ''}`
                }}
                ref={headerRef}>
                <Link to="/">
                    LOGO
                    {/* <img src="" alt="" /> */}
                </Link>
                <nav className="top__menu">
                    {globalHorMenu.map(item => {
                        return (
                            <a href={item.link} key={item.id}>{item.linkName}</a>
                        )
                    })}
                </nav>
                <div className="header__wrapper">
                    <div className="header__tel">
                        <div className="icon__tel">
                            <img src={tel} alt="" />
                        </div>
                        <a href="+777777777">+7 (926) 000-00-00</a>
                    </div>
                    <button 
                    className='call__btn' 
                    onClick={() => dispatch(openOverlay())}
                    >
                        Заказать звонок
                    </button>
                    <Navbar /> 
                </div> 
            </div>
            <nav 
                className="category__menu"
                ref={categoryRef}
                style={{
                    marginTop: isFixed ? `${headerHeight}px` : '0px',
                }}>
                <Link to="#">Ремонт квартир</Link>
                <Link to="#">Дизайн интерьера</Link>
                <Link to="#">Ремонт комнат</Link>
                <Link to="#">Дома и коттеджи</Link>
                <Link to="#">Прочие услуги</Link>
            </nav>
            <CallOverlay />
        </div>
    )
}

export default Header;
