import tel from '../assets/tel.png';
import tg from '../assets/telegram.svg';
import whatsapp from '../assets/whatsapp.svg';
import mail from '../assets/mail.png';

const HeaderTel = () => {

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
    <div className="contact__wrapp">
      <div className="header__tel">
          <div className="icon__tel">
              <img src={tel} alt="" />
          </div>
          <a href="+777777777">+7 (926) 000-00-00</a>
      </div>
      <div className="mail__social">
        <a href="mailto:timur@mail.ru" className='mail__link'>timur@mail.com</a>
        <div className="social__wrapp">
          {dataSocialLink.map(item => {
              return (
                  <a href={item.linkSocial} key={item.id} className='link__social'>
                      <img src={item.imgSocial} alt="img social" />
                  </a> 
              )
          })}
        </div>
      </div>
    </div>
  )
}

export default HeaderTel
