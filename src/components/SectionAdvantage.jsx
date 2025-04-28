import React from 'react';

import ad1 from '../assets/ad1.png';
import ad2 from '../assets/ad2.png';
import ad3 from '../assets/ad3.png';
import ad4 from '../assets/ad4.png';


const SectionAdvantage = () => {

    const dataAdvantage = [
        {
            id: 1,
            advantageImg: ad1,
            advantageTitle: 'Работа без предоплаты',
            advantageText: 'Мы не берём предоплату. Вы платите за каждый этап работ после подписания акта.',
        },
        {
            id: 2,
            advantageImg: ad2,
            advantageTitle: 'Стоимость ремонта не меняется',
            advantageText: 'Прозрачный бюджет. Финальная смета фиксируется в согласованных актах.',
        },
        {
            id: 3,
            advantageImg: ad3,
            advantageTitle: 'Мастера с опытом от 5 лет',
            advantageText: 'В штате 250 мастеров с опытом работы от 5 лет, 20 прорабов с опытом от 8 лет и инженерным образованием.',
        },
        {
            id: 4,
            advantageImg: ad4,
            advantageTitle: 'За нами не переделывают',
            advantageText: 'Качество работ для нас в приоритете. Даём гарантию на все виды работ.',
        },
    ]


    return (
        <section className='advantage'>
            <h2 className='advantage__title'>Наши преимущества</h2>
            <div className="advantage__wrapp">
                {dataAdvantage.map((advantageItem) => {
                    return (
                        <div className="advantage__wrapper" key={advantageItem.id}>
                            <div className="advantage__img">
                                <img src={advantageItem.advantageImg} alt="" />
                            </div>
                            <p className="advantage__title-text">{advantageItem.advantageTitle}</p>
                            <p className="advantage__text">{advantageItem.advantageText}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default SectionAdvantage
