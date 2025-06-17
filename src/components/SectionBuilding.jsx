import React, { useState, useEffect, useRef } from 'react';

import weWork1 from '../assets/wework3.svg';
import weWork2 from '../assets/wework2.svg';
import weWork3 from '../assets/wework1.svg';
import weWork4 from '../assets/wework4.svg';
import bg1 from '../assets/bg1.png';
import close from '../assets/close.svg';

import buildFormData from './buildFormData';


const SectionBulding = () => {

  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  const [calcOverlay, setCalcOverley] = useState(false);

  const [repairType, setRepairType] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [roomCount, setRoomCount] = useState('');
  const [area, setArea] = useState('');
  const [phone, setPhone] = useState('');
  const [allPrice, setAllPrice] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (imgRef.current && sectionRef.current) {
      const height = imgRef.current.clientHeight;
      sectionRef.current.style.minHeight = `${height}px`;
    }
  }, []);

  useEffect(() => {
    const repair = buildFormData.repairTypes.find(r => r.repairName === repairType)?.repairPrice || 0;
    const property = buildFormData.propertyTypes.find(p => p.propertyname === propertyType)?.propertyPrice || 0;
    const room = buildFormData.roomCounts.find(r => r.propertyname === roomCount)?.propertyPrice || 0;
    const total = (repair + property + room) * (parseFloat(area) || 0);
    setAllPrice(total);
  }, [repairType, propertyType, roomCount, area]);

  const handleSubmit = async () => {
    const payload = {
      repairType,
      propertyType,
      roomCount,
      area,
      phone,
      totalPrice: allPrice
    };

    console.log('Отправка JSON:', JSON.stringify(payload, null, 2));

    // await fetch('http://localhost:5000/bulding', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload)
    // });
    setIsSubmitted(true);
  
    setTimeout(() => {
      setIsSubmitted(false)
      setRepairType("");
      setPropertyType("");
      setRoomCount("");
      setArea("");
      setPhone("");
      setAllPrice(0);
    }, 2000)
  };

  
  return (
    <section className="section__building">
      <div className="section__build-wrapp" ref={sectionRef}>
        <div className="build__overlay-img">
          <img src={bg1} alt="background-main" ref={imgRef} />
        </div>
        <div className="building__wrapp-right">
          <h1 className="page__title">РЕМОНТ КВАРТИР В МОСКВЕ И МО</h1>
          <div className="build__price-wrapp">
            от <div className="build__price">2450</div> руб/м²
          </div>
          <div className="build__wrapper-item">
            {[weWork1, weWork2, weWork3, weWork4].map((icon, i) => (
              <div className="build__item" key={i}>
                <div className="build__item-icon"><img src={icon} alt="" /></div>
                <div className="build__item-text">
                  {["Оплата по факту", "Замер и составление сметы БЕСПЛАТНО", "Выезд сметчика", "Гарантия 3 года"][i]}
                </div>
              </div>
            ))}
          </div>
          <button className="calc__btn" onClick={() => setCalcOverley(true)}>Рассчитать стоимость</button>
        </div>

        {/* Калькулятор */}
        {!isSubmitted ? (
          <div className={`form__building ${calcOverlay ? 'form__open' : ''}`}>
          <div className="btn__close" onClick={() => setCalcOverley(false)}>
            <img src={close} alt="close" />
          </div>
          <div className="build__form">
            <div className="build__form-title">Рассчитайте стоимость ремонта</div>

            {/* Вид ремонта */}
            <div className="type__repair">
              <div className="type__repair-title">Вид ремонта:</div>
              <div className="build__select repair__checkbox">
                {buildFormData.repairTypes.map(item => (
                  <div className="checkbox__build" key={item.id}>
                    <input
                      type="radio"
                      name="repair"
                      id={`repair-${item.id}`}
                      value={item.repairName}
                      checked={repairType === item.repairName}
                      onChange={() => setRepairType(item.repairName)}
                    />
                    <label htmlFor={`repair-${item.id}`}>{item.repairName}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Тип недвижимости */}
            <div className="type__property">
              <div className="type__property-title">Тип вашей недвижимости:</div>
              <div className="build__select">
                {buildFormData.propertyTypes.map(item => (
                  <div className="checkbox__build" key={item.id}>
                    <input
                      type="radio"
                      name="property"
                      id={`property-${item.id}`}
                      value={item.propertyname}
                      checked={propertyType === item.propertyname}
                      onChange={() => setPropertyType(item.propertyname)}
                    />
                    <label htmlFor={`property-${item.id}`}>{item.propertyname}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Кол-во комнат */}
            <div className="number__room">
              <div className="number__room-title">Количество комнат:</div>
              <div className="build__select">
                {buildFormData.roomCounts.map(item => (
                  <div className="checkbox__build" key={item.id}>
                    <input
                      type="radio"
                      name="room"
                      id={`room-${item.id}`}
                      value={item.propertyname}
                      checked={roomCount === item.propertyname}
                      onChange={() => setRoomCount(item.propertyname)}
                    />
                    <label htmlFor={`room-${item.id}`}>{item.propertyname}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Площадь */}
            <div className="square">
              <div className="square-title">Площадь, м²:</div>
              <input
                type="text"
                value={area}
                onChange={e => setArea(e.target.value)}
                required
              />
            </div>

            {/* Сумма */}
            <div className="price">
              <div className="price__wrapper">
                Сумма: <div className="total__price">{allPrice} руб.</div>
              </div>
            </div>

            {/* Телефон */}
            <div className="get__telephone">
              <div className="tel__area">
                <div className="tel__title">Введите номер телефона:</div>
              </div>
              <div className="tel__wrapp">
                <input
                  type="text"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  required
                />
                <button className="build__btn" type="button" onClick={handleSubmit}>Заказать</button>
              </div>
            </div>
          </div>
        </div>
        ) : (
          <div className='building__completed'>
            Форма отправлена!
          </div>
        )}
        {/* Конец калькулятора */}
      </div>
    </section>
  );
};

export default SectionBulding;
