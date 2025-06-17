import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { closeOverlay } from "../store/slices/callOverlaySlice";
import ReCAPTCHA from "react-google-recaptcha";

import close from '../assets/close.svg';


const CallOverlay = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.callOverlay.isOpen);

    const [nameCall, setNameCall] = useState("");
    const [telCall, setTelCall] = useState("");
    const [captchaValue, setCaptchaValue] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const recaptchaRef = useRef();

    const KEY_CAPTCHA = process.env.REACT_APP_SITE_KEY_FRONTEND
    

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captchaValue) {
            alert("Пожалуйста, подтвердите капчу.");
            return;
        }

        const callingDate = {
            nameCall,
            telCall,
            captcha: captchaValue,
        }
        console.log(callingDate);
        console.log("Заявка с капчей:", callingDate);

        setIsSubmitted(true); // Показываем сообщение "С вами свяжутся..."
        
        setTimeout(() => {
            setIsSubmitted(false);
            dispatch(closeOverlay()); // Закрываем окно через 2 сек
            setNameCall("");
            setTelCall("");
            setCaptchaValue(null);
            recaptchaRef.current.reset(); // сброс капчи
        }, 2000);
    } 

    return (
        <div className="call__overlay">
            <div className={`form__wrapp ${isSubmitted ? "hidden" : ""}`}>
                    <button 
                    className='call__overlay-close' 
                    onClick={() => dispatch(closeOverlay())}>
                        <img src={close} alt="" />
                    </button>
                <form onSubmit={handleSubmit}>
                    <h2 className='call__overlay-title'>Заказать звонок</h2>
                    <input 
                        type="text" 
                        placeholder='Ваше имя:' 
                        required 
                        value={nameCall}
                        onChange={(e) => setNameCall(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder='Ваш номер телефона:' 
                        required 
                        value={telCall}
                        onChange={(e) => setTelCall(e.target.value)}
                    />
                    <ReCAPTCHA
                        sitekey={KEY_CAPTCHA}
                        onChange={(val) => setCaptchaValue(val)}
                        ref={recaptchaRef}
                    />
                    <button type='submit' className='call__btn-submit'>Заказать</button>
                </form> 
            </div>
            <div className={`completed ${isSubmitted ? "visible" : ""}`}>
                С вами свяжутся в ближайшее время.
            </div>
        </div>
    )
}

export default CallOverlay;
