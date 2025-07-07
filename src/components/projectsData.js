import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';
import bg4 from '../assets/bg4.jpg';
import bg5 from '../assets/bg5.jpg';
import bg6 from '../assets/bg6.jpg';
import bg7 from '../assets/bg7.webp';

const projectsData = [
    {
        id: 1,
        title: "Современный дом",
        description: "Проект современного дома с панорамными окнами.",
        mainImage: bg1,
        gallery: [
        bg2,
        bg3,
        bg4,
        bg5,
        bg6,
        bg7,
        ],
        pdf: "/projects/project1/project.pdf"
    },
    {
        id: 2,
        title: "Коттедж в горах",
        description: "Тёплый уютный коттедж с деревянной отделкой.",
        mainImage: bg1,
        gallery: [
            bg2,
            bg3,
            bg4,
        ],
        pdf: "/projects/project2/project.pdf"
    }
];

export default projectsData;
