import React from 'react';
import s from "./NavMenu.module.scss"


const NavMenu = ({setNavMenuIsVisible,navMenuIsVisible}) => {
    const stylesArray=[s.navMenuContainer]
    if(navMenuIsVisible) stylesArray.push(s.active)
    return (
        <div className={stylesArray.join(" ")}>
            <div className={s.cross} onClick={()=>setNavMenuIsVisible(false)}>
                &#x2716;
            </div>

            <ul className={s.navlist}>
                <li>
                    <a href="#!">Каталог</a>
                </li>
                <li>
                    <a href="#!">Доставка</a>
                </li>
                <li>
                    <a href="#!">Оплата</a>
                </li>
                <li>
                    <a href="#!">Контакты</a>
                </li>
                <li>
                    <a href="#!">О компании</a>
                </li>
            </ul>
        </div>
    );
};

export default NavMenu;