import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import globalHorMenu from './globalHorMenu';

import CallOverlay from './CallOverlay';
import HeaderCallBtn from './HeaderCallBtn';
import HeaderTel from './HeaderTel';
import HeaderLogo from './HeaderLogo';



const Header = () => {
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
                <HeaderLogo />
                <nav className="top__menu">
                    {globalHorMenu.map(item => {
                        return (
                            <a href={item.link} key={item.id}>{item.linkName}</a>
                        )
                    })}
                </nav>
                <div className="header__wrapper">
                    <HeaderTel />
                    <HeaderCallBtn />
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
