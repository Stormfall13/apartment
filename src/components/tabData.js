import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';
import bg4 from '../assets/bg4.jpg';

const tabData = [
    {
        title: 'Капитальный',
        options: [
            {
            id: 1,
                area: '55м²',
                mainImage: bg1,
                thumbnails: [
                    bg2,
                    bg3,
                    bg4,
                ],
                description: {
                    price: '1 200 000 ₽',
                    area: '55м²',
                    time: '60 дней',
                    rooms: '2 комнаты',
                    address: 'Примерная, 5',
                    workList: 'Демонтаж, выравнивание стен, плитка и т.д.'
                }
            },
            {
                id: 2,
                area: '61м²',
                mainImage: bg1,
                thumbnails: [
                    bg2,
                    bg3,
                ],
                description: {
                    price: '1 800 000 ₽',
                    area: '72м²',
                    time: '80 дней',
                    rooms: '3 комнаты',
                    address: 'Образцовая, 2',
                    workList: 'Полный капитальный ремонт под ключ'
                }
            }
        ]
    },
    {
        title: 'Косметический',
        options: [
            {
            id: 1,
                area: '55м²',
                mainImage: bg1,
                thumbnails: [
                    bg2,
                    bg3,
                    bg4,
                ],
                description: {
                    price: '1 550 000 ₽',
                    area: '55м²',
                    time: '120 дней',
                    rooms: '2 комнаты',
                    address: 'Примерная, 5',
                    workList: 'Демонтаж, выравнивание стен, плитка и т.д.'
                }
            },
            {
                id: 2,
                area: '61м²',
                mainImage: bg1,
                thumbnails: [
                    bg2,
                    bg3,
                ],
                description: {
                    price: '2 800 000 ₽',
                    area: '72м²',
                    time: '80 дней',
                    rooms: '3 комнаты',
                    address: 'Образцовая, 2',
                    workList: 'Полный капитальный ремонт под ключ'
                }
            }
        ]
    },
    // остальные вкладки добавишь аналогично
];

export default tabData;