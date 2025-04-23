import React from 'react';

import './sectionHowWork.css';

import wework1 from '../assets/wework1.png';
import wework2 from '../assets/wework2.png';
import wework3 from '../assets/wework3.png';
import wework4 from '../assets/wework4.png';
import wework5 from '../assets/wework5.png';
import wework6 from '../assets/wework6.png';
import wework7 from '../assets/wework7.png';
import wework8 from '../assets/wework8.png';



const SectionHowWork = () => {


    const dataHowWork = [
        {
            id: 1,
            workItemsImg: wework1,
            workItemsText: 'Бесплатный выезд замерщиков',
        },
        {
            id: 2,
            workItemsImg: wework2,
            workItemsText: 'Смета в день обращения',
        },
        {
            id: 3,
            workItemsImg: wework3,
            workItemsText: 'Договор',
        },
        {
            id: 4,
            workItemsImg: wework4,
            workItemsText: 'Накладные материалы',
        },
        {
            id: 5,
            workItemsImg: wework5,
            workItemsText: 'Контроль: фотоотчёт или видеонаблюдение',
        },
        {
            id: 6,
            workItemsImg: wework6,
            workItemsText: 'Акт выполненных работ',
        },
        {
            id: 7,
            workItemsImg: wework7,
            workItemsText: 'Акт приемки работ по договору',
        },
        {
            id: 8,
            workItemsImg: wework8,
            workItemsText: 'Гарантия на выполненные работы',
        },
    ]

    return (
        <section className='how__work'>
            <div className="how__work-wrapp">
                <h2 className='how__work-title'>Как мы работаем</h2>
                <p className="how__work-text">Вам понятен каждый этап: 
                    фиксированные сроки и цены, предоставляем все документы: 
                    накладные, гарантии, акты. Вы будете уверены в результате.
                </p>
                <div className="how__work-item">
                    {dataHowWork.map((howWorkItem) => {
                        return (
                                <div className="how__work-items" key={howWorkItem.id}>
                                    <div className="work__items-img">
                                        <img src={howWorkItem.workItemsImg} alt="how-work-img" />
                                    </div>
                                    <p className="work__items-text">{howWorkItem.workItemsText}</p>
                                </div>
                        )
                    })}
                </div> 
            </div>
        </section>
    )
}

export default SectionHowWork
