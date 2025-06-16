import React from 'react';

import tel from '../assets/tel.png';

const HeaderTel = () => {
  return (
    <div className="header__tel">
        <div className="icon__tel">
            <img src={tel} alt="" />
        </div>
        <a href="+777777777">+7 (926) 000-00-00</a>
    </div>
  )
}

export default HeaderTel
