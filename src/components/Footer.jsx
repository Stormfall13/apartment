

import globalHorMenu from './globalHorMenu';

import tg from '../assets/telegram.svg';
import whatsapp from '../assets/whatsapp.svg';
import mail from '../assets/mail.png';


const Footer = () => {

    const dataSocialLink = [
        {
            id: 1,
            imgSocial: mail,
            linkSocial: '#',
        },
        {
            id: 2,
            imgSocial: tg,
            linkSocial: '#',
        },
        {
            id: 3,
            imgSocial: whatsapp,
            linkSocial: '#',
        },
    ]

    return (
        <footer className='footer'>
        <div className="footer__wrapp">
            <div className="social__wrapp">
                {dataSocialLink.map(item => {
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
            <p className="copyright">&copy; Копирайт компании</p>
        </div>
            <nav className="footer__menu">
            {globalHorMenu.map(item => {
                return (
                    <a href={item.link} key={item.id}>{item.linkName}</a>
                )
            })}
            </nav>
        </footer>
    )
}

export default Footer
