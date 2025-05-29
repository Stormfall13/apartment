import React from 'react';

import vk from '../assets/vkontakte.svg';
import tg from '../assets/telegram.svg';
import whatsapp from '../assets/whatsapp.svg';


const Footer = () => {

    const dataSocialLink = [
        {
            id: 1,
            imgSocial: vk,
            linkSocial: '#',
        },
        {
            id: 1,
            imgSocial: tg,
            linkSocial: '#',
        },
        {
            id: 1,
            imgSocial: whatsapp,
            linkSocial: '#',
        },
    ]

    return (
        <footer className='footer'>
            <div className="footer__wrapp">
                <p className="copyright">&copy; Копирайт компании</p>
                <div className="social__wrapp">
                    {dataSocialLink.map((item) => {
                        return (
                            <a href={item.linkSocial} key={item.id} className='link__social'>
                                <img src={item.imgSocial} alt="img social" />
                            </a> 
                        )
                    })}
                </div>
                <p className="offert__text">
                Сайт не является публичной офертой и носит информационный характер
                </p>
            </div>
        </footer>
    )
}

export default Footer
