import React from "react";
import s from "./Navbar.module.scss";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
