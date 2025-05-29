import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {



    return (
        <footer className='footer'>
            <div className="footer__wrapp">
                <div className="column__first">
                    <Link to="/">
                        LOGO
                    </Link>
                </div>
                <nav className='menu__column-second'>
                    <h3 className='title'>НАШИ УСЛУГИ</h3>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
