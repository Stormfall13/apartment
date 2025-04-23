import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import SectionBulding from '../components/SectionBuilding';
import SectionPriceBuild from '../components/SectionPriceBuild';
import SectionWeWork from '../components/SectionWeWork';
import SectionHowWork from '../components/SectionHowWork';
import SectionAdvantage from '../components/SectionAdvantage';

const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            {isMobile ? <HeaderMobile /> : <Header />}
            <SectionBulding />
            <SectionPriceBuild />
            <SectionWeWork />
            <SectionHowWork />
            <SectionAdvantage />
        </div>
    )
}

export default Home;
