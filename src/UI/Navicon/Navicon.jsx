import React from "react";
import s from "./Navicon.module.scss"
const Navicon = ({onClick}) => {
  return (
    <div className={s.container} onClick={onClick}>
      <div className={s.item}>
        <a className={[s.icon,s.close].join(" ")} href="#"></a>
      </div>
    </div>
  );
};

export default Navicon;