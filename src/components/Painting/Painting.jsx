import React, { useState } from "react";
import s from "./Painting.module.css";
import PurchasesBtn from "../../UI/PurchasesBtn/PurchasesBtn";
import PaintingModal from "../PaintingModal/PaintingModal";


const Painting = ({ card }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <div className={s.wrapper}>
            {card.sold ? (
                <div className={[s.wrapperCover, s.active].join(" ")}></div>
            ) : (
                <div></div>
            )}
            <div className={s.imgWrapper}>
                <img
                    src={card.imgSrc}
                    alt="Painting"
                    onClick={() => setModalVisible(true)}
                />
            </div>
            <div className={s.descriptionWrapper}>
                <h2 onClick={() => setModalVisible(true)}>{card.name}</h2>

                <div className={s.priceAndBtnWrapper}>
                    {card.sold ? (
                        <div className={s.sold}>Продана на аукционе</div>
                    ) : (
                        <>
                            <div>
                                {card.price ? <s className={s.price}>{card.price} $</s> : <></>}
                                <div className={s.discount}>{card.discount} $</div>
                            </div>
                            <PurchasesBtn card={card} />
                        </>
                    )}
                </div>
            </div>
            <PaintingModal
                card={card}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </div>
    );
};

export default Painting;
