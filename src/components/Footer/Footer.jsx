import React from "react";
import s from "./Footer.module.scss";
import Navbar from "../Navbar/Navbar";

const Footer = () => {
  return (
    <footer>
      <Navbar />
      <div className={s.contactsWrapper}>
        <div className={s.phoneWrapper}>
          <img src="https://nefevovs.github.io/Paintings/assets/icons/phone.png" alt="phone" />
          <p>+7 (812) 555-55-55</p>
        </div>
        <div className={s.adressWrapper}>
          <img src="https://nefevovs.github.io/Paintings/assets/icons/adress.png" alt="adress" />
          <div>г. Санкт-Петербург, ул. Ефимова, 3</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
