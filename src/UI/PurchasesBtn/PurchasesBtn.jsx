import React, { useEffect, useMemo, useRef, useState } from "react";
import s from "../../components/Painting/Painting.module.css";
import BtnLoader from "../Loader/BtnLoader/BtnLoader";

const PurchasesBtn = ({ card }) => {
  const [isLoading, setIsLoading] = useState(false);
  const purchaseHTML = "Купить";
  const inBasket = "В корзине";

  let btnTextRef = useRef();
  let idArray = useMemo(() => {
    return [];
  }, []);
  let responce = JSON.parse(localStorage.getItem("myPurchases"));
  if (responce) idArray = responce;

  const localStorageHandlingOnClick = (event) => {
    event.preventDefault();
    let idArray = [];
    let responce = JSON.parse(localStorage.getItem("myPurchases"));
    if (responce) idArray = responce;
    if (responce !== null && responce.includes(card.id)) {
      setIsLoading(true);
      btnTextRef.current.textContent = "";
      setTimeout(() => {
        setIsLoading(false);
        btnTextRef.current.textContent = purchaseHTML;
      }, 2000);

      idArray.splice(idArray.indexOf(card.id), 1);
    } else {
      setIsLoading(true);
      btnTextRef.current.textContent = "";
      setTimeout(() => {
        setIsLoading(false);
        btnTextRef.current.textContent = inBasket;
      }, 2000);

      idArray.push(card.id);
    }
    localStorage.removeItem("myPurchases");
    localStorage.setItem("myPurchases", JSON.stringify(idArray));
  };
  useEffect(() => {
    btnTextRef.current.textContent = idArray.includes(card.id)
      ? inBasket
      : purchaseHTML;
  }, []);
  useEffect(() => {
    setTimeout(() => {
      btnTextRef.current.textContent = idArray.includes(card.id)
        ? inBasket
        : purchaseHTML;
    });
  }, [idArray.includes(card.id)]);

  return (
    <div className={s.loaderWrapper}>
      <div className={s.loader}>{isLoading ? <BtnLoader /> : <div></div>}</div>
      <button
        onClick={localStorageHandlingOnClick}
        className={s.buyBtn}
        ref={btnTextRef}
      ></button>
    </div>
  );
};

export default PurchasesBtn;
