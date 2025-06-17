import React, { useState, useEffect } from 'react';


const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie__banner">
      <div className="cookie__text">
        Мы используем cookie для улучшения работы сайта. Продолжая использовать сайт, вы соглашаетесь с использованием файлов cookie.
      </div>
      <button className="cookie__btn" onClick={handleAccept}>Понятно</button>
    </div>
  );
};

export default CookieConsent;
