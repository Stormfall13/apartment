import React from 'react';
import { useDispatch } from "react-redux";
import { openOverlay } from "../store/slices/callOverlaySlice";


const HeaderCallBtn = () => {

    const dispatch = useDispatch();

    return (
        <button 
            className='call__btn' 
            onClick={() => dispatch(openOverlay())}
            >
                Заказать звонок
        </button>
    )
}

export default HeaderCallBtn
