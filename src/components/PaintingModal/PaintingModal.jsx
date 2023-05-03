import React from "react";
import s from "./PaintingModal.module.scss";
import PurchasesBtn from "../../UI/PurchasesBtn/PurchasesBtn";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
const PaintingModal = ({ card, modalVisible, setModalVisible }) => {
  const stylesArray = [s.modalWrapper];
  if (modalVisible) stylesArray.push(s.active);

  return (
    <div
      className={stylesArray.join(" ")}
      onClick={() => setModalVisible(false)}
    >
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <p onClick={() => setModalVisible(false)}>&#x2716;</p>

        <h1>{card.name}</h1>
        <div className={s.carouselWrapper}>
          <Carousel variant={"dark"}>
            <Carousel.Item>
              <img src={card.imgSrc} alt="painting" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={card.imgSrc} alt="painting" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={card.imgSrc} alt="painting" className="d-block w-100" />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className={s.priceAndBtn}>
          <h2>{card.discount} $</h2>
          <PurchasesBtn card={card} />
        </div>
      </div>
    </div>
  );
};

export default PaintingModal;
