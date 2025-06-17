import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import SectionBulding from '../components/SectionBuilding';
import SectionPriceBuild from '../components/SectionPriceBuild';
import SectionWeWork from '../components/SectionWeWork';
import SectionHowWork from '../components/SectionHowWork';
import SectionAdvantage from '../components/SectionAdvantage';
import Footer from '../components/Footer';
import HomeGallery from '../components/HomeGallery';


const useScrollAnimationAndHoverEffects = () => {
    useEffect(() => {
      const windowsWidth = window.innerWidth;
  
      if (windowsWidth <= 991) return;
  
      const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      };
  
      const observer = new IntersectionObserver(animateOnScroll, {
        threshold: 0.5
      });
  
      const elementsToAnimate = document.querySelectorAll(`
        .building__wrapp-right,  
        .price__services-wrapp,
        .tabs,
        .gallery__grid,
        .advantage__wrapp,
        .how__work-item
      `);
  
      elementsToAnimate.forEach(element => observer.observe(element));
  
      return () => {
        observer.disconnect();
      };
    }, []);
};
  

const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 1024);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      // ❗ Вызываем как обычный хук (вне условий/вложенных функций)
      useScrollAnimationAndHoverEffects();
    

 

    return (
        <>
            {isMobile ? <HeaderMobile /> : <Header />}
            <SectionBulding />
            <SectionPriceBuild />
            <SectionWeWork />
            <HomeGallery />
            <SectionAdvantage />
            <SectionHowWork />
            <Footer />
        </>
    )
}

export default Home;
