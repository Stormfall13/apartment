import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { closeOverlay } from "../store/slices/callOverlaySlice";


import close from '../assets/close.svg';

const CallOverlay = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.callOverlay.isOpen);

    const [nameCall, setNameCall] = useState("");
    const [telCall, setTelCall] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const callingDate = {
            nameCall,
            telCall,
        }
        console.log(callingDate);

        setIsSubmitted(true); // Показываем сообщение "С вами свяжутся..."
        
        setTimeout(() => {
            setIsSubmitted(false);
            dispatch(closeOverlay()); // Закрываем окно через 2 сек
            setNameCall("");
            setTelCall("");
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
