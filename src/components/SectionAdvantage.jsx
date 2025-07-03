import React from 'react';

import ad1 from '../assets/ad1.png';
import ad2 from '../assets/ad2.png';
import ad3 from '../assets/ad3.png';
import ad4 from '../assets/ad4.png';


const SectionAdvantage = () => {

    const dataAdvantage = [
        {
            id: 1,
            advantageImg: ad3,
            advantageTitle: 'Мастера с опытом от 8 лет - молодой энергичный коллектив',
            advantageText: '',
        },
        {
            id: 2,
            advantageImg: ad2,
            advantageTitle: 'На связи по вашим вопросам',
            advantageText: '',
        },
        {
            id: 3,
            advantageImg: ad1,
            advantageTitle: 'Предложим лучший вариант с максимально отличным качеством',
            advantageText: '',
        },
        {
            id: 4,
            advantageImg: ad4,
            advantageTitle: 'Работа выполняется без задержек',
            advantageText: '',
        },
    ]


    return (
        <section className='advantage' id="advantage">
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
