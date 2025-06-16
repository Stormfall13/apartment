import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderCallBtn from './HeaderCallBtn';
import HeaderTel from './HeaderTel';

import burger from '../assets/burger.svg';
import CallOverlay from './CallOverlay';

const HeaderMobile = () => {
    return (
        <div className='header__mobile'>
            <button className='burger__btn'>
                <img src={burger} alt="burger btn" />
            </button>
            <HeaderLogo />
            <HeaderCallBtn />
            <HeaderTel />

            <CallOverlay />
        </div>
    )
}

export default HeaderMobile;
