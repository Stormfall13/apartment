import React from 'react';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { openOverlay } from "../store/slices/callOverlaySlice";


import tel from '../assets/tel.png';

import Navbar from './Navbar';
import CallOverlay from './CallOverlay';



const Header = () => {
    const dispatch = useDispatch();

    return (
        <div className="header">
            <div className="header__wrapp">
                <Link to="/">
                    LOGO
                    {/* <img src="" alt="" /> */}
                </Link>
                <nav className="top__menu">
                    <Link to="#">Цены</Link>
                    <Link to="#">Портфолио</Link>
                    <Link to="#">Преимущества</Link>
                    <Link to="#">Блог</Link>
                    <Link to="#">Контакты</Link> 
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
            <nav className="category__menu">
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
