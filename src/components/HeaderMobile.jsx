import React, { useState, useRef, useEffect } from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderCallBtn from './HeaderCallBtn';
import HeaderTel from './HeaderTel';

import burger from '../assets/burger.svg';
import close from '../assets/close.svg';
import CallOverlay from './CallOverlay';
import globalHorMenu from './globalHorMenu';

const HeaderMobile = () => {


    const [mobileOpened, setMobileOpened] = useState(false);
    const headerRef = useRef(null);
    const [isFixed, setIsFixed] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);

        useEffect(() => {
            const handleScroll = () => {
                const scrollTop = window.scrollY;
    
                if (window.innerWidth < 992 && headerRef.current) {
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
        <div className={`header__mobile ${isFixed ? 'fixed' : ''}`}
        style={{
            position: `${isFixed ? 'fixed' : ''}`
        }}
        ref={headerRef}>
            <button className='burger__btn' onClick={() => setMobileOpened(true)}>
                <img src={burger} alt="burger btn" />
            </button>
            <HeaderLogo />
            <HeaderCallBtn />
            <HeaderTel />
            {mobileOpened ? (
                <nav className={`mobile__menu ${mobileOpened ? 'mobile__opened' : ''}`}>
                    <button className='mobile__btn' onClick={() => setMobileOpened(false)}>
                        <img src={close} alt="close btn" />
                    </button>
                    {globalHorMenu.map(item => {
                        return (
                            <a 
                            href={item.link} 
                            key={item.id}
                            onClick={() => setMobileOpened(false)}>{item.linkName}</a>
                        )
                    })}
                </nav>
            ) : (
                ''
            )}
            
            <CallOverlay />
        </div>
    )
}

export default HeaderMobile;
