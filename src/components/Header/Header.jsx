import React, { useState } from "react";
import s from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import Navicon from "../../UI/Navicon/Navicon";
import NavMenu from "../NavMenu/NavMenu";
const Header = ({ searchQuery, setSearchQuery }) => {
  const [navMenuIsVisible, setNavMenuIsVisible] = useState(false);

  return (
    <header>
      <NavMenu
        navMenuIsVisible={navMenuIsVisible}
        setNavMenuIsVisible={setNavMenuIsVisible}
      />
      <Navbar />
      <Navicon onClick={()=>{setNavMenuIsVisible(prevState => !prevState)}}/>
      <form
        className={s.inputWrapper}
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          type="text"
          placeholder="Поиск по названию картины"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button>Найти</button>
      </form>
    </header>
  );
};

export default Header;
