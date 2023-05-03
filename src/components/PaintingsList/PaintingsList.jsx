import React from "react";
import s from "./PaintingsList.module.scss";
import Painting from "../Painting/Painting";

const PaintingsList = ({ cards }) => {
  return (
    <div className={s.container}>
      <h1>Картины эпохи Возрождения</h1>
      <div className={s.cardContainer}>
        {cards.length ? (
          <>
            {cards?.map((card) => (
              <Painting key={card.id} card={card} />
            ))}
          </>
        ) : (
          <h1>Картина не найдена</h1>
        )}
      </div>
    </div>
  );
};

export default PaintingsList;
